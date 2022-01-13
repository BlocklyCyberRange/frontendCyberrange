<template>
  <form @submit.prevent="validateInput()">
    <span class="is-json is-size-7 blank-wrapper">
      <div v-if="!blank.rightTry && triesLeft > 0 && !completedBefore">
        <div class="table-wrapper">
          <input
              class="input is-json input-label-short is-size-8"
              :value="blank.name+': '"
              readonly
              v-if="!labelLong"
          />
          <span>
            <input
                class="input blank-input is-short is-json is-size-8"
                v-model="t1_q1"
                :placeholder="blank.placeholder"
                :class="{ 'input-wrong': blank.wrongTry, }"
            />

            <span
                v-if="!hintActivated && blank.dataTooltip != null"
                class="
                icon
                has-tooltip-arrow has-tooltip-multiline has-tooltip-top
              "
                :data-tooltip="'Buy hint for -1 Point'"
                @click="buyHint"
            >
              <font-awesome-icon icon="info-circle" />
            </span>
          </span>

          <button
              class="button is-small submit-button is-rounded"
              type="submit"
              value="Submit"
          >
            <span> &#10140;</span>
          </button>
        </div>
      </div>
      <div v-else>
        <input
            class="input is-json input-label-short is-size-8"
            :value="blank.name+ ': '"
            readonly
            v-if="!labelLong"
        />
        <input
            class="input blank-input is-short"
            :value="blank.answer"
            readonly
        />
      </div>
      <text v-if="hintActivated" class="has-text-primary"
      >Hint: {{blank.dataTooltip}} (-1 point)
      </text>
    </span>
    <div class="has-text-danger" v-if="emptyInput">Input cannot be empty.</div>
    <div
        class="has-text-danger"
        v-else-if=" triesLeft < 3 && triesLeft > 0 && !completedBefore && !blank.rightTry"
    >
      You were wrong. You have {{ triesLeft }} Tries left.
    </div>
    <div class="has-text-primary" v-else-if="blank.rightTry">
      Great Try! You earned {{ triesLeft }} point(s).
    </div>
    <div class="has-text-danger" v-else-if="triesLeft == 0 && blank.wrongTry">
      Sorry. You have no tries left.
    </div>
  </form>
</template>


<script>

import BlocklyComponent from './BlocklyComponent.vue'
import Blockly from 'blockly';
import '../blockly/cyberrange';
import themeTransparent from '../blockly/theme-transparent';
//import tool from "diff-js-xml";

console.log(BlocklyComponent);
console.log(Blockly);
console.log(themeTransparent);

export default {
  name: "Blank",

  data() {
    return {
      t1_q1: "",
      blank: this.blanks,
      hintActivated: false,
      emptyInput: false,
      triesLeft: this.getTriesLeft(),
      points: null,
    };
  },

  props: {
    blanks: {
      required: true,
    },
    tileNo: {},
    index: {},
    labelLong: {},
    taskData: {},
    completedBefore: {}
  },

  methods: {
    getTriesLeft(){
      if(localStorage.getItem("storedData")!= null){
        console.log("Tries from localStorage");
        var triesFromLocalStorage = JSON.parse(localStorage.getItem("storedData"))[this.tileNo][this.index];
        console.log(triesFromLocalStorage);
        return triesFromLocalStorage;
      } else{
        return 3;
      }
    },
    buyHint(){
      this.$emit('buy-hint');
      this.hintActivated = true;
    },
    completed() {
      if(this.triesLeft > 0 && !this.blank.rightTry) {
        return false;
      }
      return true;
    },
    validateInput() {
      console.log("Validate input start: "+this.$parent.showBlockly);
      //console.log("from_blockly: "+from_blockly+" - key: "+key);

      /*if(this.$parent.showBlockly) {
        console.log("From Blockly: "+key);

        var defaultXML = document.getElementById("workspaceBlocks_task"+this.taskData.blockly_task);
        var solutionXML = document.getElementById("workspaceBlocks_task"+this.taskData.blockly_task+"_solution");
        var workspaceXML = Blockly.Xml.workspaceToDom(this.$parent.get_workspace(localStorage.getItem("current_task")));

        console.log(defaultXML);
        console.log(solutionXML);
        console.log(workspaceXML);

        var defaultXML_string = "";
        var solutionXML_string = "";
        var workspaceXML_string = "";

        if(defaultXML.outerHTML) {
          defaultXML_string = defaultXML.outerHTML;
        } else if(XMLSerializer) {
          defaultXML_string = new XMLSerializer().serializeToString(defaultXML);
        }

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

        //console.log(solutionXML_string);
        //console.log(workspaceXML_string);

        var schema = {};
        var options = {};

        var tool = require('diff-js-xml');

        var xml_is_default = false;
        var xml_is_correct = false;

        tool.diffAsXml(defaultXML_string, workspaceXML_string, schema, options, (result) => {
          console.log(result);
          if(result.length === 0) {
            console.log("Default Correct");
            xml_is_default = true;
          } else {
            console.log("Default Incorrect");
            xml_is_default = false;
          }
        })

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

        if(xml_is_default) {
          //this.emptyInput=true;
          alert("Input cannot be empty.");
        } else if(xml_is_correct) {
          console.log("Correct");
          console.log(this.blank);
          console.log(this.blanks);
          //------------------------------------------------------
          this.emptyInput=false;
          this.blank.rightTry = true;
          this.blank.wrongTry = false;
          this.hintActivated = false;
          try{
            var allTries3 = JSON.parse(localStorage.getItem("storedData"));

            console.log("Hier");
            console.log(allTries3);
            //console.log(this.tileNo);
            //console.log(this.index);

            allTries3[this.tileNo][this.index] = 0
            for (let index = 0; index < allTries3[this.tileNo].length; ++index) {
              //allTries3[this.tileNo][index] = 0;
            }

            console.log(allTries3);

            localStorage.setItem("storedData", JSON.stringify(allTries3))
          }
          catch(err) {
            console.log("localStorage empty")
          }
          //------------------------------------------------------
        } else if(!xml_is_correct) {
          console.log("Incorrect");
          //------------------------------------------------------
          this.emptyInput=false;
          this.triesLeft -= 1;
          try{
            //var allTries4 = JSON.parse(localStorage.getItem("storedData"));
            //allTries4[this.tileNo][this.index] = allTries4[this.tileNo][this.index]-1
            //localStorage.setItem("storedData", JSON.stringify(allTries4))
          }
          catch(err) {
            console.log("localStorage empty")
          }

          //this.blank.wrongTry = true;
          //------------------------------------------------------
        }

        //------------------------------------------------------
        if(this.completed()){
          console.log("Hier completed");
          this.points = this.triesLeft;
          this.$emit('blank-completed', this.points) //the trainee gets as many points for the blank as he or she has tries left
        } else {
          console.log("Hier NOT completed");
        }
        //------------------------------------------------------

      } else {*/
        console.log("NOT from Blockly");
        if(this.t1_q1 == ""){
          this.emptyInput=true;
        }
        else if (this.t1_q1.trim() != this.blank.answer) {
          //Input not correct
          this.emptyInput=false;
          this.triesLeft -= 1;
          try{
            var allTries = JSON.parse(localStorage.getItem("storedData"));
            allTries[this.tileNo][this.index] = allTries[this.tileNo][this.index]-1
            localStorage.setItem("storedData", JSON.stringify(allTries))
          }
          catch(err) {
            console.log("localStorage empty")
          }

          this.blank.wrongTry = true;

        } else {
          //Input correct
          this.emptyInput=false;
          this.blank.rightTry = true;
          this.blank.wrongTry = false;
          this.hintActivated = false;
          try{
            var allTries2 = JSON.parse(localStorage.getItem("storedData"));

            console.log("Hier");
            console.log(allTries2);
            console.log(this.tileNo); //task1 //task2
            console.log(this.index); //0 //1

            allTries2[this.tileNo][this.index] = 0
            localStorage.setItem("storedData", JSON.stringify(allTries2))
          }
          catch(err) {
            console.log("localStorage empty")
          }




        //}
        if(this.completed()){
          this.points = this.triesLeft;
          this.$emit('blank-completed', this.points) //the trainee gets as many points for the blank as he or she has tries left
        }
      }


    },


  },

  computed: {

  },
};
</script>
