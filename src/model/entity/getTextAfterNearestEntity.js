/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 * @flow strict-local
 * @emails oncall+draft_js
 */

'use strict';

import type {BlockNodeRecord} from 'BlockNodeRecord';

/**
 * Find the string of text between the previous entity and the specified
 * offset. This allows us to narrow down search areas for regex matching.
 */
function getTextAfterNearestEntity(
  block: BlockNodeRecord,
  offset: number,
): string {
  let start = offset;

  // Get start based on where the last entity ended.
  while (start > 0 && block.getEntityAt(start - 1) === null) {
    start--;
  }

  return block.getText().slice(start, offset);
}

module.exports = getTextAfterNearestEntity;
