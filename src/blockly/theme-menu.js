/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Modern theme.
 */

import * as Blockly from 'blockly/core';

export default Blockly.Theme.defineTheme('theme-menu', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {},
    'categoryStyles': {},
    'componentStyles': {
        "workspaceBackgroundColour": "transparent",
        "toolboxBackgroundColour": "transparent",
        "flyoutBackgroundColour": "#dbdbdb",
        "flyoutOpacity": "1",
        "scrollbarColour": "#dbdbdb",
    },
    'fontStyle': {},
    'startHats': null,
});
