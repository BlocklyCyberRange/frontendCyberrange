/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blockly.
 * @author abbychau@gmail.com (Abby Chau)
 */

// More on defining blockly:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

Blockly.Blocks['rule'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("Rule"), "RULE");
        this.appendDummyInput()
            .appendField("name: ")
            .appendField(new Blockly.FieldTextInput("ICMP-REQUEST"), "RULE_NAME")
            .appendField(",");
        this.appendDummyInput()
            .appendField("stage:")
            .appendField(new Blockly.FieldTextInput("1"), "RULE_STAGE")
            .appendField(",")
            .appendField("occurrence:")
            .appendField(new Blockly.FieldTextInput("..."), "RULE_OCCURRENCE")
            .appendField(",");
        this.appendDummyInput()
            .appendField("plugin_id:")
            .appendField(new Blockly.FieldTextInput("1008"), "RULE_PLUGIN_ID")
            .appendField(",")
            .appendField("plugin_sid:")
            .appendField(new Blockly.FieldTextInput("11"), "RULE_PLUGIN_SID")
            .appendField(",");
        this.appendDummyInput()
            .appendField("from:")
            .appendField(new Blockly.FieldTextInput("ANY"), "RULE_FROM")
            .appendField(",")
            .appendField("to:")
            .appendField(new Blockly.FieldTextInput("ANY"), "RULE_TO")
            .appendField(",");
        this.appendDummyInput()
            .appendField("type:")
            .appendField(new Blockly.FieldTextInput("PluginRule"), "RULE_TYPE")
            .appendField(",")
            .appendField("protocol:")
            .appendField(new Blockly.FieldTextInput("ANY"), "RULE_PROTOCOL")
            .appendField(",");
        this.appendDummyInput()
            .appendField("port_from:")
            .appendField(new Blockly.FieldTextInput("ANY"), "RULE_PORT_FROM")
            .appendField(",")
            .appendField("port_to:")
            .appendField(new Blockly.FieldTextInput("ANY"), "RULE_PORT_TO")
            .appendField(",");
        this.appendDummyInput()
            .appendField("reliability:")
            .appendField(new Blockly.FieldTextInput("..."), "RULE_RELIABILITY")
            .appendField(",")
            .appendField("timeout:")
            .appendField(new Blockly.FieldTextInput("..."), "RULE_TIMEOUT");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['rule'] = function(block) {
    var text_rule_name = block.getFieldValue('RULE_NAME');
    var text_rule_stage = block.getFieldValue('RULE_STAGE');
    var text_rule_occurrence = block.getFieldValue('RULE_OCCURRENCE');
    var text_rule_plugin_id = block.getFieldValue('RULE_PLUGIN_ID');
    var text_rule_plugin_sid = block.getFieldValue('RULE_PLUGIN_SID');
    var text_rule_from = block.getFieldValue('RULE_FROM');
    var text_rule_to = block.getFieldValue('RULE_TO');
    var text_rule_type = block.getFieldValue('RULE_TYPE');
    var text_rule_protocol = block.getFieldValue('RULE_PROTOCOL');
    var text_rule_port_from = block.getFieldValue('RULE_PORT_FROM');
    var text_rule_port_to = block.getFieldValue('RULE_PORT_TO');
    var text_rule_reliability = block.getFieldValue('RULE_RELIABILITY');
    var text_rule_timeout = block.getFieldValue('RULE_TIMEOUT');
    console.log(text_rule_name);
    console.log(text_rule_stage);
    console.log(text_rule_occurrence);
    console.log(text_rule_plugin_id);
    console.log(text_rule_plugin_sid);
    console.log(text_rule_from);
    console.log(text_rule_to);
    console.log(text_rule_type);
    console.log(text_rule_protocol);
    console.log(text_rule_port_from);
    console.log(text_rule_port_to);
    console.log(text_rule_reliability);
    console.log(text_rule_timeout);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['directive'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("Directive"), "DIRECTIVE");
        this.appendDummyInput()
            .appendField("id:")
            .appendField(new Blockly.FieldTextInput("1"), "DIRECTIVE_ID")
            .appendField(",")
            .appendField("name:")
            .appendField(new Blockly.FieldTextInput("ICMP-DOS-Attack"), "DIRECTIVE_NAME")
            .appendField(",");
        this.appendDummyInput()
            .appendField("priority:")
            .appendField(new Blockly.FieldTextInput("10"), "DIRECTIVE_PRIORITY")
            .appendField(",")
            .appendField("disabled:")
            .appendField(new Blockly.FieldDropdown([["true","DIRECTIVE_DISABLED_TRUE"], ["false","DIRECTIVE_DISABLED_FALSE"]]), "DIRECTIVE_DISABLED")
            .appendField(",");
        this.appendDummyInput()
            .appendField("all_rules_always_active:")
            .appendField(new Blockly.FieldDropdown([["true","DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_TRUE"], ["false","DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE"]]), "DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE")
            .appendField(",");
        this.appendDummyInput()
            .appendField("kingdom:")
            .appendField(new Blockly.FieldTextInput("Attacks"), "DIRECTIVE_KINGDOM")
            .appendField(",")
            .appendField("category:")
            .appendField(new Blockly.FieldTextInput("Disruption"), "DIRECTIVE_CATEGORY");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['directive'] = function(block) {
    var text_directive_id = block.getFieldValue('DIRECTIVE_ID');
    var text_directive_name = block.getFieldValue('DIRECTIVE_NAME');
    var text_directive_priority = block.getFieldValue('DIRECTIVE_PRIORITY');
    var dropdown_directive_disabled = block.getFieldValue('DIRECTIVE_DISABLED');
    var dropdown_directive_all_rules_always_active = block.getFieldValue('DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE');
    var text_directive_kingdom = block.getFieldValue('DIRECTIVE_KINGDOM');
    var text_directive_category = block.getFieldValue('DIRECTIVE_CATEGORY');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    console.log(text_directive_id);
    console.log(text_directive_name);
    console.log(text_directive_priority);
    console.log(dropdown_directive_disabled);
    console.log(dropdown_directive_all_rules_always_active);
    console.log(text_directive_kingdom);
    console.log(text_directive_category);
    console.log(statements_name);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['empty'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("Menu disabled"), "NAME");
        this.setInputsInline(false);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['empty'] = function(block) {
    console.log(block);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
