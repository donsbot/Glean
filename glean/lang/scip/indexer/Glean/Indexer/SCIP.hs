{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

module Glean.Indexer.SCIP (
    indexer,
  ) where

import Options.Applicative

import Glean.Indexer
import Glean.Indexer.External
import Glean.SCIP.Driver as SCIP

import qualified Glean.Indexer.LSIF as LSIF ( derive )

import System.Directory (doesFileExist)
import Util.OptParse (maybeStrOption)

-- | A generic SCIP indexer, for existing scip files
data SCIP = SCIP
  { scipIndexFile :: Maybe FilePath
  }
  -- no options currently

options :: Parser SCIP
options =
  SCIP <$> maybeStrOption (
    long "input" <>
    help "Optional path to a specific scip index file")

-- | An indexer that just slurps an existing SCIP file. Usage:
--
--   cli:    glean index scip <file> --repo name/hash
--   shell:  :index scip <file>
--
indexer :: Indexer SCIP
indexer = Indexer {
  indexerShortName = "scip",
  indexerDescription = "Index a SCIP file",
  indexerOptParser = options,
  indexerRun = \SCIP{..} backend repo IndexerParams{..} -> do
    scipFile <- case scipIndexFile of
      Just f -> pure f
      Nothing -> do -- then indexerRoot should be an lsif file
        mFile <- doesFileExist indexerRoot
        if mFile
          then pure indexerRoot
          else error "Neither --input nor --root are scip files"
    val <- SCIP.processSCIP scipFile
    sendJsonBatches backend repo "scip" val
    LSIF.derive backend repo
  }
