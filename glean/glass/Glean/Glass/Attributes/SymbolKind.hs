{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeFamilies #-}
{-# OPTIONS_GHC -Wno-orphans #-}
-- Copyright 2004-present Facebook. All Rights Reserved.

module Glean.Glass.Attributes.SymbolKind
  ( {- instances -}
    SymbolKindAttr(..)
  , symbolKindToSymbolKind
  , symbolKindFromSymbolKind
  ) where

--
-- Labels for entities, usually based on the constructor
--

import qualified Data.Map as Map

import qualified Glean
import Glean.Angle as Angle

import qualified Glean.Glass.Utils as Utils
import Glean.Glass.Attributes.Class
    ( ToAttributes(..), SymbolIdentifier(Entity) )
import Glean.Glass.Types as Glass
    ( SymbolKind(..), Attribute(Attribute_aInteger), Attributes(Attributes) )

import Thrift.Protocol ( fromThriftEnum, ThriftEnum (toThriftEnum) )

import qualified Glean.Schema.Code.Types as Code
import qualified Glean.Schema.Codemarkup.Types as Code
import qualified Glean.Schema.Src.Types as Src

-- | Key of generic kind labels
data SymbolKindAttr = SymbolKindAttr

type EntityKindLabel = (Code.Entity, Code.SymbolKind)

instance ToAttributes SymbolKindAttr where
  type AttrRep SymbolKindAttr = EntityKindLabel
  type AttrOut SymbolKindAttr = Code.SymbolKind

  -- We want to recursively load the entity for key lookup
  searchBy _ = Utils.searchRecursiveWithLimit

  -- We actually make two queries!
  queryFileAttributes _ = \fileId ->
    fileEntityKinds fileId .| fileEntityXRefKinds fileId

  fromAngleType _ (entity, kind) = Just (Entity entity, kind)

  toAttributes _ kind = Attributes $ Map.singleton "symbolKind"
    (Attribute_aInteger (fromIntegral
      (fromThriftEnum $ symbolKindToSymbolKind kind)))

  fromSymbolId _ _sym entity = Entity entity

fileEntityKinds :: Glean.IdOf Src.File -> Angle.Angle EntityKindLabel
fileEntityKinds fileId =
  vars $ \(entity :: Angle Code.Entity) (kind :: Angle Code.SymbolKind) ->
    tuple (entity, kind) `where_` [
      wild .= predicate @Code.FileEntityKinds (
            rec $
              field @"file" (asPredicate (factId fileId)) $
              field @"entity" entity $
              field @"kind" kind
            end
      )
    ]

fileEntityXRefKinds :: Glean.IdOf Src.File -> Angle.Angle EntityKindLabel
fileEntityXRefKinds fileId =
  vars $ \(entity :: Angle Code.Entity) (kind :: Angle Code.SymbolKind) ->
    tuple (entity, kind) `where_` [
      wild .= predicate @Code.FileEntityXRefKinds (
            rec $
              field @"file" (asPredicate (factId fileId)) $
              field @"entity" entity $
              field @"kind" kind
            end
      )
    ]

-- | Type safe mapping from the SymbolKind type defined in codemarkup (which
-- generates a thrift type), and the client-exposed kind.
--
-- We don't want to expose something that depends on how Glean represents enums
--
symbolKindToSymbolKind :: Code.SymbolKind -> Glass.SymbolKind
symbolKindToSymbolKind k = case k of
  Code.SymbolKind_Package -> Glass.SymbolKind_Package
  Code.SymbolKind_Type -> Glass.SymbolKind_Type
  Code.SymbolKind_Value -> Glass.SymbolKind_Value
  Code.SymbolKind_File -> Glass.SymbolKind_File
  Code.SymbolKind_Module -> Glass.SymbolKind_Module
  Code.SymbolKind_Namespace -> Glass.SymbolKind_Namespace
  Code.SymbolKind_Class_ -> Glass.SymbolKind_Class_
  Code.SymbolKind_Method -> Glass.SymbolKind_Method
  Code.SymbolKind_Property -> Glass.SymbolKind_Property
  Code.SymbolKind_Field -> Glass.SymbolKind_Field
  Code.SymbolKind_Constructor -> Glass.SymbolKind_Constructor
  Code.SymbolKind_Enum -> Glass.SymbolKind_Enum
  Code.SymbolKind_Interface -> Glass.SymbolKind_Interface
  Code.SymbolKind_Function -> Glass.SymbolKind_Function
  Code.SymbolKind_Variable -> Glass.SymbolKind_Variable
  Code.SymbolKind_Constant -> Glass.SymbolKind_Constant
  Code.SymbolKind_String -> Glass.SymbolKind_String
  Code.SymbolKind_Number -> Glass.SymbolKind_Number
  Code.SymbolKind_Boolean -> Glass.SymbolKind_Boolean
  Code.SymbolKind_Array -> Glass.SymbolKind_Array
  Code.SymbolKind_Object_ -> Glass.SymbolKind_Object
  Code.SymbolKind_Key -> Glass.SymbolKind_Key
  Code.SymbolKind_Null -> Glass.SymbolKind_Null
  Code.SymbolKind_Enumerator -> Glass.SymbolKind_Enumerator
  Code.SymbolKind_Struct -> Glass.SymbolKind_Struct
  Code.SymbolKind_Event -> Glass.SymbolKind_Event
  Code.SymbolKind_Operator -> Glass.SymbolKind_Operator
  Code.SymbolKind_TypeParameter -> Glass.SymbolKind_TypeParameter
  Code.SymbolKind_Union -> Glass.SymbolKind_Union
  Code.SymbolKind_Macro -> Glass.SymbolKind_Macro
  Code.SymbolKind_Trait -> Glass.SymbolKind_Trait
  Code.SymbolKind__UNKNOWN n -> Glass.SymbolKind__UNKNOWN n

-- | Type safe mapping from the client-exposed SymbolKind type to the SymbolKind
-- defined in codemarkup (which generates a thrift type).
--
-- We don't want to expose something that depends on how Glean represents enums
--
symbolKindFromSymbolKind :: Glass.SymbolKind -> Code.SymbolKind
symbolKindFromSymbolKind k = case k of
  Glass.SymbolKind_Package -> Code.SymbolKind_Package
  Glass.SymbolKind_Type -> Code.SymbolKind_Type
  Glass.SymbolKind_Value -> Code.SymbolKind_Value
  Glass.SymbolKind_File -> Code.SymbolKind_File
  Glass.SymbolKind_Module -> Code.SymbolKind_Module
  Glass.SymbolKind_Namespace -> Code.SymbolKind_Namespace
  Glass.SymbolKind_Class_ -> Code.SymbolKind_Class_
  Glass.SymbolKind_Method -> Code.SymbolKind_Method
  Glass.SymbolKind_Property -> Code.SymbolKind_Property
  Glass.SymbolKind_Field -> Code.SymbolKind_Field
  Glass.SymbolKind_Constructor -> Code.SymbolKind_Constructor
  Glass.SymbolKind_Enum -> Code.SymbolKind_Enum
  Glass.SymbolKind_Interface -> Code.SymbolKind_Interface
  Glass.SymbolKind_Function -> Code.SymbolKind_Function
  Glass.SymbolKind_Variable -> Code.SymbolKind_Variable
  Glass.SymbolKind_Constant -> Code.SymbolKind_Constant
  Glass.SymbolKind_String -> Code.SymbolKind_String
  Glass.SymbolKind_Number -> Code.SymbolKind_Number
  Glass.SymbolKind_Boolean -> Code.SymbolKind_Boolean
  Glass.SymbolKind_Array -> Code.SymbolKind_Array
  Glass.SymbolKind_Object -> Code.SymbolKind_Object_
  Glass.SymbolKind_Key -> Code.SymbolKind_Key
  Glass.SymbolKind_Null -> Code.SymbolKind_Null
  Glass.SymbolKind_Enumerator -> Code.SymbolKind_Enumerator
  Glass.SymbolKind_Struct -> Code.SymbolKind_Struct
  Glass.SymbolKind_Event -> Code.SymbolKind_Event
  Glass.SymbolKind_Operator -> Code.SymbolKind_Operator
  Glass.SymbolKind_TypeParameter -> Code.SymbolKind_TypeParameter
  Glass.SymbolKind_Union -> Code.SymbolKind_Union
  Glass.SymbolKind_Macro -> Code.SymbolKind_Macro
  Glass.SymbolKind_Trait -> Code.SymbolKind_Trait
  Glass.SymbolKind__UNKNOWN x -> toThriftEnum x -- this might throw

instance AngleEnum Code.SymbolKind where
  type AngleEnumTy Code.SymbolKind = Code.SymbolKind
  enumName k = case k of
    Code.SymbolKind_Package -> "Package"
    Code.SymbolKind_Type -> "Type"
    Code.SymbolKind_Value -> "Value"
    Code.SymbolKind_File -> "File"
    Code.SymbolKind_Module -> "Module"
    Code.SymbolKind_Namespace -> "Namespace"
    Code.SymbolKind_Class_ -> "Class_"
    Code.SymbolKind_Method -> "Method"
    Code.SymbolKind_Property -> "Property"
    Code.SymbolKind_Field -> "Field"
    Code.SymbolKind_Constructor -> "Constructor"
    Code.SymbolKind_Enum -> "Enum"
    Code.SymbolKind_Interface -> "Interface"
    Code.SymbolKind_Function -> "Function"
    Code.SymbolKind_Variable -> "Variable"
    Code.SymbolKind_Constant -> "Constant"
    Code.SymbolKind_String -> "String"
    Code.SymbolKind_Number -> "Number"
    Code.SymbolKind_Boolean -> "Boolean"
    Code.SymbolKind_Array -> "Array"
    Code.SymbolKind_Object_ -> "Object_"
    Code.SymbolKind_Key -> "Key"
    Code.SymbolKind_Null -> "Null"
    Code.SymbolKind_Enumerator -> "Enumerator"
    Code.SymbolKind_Struct -> "Struct"
    Code.SymbolKind_Event -> "Event"
    Code.SymbolKind_Operator -> "Operator"
    Code.SymbolKind_TypeParameter -> "TypeParameter"
    Code.SymbolKind_Union -> "Union"
    Code.SymbolKind_Macro -> "Macro"
    Code.SymbolKind_Trait -> "Trait"
    Code.SymbolKind__UNKNOWN _ -> "UNKNOWN"
