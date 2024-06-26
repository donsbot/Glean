{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

module Glean.Regression.Driver.DeriveFunctionCalls (main) where

import Derive.Lib
import Glean.Clang.Test.DerivePass

main :: IO ()
main = testDeriver [DeriveFunctionCalls_Pass_2]
