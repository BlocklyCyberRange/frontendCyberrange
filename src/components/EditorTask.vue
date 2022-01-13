<template>
  <div class="is-task" :id="taskData.tileNo">
    <div class="is-directive">
      <text
          class="title is-json is-text-red"
          :class="{ 'has-text-grey': taskCompleted || completedBefore }"
      >{{ taskData.title }}</text
      >

      <text class="has-text-grey subtitle nice-subtitle">
        {{ taskData.subtitle }}
      </text>

      <div v-if="taskCompleted" class="is-primary-darker subtitle is-json">
        Completed
      </div>

      <div class="mt-5" v-if="!taskCompleted && !completedBefore">
        <text
            class="is-size-6 has-text-justified"
            v-html="this.taskData.taskDescription"
        ></text>
      </div>

      <div v-else>
        <div
            v-if="taskCompleted"
            class="notification notification-green is-light success-message"
        >
          <span class="is-primary-darker is-size-5 mb-5">
            You earned {{ triesLeft * 5 }} points.
          </span>
        </div>

        <div class="columns is-hcentered mt-5">
          <img
              src="./../assets/rocket.svg"
              class="image is-hcentered rotate"
              style="width: 70px"
          />

          <span class="ml-4 is-hcentered">
            <span class="title is-title-smaller is-primary-darker is-json">
              DirectiveDeployed.</span
            >
            <br />The correct directive is now applied to the SIEM system. The
            alarm will be visible on the SIEM dashboard in a few seconds. You
            can now also view the directive in plain JSON. Try the button!
          </span>
        </div>

        <div class="buttons is-left mt-5">
          <button
              @click="proceed()"
              class="button is-rounded submit-button"
              v-if="this.taskData.tileNo != 'task6'"
          >
            Proceed
          </button>
          <button
              @click="finishGame()"
              class="button is-rounded submit-button"
              v-if="this.taskData.tileNo == 'task6'"
          >
            Finish Game
          </button>
          <button
              @click="this.showTask = true"
              class="button is-rounded is-light is-red-br"
              v-if="!showTask"
          >
            Show
          </button>
          <button
              @click="this.showTask = false"
              class="button is-rounded"
              v-else
          >
            Hide
          </button>
        </div>
      </div>
      <br />

      <div
          :class="{ 'directive-completed': taskCompleted || completedBefore}"
          v-if="showTask"
      >
        <div
            class="buttons is-left mt-2"
            v-if="!taskCompleted && !completedBefore"
        >
          <button
              class="button is-small submit-button is-rounded"
              @click="onJsonSave(json)"
          >
            SUBMIT
          </button>

          <span
              v-if="!hintActivated && taskData.dataTooltip != null "
              class="icon has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
              :data-tooltip="'Buy hint for -1 Point'"
              @click="buyHint"
          >
            <font-awesome-icon icon="info-circle" />
          </span>
          <button class="button is-rounded is-small" @click="resetJson()">
            RESET
          </button>
        </div>

        <div v-if="showBlockly" :id="'blocklyGroupContainer' + taskData.blockly_task">
          <div class="blocklyContainer">
            <div class="blocklyDiv" :id="'blockly_task' + taskData.blockly_task"></div>
          </div>
        </div>

        <vue-json-editor
            v-if="!showBlockly"
            class="is-background-white"
            lang="en"
            :value="json"
            :show-btns="false"
            :mode="'code'"
            @json-change="onJsonChange"
            @json-save="onJsonSave"
        >
        </vue-json-editor>
      </div>

      <div
          class="notification is-danger is-light error-message"
          v-if="this.triesLeft<5 && this.triesLeft > 0"
      >
        <p class="is-red is-size-6 mb-3" v-if="showBlockly && this.wrongGuess">
          <strong> Not quite there yet. </strong> Please correct the following
          fields:
        </p>

        <p class="is-red is-size-6 mb-3" v-else-if="!showBlockly && this.wrongGuess">
          <strong> Not quite there yet. </strong> Please correct the following
          lines:
        </p>

        <div v-for="error in this.mismatches" :key="error" class="ml-5">
          <li class="has-text-grey is-size-6">
            {{ error[0] }} :
            <strong class="is-json is-size-6">{{ error[1] }}</strong>
          </li>
        </div>
        <p class="is-primary-darker is-size-6 mt-2">
          You have <strong> {{ triesLeft }} </strong> tries left.
        </p>
      </div>
      <text v-if="hintActivated" class="has-text-info ml-5"
      >Hint: {{taskData.dataTooltip}} (-1 point)
      </text>
      <div
          class="buttons is-right mt-4"
          v-if="!taskCompleted && !completedBefore"
      >
        <span
            v-if="!hintActivated && taskData.dataTooltip != null "
            class="icon has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
            :data-tooltip="'Buy hint for -1 Point'"
            @click="buyHint"
        >
          <font-awesome-icon icon="info-circle" />
        </span>
        <button class="button is-rounded is-small" @click="resetJson()">
          RESET
        </button>

        <button
            class="button is-small submit-button is-rounded"
            @click="onJsonSave(json)"
        >
          SUBMIT
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import BlocklyComponent from './BlocklyComponent.vue'
import Blockly from 'blockly';
import '../blockly/cyberrange';
import themeTransparent from '../blockly/theme-transparent';
import themeMenu from '../blockly/theme-menu';
import tool from "diff-js-xml";

console.log(BlocklyComponent);
console.log(themeTransparent);
console.log(themeMenu);
console.log(tool);

export default {
  name: "EditorTask",
  props: {
    taskData: {
      type: Object,
      required: true,
    },
    order: {},
    tasksCompleted: {}
  },
  emits: ["submitPoints", "taskCompleted"],
  data() {
    return {
      mismatches: [],
      taskCompleted: false,
      directive: this.taskData.directive,

      json_header: Object.fromEntries(
          Object.entries(this.taskData.directive.directives[0]).slice(0, 7)
      ),
      rules: this.taskData.directive.directives[0].rules,
      json: this.taskData.directiveSimilar,
      triesLeft: this.getTriesLeft(),
      wrongGuess: false,
      rightGuess: false,
      timestamp_before: null,
      timestamp_after: null,
      timeToComplete: null,
      showTask: true,
      hintActivated: false,
      workspace_task5: null,
      workspace_task6: null,
      showBlockly: this.$parent.showBlockly,
    };
  },

  components: {},
  computed: {

    completedBefore() {
      if(this.taskData.level<this.tasksCompleted){
        console.log("COMPLETED BEFORE")
        this.showDirective()
        return true;
      } else{
        return false;
      }
    },

  },

  mounted: function () {
    this.$nextTick(function () {
      this.display_blockly_task();
    })
  },

  methods: {
    display_blockly_task() {
      var task = this.taskData.blockly_task;

      if(this.$parent.showBlockly) {
        console.log("Init Blockly Task: "+task)
        console.log(this.blanks);
        //this.$parent.init_blockly_task(task);

        //localStorage.setItem("current_task", task);
        //this.current_task = task;

        var toolbox_element_id = "toolbox_disabled";
        var workspace_container = "blockly_task"+task;
        var workspace_blocks_id = "";
        var themeActive = themeTransparent;

        if(!this.completedBefore) {
          //Not completed before
          workspace_blocks_id = "workspaceBlocks_task"+task;
        } else {
          //Completed before
          workspace_blocks_id = "workspaceBlocks_task"+task+"_solution";
        }

        if(task===5) {
          toolbox_element_id = "toolbox_disabled";
          themeActive = themeTransparent;
        } else if(task===6) {
          //toolbox_element_id = "toolbox_default";
          //themeActive = themeMenu;
          toolbox_element_id = "toolbox_disabled";
          themeActive = themeTransparent;
        }

        var toolbox = document.getElementById(toolbox_element_id);

        var options = {
          toolbox : toolbox,
          toolboxPosition : 'start',
          collapse : false,
          comments : false,
          disable : false,
          grid: {
            spacing: 20,
            length: 3,
            colour: '#dbdbdb',
            snap: true
          },
          move: {
            scrollbars: {
              horizontal: true,
              vertical: true
            },
            drag: true,
            wheel: false
          },
          theme: themeActive,
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

        var workspaceStart = Blockly.inject(workspace_container, options);
        this["workspace_task"+this.taskData.blockly_task] = workspaceStart;

        var workspaceBlocks = document.getElementById(workspace_blocks_id);

        Blockly.Xml.domToWorkspace(workspaceBlocks, workspaceStart);

      } else {
        var blocklyContainerHide = document.getElementById("blocklyGroupContainer"+task);
        blocklyContainerHide.classList.add("display-none");
      }
    },
    getTriesLeft(){
      if(localStorage.getItem("storedData")!= null){
        console.log("return Tries")
        return JSON.parse(localStorage.getItem("storedData"))[this.taskData.tileNo][0];}
      else{console.log("return 5 Tries")
        return 5;
      }},

    showDirective(){
      this.json = this.taskData.directive

    },
    buyHint(){
      this.$emit("submit-points", -1);
      this.hintActivated = true;
    },
    completeTask() {
      this.taskCompleted = true;
      this.hintActivated = false;
      this.json = this.taskData.directive;
      this.scrollToElement(this.taskData.tileNo);
      this.$emit("submit-points", this.triesLeft * 5);
      //API functionalty
      try{
        this.$http
            .get(
                window.location.href.replace("7080", "9090") + this.taskData.apiPath
            )
            .then((response) => {
              console.log(response.data);
            });
      }
      catch(err) {
        console.log("ERROR: API not reachable")
      }

      this.timestamp_after = new Date();
      this.timeToComplete =
          (this.timestamp_after.getTime() - this.timestamp_before.getTime()) /
          1000;
      this.$emit("taskCompleted", [
        this.timestamp_before,
        this.timestamp_after,
        this.timeToComplete,
      ]);
    },

    getJsonHeader(answer) {
      return Object.fromEntries(Object.entries(answer).slice(0, 7));
    },

    object_equals: function (x, y) {
      var equal = true;

      if (x === y) return true;
      // if both x and y are null or undefined and exactly the same

      if (!(x instanceof Object) || !(y instanceof Object)) equal = false;
      // if they are not strictly equal, they both need to be Objects

      if (x.constructor !== y.constructor) {

        equal = false;
      }
      // they must have the exact same prototype chain, the closest we can do is
      // test there constructor.

      for (var v in x) {

        if (!(v in y)) {
          this.mismatches.push(["Incorrect property ", v]);

          equal = false;
        }
      }

      for (var p in y) {
        if (x[p] === y[p]) {
          continue;
        }
        // if they have the same strict value or identity then they are equal
        else {
          if (typeof x[p] !== "object") {
            if (!(p in x)) {
              this.mismatches.push(["Missing property", p]);
              equal = false;
            } else {
              if (p == "0") {
                this.mismatches.push([
                  "Incorrect value",
                  '"plugin_sid": "' + x[p] + '"',
                ]);
              } else {
                this.mismatches.push([
                  "Incorrect value",
                  '"' + p + '": "' + x[p] + '"',
                ]);
              }
              equal = false;
            }
          }

          // Numbers, Strings, Functions, Booleans must be strictly equal
          else {
            if (!this.object_equals(x[p], y[p])) {
              return false;
            }

            // Objects and Arrays must be tested recursively
          }
        }
      }

      return equal;
    },

    onJsonSave(value) {
      this.onJsonChange(value);

      this.mismatches.length = 0; //reset error messages
      if (this.timestamp_before == null) {
        //set start time of task with first submit
        this.timestamp_before = new Date();
      }

      if(this.showBlockly) {

        var solutionXML = document.getElementById("workspaceBlocks_task"+this.taskData.blockly_task+"_solution");
        var workspaceXML = Blockly.Xml.workspaceToDom(this["workspace_task"+this.taskData.blockly_task]);

        var solutionXML_string = "";
        var workspaceXML_string = "";

        if(solutionXML.outerHTML) {
          solutionXML_string = solutionXML.outerHTML;
        } else if(XMLSerializer) {
          solutionXML_string = new XMLSerializer().serializeToString(solutionXML);
        }

        if(workspaceXML.outerHTML) {
          workspaceXML_string = workspaceXML.outerHTML;
        } else if(XMLSerializer) {
          workspaceXML_string = new XMLSerializer().serializeToString(workspaceXML);
        }

        solutionXML_string = this.field_incrementer(solutionXML_string);
        workspaceXML_string = this.field_incrementer(workspaceXML_string);

        var schema = {};
        var options = {};

        var tool = require('diff-js-xml');

        var xml_is_correct = false;

        tool.diffAsXml(solutionXML_string, workspaceXML_string, schema, options, (result) => {
          console.log(result);
          if(result.length === 0) {
            console.log("Solution Correct");
            xml_is_correct = true;
          } else {
            console.log("Solution Incorrect");
            xml_is_correct = false;
          }
        })

        console.log("xml_is_correct: "+xml_is_correct);

        if(xml_is_correct) {
          //trainee completes Task successfully
          this.wrongGuess = false;
          this.rightGuess = true;
          this.completeTask();
        } else {

          //------------------------------------------------------

          for(var i=0; i<this.taskData.blockly_inputs.length; i++) {

            var testXML = document.getElementById("workspaceBlocks_task"+this.taskData.blockly_task+"_solution"+i);

            var testXML_string = "";

            if(testXML.outerHTML) {
              testXML_string = testXML.outerHTML;
            } else if(XMLSerializer) {
              testXML_string = new XMLSerializer().serializeToString(testXML);
            }

            testXML_string = this.field_incrementer(testXML_string);

            console.log(testXML_string);
            console.log(workspaceXML_string);

            tool.diffAsXml(testXML_string, workspaceXML_string, schema, options, (result) => {
              console.log(result);
              if(result.length === 0) {
                console.log("Test Correct");
              } else {
                console.log("Test Incorrect");
                this.mismatches.push(["Incorrect value ", this.taskData.blockly_inputs[i]]);
              }
            })
          }

          //------------------------------------------------------

          this.scrollToElementBottom(this.taskData.tileNo);
          this.wrongGuess = true;
          this.triesLeft -= 1;
          try{
            var allTries0 = JSON.parse(localStorage.getItem("storedData"));
            allTries0[this.taskData.tileNo][0] = allTries0[this.taskData.tileNo][0]-1
            localStorage.setItem("storedData", JSON.stringify(allTries0))
          }
          catch(err) {
            console.log("localStorage empty")
          }
          console.log("TRIES LEFT", this.triesLeft)
          if(this.triesLeft == 0) {
            //trainee is out of tries
            this.completeTask();
          }

        }

      } else {
        if (
            !this.object_equals(value.directives[0], this.directive.directives[0])
        ) {
          this.scrollToElementBottom(this.taskData.tileNo);
          this.wrongGuess = true;
          this.triesLeft -= 1;
          try{
            var allTries = JSON.parse(localStorage.getItem("storedData"));
            allTries[this.taskData.tileNo][0] = allTries[this.taskData.tileNo][0]-1
            localStorage.setItem("storedData", JSON.stringify(allTries))
          }
          catch(err) {
            console.log("localStorage empty")
          }
          console.log("TRIES LEFT", this.triesLeft)
          if(this.triesLeft == 0) {
            //trainee is out of tries
            this.completeTask();
          }
        } else {
          //trainee completes Task successfully
          this.wrongGuess = false;
          this.rightGuess = true;
          this.completeTask();
        }
      }
    },
    replaceAll(str, find, replace) {
      //return str.replace(new RegExp(find, 'g'), replace); //does not work as expected...
      return str.replace(find,replace);
    },
    field_incrementer(string) {
      var counter_1 = 0;
      var return_string = string.replace(/<field/g, function() {
        var counter_append_1 = ++counter_1;
        return "<field"+counter_append_1;
      });

      var counter_2 = 0;
      return_string = return_string.replace(/<\/field/g, function() {
        var counter_append_2 = ++counter_2;
        return "</field"+counter_append_2;
      });

      return return_string;
    },

    onJsonChange(value) {

      this.json = value;
    },

    resetJson() {
      this.json=[]
      this.json = this.taskData.directiveSimilar;
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

    finishGame() {
      this.$emit("finish-game")
    },

    scrollToElementBottom(id) {
      //const el = document.getElementsByClassName(className)[0];
      const el = document.getElementById(id);

      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "end" });
      });
    },
  },
};
</script>
