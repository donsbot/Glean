{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

{-# LANGUAGE TypeApplications #-}
{-# OPTIONS_GHC -Wno-orphans #-}

module Glean.Glass.SymbolId.Flow ( {- instances -} ) where

import Data.Text ( stripSuffix, intercalate, Text )
import Data.Hashable

import qualified Glean
import Glean.Angle as Angle
import qualified Glean.Haxl.Repos as Glean

import Glean.Glass.SymbolId.Class

import qualified Glean.Schema.Flow.Types as Flow
import qualified Glean.Schema.Src.Types as Src

import Glean.Glass.Utils
import Glean.Glass.Base ( GleanPath(..))
import Glean.Glass.Types ( Name(..) )
import qualified Haxl.Core.Memo as Haxl

import Glean.Schema.CodeFlow.Types as Flow ( Entity(..) )

instance Symbol Flow.Entity where
  toSymbol e = case e of
    Flow.Entity_decl decl -> toSymbol decl
    Flow.Entity_module_ module_ -> do
      symId <- toSymbolPredicate module_
      case symId of
        [_] -> return symId -- keep Haste or string_ module symIds neat
        _ -> return ("m" : symId)
    Flow.Entity_EMPTY -> return []

instance Symbol Flow.SomeDeclaration where
  toSymbol e = case e of
    Flow.SomeDeclaration_localDecl decl -> toSymbolPredicate decl
    Flow.SomeDeclaration_memberDecl member -> toSymbolPredicate member
    Flow.SomeDeclaration_typeDecl type_ -> toSymbolPredicate type_
    Flow.SomeDeclaration_EMPTY -> return []

-- flow declarations are a bare name and a `Range`, which can be a module or
-- other location
instance Symbol Flow.Declaration_key where
  toSymbol (Flow.Declaration_key name loc_range) = loc_range <:> name

instance Symbol Flow.MemberDeclaration_key where
  toSymbol (Flow.MemberDeclaration_key name container) = container <:> name

instance Symbol Flow.TypeDeclaration_key where
  toSymbol (Flow.TypeDeclaration_key name container) = container <:> name

instance Symbol Flow.Range where
  toSymbol = toSymbolPredicate

instance Symbol Flow.Range_key where
  toSymbol (Flow.Range_key module_ _span) = toSymbolPredicate module_

instance Symbol Flow.Module_key where
  toSymbol m = case m of
    Flow.Module_key_file file -> memoModuleNameQuery file
    Flow.Module_key_builtin _ -> return []
    Flow.Module_key_lib text -> return [text]
    Flow.Module_key_noSource _ -> return []
    Flow.Module_key_string_ text -> return [text]
    Flow.Module_key_EMPTY -> return []

instance Symbol Flow.Name where
  toSymbol k = do
    v <- Glean.keyOf k
    return [v]

newtype Glass_SymbolId_Flow_ModuleName_Key =
    Glass_SymbolId_Flow_ModuleName_Key (Glean.Repo, Text)
  deriving (Eq, Hashable, Ord, Show)

-- | Memoize the result of figuring out the best short name for a file
-- since this is common to all symbols in a file it can be a good win.
memoModuleNameQuery :: Src.File -> Glean.RepoHaxl u w [Text]
memoModuleNameQuery file = do
  repo <- Glean.haxlRepo
  key <- Glean.keyOf file
  Haxl.memo (Glass_SymbolId_Flow_ModuleName_Key (repo, key)) $
    runModuleNameQuery file

-- Need to encode the module as a "container". For most (?) cases
-- there is a nice short string associated with the file, so we get
-- ww/js/Module/identifier and unique globally (?)
--
-- But in case we don't , use the file name.
--
-- T90301808 - Haste short names are not always present. In the case they
-- are missing we should use the fully qualified filepath. Note: this will leak
-- the non-relative paths used in the www indexers. TBD
--
runModuleNameQuery :: Src.File -> Glean.RepoHaxl u w [Text]
runModuleNameQuery file = do
  mfile <- toJSFile file
  names <- case mfile of
    -- its not a .js.flow file so we already have a valid fact id
    Nothing -> fetchData (moduleStringName $ Glean.getId file)
    -- try for a .js equivalent
    Just path -> fetchData (moduleStringNameByFile path)
  case names of
    Nothing -> pathFragments <$> Glean.keyOf file
    Just n -> return [n]

-- Normalize any .flow suffix of a file to its base .js file
--
-- A smarter way would be to reverse the SourceOfTypeExport for .flow files
--
toJSFile :: Src.File -> Glean.RepoHaxl u w (Maybe GleanPath)
toJSFile file = do
  path <- Glean.keyOf file
  return $ GleanPath <$> stripSuffix flowSuffix path
  where
    flowSuffix :: Text
    flowSuffix = ".flow"

-- Flow module name of file id of module
moduleStringName :: Glean.IdOf Src.File -> Angle Text
moduleStringName fileid =
  vars $ \(str :: Angle Text) (file :: Angle Src.File) ->
  str `where_` [
    file .= factId fileid,
    wild .= predicate @Flow.FileOfStringModule (
      rec $
        field @"file" (asPredicate file) $
        field @"string_" str
      end)
  ]

-- Flow module name of file path of module
moduleStringNameByFile :: GleanPath -> Angle Text
moduleStringNameByFile (GleanPath path) =
  vars $ \(str :: Angle Text) (file :: Angle Src.File) ->
  str `where_` [
    file .= predicate @Src.File (string path),
    wild .= predicate @Flow.FileOfStringModule (
      rec $
        field @"file" (asPredicate file) $
        field @"string_" str
      end)
  ]

instance ToQName Flow.Entity where
  toQName e = case e of
    Flow.Entity_decl x -> toQName x
    Flow.Entity_module_ x -> Glean.keyOf x >>= toQName
    Flow.Entity_EMPTY -> return $ Left "unknown Entity"

instance ToQName Flow.SomeDeclaration where
  toQName e = case e of
    Flow.SomeDeclaration_localDecl x -> Glean.keyOf x >>= toQName
    Flow.SomeDeclaration_memberDecl x -> Glean.keyOf x >>= toQName
    Flow.SomeDeclaration_typeDecl x -> Glean.keyOf x >>= toQName
    Flow.SomeDeclaration_EMPTY -> return $ Left "unknown SomeDeclaration"

instance ToQName Flow.Declaration_key where
  toQName (Flow.Declaration_key name container) = pairToQName name container

instance ToQName Flow.MemberDeclaration_key where
  toQName (Flow.MemberDeclaration_key name container) = pairToQName name container

instance ToQName Flow.TypeDeclaration_key where
  toQName (Flow.TypeDeclaration_key name container) = pairToQName name container

instance ToQName Flow.Module_key where
  toQName m = do
    sym <- toSymbol m
    return $ case reverse sym of
      [] -> Left "QName not supported for this symbol"
      (h:t) -> Right (Name h, Name (intercalate "." (reverse t)))

pairToQName
  :: (Symbol name, Symbol container)
  => name
  -> container
  -> Glean.RepoHaxl u w (Either a (Name, Name))
pairToQName a b = Right <$> symbolPairToQName "." a b
