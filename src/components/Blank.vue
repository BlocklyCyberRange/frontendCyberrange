<template>
  <form @submit.prevent="validateInput()">
    <span class="is-json is-size-7 blank-wrapper">
      <div v-if="!blank.rightTry && triesLeft > 0 && !completedBefore">
        <div class="table-wrapper">
          <input
            class="input is-json input-label-short is-size-8"
            :value="blank.name + ': '"
            readonly
            v-if="!labelLong"
          />
          <span>
            <input
              class="input blank-input is-short is-json is-size-8"
              v-model="t1_q1"
              :placeholder="blank.placeholder"
              :class="{ 'input-wrong': blank.wrongTry }"
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
          :value="blank.name + ': '"
          readonly
          v-if="!labelLong"
        />
        <input
          class="input blank-input is-short"
          :value="blank.answer"
          readonly
        />
      </div>
      <text v-if="hintActivated && triesLeft > 0" class="has-text-primary"
        >Hint: {{ blank.dataTooltip }} (-1 point)
      </text>
      <!--NEW-->
    </span>
    <div class="has-text-danger" v-if="emptyInput">Input cannot be empty.</div>
    <div
      class="has-text-danger"
      v-else-if="
        triesLeft < 3 && triesLeft > 0 && !completedBefore && !blank.rightTry
      "
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
import BlocklyComponent from "./BlocklyComponent.vue";
import Blockly from "blockly";
import "../blockly/cyberrange";
import themeTransparent from "../blockly/theme-transparent";
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
    completedBefore: {},
  },

  methods: {
    getTriesLeft() {
      if (localStorage.getItem("storedData") != null) {
        console.log("Tries from localStorage");
        var triesFromLocalStorage = JSON.parse(
          localStorage.getItem("storedData")
        )[this.tileNo][this.index];
        console.log(triesFromLocalStorage);
        return triesFromLocalStorage;
      } else {
        return 3;
      }
    },
    buyHint() {
      this.$emit("buy-hint");
      this.hintActivated = true;
    },


     completed() {
      if (this.triesLeft > 0 && !this.blank.rightTry) {
        console.log("tries left: ", this.triesLeft)
        return false;
      }
      return true;},


    validateInput() {
      if (this.t1_q1 == "") {
        this.emptyInput = true;
      } else if (this.t1_q1.trim() != this.blank.answer) {
        this.emptyInput = false;
        this.triesLeft -= 1;
        try {
          var allTries = JSON.parse(localStorage.getItem("storedData"));
          allTries[this.tileNo][this.index] =
            allTries[this.tileNo][this.index] - 1;
          localStorage.setItem("storedData", JSON.stringify(allTries));
        } catch (err) {
          console.log("localStorage empty");
        }

        this.blank.wrongTry = true;
      } else {
        this.emptyInput = false;
        this.blank.rightTry = true;
        this.blank.wrongTry = false;
        this.hintActivated = false;
        try {
          var allTries2 = JSON.parse(localStorage.getItem("storedData"));
          allTries2[this.tileNo][this.index] = 0;
          localStorage.setItem("storedData", JSON.stringify(allTries2));
        } catch (err) {
          console.log("localStorage empty");
        }
      }
      if (this.completed()) {
        this.points = this.triesLeft;
        this.$emit("blank-completed", this.points); //the trainee gets as many points for the blank as he or she has tries left
      }
    },
  },

  computed: {},
};
</script>
