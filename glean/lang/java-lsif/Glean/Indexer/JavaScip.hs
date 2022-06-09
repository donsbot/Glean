{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

{-# LANGUAGE ApplicativeDo #-}

module Glean.Indexer.JavaScip ( indexer ) where

import Options.Applicative

import Glean.Indexer
import Glean.Indexer.External

import Glean.Indexer.LSIF ( derive )
import Glean.SCIP.Driver as SCIP

newtype JavaSCIP = JavaSCIP
  { scipJavaBinary :: FilePath
  }

options :: Parser JavaSCIP
options = do
  scipJavaBinary <- strOption $
    long "scip-java" <>
    value "scip-java" <>
    help "path to the scip-java binary"
  return JavaSCIP{..}

indexer :: Indexer JavaSCIP
indexer = Indexer {
  indexerShortName = "java-scip",
  indexerDescription = "Index Java code via SCIP",
  indexerOptParser = options,
  indexerRun = \JavaSCIP{..} backend repo IndexerParams{..} -> do
    let
      params = ScipIndexerParams {
        scipBinary = scipJavaBinary,
        scipArgs = \outFile -> [ "index", "--output", outFile ],
        scipRoot = indexerRoot
      }
    val <- SCIP.runIndexer params
    sendJsonBatches backend repo (scipJavaBinary <> "/scip") val
    derive backend repo
  }
