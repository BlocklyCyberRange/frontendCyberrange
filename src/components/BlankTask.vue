<template>
  <div class="is-task" :id="taskData.tileNo">
    <div class="is-directive">
      <text
        class="title is-json is-text-red"
        :class="{ 'has-text-grey': task_completed || completedBefore }"
        >{{ taskData.title }}</text
      >

      <text class="has-text-grey subtitle nice-subtitle">
        {{ taskData.subtitle }}
      </text>

      <div v-if="task_completed" class="is-primary-darker subtitle is-json">
        Completed
      </div>

      <div class="mt-5" v-if="!task_completed && !completedBefore">
        <text
          class="is-size-6 has-text-justified"
          v-html="this.taskData.taskDescription"
        ></text>
      </div>

      <div v-else>
        <div
          v-if="task_completed"
          class="notification notification-green is-light success-message"
        >
          <span class="is-primary-darker is-size-5 mb-5">
            You earned {{ this.pointsOverall }} points.
          </span>
        </div>

        <div class="columns is-hcentered mt-5">
          <img
            src="./../assets/rocket.svg"
            class="image is-hcentered rotate"
            style="width: 100px"
          />

          <div class="ml-4 is-hcentered">
            <span class="title is-title-smaller is-primary-darker is-json">
              DirectiveDeployed.</span
            >
            <br />
            The alarm will be visible on the SIEM dashboard in a few seconds.
            You can now also view the directive in plain JSON. Try the button!

            <div
              style="display: table !important width: 100% !important"
              class="mt-5"
            >
              <div
                class="buttons is-pulled-left"
                v-if="task_completed || completedBefore"
              >
                <button
                  @click="proceed()"
                  class="button is-rounded submit-button"
                >
                  CONTINUE
                </button>
              </div>
              <div
                class="buttons has-addons is-pulled-right is-json"
                v-if="task_completed || completedBefore"
              >
                <button
                  @click="
                    viewJson = false;
                    showTask = true;
                  "
                  class="button is-rounded is-light"
                  :class="{ 'is-red-br': !viewJson && showTask }"
                >
                  Task
                </button>
                <button
                  @click="
                    viewJson = true;
                    showTask = true;
                  "
                  class="button is-rounded is-light"
                  :class="{ 'is-red-br': viewJson && showTask }"
                >
                  Json
                </button>
                <button
                  @click="showTask = false"
                  class="button is-rounded is-light"
                  :class="{ 'is-red-br': !showTask }"
                >
                  Hide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        <button
        @click="this.submitStartTime()"
        class="button is-rounded submit-button mt-5"
        v-if="!taskStarted && !completedBefore"
      >
        START
      </button>

      <br />

      <div v-if="showTask">
        <div
          v-if="!viewJson"
          :class="{ 'directive-completed': task_completed || completedBefore }"
        >
          <div v-if="showBlockly" :id="'blocklyGroupContainer' + taskData.blockly_task">
            <div class="blocklyContainer">
              <div
                class="blocklyDiv"
                :id="'blockly_task' + taskData.blockly_task"
              ></div>
            </div>

            <div
              class="submitContainer"
              v-if="!noTriesLeftBlockly && !completedBefore"
            > <!--BUG HERE-->
              <ul>
                <li
                  class="submitItem"
                  v-for="(item, index) in blanks"
                  :key="item"
                >
                  <span class="blockly-input">
                    <span class="name">Field "{{ item.name }}"</span>
                  </span>

                  <br />

                  <div v-if="triesLeftBlockly[index]>0">

                  <span class="blockly-duplicate">
                    Your current input: "<span
                      class="duplicate-content"
                      :id="
                        'watcher-task-' +
                        taskData.blockly_task +
                        '-' +
                        taskData.blockly_block_order[index]
                      "
                      >...</span
                    >"
                  </span>

                  <br />

                  <span
                    v-if="
                      !blanks[index].rightTry &&
                      !noTriesLeftBlockly &&
                      !completedBefore
                    "
                    class="blockly-submit"
                  >
                    Submit your input:
                    <button
                      @click="
                        validateInputBlockly(
                          index
                        ) /*this.$refs.blankComponent.validateInput(true, index)*/
                      "
                      class="button is-small submit-button is-rounded"
                      type="submit"
                      value="Submit"
                    >
                      <span> &#10140;</span>
                    </button>
                  </span>

                  <span
                    class="blockly-hint"
                    v-if="
                      !blanks[index].rightTry &&
                      !noTriesLeftBlockly &&
                      !completedBefore &&
                      !hintActivatedBlockly[index] &&
                      blanks[index].dataTooltip != null
                    "
                  >
                    Buy a hint:
                    <span
                      class="
                        icon
                        has-tooltip-arrow has-tooltip-multiline has-tooltip-top
                      "
                      :data-tooltip="'Buy hint for -1 Point'"
                      @click="buyHintBlockly(index)"
                    >
                      <font-awesome-icon icon="info-circle" />
                    </span>
                  </span>

                  <text
                    v-if="
                      hintActivatedBlockly[index] &&
                      blanks[index].dataTooltip != null
                    "
                    class="blockly-hint has-text-primary"
                  >
                    Hint: {{ blanks[index].dataTooltip }} (-1 point)
                  </text>

                  </div>

                  <span class="blockly-message">
                    <span
                      v-if="emptyInputBlockly[index]"
                      class="has-text-danger"
                      >Input cannot be empty.</span
                    >
                    <span
                      v-else-if="
                        triesLeftBlockly[index] < 3 &&
                        triesLeftBlockly[index] > 0 &&
                        !completedBefore &&
                        !blanks[index].rightTry
                      "
                      class="has-text-danger"
                      :id="
                        'error-message-' + taskData.blockly_task + '-' + index
                      "
                    >
                      You were wrong. You have
                      {{ triesLeftBlockly[index] }} Tries left.
                    </span>
                    <span
                      v-else-if="blanks[index].rightTry"
                      class="has-text-primary"
                      :id="
                        'success-message-' + taskData.blockly_task + '-' + index
                      "
                    >
                      Great Try! You earned
                      {{ triesLeftBlockly[index] }} point(s).
                    </span>

                      <span
              class="no-tries-left has-text-danger"
              v-else-if="triesLeftBlockly[index]==0 && blanks[index].wrongTry"
            >
              Sorry. You have no tries left.
                        <br>
                        The correct answer is: "{{correctAnswers[index]}}"
            </span>

                    <span
                        class="no-tries-left"
                        v-else-if="triesLeftBlockly[index]==0"
                    >
                        The correct answer is: "{{correctAnswers[index]}}"
            </span>


                  </span>
                </li>
              </ul>
            </div>


          </div>

          <span v-if="!showBlockly" :id="'jsonGroupContainer' + taskData.blockly_task">
            <span class="has-text-black is-json is-size-7">
              directives[{{ Object.keys(directive).length }}]:
            </span>
            <div class="directive-header">
              <div v-for="(item, index) in json_header" :key="item">
                <json-field :name="index" :value="item"></json-field>
              </div>

              <span class="has-text-black is-json is-size-7">
                rules[{{ rules.length }}]:
              </span>

              <div
                class="is-rule"
                v-for="(rule, index) in rules"
                :key="rule"
                :class="{
                  'is-rule-level-2': index == 1,
                  'is-rule-level-3': index == 2,
                }"
              >
                <div v-for="(item, index_inner) in rule" :key="item">
                  <div v-if="checkBlank(index_inner, index) != null">
                    <blank
                      :taskData="taskData"
                      ref="blankComponent"
                      :blanks="blanks[checkBlank(index_inner, index)]"
                      :index="checkBlank(index_inner, index)"
                      :tileNo="taskData.tileNo"
                      @blank-completed="completeTask"
                      @buy-hint="this.$emit('submit-points', -1)"
                      :completedBefore="completedBefore"
                    >
                    </blank>
                  </div>
                  <div v-else>
                    <json-field :name="index_inner" :value="item"></json-field>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>

        <div v-else>
          <vue-json-editor
            class="is-background-white"
            lang="en"
            :value="directive"
            :mode="'code'"
          >
          </vue-json-editor>
        </div>
      </div>

      <taskload v-if="showTlx" @submit-tlx="submitTlx"></taskload>
    </div>
  </div>
</template>

<script>
import Blank from "./Blank.vue";
import JsonField from "./JsonField.vue";

import BlocklyComponent from "./BlocklyComponent.vue";
import Blockly from "blockly";
import "../blockly/cyberrange";
import Taskload from "./Taskload.vue";
import themeTransparent from "../blockly/theme-transparent";

console.log(BlocklyComponent);
console.log(themeTransparent);

export default {
  name: "BlankTask",
  props: {
    taskData: {
      type: Object,
      required: true,
    },
    order: {},
    tasksCompleted: {},
  },
  data() {
    return {
      directive: this.taskData.directive,
      json_header: Object.fromEntries(
        Object.entries(this.taskData.directive.directives[0]).slice(0, 7)
      ),
      rules: this.taskData.directive.directives[0].rules,
      blanks: this.taskData.blanks,
      viewJson: false,
      blanks_completed: this.getBlanksCompleted(),
      task_completed: false,
      pointsOverall: 0,
      timestamp_before: null,
      timestamp_after: null,
      timeToComplete: null,
      showTask: false,
      rating: null, //NEW
      tlxCompleted: false, //NEW
      showTlx: false, //NEW
      workspace_task1: null,
      workspace_task2: null,
      workspace_task3: null,
      workspace_task4: null,
      showBlockly: this.$parent.showBlockly,
      hintActivatedBlockly: [],
      triesLeftBlockly: this.getTriesLeftBlockly(),
      emptyInputBlockly: this.getEmptyInput(),
      noTriesLeftBlockly: this.getNoTriesLeftBlockly(),
      pointsBlockly: null,
      noTriesLeftBlocklyBlank: false,
      correctAnswers: this.getCorrectAnswers(),
    };
  },

  watch: {
    viewJson: function (val) {
      if (!val) {
        setTimeout(() => this.display_blockly_task(), 100);
      }
    },
    showTask: function (val) {
      if (val) {
        setTimeout(() => this.display_blockly_task(), 100);
      }
    },
  },

  components: {
    Blank,
    JsonField, Taskload
  },

  computed: {
    completedBefore() {
      if (this.taskData.level < this.tasksCompleted) {
        return true;
      } else {
         this.checkProgress()

        return false;
      }
    },
  },

  /*mounted: function () {
    this.$nextTick(function () {
      this.display_blockly_task();
    });
  },*/

  methods: {
    /*display_task() {
      this.viewJson = false;
      this.showTask = true;
      this.display_blockly_task();
    },*/

     checkProgress() {
      //NEW

       console.log("BLANKS COMPLETED: ", this.blanks_completed)

      try {
        console.log("blanks completed: ", this.blanks_completed)
        if (this.blanks_completed == Object.keys(this.taskData.blanks).length) {

          this.showTlx = true;
          this.taskStarted = true;
          this.showTask = true;

        } else if (this.blanks_completed > 0) {
          this.showTask = true;
          this.taskStarted = true;
        }
      } catch (err) {
        console.log("localStorage empty");
      }
    },



    buyHintBlockly(index) {
      console.log("buyHintBlockly: " + index);
      this.$emit("submit-points", -1);
      this.hintActivatedBlockly[index] = true;
       try {
        var hints = JSON.parse(localStorage.getItem("hints"));
        hints[this.taskData.tileNo] = hints[this.taskData.tileNo] + 1;
        localStorage.setItem("hints", JSON.stringify(hints));
      } catch (err) {
        console.log("localStorage empty");
      }
    },
    validateInputBlockly(index) {
      console.log(
        "validateInputBlockly: " +
          index +
          " --- " +
          "blockly_task: " +
          this.taskData.blockly_task
      );

      var emptyXML = document.getElementById(
        "workspaceBlocks_task" + this.taskData.blockly_task + "_empty" + index
      );
      var solutionXML = document.getElementById(
        "workspaceBlocks_task" +
          this.taskData.blockly_task +
          "_solution" +
          index
      );
      var workspaceXML = Blockly.Xml.workspaceToDom(
        this["workspace_task" + this.taskData.blockly_task]
      );

      //console.log(emptyXML);
      //console.log(solutionXML);
      //console.log(workspaceXML);

      var emptyXML_string1 = "";
      var solutionXML_string = "";
      var workspaceXML_string = "";

      if (emptyXML.outerHTML) {
        emptyXML_string1 = emptyXML.outerHTML;
      } else if (XMLSerializer) {
        emptyXML_string1 = new XMLSerializer().serializeToString(emptyXML);
      }

      if (solutionXML.outerHTML) {
        solutionXML_string = solutionXML.outerHTML;
      } else if (XMLSerializer) {
        solutionXML_string = new XMLSerializer().serializeToString(solutionXML);
      }

      if (workspaceXML.outerHTML) {
        workspaceXML_string = workspaceXML.outerHTML;
      } else if (XMLSerializer) {
        workspaceXML_string = new XMLSerializer().serializeToString(
          workspaceXML
        );
      }

      emptyXML_string1 = this.field_incrementer(emptyXML_string1);
      solutionXML_string = this.field_incrementer(solutionXML_string);
      workspaceXML_string = this.field_incrementer(workspaceXML_string);

      var emptyXML_string2 = this.replaceAll(emptyXML_string1, "...", "");
      var emptyXML_string3 = this.replaceAll(emptyXML_string1, "...", " ");

      //console.log(emptyXML_string1);
      //console.log(emptyXML_string2);
      //console.log(emptyXML_string3);
      //console.log(solutionXML_string);
      //console.log(workspaceXML_string);

      var schema = {};
      var options = {};

      var tool = require("diff-js-xml");

      var xml_is_empty1 = false; //"..."
      var xml_is_empty2 = false; //""
      var xml_is_empty3 = false; //" "
      var xml_is_correct = false;

      //solutionXML_string = "<string-array name=\"*\"><item>*</item><item2>Chinese</item2><item3>*</item3><item4>*</item4></string-array>";
      //workspaceXML_string = "<string-array name=\"languages_array\"><item>Dutch</item><item2>Chinese</item2><item3>French</item3><item4>Spanish</item4></string-array>";

      //solutionXML_string = "<xml><block type=\"directive\" id=\"directive_task2\" x=\"88\" y=\"63\"><field name=\"DIRECTIVE\">Directive</field><field name=\"DIRECTIVE_ID\">1</field><field name=\"DIRECTIVE_NAME\">Unknown IP in network</field><field name=\"DIRECTIVE_PRIORITY\">3</field><field name=\"DIRECTIVE_DISABLED\">DIRECTIVE_DISABLED_FALSE</field><field name=\"DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE\">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field><field name=\"DIRECTIVE_KINGDOM\">Attacks</field><field name=\"DIRECTIVE_CATEGORY\">Malicious Insider</field><statement name=\"NAME\"><block type=\"rule\" id=\"rule_task2\"><field name=\"RULE\">Rule</field><field1 name=\"RULE_NAME\">*</field1><field name=\"RULE_STAGE\">1</field><field name=\"RULE_OCCURRENCE\">1</field><field name=\"RULE_PLUGIN_ID\">1008</field><field name=\"RULE_PLUGIN_SID\">9</field><field name=\"RULE_FROM\">ANY</field><field name=\"RULE_TO\">ANY</field><field name=\"RULE_TYPE\">PluginRule</field><field name=\"RULE_PROTOCOL\">ANY</field><field name=\"RULE_PORT_FROM\">ANY</field><field name=\"RULE_PORT_TO\">ANY</field><field name=\"RULE_RELIABILITY\">10</field><field name=\"RULE_TIMEOUT\">0</field></block></statement></block></xml>";
      //workspaceXML_string = "<xml><block type=\"directive\" id=\"directive_task2\" x=\"88\" y=\"63\"><field name=\"DIRECTIVE\">Directive</field><field name=\"DIRECTIVE_ID\">1</field><field name=\"DIRECTIVE_NAME\">Unknown IP in network</field><field name=\"DIRECTIVE_PRIORITY\">3</field><field name=\"DIRECTIVE_DISABLED\">DIRECTIVE_DISABLED_FALSE</field><field name=\"DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE\">DIRECTIVE_ALL_RULES_ALWAYS_ACTIVE_FALSE</field><field name=\"DIRECTIVE_KINGDOM\">Attacks</field><field name=\"DIRECTIVE_CATEGORY\">Malicious Insider</field><statement name=\"NAME\"><block type=\"rule\" id=\"rule_task2\"><field name=\"RULE\">Rule</field><field1 name=\"RULE_NAME\">...</field1><field name=\"RULE_STAGE\">1</field><field name=\"RULE_OCCURRENCE\">1</field><field name=\"RULE_PLUGIN_ID\">1008</field><field name=\"RULE_PLUGIN_SID\">9</field><field name=\"RULE_FROM\">ANY</field><field name=\"RULE_TO\">ANY</field><field name=\"RULE_TYPE\">PluginRule</field><field name=\"RULE_PROTOCOL\">ANY</field><field name=\"RULE_PORT_FROM\">ANY</field><field name=\"RULE_PORT_TO\">ANY</field><field name=\"RULE_RELIABILITY\">10</field><field name=\"RULE_TIMEOUT\">0</field></block></statement></block></xml>";

      tool.diffAsXml(
        emptyXML_string1,
        workspaceXML_string,
        schema,
        options,
        (result) => {
          console.log(result);
          if (result.length === 0) {
            console.log("Empty1 Correct");
            xml_is_empty1 = true;
          } else {
            console.log("Empty1 Incorrect");
            xml_is_empty1 = false;
          }
        }
      );

      tool.diffAsXml(
        emptyXML_string2,
        workspaceXML_string,
        schema,
        options,
        (result) => {
          console.log(result);
          if (result.length === 0) {
            console.log("Empty2 Correct");
            xml_is_empty2 = true;
          } else {
            console.log("Empty2 Incorrect");
            xml_is_empty2 = false;
          }
        }
      );

      tool.diffAsXml(
        emptyXML_string3,
        workspaceXML_string,
        schema,
        options,
        (result) => {
          console.log(result);
          if (result.length === 0) {
            console.log("Empty3 Correct");
            xml_is_empty3 = true;
          } else {
            console.log("Empty3 Incorrect");
            xml_is_empty3 = false;
          }
        }
      );

      tool.diffAsXml(
        solutionXML_string,
        workspaceXML_string,
        schema,
        options,
        (result) => {
          console.log(result);
          if (result.length === 0) {
            console.log("Solution Correct");
            xml_is_correct = true;
          } else {
            console.log("Solution Incorrect");
            xml_is_correct = false;
          }
        }
      );

      console.log("xml_is_empty1: " + xml_is_empty1);
      console.log("xml_is_empty2: " + xml_is_empty2);
      console.log("xml_is_empty3: " + xml_is_empty3);
      console.log("xml_is_correct: " + xml_is_correct);

      var allTries;
      console.log(allTries);

      if (xml_is_empty1 || xml_is_empty2 || xml_is_empty3) {
        this.emptyInputBlockly[index] = true;
        //alert("Input cannot be empty.");
      } else if (xml_is_correct) {
        console.log("Correct");
        console.log(this.blanks);
        //------------------------------------------------------
        this.emptyInputBlockly[index] = false;
        this.blanks[index].rightTry = true;
        this.blanks[index].wrongTry = false;
        this.hintActivatedBlockly = false;
        try {
          var allTries3 = JSON.parse(localStorage.getItem("storedData"));

          allTries3[this.taskData.tileNo][index] = 0;
          localStorage.setItem("storedData", JSON.stringify(allTries3));
          this.update_getTriesLeftBlockly(allTries3);
        } catch (err) {
          console.log("localStorage empty");
        }
        //------------------------------------------------------
      } else if (!xml_is_correct) {
        console.log("Incorrect");
        //------------------------------------------------------
        this.emptyInputBlockly[index] = false;
        this.triesLeftBlockly[index] -= 1;
        try {
          allTries = JSON.parse(localStorage.getItem("storedData"));
          allTries[this.taskData.tileNo][index] =
            allTries[this.taskData.tileNo][index] - 1;
          if (allTries[this.taskData.tileNo][index] <= 0) {
            console.log("noTriesLeftBlockly: " + index);

            this.noTriesLeftBlocklyBlank = true; //CHANGELENA
            console.log("noTriesLeftBlocklyBlank: " + this.noTriesLeftBlocklyBlank);
          }
          localStorage.setItem("storedData", JSON.stringify(allTries));
          this.update_getTriesLeftBlockly(allTries);
        } catch (err) {
          console.log("localStorage empty");
        }

        this.blanks[index].wrongTry = true;
        //------------------------------------------------------
      }

      //------------------------------------------------------
      //if(allTries[this.taskData.tileNo][index]>0) {
      if (this.completedBlockly(index)) {
        console.log("Hier completed");
        this.pointsBlockly = this.triesLeftBlockly[index];
        this.completeTask(this.pointsBlockly); //the trainee gets as many points for the blank as he or she has tries left
      } else {
        console.log("Hier NOT completed");
      }
      //}
      //------------------------------------------------------
    },
    completedBlockly(index) {
      return !(
        this.triesLeftBlockly[index] > 0 && !this.blanks[index].rightTry
      );
    },


    getTriesLeftBlockly() {
      if (localStorage.getItem("storedData") != null) {
        console.log("Tries from localStorage");
        var triesFromLocalStorage = JSON.parse(
          localStorage.getItem("storedData")
        )[this.taskData.tileNo];
        console.log(triesFromLocalStorage);
        return triesFromLocalStorage;
      } else {
        console.log("Tries NOT from localStorage");
        var return_tries = [];
        for (var i = 0; i < this.taskData.blanks.length; i++) {
          return_tries.push(3);
        }
        return return_tries;
      }
    },

    update_getTriesLeftBlockly(triesBlockly) {
       console.log(triesBlockly);
      //this.triesLeftBlockly = triesBlockly; //Not ready yet for production, there is still a dislay bug
    },

    getNoTriesLeftBlockly() {
      if (localStorage.getItem("storedData") != null) {
        var triesFromLocalStorage = JSON.parse(
          localStorage.getItem("storedData")
        )[this.taskData.tileNo];

        console.log("TRIES: ", triesFromLocalStorage)

        if (!this.completedBefore) {
          /*var counter_no = false;

          for(var i=0; i<triesFromLocalStorage.length; i++) {
            if(triesFromLocalStorage[i]==0) {
              counter_no = true;
            }
          }

          console.log("getNoTriesLeftBlockly localStorage: "+counter_no);
          return counter_no;*/

          var counter_no = 0;
          console.log("TRIES: ", triesFromLocalStorage)

          for (var i = 0; i < triesFromLocalStorage.length; i++) {
            counter_no += triesFromLocalStorage[i];
          }

          if (counter_no === 0) {
            return true;
          } else if (counter_no > 0) {
            return false;
          }
        } else {
          return false;
        }
      } else {
        console.log("getNoTriesLeftBlockly: false (no localStorage)");
        return false;
      }
    },
    getEmptyInput() {
      var return_tries_empty = [];
      for (var i = 0; i < this.taskData.blanks.length; i++) {
        return_tries_empty.push(false);
      }
      return return_tries_empty;
    },
    getCorrectAnswers() {
      var return_correct_answers = [];
      for (var i = 0; i < this.taskData.blanks.length; i++) {
        return_correct_answers.push(this.taskData.blanks[i].answer);
      }
      return return_correct_answers;
    },
    replaceAll(str, find, replace) {
      //return str.replace(new RegExp(find, 'g'), replace); //does not work as expected...
      return str.replace(find, replace);
    },
    field_incrementer(string) {
      var counter_1 = 0;
      var return_string = string.replace(/<field/g, function () {
        var counter_append_1 = ++counter_1;
        return "<field" + counter_append_1;
      });

      var counter_2 = 0;
      return_string = return_string.replace(/<\/field/g, function () {
        var counter_append_2 = ++counter_2;
        return "</field" + counter_append_2;
      });

      return return_string;
    },
    display_blockly_task() {
      var task = this.taskData.blockly_task;

      if (this.$parent.showBlockly) {
        console.log("Init Blockly Task: " + task);
        console.log(this.blanks);
        //this.$parent.init_blockly_task(task);

        /*var jsonContainerHide = document.getElementById(
          "jsonGroupContainer" + task
        );
        jsonContainerHide.classList.add("display-none");*/

        //localStorage.setItem("current_task", task);
        //this.current_task = task;

        var toolbox_element_id = "toolbox_disabled";
        var workspace_container = "blockly_task" + task;
        var workspace_blocks_id = "";

        if (!this.completedBefore) {
          //Not completed before
          workspace_blocks_id = "workspaceBlocks_task" + task;
        } else {
          //Completed before
          workspace_blocks_id = "workspaceBlocks_task" + task + "_solution";
        }

        var toolbox = document.getElementById(toolbox_element_id);

        var options = {
          toolbox: toolbox,
          toolboxPosition: "start",
          collapse: false,
          comments: false,
          disable: false,
          grid: {
            spacing: 20,
            length: 3,
            colour: "#dbdbdb",
            snap: true,
          },
          move: {
            scrollbars: {
              horizontal: true,
              vertical: true,
            },
            drag: true,
            wheel: false,
          },
          theme: themeTransparent,
          maxBlocks: 10,
          trashcan: false,
          horizontalLayout: false,
          css: true,
          media: "https://blockly-demo.appspot.com/static/media/",
          rtl: false,
          scrollbars: false,
          sounds: false,
          oneBasedIndex: true,
          readOnly: false,
        };

        var workspaceStart = Blockly.inject(workspace_container, options);
        this["workspace_task" + this.taskData.blockly_task] = workspaceStart;

        var workspaceBlocks = document.getElementById(workspace_blocks_id);

        Blockly.Xml.domToWorkspace(workspaceBlocks, workspaceStart);

        if (!this.completedBefore) {
          //var foundBlanks = this.taskData.blanks.length;
          var foundBlanks = 0;
          console.log(foundBlanks);
          var blocklyEditableText = document.getElementsByClassName(
            "blocklyEditableText"
          );
          for (var i = 0; i < blocklyEditableText.length; i++) {
            var blocklyItem = blocklyEditableText
              .item(i)
              .getElementsByClassName("blocklyText")[0];
            if (blocklyItem.innerHTML === "...") {
              var blocklyClassAdded =
                "watcher-task-" + task + "-" + foundBlanks;
              blocklyItem.classList.add(blocklyClassAdded);
              var blocklyClassAddedItem =
                document.getElementsByClassName(blocklyClassAdded)[0];

              var mutateObserver = new MutationObserver(function (records) {
                var className = records[0]["target"]["parentElement"].outerHTML
                  .split('"')[1]
                  .split(" ")[1];
                console.log(className);
                document.getElementById(className).innerHTML =
                  document.getElementsByClassName(className)[0].innerHTML;
              });

              mutateObserver.observe(blocklyClassAddedItem, {
                childList: true,
                characterData: true,
                subtree: true,
                characterDataOldValue: true,
              });
              foundBlanks++;
            }
          }
        }
      } else {
        /*var blocklyContainerHide = document.getElementById(
          "blocklyGroupContainer" + task
        );
        blocklyContainerHide.classList.add("display-none");*/
      }
    },
    /*get_workspace(task) {
      return this["workspace_task"+task];
    },*/

    buyHint() {
      //NEW
      this.$emit("submit-points", -1);
      try {
        var hints = JSON.parse(localStorage.getItem("hints"));
        hints[this.taskData.tileNo] = hints[this.taskData.tileNo] + 1;
        localStorage.setItem("hints", JSON.stringify(hints));
      } catch (err) {
        console.log("localStorage empty");
      }
    },

    submitStartTime() {
      //NEW
      this.showTask = true;
      this.taskStarted = true;
      this.timestamp_before = new Date();
      this.$emit(
        "submit-task-data",
        this.taskData.tileNo + "_start",
        String(this.timestamp_before)
      );
      this.scrollToElement(this.taskData.tileNo);

      //setTimeout(() => this.display_blockly_task(), 100);
    },

    submitOverallPoints() {
      //NEW

      this.$emit(
        "submit-task-data",
        this.taskData.tileNo + "_points",
        this.pointsOverall
      );
    },

    submitHint() {
      //NEW

      var hints = JSON.parse(localStorage.getItem("hints"));
      var totalHints = hints[this.taskData.tileNo];
      this.$emit(
        "submit-task-data",
        this.taskData.tileNo + "_hints",
        totalHints
      );
    },

    submitEndTime() {
      //NEW

      this.timestamp_after = new Date();
      this.$emit(
        "submit-task-data",
        this.taskData.tileNo + "_end",
        String(this.timestamp_after)
      );
    },

    submitTlx(rating) {
      //NEW

      this.rating = [];
      var fieldname = this.taskData.tileNo + "_tlx";
      for (const element of rating) {
        this.rating.push(element);
      }
      this.$emit("submit-task-data", fieldname, this.rating);
      this.tlxCompleted = true;

      this.$emit("task-completed", [
        this.taskData.tileNo, //NEW
        this.timestamp_before,
        this.timestamp_after,
        this.timeToComplete,
      ]);

      this.scrollToElement(this.taskData.tileNo);
    },

     scrollDown(id) { //NEW
      const el = document.getElementById(id);
      setTimeout(() => {
        el.scrollIntoView(false);
      },100);
    },

    getBlanksCompleted() {
      if (localStorage.getItem("blanksCompleted") != null) {
        return JSON.parse(localStorage.getItem("blanksCompleted"))[
          this.taskData.tileNo
        ];
      } else {
        return 0;
      }
    },

     removeURLParameter(url, parameter) { //NEW
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(parameter) ;
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

    completeTask(points) {


      if (this.timestamp_before == null) {
        //set start time of task with first submit, this gives not a fully accurate time span but an ok solution
        this.timestamp_before = new Date();
      }
      if (points != 0) {
        this.$emit("submit-points", points);
      }

      this.pointsOverall += points;
      this.blanks_completed += 1;
      try {
        var allBlanks = JSON.parse(localStorage.getItem("blanksCompleted"));
        allBlanks[this.taskData.tileNo] = allBlanks[this.taskData.tileNo] + 1;
        localStorage.setItem("blanksCompleted", JSON.stringify(allBlanks));
      } catch (err) {
        console.log("localStorage empty");
      }

      if (this.blanks_completed == Object.keys(this.blanks).length) {


         var newUrl=this.removeURLParameter(location.href, "blockly")


        this.$http
          .get(
            newUrl.replace("7080", "9090") + this.taskData.apiPath
          )
          .then((response) => {
            console.log(response.data);
          });

        /* this.$http.get("http://192.168.2.158:9090/" +this.taskData.apiPath).then((response) => {
        console.log(response.data)
      }) */
        this.task_completed = true;

        this.submitOverallPoints();
        this.submitEndTime();
        this.submitHint();
        this.showTlx = true;
        this.scrollDown(this.taskData.tileNo);
      }
    },
    checkBlank(index_inner, stage) {
      for (var i = 0; i < Object.keys(this.blanks).length; i++) {
        if (
          index_inner == this.blanks[i].name &&
          stage + 1 == this.blanks[i].stage
        ) {
          return i;
        }
      }
      return null;
    },

    scrollToElement(id) {
      //const el = document.getElementsByClassName(className)[0];
      const el = document.getElementById(id);

      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", alignToTop: true });
      });
    },

    proceed() {
      this.showTask = false;
      var nextSection = this.order.indexOf(this.taskData.tileNo) + 1;
      this.scrollToElement(this.order[nextSection]);
    },

    format_time(s) {
      const dtFormat = new Intl.DateTimeFormat("de-DE", {
        //timeStyle: 'medium',
        //timeZone: 'GMT'
      });

      return dtFormat.format(new Date(s * 1e3));
    },
  },
};
</script>
