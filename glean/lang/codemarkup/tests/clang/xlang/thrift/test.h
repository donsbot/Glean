/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */



/** Glean { "file": "test.thrift", "service":"TestService" } */
struct TestService {
  /** Glean { "file": "test.thrift", "service":"TestService", "function": "thrift2"} */
  static void thrift2();
};

/** Glean { "file": "test.thrift" } */
namespace module_constants {

  /** Glean { "constant": "MY_CONST" } */
  const int MY_CONST = 42;

}
