<template >
    <body>
        <!--XML-->

        <xml id="toolbox_default" style="display: none">
          <block type="directive">
            <field css-container="dirtext" name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">...</field>
            <field name="DIRECTIVE_NAME">...</field>
            <field name="DIRECTIVE_PRIORITY">...</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">...</field>
            <field name="DIRECTIVE_CATEGORY">...</field>
          </block>
          <block type="rule">
            <field name="RULE">Rule</field>
            <field name="RULE_NAME">...</field>
            <field name="RULE_STAGE">...</field>
            <field name="RULE_OCCURRENCE">...</field>
            <field name="RULE_PLUGIN_ID">...</field>
            <field name="RULE_PLUGIN_SID">...</field>
            <field name="RULE_FROM">...</field>
            <field name="RULE_TO">...</field>
            <field name="RULE_TYPE">...</field>
            <field name="RULE_PROTOCOL">...</field>
            <field name="RULE_PORT_FROM">...</field>
            <field name="RULE_PORT_TO">...</field>
            <field name="RULE_RELIABILITY">...</field>
            <field name="RULE_TIMEOUT">...</field>
          </block>
        </xml>

        <!-- -------------------------------------------------------------- -->

        <xml id="toolbox_disabled" style="display: none">
          <label text=" "></label>
          <!--<block type="empty" disabled="true"></block>-->
        </xml>

        <!-- -------------------------------------------------------------- -->

        <xml id="workspaceBlocks_task2" style="display: none">
          <block type="directive" id="directive_task2" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">1</field>
            <field name="DIRECTIVE_NAME">Unknown IP in network</field>
            <field name="DIRECTIVE_PRIORITY">3</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Malicious Insider</field>
            <statement name="NAME">
              <block type="rule" id="rule_task2">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">...</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">...</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">10</field>
                <field name="RULE_TIMEOUT">0</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task2_solution" style="display: none">
          <block type="directive" id="*" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">1</field>
            <field name="DIRECTIVE_NAME">Unknown IP in network</field>
            <field name="DIRECTIVE_PRIORITY">3</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Malicious Insider</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">FIREWALL-WARNING</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">9</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">10</field>
                <field name="RULE_TIMEOUT">0</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task2_solution0" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">FIREWALL-WARNING</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task2_solution1" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">9</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task2_empty0" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">...</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task2_empty1" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">...</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
              </block>
            </statement>
          </block>
        </xml>

        <!-- -------------------------------------------------------------- -->

        <xml id="workspaceBlocks_task3" style="display: none">
          <block type="directive" id="directive_task3" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">2</field>
            <field name="DIRECTIVE_NAME">MITM Attack</field>
            <field name="DIRECTIVE_PRIORITY">3</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Spoofing</field>
            <statement name="NAME">
              <block type="rule" id="rule_task3_1">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">Liquid level (SENSOR 3) is not received. Program is unable to proceed properly</field>
                <field name="RULE_STAGE">...</field>
                <field name="RULE_OCCURRENCE">...</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">6</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">2</field>
                <field name="RULE_TIMEOUT">...</field>
                <next>
                  <block type="rule" id="rule_task3_2">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">Liquid level (SENSOR 3) is not received. Program is unable to proceed properly</field>
                    <field name="RULE_STAGE">...</field>
                    <field name="RULE_OCCURRENCE">...</field>
                    <field name="RULE_PLUGIN_ID">1008</field>
                    <field name="RULE_PLUGIN_SID">6</field>
                    <field name="RULE_FROM">ANY</field>
                    <field name="RULE_TO">ANY</field>
                    <field name="RULE_TYPE">PluginRule</field>
                    <field name="RULE_PROTOCOL">ANY</field>
                    <field name="RULE_PORT_FROM">ANY</field>
                    <field name="RULE_PORT_TO">ANY</field>
                    <field name="RULE_RELIABILITY">2</field>
                    <field name="RULE_TIMEOUT">...</field>
                    <next>
                      <block type="rule" id="rule_task3_3">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">Internal ENIP tag (SENSOR 3) updated</field>
                        <field name="RULE_STAGE">...</field>
                        <field name="RULE_OCCURRENCE">...</field>
                        <field name="RULE_PLUGIN_ID">1008</field>
                        <field name="RULE_PLUGIN_SID">2</field>
                        <field name="RULE_FROM">ANY</field>
                        <field name="RULE_TO">ANY</field>
                        <field name="RULE_TYPE">PluginRule</field>
                        <field name="RULE_PROTOCOL">ANY</field>
                        <field name="RULE_PORT_FROM">ANY</field>
                        <field name="RULE_PORT_TO">ANY</field>
                        <field name="RULE_RELIABILITY">8</field>
                        <field name="RULE_TIMEOUT">...</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution" style="display: none">
          <block type="directive" id="*" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">2</field>
            <field name="DIRECTIVE_NAME">MITM Attack</field>
            <field name="DIRECTIVE_PRIORITY">3</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Spoofing</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">Liquid level (SENSOR 3) is not received. Program is unable to proceed properly</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">6</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">2</field>
                <field name="RULE_TIMEOUT">0</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">Liquid level (SENSOR 3) is not received. Program is unable to proceed properly</field>
                    <field name="RULE_STAGE">2</field>
                    <field name="RULE_OCCURRENCE">2</field>
                    <field name="RULE_PLUGIN_ID">1008</field>
                    <field name="RULE_PLUGIN_SID">6</field>
                    <field name="RULE_FROM">ANY</field>
                    <field name="RULE_TO">ANY</field>
                    <field name="RULE_TYPE">PluginRule</field>
                    <field name="RULE_PROTOCOL">ANY</field>
                    <field name="RULE_PORT_FROM">ANY</field>
                    <field name="RULE_PORT_TO">ANY</field>
                    <field name="RULE_RELIABILITY">2</field>
                    <field name="RULE_TIMEOUT">60</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">Internal ENIP tag (SENSOR 3) updated</field>
                        <field name="RULE_STAGE">3</field>
                        <field name="RULE_OCCURRENCE">1</field>
                        <field name="RULE_PLUGIN_ID">1008</field>
                        <field name="RULE_PLUGIN_SID">2</field>
                        <field name="RULE_FROM">ANY</field>
                        <field name="RULE_TO">ANY</field>
                        <field name="RULE_TYPE">PluginRule</field>
                        <field name="RULE_PROTOCOL">ANY</field>
                        <field name="RULE_PORT_FROM">ANY</field>
                        <field name="RULE_PORT_TO">ANY</field>
                        <field name="RULE_RELIABILITY">8</field>
                        <field name="RULE_TIMEOUT">60</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution0" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty0" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">...</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution1" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty1" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">...</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution2" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">0</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty2" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">...</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution3" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">2</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty3" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">...</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution4" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">2</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty4" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">...</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution5" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">60</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty5" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">...</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution6" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">3</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty6" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">...</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution7" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">1</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty7" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">...</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task3_solution8" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">60</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>


        <xml id="workspaceBlocks_task3_empty8" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">...</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <!-- -------------------------------------------------------------- -->

        <xml id="workspaceBlocks_task4" style="display: none">
          <block type="directive" id="directive_task4" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">6</field>
            <field name="DIRECTIVE_NAME">Arp-Spoof Attack</field>
            <field name="DIRECTIVE_PRIORITY">5</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Spoofing</field>
            <statement name="NAME">
              <block type="rule" id="rule_task4_1">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">ARP-REPLY</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">14</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">5</field>
                <field name="RULE_TIMEOUT">0</field>
                <next>
                  <block type="rule" id="rule_task4_2">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">ARP-REPLY</field>
                    <field name="RULE_STAGE">2</field>
                    <field name="RULE_OCCURRENCE">4</field>
                    <field name="RULE_PLUGIN_ID">1008</field>
                    <field name="RULE_PLUGIN_SID">14</field>
                    <field name="RULE_FROM">...</field>
                    <field name="RULE_TO">ANY</field>
                    <field name="RULE_TYPE">PluginRule</field>
                    <field name="RULE_PROTOCOL">ANY</field>
                    <field name="RULE_PORT_FROM">ANY</field>
                    <field name="RULE_PORT_TO">ANY</field>
                    <field name="RULE_RELIABILITY">5</field>
                    <field name="RULE_TIMEOUT">60</field>
                    <next>
                      <block type="rule" id="rule_task4_3">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">...</field>
                        <field name="RULE_STAGE">3</field>
                        <field name="RULE_OCCURRENCE">...</field>
                        <field name="RULE_PLUGIN_ID">1008</field>
                        <field name="RULE_PLUGIN_SID">...</field>
                        <field name="RULE_FROM">...</field>
                        <field name="RULE_TO">ANY</field>
                        <field name="RULE_TYPE">PluginRule</field>
                        <field name="RULE_PROTOCOL">ANY</field>
                        <field name="RULE_PORT_FROM">ANY</field>
                        <field name="RULE_PORT_TO">ANY</field>
                        <field name="RULE_RELIABILITY">10</field>
                        <field name="RULE_TIMEOUT">60</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_solution" style="display: none">
          <block type="directive" id="*" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">6</field>
            <field name="DIRECTIVE_NAME">Arp-Spoof Attack</field>
            <field name="DIRECTIVE_PRIORITY">5</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Spoofing</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">ARP-REPLY</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">14</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">5</field>
                <field name="RULE_TIMEOUT">0</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">ARP-REPLY</field>
                    <field name="RULE_STAGE">2</field>
                    <field name="RULE_OCCURRENCE">4</field>
                    <field name="RULE_PLUGIN_ID">1008</field>
                    <field name="RULE_PLUGIN_SID">14</field>
                    <field name="RULE_FROM">:1</field>
                    <field name="RULE_TO">ANY</field>
                    <field name="RULE_TYPE">PluginRule</field>
                    <field name="RULE_PROTOCOL">ANY</field>
                    <field name="RULE_PORT_FROM">ANY</field>
                    <field name="RULE_PORT_TO">ANY</field>
                    <field name="RULE_RELIABILITY">5</field>
                    <field name="RULE_TIMEOUT">60</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">ARP-SPOOF-WARNING</field>
                        <field name="RULE_STAGE">3</field>
                        <field name="RULE_OCCURRENCE">1</field>
                        <field name="RULE_PLUGIN_ID">1008</field>
                        <field name="RULE_PLUGIN_SID">10</field>
                        <field name="RULE_FROM">:1</field>
                        <field name="RULE_TO">ANY</field>
                        <field name="RULE_TYPE">PluginRule</field>
                        <field name="RULE_PROTOCOL">ANY</field>
                        <field name="RULE_PORT_FROM">ANY</field>
                        <field name="RULE_PORT_TO">ANY</field>
                        <field name="RULE_RELIABILITY">10</field>
                        <field name="RULE_TIMEOUT">60</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_solution0" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">:1</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_empty0" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">...</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_solution1" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">ARP-SPOOF-WARNING</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_empty1" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">...</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_solution2" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">10</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_empty2" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">...</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_solution3" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">1</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_empty3" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">...</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">*</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_solution4" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">:1</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task4_empty4" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                    <next>
                      <block type="rule" id="*">
                        <field name="RULE">Rule</field>
                        <field name="RULE_NAME">*</field>
                        <field name="RULE_STAGE">*</field>
                        <field name="RULE_OCCURRENCE">*</field>
                        <field name="RULE_PLUGIN_ID">*</field>
                        <field name="RULE_PLUGIN_SID">*</field>
                        <field name="RULE_FROM">...</field>
                        <field name="RULE_TO">*</field>
                        <field name="RULE_TYPE">*</field>
                        <field name="RULE_PROTOCOL">*</field>
                        <field name="RULE_PORT_FROM">*</field>
                        <field name="RULE_PORT_TO">*</field>
                        <field name="RULE_RELIABILITY">*</field>
                        <field name="RULE_TIMEOUT">*</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <!-- -------------------------------------------------------------- -->

        <xml id="workspaceBlocks_task5" style="display: none">
          <block type="directive" id="directive_task5" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">1</field>
            <field name="DIRECTIVE_NAME">Unknown IP in network</field>
            <field name="DIRECTIVE_PRIORITY">3</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Integrity-Violation</field>
            <statement name="NAME">
              <block type="rule" id="rule_task5">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">FIREWALL-WARNING</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">9</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">10</field>
                <field name="RULE_TIMEOUT">0</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task5_solution" style="display: none">
          <block type="directive" id="*" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">4</field>
            <field name="DIRECTIVE_NAME">Log File Manipulation</field>
            <field name="DIRECTIVE_PRIORITY">3</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Integrity-Violation</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">LOG FILE MANIPULATION</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">8</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">10</field>
                <field name="RULE_TIMEOUT">0</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task5_solution0" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">4</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task5_solution1" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">Log File Manipulation</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task5_solution2" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">LOG FILE MANIPULATION</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task5_solution3" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">8</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
              </block>
            </statement>
          </block>
        </xml>

        <!-- -------------------------------------------------------------- -->

        <xml id="workspaceBlocks_task6" style="display: none">
          <block type="directive" id="directive_task6" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">17</field>
            <field name="DIRECTIVE_NAME">Suspicious ARP-Request</field>
            <field name="DIRECTIVE_PRIORITY">3</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Disruption</field>
            <statement name="NAME">
              <block type="rule" id="rule_task6_1">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">ARP-REQUEST</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">13</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">2</field>
                <field name="RULE_TIMEOUT">0</field>
                <next>
                  <block type="rule" id="rule_task6_2">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">ARP-REQUEST</field>
                    <field name="RULE_STAGE">2</field>
                    <field name="RULE_OCCURRENCE">3</field>
                    <field name="RULE_PLUGIN_ID">1008</field>
                    <field name="RULE_PLUGIN_SID">13</field>
                    <field name="RULE_FROM">:1</field>
                    <field name="RULE_TO">ANY</field>
                    <field name="RULE_TYPE">PluginRule</field>
                    <field name="RULE_PROTOCOL">ANY</field>
                    <field name="RULE_PORT_FROM">ANY</field>
                    <field name="RULE_PORT_TO">ANY</field>
                    <field name="RULE_RELIABILITY">8</field>
                    <field name="RULE_TIMEOUT">60</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution" style="display: none">
          <block type="directive" id="*" x="0" y="30">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">5</field>
            <field name="DIRECTIVE_NAME">ICMP-DOS-Attack</field>
            <field name="DIRECTIVE_PRIORITY">3</field>
            <field name="DIRECTIVE_DISABLED">DIRECTIVE_DISABLED_FALSE</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field>
            <field name="DIRECTIVE_KINGDOM">Attacks</field>
            <field name="DIRECTIVE_CATEGORY">Disruption</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">ICMP-REQUEST</field>
                <field name="RULE_STAGE">1</field>
                <field name="RULE_OCCURRENCE">1</field>
                <field name="RULE_PLUGIN_ID">1008</field>
                <field name="RULE_PLUGIN_SID">11</field>
                <field name="RULE_FROM">ANY</field>
                <field name="RULE_TO">ANY</field>
                <field name="RULE_TYPE">PluginRule</field>
                <field name="RULE_PROTOCOL">ANY</field>
                <field name="RULE_PORT_FROM">ANY</field>
                <field name="RULE_PORT_TO">ANY</field>
                <field name="RULE_RELIABILITY">2</field>
                <field name="RULE_TIMEOUT">0</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">ICMP-REQUEST</field>
                    <field name="RULE_STAGE">2</field>
                    <field name="RULE_OCCURRENCE">1000</field>
                    <field name="RULE_PLUGIN_ID">1008</field>
                    <field name="RULE_PLUGIN_SID">11</field>
                    <field name="RULE_FROM">ANY</field>
                    <field name="RULE_TO">:1</field>
                    <field name="RULE_TYPE">PluginRule</field>
                    <field name="RULE_PROTOCOL">ANY</field>
                    <field name="RULE_PORT_FROM">ANY</field>
                    <field name="RULE_PORT_TO">ANY</field>
                    <field name="RULE_RELIABILITY">8</field>
                    <field name="RULE_TIMEOUT">60</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution0" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">5</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution1" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">ICMP-DOS-Attack</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution2" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">ICMP-REQUEST</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution3" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">11</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution4" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">ICMP-REQUEST</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution5" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">1000</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution6" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">ANY</field>
                    <field name="RULE_TO">*</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <xml id="workspaceBlocks_task6_solution7" style="display: none">
          <block type="directive" id="*" x="*" y="*">
            <field name="DIRECTIVE">Directive</field>
            <field name="DIRECTIVE_ID">*</field>
            <field name="DIRECTIVE_NAME">*</field>
            <field name="DIRECTIVE_PRIORITY">*</field>
            <field name="DIRECTIVE_DISABLED">*</field>
            <field name="DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE">*</field>
            <field name="DIRECTIVE_KINGDOM">*</field>
            <field name="DIRECTIVE_CATEGORY">*</field>
            <statement name="NAME">
              <block type="rule" id="*">
                <field name="RULE">Rule</field>
                <field name="RULE_NAME">*</field>
                <field name="RULE_STAGE">*</field>
                <field name="RULE_OCCURRENCE">*</field>
                <field name="RULE_PLUGIN_ID">*</field>
                <field name="RULE_PLUGIN_SID">*</field>
                <field name="RULE_FROM">*</field>
                <field name="RULE_TO">*</field>
                <field name="RULE_TYPE">*</field>
                <field name="RULE_PROTOCOL">*</field>
                <field name="RULE_PORT_FROM">*</field>
                <field name="RULE_PORT_TO">*</field>
                <field name="RULE_RELIABILITY">*</field>
                <field name="RULE_TIMEOUT">*</field>
                <next>
                  <block type="rule" id="*">
                    <field name="RULE">Rule</field>
                    <field name="RULE_NAME">*</field>
                    <field name="RULE_STAGE">*</field>
                    <field name="RULE_OCCURRENCE">*</field>
                    <field name="RULE_PLUGIN_ID">*</field>
                    <field name="RULE_PLUGIN_SID">*</field>
                    <field name="RULE_FROM">*</field>
                    <field name="RULE_TO">:1</field>
                    <field name="RULE_TYPE">*</field>
                    <field name="RULE_PROTOCOL">*</field>
                    <field name="RULE_PORT_FROM">*</field>
                    <field name="RULE_PORT_TO">*</field>
                    <field name="RULE_RELIABILITY">*</field>
                    <field name="RULE_TIMEOUT">*</field>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </xml>

        <!-- -------------------------------------------------------------- -->

        <!--Startpage-->


            <div v-if="!gameStarted">
      <!-- layout prior exercise: prompts user to login -->
      <div class="is-vhcentered has-text-centered pt-6">

          <div class="columns is-hcentered mb-5">
            <img class="image is-hcentered" style="width: 100px"
              src="./assets/rocket.svg"
            /> </div>

        <div class="is-json title ">
          Welcome to SOCCyberRange!
          <div class="subtitle mb-6 pb-6"> A Cyber Range for SOC Analysts. </div> </div>





          <br>

                <form @submit.prevent="validateId()">
               <span>
             <input
              class="input input-label-long is-size-6 is-centered "
              :value="'Your NDS Account: '"
            />
              </span>
            <span>
              <input
                class="input input-short is-size-6 blank-input"
                v-model.trim="traineeID"
                :placeholder="'ID (e.g., abc12345)'"
              />
              </span>

           <br> <br>
            <div class="has-text-danger" v-if="emptyInput">
              User ID cannot be empty.
            </div>
            <div class="has-text-danger" v-if="wrongUserID">
              User ID is not registered.
            </div>

            <div class="buttons is-centered mt-5">
              <button
                class="button submit-button is-rounded mt-5"
                type="submit"
                value="Submit"
                @click="validateId()"
              >
                <span>START</span>
              </button>
            </div>

                </form>
            </div>

          <!--<div id="blocklyDivx" style="height: 480px; width:900px;"></div>
          <textarea id="codeGenerated"></textarea>-->

          <!--<div style="display:none1;">
            <div id="blocklyDiv" style="float: left; width: 1400px; height: 1000px"></div>

            <xml id="toolbox" style="display: none">
              <block type="dictionary"></block>
              <block type="array"></block>
              <block type="number"></block>
              <block type="string"></block>
            </xml>

            <div style="margin-left: 74%; width: 24%; height: 100%;display:none;">
              <button onclickNot='interpretJSONarea()'>interpret JSON from the textarea below</button>
              <textarea id=json_area style="height: 95%; width: 100%"></textarea>
            </div>
          </div>-->

          <!--<div id="blockly1"></div>-->

          <!--<BlocklyComponent id="blockly1">
            <block type="directive"></block>
            <block type="rule"></block>
          </BlocklyComponent>-->


        </div>


        <!--Endpage-->
        <div v-if="gameCompleted" class="is-vhcentered has-text-centered">

            <img src="./assets/attackerDefeated.png" class="image is-hcentered pb-5" style="width: 300px">


            <h1 class="is-json title mt-5">GameCompleted.</h1>

            <h2 class="is-json subtitle  mb-2">
                <strong>Congratulations.</strong> With your help the attacker was defeated.
                You earned <strong>{{this.points}} points.</strong>

            </h2> <br>


            <h2 class="subtitle mb-6">
                To complete the cyber range training please take part in our
<u><a class="title is-json is-primary-darker " href="https://quizizz.com/join?gc=07101609">
final quiz</a></u>
and let one of the trainers know when you finished.
<br> Please use again your <strong>NDS-account</strong> to register for the quiz.
            </h2>





        </div>

        <!--Mainpage-->
        <div v-if="gameStarted && !gameCompleted">


            <div class="columns">
                <div class="column is-fixed is-full"
                     :class="{ 'is-half': !fullscreen }">
                    <section v-if="kibanaOn">
                        <figure class="pb-5">
                            <iframe :src="kibanaUrl"
                                    style="display: block; width: 100%; height: 100vh"></iframe>
                        </figure>
                    </section>


                    <nav class="navbar is-fixed-bottom is-transparent mb-1">

                        <div class="navbar-brand navbar-background is-half">
                            <div class="">
                                <div class="navbar-brand">
                                    <table class="table is-size-7 has-text-white dashboard mt-1 mb-1"
                                           width="100%"
                                           v-if="!hideScoreboard">
                                        <tbody class="pt-0 has-text-white">
                                            <tr class="has-text-white">
                                                <th class="has-text-white">Rank</th>
                                                <th class="has-text-white">Username</th>
                                                <th class="has-text-white">Points</th>
                                                <th class="has-text-white">Level</th>
                                            </tr>
                                            <tr v-for="(item, index) in dashboard"
                                                :key="item"
                                                :class="{
                          'has-text-primary has-text-weight-bold':
                            item.userID == this.traineeID,
                        }">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ item.pseudonym }}</td>
                                                <td>{{ item.points }}</td>
                                                <td>{{ item.level }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="navbarBasicExample" class="navbar-menu">
                                    <div class="buttons is-left">
                                        <button class="button is-primary is-static is-small has-background-primary has-text-white">
                                            <strong>Points: {{ points }}</strong>
                                        </button>

                                        <button class="button is-primary is-small is-static">
                                            <strong>Level: {{ this.tasksCompleted }}</strong>
                                        </button>

                                        <button class="button show-button is-small has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                                                @click="
                        (fullscreen = true), hideScoreboard=true, rememberScrollPos()
                      "
                                                :data-tooltip="'Show SIEM in Fullscreen'"
                                                v-if="!fullscreen">
                                            <font-awesome-icon :icon="['fa', 'expand']" />
                                        </button>

                                        <button class="button show-button is-small  has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                                                @click="
                        (fullscreen = false), hideScoreboard=false, scrollBack()
                      "
                                                :data-tooltip="'Show Tasks'"
                                                v-else>
                                            <font-awesome-icon :icon="['fa', 'compress']" />
                                        </button>

                                        <button v-if="!hideScoreboard" class="button show-button is-small has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                                                :data-tooltip="'Hide Scoreboard'" @click="this.hideScoreboard=true">
                                            &#128469;
                                        </button>

                                        <button v-else class="button show-button is-small has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
                                                :data-tooltip="'Show Scoreboard'" @click="this.hideScoreboard=false">
                                            &#128470;
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div class="column right is-half" v-if="!fullscreen">


                    <video-tile :infoData="VideoInfo[0]" :order="this.order">
                    </video-tile>
                    <dir-info-1 :order="this.order"> </dir-info-1>
                    <question-task :taskData="Task1"
                                   @submit-points="submitPoints"
                                   @task-completed="markAsCompleted"
                                   @submit-task-data="uploadTaskData"
                                   :order="this.order"
                                   :tasksCompleted="tasksCompleted">
                    </question-task>


                    <dir-info-2 :infoData="Info2"
                                v-if="tasksCompleted >= 1"
                                :order="this.order">
                    </dir-info-2>
                    <dir-info-3 :infoData="Info2"
                                v-if="tasksCompleted >= 1"
                                :order="this.order">
                    </dir-info-3>
                    <blank-task :taskData="Task2"
                                @submit-points="submitPoints"
                                @task-completed="markAsCompleted"
                                @submit-task-data="uploadTaskData"
                                v-if="tasksCompleted >= 1"
                                :order="this.order"
                                :tasksCompleted="tasksCompleted">
                    </blank-task>

                    <video-tile :infoData="VideoInfo[1]"
                                v-if="tasksCompleted >= 2"
                                :order="this.order">
                    </video-tile>

                    <dir-info-4 :infoData="Info4"
                                v-if="tasksCompleted >= 2"
                                :order="this.order">
                    </dir-info-4>

                    <blank-task :taskData="Task3"
                                @submit-points="submitPoints"
                                @task-completed="markAsCompleted"
                                @submit-task-data="uploadTaskData"
                                v-if="tasksCompleted >= 2"
                                :order="this.order"
                                :tasksCompleted="tasksCompleted">
                    </blank-task>
                    <video-tile :infoData="VideoInfo[2]"
                                v-if="tasksCompleted >= 3"
                                :order="this.order">
                    </video-tile>
                    <dir-info-5 :infoData="Info5"
                                v-if="tasksCompleted >= 3"
                                :order="this.order">
                    </dir-info-5>

                    <blank-task :taskData="Task4"
                                v-if="tasksCompleted >= 3"
                                @submit-points="submitPoints"
                                @task-completed="markAsCompleted"
                                @submit-task-data="uploadTaskData"
                                :order="this.order"
                                :tasksCompleted="tasksCompleted">
                    </blank-task>
                    <video-tile :infoData="VideoInfo[3]"
                                v-if="tasksCompleted >= 4"
                                :order="this.order">
                    </video-tile>
                    <editor-task :taskData="Task5"
                                 v-if="tasksCompleted >= 4"
                                 @submit-points="submitPoints"
                                 @task-completed="markAsCompleted"
                                 @submit-task-data="uploadTaskData"
                                 :order="this.order"
                                 :tasksCompleted="tasksCompleted">
                    </editor-task>
                    <video-tile :infoData="VideoInfo[4]"
                                v-if="tasksCompleted >= 5"
                                :order="this.order">
                    </video-tile>
                    <editor-task :taskData="Task6"
                                 v-if="tasksCompleted >= 5"
                                 @submit-points="submitPoints"
                                 @task-completed="markAsCompleted"
                                 @submit-task-data="uploadTaskData"
                                 @finish-game="finishGame"
                                 :order="this.order"
                                 :tasksCompleted="tasksCompleted">
                    </editor-task>
 </div>
            </div>
        </div>
    </body>
</template>

<script>
import BlankTask from "./components/BlankTask.vue";
import EditorTask from "./components/EditorTask.vue";
import QuestionTask from "./components/QuestionTask.vue";
import VideoTile from "./components/VideoTile.vue";
import DirInfo1 from "./components/DirInfo1.vue";
import DirInfo2 from "./components/DirInfo2.vue";
import DirInfo3 from "./components/DirInfo3.vue";
import DirInfo4 from "./components/DirInfo4.vue";
import DirInfo5 from "./components/DirInfo5.vue";

import Task1 from "./data/questions_task1.js";
import Task2 from "./data/directives_dt_attacker.js";
import Task3 from "./data/directives_dt_mitm.js";
import Task4 from "./data/directives_dt_arp.js";
import Task5 from "./data/directives_dt_log_manipulation.js";
import Task6 from "./data/directives_dt_dos.js";
import Info2 from "./data/info_2.js";
import Info4 from "./data/info_4.js";
import Info5 from "./data/info_5.js";
import VideoInfo from "./data/video_data.js";
import IDs from "./data/usernames.js";
import { userDashboard } from "@/firebase";
import settings from "./Settings.js"

import BlocklyComponent from './components/BlocklyComponent.vue'
import Blockly from 'blockly';
import './blockly/cyberrange';
import themeTransparent from './blockly/theme-transparent';

console.log(BlocklyComponent);
console.log(Blockly);
console.log(themeTransparent);
//import tool from "diff-js-xml";

/*
import "./blockly/blockly_compressed.js";
import "./blockly/msg/js/en.js";
import "./blockly/field_textbutton.js";
import "./blockly/menuly_override.js";
import "./blockly/menuly_blocks.js";
import "./blockly/menuly_codegen.js";
import "./blockly/menuly_2blocks.js";
*/

/*function updateJSONarea() {
  // eslint-disable-next-line no-undef
  document.getElementById('json_area').value = Blockly.JSON.fromWorkspace( Blockly.getMainWorkspace() );
}*/

/*function interpretJSONarea() {
  // eslint-disable-next-line no-undef
  Blockly.JSON.toWorkspace( document.getElementById('json_area').value, Blockly.getMainWorkspace() );
}*/

export default {
  name: "App",
  components: {
    VideoTile,
    BlankTask,
    EditorTask,
    QuestionTask,
    DirInfo1,
    DirInfo2,
    DirInfo3,
    DirInfo4,
    DirInfo5,
    //BlocklyComponent,
  },

  /*async mounted() {
    if (!window.g_blockly_workspace) {
      var scriptSrcs = [
        //"https://cdn.jsdelivr.net/npm/blockly@1.0.0/blockly_compressed.js",
        //"https://cdn.jsdelivr.net/npm/blockly@1.0.0/blocks_compressed.js",
        //"https://cdn.jsdelivr.net/npm/blockly@1.0.0/msg/js/en.js",
        //"https://cdn.jsdelivr.net/npm/blockly@1.0.0/python_compressed.js"
        "https://uversy.com/cyberrange/blockly/blockly_compressed.js",
        "https://uversy.com/cyberrange/blockly/msg/js/en.js",
        "https://uversy.com/cyberrange/blockly/field_textbutton.js",
        "https://uversy.com/cyberrange/blockly/menuly_override.js",
        "https://uversy.com/cyberrange/blockly/menuly_blocks.js",
        "https://uversy.com/cyberrange/blockly/menuly_codegen.js",
        "https://uversy.com/cyberrange/blockly/menuly_2blocks.js"
      ];

      for (let idx = 0; idx < scriptSrcs.length; idx++) {
        await new Promise(function(resolve, reject) {
          console.log(reject);
          //console.log(scriptSrcs)
          let script = document.createElement("script");
          script.onload = () => {
            //console.log(scriptSrcs[idx]);
            resolve(scriptSrcs[idx] + " loaded");
          };
          script.async = true;
          script.src = scriptSrcs[idx];
          document.head.appendChild(script);
        });
      }

      var toolbox = `<xml id="toolbox" style="display: none"><category name="Category 1"><block type="variables_set"><field name="VAR" id="g4BT=E+!t}]z](sJAEP">i</field></block><block type="controls_if"/><block type="variables_set"><field name="VAR" id="g4BT=E+!t}]z](sJAEP">i</field></block><block type="logic_compare"><field name="OP">EQ</field></block><block type="text_print"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field></block></next></block><block type="procedures_ifreturn"><mutation value="1"/></block><block type="text"><field name="TEXT"/></block></category><category name="Variables" colour="#a55b80" custom="VARIABLE"/><category name="Functions" colour="#995ba5" custom="PROCEDURE"/></xml>`;
      console.log(toolbox);
      this.$nextTick(function() {

        // eslint-disable-next-line no-undef
        Blockly.inject(document.getElementById('blocklyDiv'), {
          //rtl: true,
          toolbox: document.getElementById('toolbox'),
          media: 'media/',    // to avoid reaching to the web for icons
          sound: false,
          collapse: true, comments: true, disable: false, scrollbars: true, trashcan: false // those ones are automatically true when there are categories
        });

        //Blockly.JSON.toWorkspace( 'null', Blockly.getMainWorkspace() ); // load the initial state using our own JSON converter

        //let json_nothing = 'null';
        let json = '';
        json = '{"name":"John", "input":"", "age":"30", "car":null}';
        json = '{ "directives": [ { "id": 5, "name": "ICMP-DOS-Attack", "priority": 3, "disabled": false, "all_rules_always_active": false, "kingdom": "Attacks", "category": "Disruption", "rules": [ { "name": "ICMP-REQUEST", "stage": 1, "plugin_id": 1008, "plugin_sid": [ 11 ], "occurrence": 1, "from": "ANY", "to": "ANY", "type": "PluginRule", "port_from": "ANY", "port_to": "ANY", "protocol": "ANY", "reliability": 2, "timeout": 0 }, { "name": "ICMP-REQUEST", "stage": 2, "plugin_id": 1008, "plugin_sid": [ 11 ], "occurrence": 1000, "from": "ANY", "to": ":1", "type": "PluginRule", "port_from": "ANY", "port_to": "ANY", "protocol": "ANY", "reliability": 8, "timeout": 60 } ] } ] }';
        json = '{"id":5,"name":"ICMP-DOS-Attack","priority":3,"disabled":false,"all_rules_always_active":false,"kingdom":"Attacks","category":"Disruption","rules":[{"name":"ICMP-REQUEST","stage":1,"plugin_id":1008,"plugin_sid":[11],"occurrence":1,"from":"ANY","to":"ANY","type":"PluginRule","port_from":"ANY","port_to":"ANY","protocol":"ANY","reliability":2,"timeout":0},{"name":"ICMP-REQUEST","stage":2,"plugin_id":1008,"plugin_sid":[11],"occurrence":1000,"from":"ANY","to":":1","type":"PluginRule","port_from":"ANY","port_to":"ANY","protocol":"ANY","reliability":8,"timeout":60}]}';

        // eslint-disable-next-line no-undef
        Blockly.JSON.toWorkspace(json, Blockly.getMainWorkspace());

        // eslint-disable-next-line no-undef
        let allBlocks = Blockly.mainWorkspace.getAllBlocks();
        console.log(allBlocks);

        allBlocks.forEach(function(block){
          console.log(block);
          console.log(block.getFieldValue());
          console.log(block.getInput());

          if(typeof block["inputList"][0]["fieldRow"][1] !== 'undefined' && typeof block["inputList"][0]["fieldRow"][1]["text_"] !== 'undefined') {
            console.log(block["inputList"][0]["fieldRow"][1]["text_"]);
          }
        });

        // eslint-disable-next-line no-undef
        //Blockly.addChangeListener(updateJSONarea);

      });
    }
  },*/

  mounted:



  function () {

       this.url_param = new URL(location.href).searchParams.get("userID");
    console.log(this.url_param);
    if (this.url_param != null) {
      this.traineeID = this.url_param;
      var newUrl=this.removeURLParameter(location.href, "userID")
      history.pushState({}, null, newUrl);
      this.validateId();
    } else {
      console.log("url is empty"); }



    this.$nextTick(function () {



      /*console.log("Start custom block");

      var toolbox = document.getElementById("toolbox_disabled");

      var options = {
        toolbox : toolbox,
        toolboxPosition : 'start',
        collapse : false,
        comments : false,
        disable : false,
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true
        },
        maxBlocks : 10,
        trashcan : false,
        horizontalLayout : false,
        css : true,
        media : 'https://blockly-demo.appspot.com/static/media/',
        rtl : false,
        scrollbars : false,
        sounds : false,
        oneBasedIndex : true,
        readOnly: false
      };

      var workspaceStart = Blockly.inject("blockly1", options);
      //this.workspace = workspaceStart;

      var workspaceBlocks = document.getElementById("workspaceBlocks_task2");

      Blockly.Xml.domToWorkspace(workspaceBlocks, workspaceStart);*/
    })
  }



    ,

  data() {

    var showBlocklyTest = false; //Default Value -> True: Show Blockly, False: Show JSON

    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);

    if(typeof params.get("blockly") !== 'undefined' && params.get("blockly") !== null) {
      showBlocklyTest = true;
    }

    return {
      showBlockly: showBlocklyTest,
      Usernames: IDs,
      Task1: Task1,
      Task2: Task2,
      Task3: Task3,
      Task4: Task4,
      Task5: Task5,
      Task6: Task6,
      VideoInfo: VideoInfo,
      Info2: Info2,
      Info4: Info4,
      Info5: Info5,
      emptyInput: false,
      tasksCompleted: 0,
      gameCompleted: false,
      gameStarted: false,
      traineeID: null,
      taskTimes: [],
      startTime: null,
      wrongUserID: false,
      wrongUsername: false,
      evaluationData: [],
      dashboard: null,
      points: null,
      round: null,
      hideScoreboard: false,
      order: [
        "video1",
        "info1",
        "task1",
        "info2",
        "info3",
        "task2",
        "video2",
        "info4",
        "task3",
        "video3",
        "info5",
        "task4",
        "video4",
        "task5",
        "video5",
        "task6",
      ],
      fullscreen: false,
      kibanaOn: settings.kibanaOn,
      loginDisabled: settings.loginDisabled,
      scrollPos: null,
      kibanaUrl:
        window.location.href.replace("7080", "5605") +
        "app/kibana#/dashboard/87c18520-b337-11e8-b3e4-11404c6637fe?_g=(refreshInterval:(pause:!f,value:20000),time:(from:now-15m,to:now))&_a=(description:'Kibana dashboard for DSIEM',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(vis:!n),gridData:(h:10,i:'2',w:18,x:0,y:9),id:ed4a2ca0-b335-11e8-b3e4-11404c6637fe,panelIndex:'2',type:visualization,version:'7.6.1'),(embeddableConfig:(spy:!n),gridData:(h:9,i:'7',w:22,x:12,y:0),id:a0f5c810-b339-11e8-b3e4-11404c6637fe,panelIndex:'7',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'8',w:16,x:18,y:9),id:'56c8e620-b337-11e8-b3e4-11404c6637fe',panelIndex:'8',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:9,i:'9',w:14,x:34,y:0),id:b4844b80-b45c-11e8-b3e4-11404c6637fe,panelIndex:'9',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(defaultColors:('0 - 20':'rgb(0,104,55)','20 - 50':'rgb(255,255,190)','50 - 100':'rgb(165,0,38)'),legendOpen:!t)),gridData:(h:9,i:'10',w:12,x:0,y:0),id:'217b62e0-b45e-11e8-b3e4-11404c6637fe',panelIndex:'10',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'11',w:11,x:0,y:19),id:'820da8f0-b465-11e8-b3e4-11404c6637fe',panelIndex:'11',type:visualization,version:'7.6.1'),(embeddableConfig:(title:Alarms),gridData:(h:10,i:'12',w:14,x:34,y:9),id:'9badafd0-c009-11e8-b3e4-11404c6637fe',panelIndex:'12',title:Alarms,type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:17,i:'14',w:48,x:0,y:35),id:c7aa9f10-e365-11e8-9c9b-556fd2a389b2,panelIndex:'14',type:search,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'15',w:37,x:11,y:19),id:'334c77b0-b338-11e8-b3e4-11404c6637fe',panelIndex:'15',type:search,version:'7.6.1')),query:(language:lucene,query:''),timeRestore:!f,title:SIEM,viewMode:view)",
      kibanaUrlTest:
        "http://192.168.2.158:5605/app/kibana#/dashboard/87c18520-b337-11e8-b3e4-11404c6637fe?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'Kibana%20dashboard%20for%20DSIEM',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:10,i:'2',w:18,x:0,y:9),id:ed4a2ca0-b335-11e8-b3e4-11404c6637fe,panelIndex:'2',type:visualization,version:'7.6.1'),(embeddableConfig:(spy:!n),gridData:(h:9,i:'7',w:22,x:12,y:0),id:a0f5c810-b339-11e8-b3e4-11404c6637fe,panelIndex:'7',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'8',w:16,x:18,y:9),id:'56c8e620-b337-11e8-b3e4-11404c6637fe',panelIndex:'8',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:9,i:'9',w:14,x:34,y:0),id:b4844b80-b45c-11e8-b3e4-11404c6637fe,panelIndex:'9',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(defaultColors:('0%20-%2020':'rgb(0,104,55)','20%20-%2050':'rgb(255,255,190)','50%20-%20100':'rgb(165,0,38)'),legendOpen:!t)),gridData:(h:9,i:'10',w:12,x:0,y:0),id:'217b62e0-b45e-11e8-b3e4-11404c6637fe',panelIndex:'10',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'11',w:11,x:0,y:19),id:'820da8f0-b465-11e8-b3e4-11404c6637fe',panelIndex:'11',type:visualization,version:'7.6.1'),(embeddableConfig:(title:Alarms),gridData:(h:10,i:'12',w:14,x:34,y:9),id:'9badafd0-c009-11e8-b3e4-11404c6637fe',panelIndex:'12',title:Alarms,type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:17,i:'14',w:48,x:0,y:35),id:c7aa9f10-e365-11e8-9c9b-556fd2a389b2,panelIndex:'14',type:search,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'15',w:37,x:11,y:19),id:'334c77b0-b338-11e8-b3e4-11404c6637fe',panelIndex:'15',type:search,version:'7.6.1')),query:(language:lucene,query:''),timeRestore:!f,title:SIEM,viewMode:view)",
    };
  },



  methods: {
    validateId() { //NEW

      if (this.traineeID == null) {
        this.emptyInput = true;
      }
      else {
      var docRef = userDashboard.doc(String(this.traineeID));
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
        this.emptyInput = false;
        this.gameStarted = true;



        this.getUserPoints();
              }

             else {
                this.wrongUserID= true;

      }})}

   window.onbeforeunload = function() {
  return "Data will be lost if you leave the page, are you sure?";
};


      },


          removeURLParameter(url, parameter) { //NEW
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
},

    async getMarker() {
      const snapshot = await userDashboard.where("round", "==", this.round).orderBy("points", "desc").get();
      //const snapshot = await userDashboard.orderBy("points", "desc").get();
      this.dashboard = snapshot.docs.map((doc) => doc.data());
    },

     async uploadTaskData(fieldname, data) {

      var docRef = userDashboard.doc(this.traineeID);


      docRef.get()
        .then((doc) => {
          if (doc.exists) {

            userDashboard.doc(this.traineeID).update({
        [fieldname]: data
      });

          }}

        );
    },




    async uploadPoints() {

      await userDashboard.doc(this.traineeID).update({
        points: this.points,
        level: this.tasksCompleted,
        startTime: this.startTime,

      });
            this.getMarker();

    },

     async uploadEvaluationData() {
        await userDashboard.doc(this.traineeID).update({
        taskTimes: JSON.stringify(this.taskTimes)
      });

    },

    checkIfNewLevel(newLevel) {
      if (newLevel != this.level_old && newLevel > 1) {
        this.level_old = newLevel;
        return newLevel;
      }
      return this.level_old;
    },

    markAsCompleted(taskTimes) {
      //save timer information here
      this.tasksCompleted += 1;
      this.uploadPoints()
      this.taskTimes.push(taskTimes);
      this.uploadEvaluationData();
    },

    restartDigitalTwin(){
     this.$http.get(window.location.href.replace("7080", "9090")+"restart_dt").then((response) => {
         console.log(response.data)
})
/*this.$http.get("http://192.168.2.158:9090/restart").then((response) => {
  console.log(response.data)
})*/

    },

    getUserPoints() {
      var docRef = userDashboard.doc(String(this.traineeID));

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.round = doc.data().round; //in order to only show the trainees from the same round on the dashboard

            if(doc.data().startTime != null){
            //get data from user who logged in before, for this reason check if startTime was already put
            this.points = doc.data().points;
            this.tasksCompleted = doc.data().level;
            this.startTime = doc.data().startTime;
            if(doc.data().taskTimes != null){
            this.taskTimes = JSON.parse(doc.data().taskTimes); }
            } else{
              //registered player who didn't log in before
            this.tasksCompleted = 0;
            this.startTime = new Date();
            userDashboard.doc(this.traineeID).update({
        startTime: this.startTime,
      });
           /*a user's progress within a task is not stored in firebase for performance reason and also because database updates are limited
            for this reason it is stored in the localStorage (read in the browser console with "localStorage"), from here the user's progress can be read in case of a refresh
            this prevents the user from losing their progress when refreshing the page or intentionally trying to cheat by earning points for submitting a blank twice */
            var storedTries = {task1: [3], task2: [3,3], task3: [3,3,3,3,3,3,3,3,3], task4: [3,3,3,3,3],task5: [5], task6: [5]};
            var blanksCompleted = {task2: 0, task3: 0, task4: 0};
            var hints = {task1: 0, task2: 0, task3: 0, task4: 0,task5: 0, task6: 0};
            localStorage.setItem("storedData",JSON.stringify(storedTries))
            localStorage.setItem("blanksCompleted",JSON.stringify(blanksCompleted))
            localStorage.setItem("hints",JSON.stringify(hints)) //NEW
             }

          } else {
            // if not only played with preset users
            console.log("No such document!");
            this.points = 0;
            this.tasksCompleted = 0;
            this.startTime = new Date();
            userDashboard.doc(this.traineeID).update({
        startTime: this.startTime,
      });
          }
          this.getMarker()
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });



      },

    finishGame() {
      this.gameCompleted = true;
      this.evaluationData.push(
        "ID: " + this.traineeID,
        "Points: " + this.points,
        "Level: " + this.tasksCompleted,
        "Times: " + this.taskTimes,

      );
      this.submitEvaluationData();
      this.uploadEvaluationData();
      console.log("uploaded")
    },

    textToClipboard(text) {
      console.log("try to copy");
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },

    submitEvaluationData() {
      this.$http
        .post(
          window.location.href.replace("7080", "9090/submit") +
            JSON.stringify(this.evaluationData)
        )
        .then((response) => {
          console.log(response.data);
        });
    },

    scrollBack(){
       setTimeout(() => {
         window.scrollTo(0,this.scrollPos);


})

    },

    rememberScrollPos(){
      this.scrollPos = window.scrollY;
    },



    submitPoints(points2) {
      console.log("submitPoints: "+points2);
      this.points += points2;
      this.uploadPoints();
    },
  }

};


</script>

<style>
@import "./../css/bulma.css";
@import "./../css/bulma-tooltip.css";
.blocklyContainer {
  width: 100%;
}
.blocklyDiv {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.directive-completed {
  pointer-events: none !important;
}

#blockly_task2 {
  height: 480px;
}

#blockly_task3 {
  height: 850px;
}

#blockly_task4 {
  height: 850px;
}

#blockly_task5 {
  height: 480px;
}

#blockly_task6 {
  height:650px;
}

.submitContainer {

}

.submitContainer .submitItem {
  padding: 2rem 0;
}

.submitContainer .submitItem:not(:last-child) {
  border-bottom:2px solid #dbdbdb;
}

.error-message-blockly {
  display:none;
}

.blockly-input, .blockly-duplicate {
  display:inline-block;
  margin-bottom: 8px;
}

.blockly-input .name, .duplicate-content {
  font-weight: bold;
}

.blockly-submit button {
  display: inline-block !important;
}

.blockly-hint {
  display: block;
}

.blockly-message span {
  display: block;
  margin-top: 2px;
  margin-bottom: 6px;
}

.blocklyDiv {
  border: 2px solid #dbdbdb !important;
}

.blocklyWorkspace rect {
  stroke-width: 0px !important;
}

.display-none {
  display: none !important;
}

.submitContainer ul {
  list-style: disc outside;
  margin: 1rem 2rem 0 2rem;
}

.no-tries-left {
  display: block;
  margin-top:30px;
  margin-bottom:20px;
}
</style>
