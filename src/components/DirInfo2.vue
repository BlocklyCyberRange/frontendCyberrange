

<template>
  <div class="is-info content" id="info2">
    <!--text
      class="title  has-text-yellow"
      :class="{ 'has-text-grey': task_completed }"
      >{{ infoData.title }}</text
    >

    <text class="has-text-grey subtitle nice-subtitle">

    </text-->
      <text class="has-text-yellow has-text-left title is-json "
          >2.1 Directive Header</text
        >
      <img src="./../assets/information.svg" class="image is-pulled-right " style="height: 100px">



         <div class="buttons is-left mt-5">
   <button class="button is-rounded submit-button" @click="proceed()" >CONTINUE</button>
   <button @click="this.showInfo=true;" class="button is-rounded is-light is-red-br" v-if="!showInfo">Show</button>
      <button @click="this.showInfo=false;" class="button is-rounded is-light" v-else>Hide</button>


      </div>


    <div class="columns mr-1">
      <div
        class="column mr-2 mb-5 content has-border-right is-size-6 has-text-justified"
      >


        <!--p class="pt-3">
          SIEM systems correlate security events to detect if anything unwanted
          happens to the system the SIEM is monitoring. This is done by applying
          correlation directives to the security events. Whenever a directive is
          is met an alarm appears on the SIEM dashboard. This cyberrange aims to
          teach how to build these directives
        </p-->

        <div v-if="showInfo" class="pt-4">

          <p>
            Every directive consists of two parts: A <strong> Directive Header</strong> and a Rules Section.

            The Directive Header specifies the alarm which is triggered by the directive. Hereby the following properties need to be defined:
          </p>
          <ul>
            <li>
              <strong class="">id:</strong> the (unique) id of the SIEM
              alarm
            </li>
            <li>
              <strong class="">name:</strong> the name of the SIEM alarm
            </li>
          </ul>


          <strong class="is-primary-darker">
              Example:
            </strong> <br>

          <p class="is-italic pt-1">

            The directive on the right will trigger the alarm <strong class="is-json">  <span class="is-primary-darker">"Sensor 3 disfunction"</span> </strong> with  <strong class="is-json">id: <span class="is-primary-darker">15</span></strong> <br>
          </p>

           <figure class="image ml-1 mr-1">
          <img src="./../assets/Alarm.png" />
        </figure>




         <div class="buttons is-left mt-5">
      <button @click="this.showAdditionalInformation=true;" class="button is-rounded " v-if="!showAdditionalInformation">Show More</button>
      <button @click="this.showAdditionalInformation=false;" class="button is-rounded " v-else>Show Less</button>

      </div>



          <div v-if="showAdditionalInformation" >

           <p>
            The following properties can be used to specify an alarm in more detail.
            Yet they <strong>do not need to be changed </strong> in the upcoming tasks.
          </p>

           <ul>
            <li>
              <strong >disabled:</strong>
              possibility to disable a directive
            </li>
            <li >
              <strong c
                >all_rules_always_active:</strong
              >
              possibility to disable a directive
            </li>
            <li >
              <strong>kingdom</strong> and <strong >category</strong>:
              possibility to disable a directive
            </li>
          </ul>
        </div>

         <div class="buttons is-left mt-5">


      </div>




        </div>
      </div>

      <div class="column is-one-third" v-if="showInfo">
        <div class="border-directive pl-1 pt-3 pb-3 pr-3">
          <div v-for="(item, index) in json_header" :key="item">
            <json-field :name="index" :value="item"></json-field>
          </div>
        </div>

        <div class="pl-1 pt-3 pb-3 pr-3">
        <span
          class="has-text-black is-json is-size-7"

        >
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
          <div>
            <div v-for="(item, index_inner) in rule" :key="item">
              <json-field :name="index_inner" :value="item"></json-field>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
     </div>

</template>

  <script>
import JsonField from "./JsonField.vue";

export default {
  name: "DirInfo2",
  components: {
    JsonField,
  },
  props: {
    infoData: {
      type: Object,
      required: true,
    },
    order: {}
  },
  data() {
    return {
      directive: this.infoData.directive,

      json_header: Object.fromEntries(
        Object.entries(this.infoData.directive.directives[0]).slice(0, 7)
      ),
      rules: this.infoData.directive.directives[0].rules,
      showAdditionalInformation: false,
      showDirective: true,
      showHghlights: false,
      showInfo: true,
    };
  },

  methods: {
    checkHighlight(index_inner, stage) {
      for (var i = 0; i < Object.keys(this.infoData.highlights).length; i++) {
        if (
          index_inner == this.infoData.highlights[i].name &&
          stage + 1 == this.infoData.highlights[i].stage
        ) {
          return i;
        }
      }
      return null;
    },

    proceed() {
      this.showAdditionalInformation = false;
      var nextSection = this.order.indexOf("info2")+1
      this.scrollToElement(this.order[nextSection]);
    },


    scrollToElement(id) {
      //const el = document.getElementsByClassName(className)[0];
      const el = document.getElementById(id);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", alignToTop: true });
      });
    },
  },
};
</script>
