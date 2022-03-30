# frontendCyberrange

This prototype  is part of research effort to explore the potential of visual programming languages (VPL) for cyber range training. It builds up on the [DigitalTwinCyberRange Project](https://github.com/DigitalTwinSocCyberrange). For further documentation and installation instructions we would like to refer to the original project.

A publication is in preparation and will be linked here as soon as it is available. 


## Table of Contents
[1. Introduction](#introduction)  
[2. Technical Integration of Blockly](#technical)    
[3. Adaption of the User Interface](#ui)  
[4. Additional Adaptions of the Cyber Range](#adaptions)    
[5. Screenshots of the Frontend](#screenshots)  

<a name="introduction"/>

## 1. Introduction
The frontend is implemented with the javascript framwork [Vue.js](https://vuejs.org/). After setting up the frontend as described in the documentation of the main project, to run the frontend without the virtual environment and the SIEM system (e.g. for debugging) run:

```bash
npm run serve
 ```
 
There are two different versions of the SIEM rules: A JSON-based version and a Blockly-based version. To automatically switch between these two versions, a URL parameter is available.

JSON version: `http://localhost:7080/?json`

Blockly version: `http://localhost:7080/?blockly`

The default version of the base URL `http://localhost:7080` is JSON.
 
<a name="technical"/>

## 2. Technical Integration of Blockly into the Vue.js Project
To create custom Blockly blocks the [block builder](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html "Blockly block builder") can be utilized. To be able to use the just created blocks of a directive or rule in the cyber range, both blocks need to be selected in the block factory under the menu item "Block Exporter" and then the block definitions and generator stubs of both have to be exported in the format JavaScript. To technically integrate both custom blocks into the cyber range Vue.js project, Blockly needs to be installed first.

Subsequently, an existing component of the cyber range can be extended. For this purpose, necessary imports are performed first. After the imports, the logic for Blockly can now be implemented. For this, settings are made in the variable `options`, for example, the background pattern of the canvas, the scrollbars, or the imported theme. Then, for each task, an HTML element in the form of a `<div></div>` is automatically inserted into the cyber range with the dynamic `id` `blockly\_taskX`, where the `X` stands for the respective task number. To display a task or a solution in this HTML element, they must first be created and included in the cyber range. For this, the XML format is suitable because Blockly can fill and read the workspace in this format. To support all functions of the cyber range with the Blockly approach, it is necessary to create four different XML types per task. The following overview shows whether an XML has to be created per task or blank of a task. The structure of the `id` of the respective XML object is shown with an explanation of what the function of the respective XML type is. The letter **X** in an `id` structure corresponds to the respective task number and the letter **Y** in an `id` structure represents the individual blank number of the respective task.

* For each task:
   * `workspaceBlockls_taskX:` This is the XML actual task value used in each task for the analyst. The correct value is stored in each field, except for the task fields. These are marked with `…`, to show that a value is to be entered here.
   * `workspaceBlocks_taskX_solution:` This XML contains the complete solution of a task. Each field of it is provided with the correct value. This solution is not used to check the task for correctness. When reloading the cyber range, this object is displayed instead of the task XML for tasks that have already been completed.

* For each blank of a task:
   * `workspaceBlocks_taskX_solutionY:` This is the XML of a solution of a single blank of a task. It is used for concrete validation of a blank of a single field. For this purpose, in addition to the actual solution of this field, every other field is marked with a `*` to technically disregard them during validation.
   * `workspaceBlocks_taskX_emptyY:` This XML is used to check if a single field of a task is returned empty by the analyst. In such a case, no attempt is deducted from the participant, but a hint is displayed that this field is empty. For this purpose, the respective field that is checked is marked with `…` and every other field contains a `*`. This way only the respective blank is checked during the technical verification and all other fields are ignored. In addition to the `…`, this field is also additionally checked with empty input and a single blank per input automatically, and the hint is also displayed here.
 
 
The following XML object is the XML of task2. The value for the respective task is stored in the `id` in line 1. The `id` of the directive block in line 2 and the rule block in line 7 is assigned individually so that no `id` occurs more than once but has no relevant meaning in the cyber range. In the XML, it can also be recognized that in the rule the name represents a blank in line 9 since this field is deposited with `…`. With the stage of the rule, however, no input is necessary, here the correct value is shown. The type field of a directive and a rule with the respective value, as shown in lines 2 and 7, is critical for Blockly to display the correct custom block.

```xml
<xml id="workspaceBlocks_task2" style="display: none">
  <block type="directive" id="directive_task2" x="0" y="30">
    <field name="DIRECTIVE">Directive</field>
    <field name="DIRECTIVE_ID">1</field>
    ...
    <statement name="NAME">
      <block type="rule" id="rule_task2">
        <field name="RULE">Rule</field>
        <field name="RULE_NAME">...</field>
        <field name="RULE_STAGE">1</field>
        ...
      </block>
    </statement>
  </block>
</xml>
```

The XML object with one rule block is thus implemented. For a task with multiple rules, for example, task 3, the structure of the XML is different. In this case, a second rule block cannot be inserted directly under the first rule block, as first assumed and visually visible in Blockly. This is because the internal schema of the Blockly workspace works differently here. To be able to include another rule block in the XML, it must be inserted as the last field in the previous rule block inside a `<next></next>` container. An example of this is shown with the solution to task 3 in the following code snippet. Here the second rule block, seen from lines 13 to 18, is inserted inside a `<next></next>` container at line 12 at the end of the first rule block.

```xml
<xml id="workspaceBlocks_task3_solution" style="display: none">
  <block type="directive" id="*" x="0" y="30">
    <field name="DIRECTIVE">Directive</field>
    <field name="DIRECTIVE_ID">2</field>
    ...
    <statement name="NAME">
      <block type="rule" id="*">
        <field name="RULE">Rule</field>
        <field name="RULE_NAME">Liquid level...</field>
        <field name="RULE_STAGE">1</field>
        ...
        <next>
          <block type="rule" id="*">
            <field name="RULE">Rule</field>
            <field name="RULE_NAME">Liquid level...</field>
            <field name="RULE_STAGE">2</field>
            ...
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
```

After the tasks and solutions have been implemented, a task can now be displayed in Blockly. This requires the following code snippet. Two parameters are passed to the `domToWorkspace` function in line 1: The XML element of the task in line 2 and the workspace in line 3. For both parameters, the variable `task` represents the respective task number.

```js
Blockly.Xml.domToWorkspace(
  document.getElementById("workspaceBlocks_task"+task),
  Blockly.inject("blockly_task"+task, options)
);
```

To validate an analyst's input, the XML of the Blockly canvas must be matched with the XML of the solution. To accomplish this, the `diff-js-xml` tool is first installed in the cyber range. To be able to display an error message per blank to the analyst with this tool, each blank is validated individually. For this purpose, the previously created XML objects per blank are required.

Now a blank can be validated individually. A code snippet is shown in the following listing. First, the previously created solution XML object of this blank is read in line 1. Furthermore, the current state of the blocky canvas is picked up in line 2 to get the analyst's input. Since these two variables each contain an HTML object and the tool `diff-js-xml` can only handle strings, the contents of both variables are converted from an HTML element to a string in lines 4 and 5. Then both strings are compared with the tool in line 7. If the analyst's input matches the solution of the blank, then a code can be executed in line 9. If the analyst did not send the correct input, then line 11 is executed.

```js
var solutionXML = document.getElementById(workspace_solution);
var workspaceXML = Blockly.Xml.workspaceToDom(workspace_task);

var solutionXML_string = solutionXML.outerHTML;
var workspaceXML_string = workspaceXML.outerHTML;

tool.diffAsXml(solutionXML_string, workspaceXML_string, (result)=>{
  if(result.length === 0) {
    //Solution correct
  } else {
    //Solution incorrect
  }
})
```

In either case, the code of the existing cyber range has been picked up from the component `Blank` and is transferred with only slight modifications to the component `BlankTask`, which contains all the Blockly Adaptions for tasks 2 to 4. The adaptions for the full JSON tasks 5 and 6 are implemented in the component `EditorTask`.

However, when checking the input with the solution, sometimes the problem occurs that the tool `diff-js-xml` indicates during validation that there is an error despite correct input. In this case, the complication can be localized in the flow of the source code of the tool. Here, the tool gets confused with several HTML elements with the same HTML tag in a string. Specifically, it is not possible for the tool to distinguish between the numerous HTML elements `<field></field>`. Each field of the directive and each field of a rule, both the task and the blanks of a task, represent one`<field></field>` object. This identified the solution approach of modifying the two string variables in lines 4 and 5 before validating with the tool. Specifically, each of these HTML elements is numbered by a new function, represented in the following code snippet. For example, the first `<field></field>` is converted to `<field1></field1>` by this function. The function does this by searching for the start tag `<field>` on line 3 and the end tag `</field>` on line 9 with a Regex. These are each supplemented and replaced with an incrementing counter, as shown in lines 5 and 11. The two string variables are thus first modified with this function, displayed in lines 17 and 18, and after that validated with the tool.

```js
function field_incrementer(string) {
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
}

solutionXML_string = field_incrementer(solutionXML_string);
workspaceXML_string = field_incrementer(workspaceXML_string);
```

<a name="ui"/>
 
## 3. Adaption of the User Interface

<a name="adaptions"/>

To implement the Blockly approach, there are multiple additional adaptions to be made. As mentioned before, it is necessary to add a `<div></div>` for each task. The problem with this one HTML element is, that when resizing the browser window, the Blockly workspace stays the same. One possible solution is to add an JavaScript `window.addEventListener('resize')` to resize the workspace accordingly to the new width. In practice, this approach shows slight weaknesses, as the automatic adjustment of the canvas was sometimes bouncing a bit. For this reason, another container `<div></div>` was added around the HTML element of the workspace. This container is assigned a width of 100% and thus it adjusts automatically by CSS. The inner HTML element that contains the workspace, all four sides (top, left, right and bottom) are set to 0 by CSS. Thus, this element is clamped into the container. Through this construct, the author of this work has seen better performance than with the JavaScript approach through a test in the Chrome and Firefox browsers. In addition, the chosen solution has the advantage that per `id` of the workspace of a task, the height can be assigned manually. Thus, the width is always adjusted automatically and the height is always based on the actual requirements of the respective task. To make sure that every analyst can definitely see and edit every block completely, scrollbars have been added to the workspace. This makes it possible to work on all tasks without visual problems, even on small screens or unusual aspect ratios.

Next to it, the `theme-transparent.js` is edited so that Blockly's menu bar is no longer visible. This menu bar allows dragging new blocks into the workspace. Since this process is not relevant to any task, it is useful to remove the menu bar so that analysts can focus on relevant tasks. This can be done by setting the `flyoutOpacity` option in the theme `transparent`. Furthermore, in this file, the background color can be set transparent to show the cyber range color behind it in the workspace.

Furthermore, a list with a field to submit a single blank is now displayed below the workspace using the Blockly approach instead of the JSON representation showing these directly next to the blank. The hint from an analyst can also be used here and the error messages are also displayed for the respective field in this list. Multiple screenshot of the interface of the JSON version and the described Blockly implementation can be seen in the sreenshot section: [Screenshots of the Frontend](#screenshots)  
 
## 4. Additional Adaptions of the Cyber Range

To make it easy to compare the JSON approach with the Blockly approach in a user study in the cyber range, a new global variable `blockly` is added. If this variable has the content `1`, then the Blockly approach is presented for each task. If this variable is set to `0`, then the JSON approach is displayed to the analysts. To make switching between these two variants as seamless as possible, the global variable is changed depending on the URL parameter `?blockly`. This feature also provides the opportunity to implement future features in the cyber range with a single code base for JSON and Blockly.

One disadvantage remaining in contrast to the JSON approach is the problem for an analyst of assigning a blank in Blockly to the correct line in the submit list. For example, in task 3 there are three blanks in every one of the three rules with the same key name. An analyst could edit a blank in the second rule here, but submit the first occurrence of that blank in the submit list. If this blank has already been edited, then errors could occur here that are related to the user interface. For this, a critical feature is implemented: Live typing. Whenever a user types in a blank, the written content is displayed character by character while typing in the submit list of the respective blank. This greatly mitigates previously explained confusion.

Implementing this function was extremely complex. Blockly caused the biggest challenge in doing so. The individual input fields of a block do not have their own `class` or `id` assigned, making recognizing such an input field the first hurdle. This aspect can be solved by iterating via JavaScript over each input field, blanks as well as non-task relevant input values, in a workspace of Blockly. Each iteration of the loop checks whether this field has the content `…`. If this case occurs, then a relevant blank has been found for this task. This search has to be made for every task and has a disadvantage due to a side effect of Blockly, which is explained in the last paragraph in this section. The code snippet describing the following process is shown in the following listing. To be able to uniquely identify a found blank, an additional `class` is added to this HTML element containing the task number and the iterated number of blanks, as shown in lines 2 and 3. Since this HTML element is not an input field, but a `<text></text>` element, it is not possible to monitor it with an `.addEventListener('input')`. To solve this problem, a so-called `MutationObserver` is implemented. This can also be used to monitor non-input fields for changes. This construct is activated in lines 11 to 17 for a blank. Lines 6 to 9 are called as a function when a change occurs in the input field in Blockly. In line 7 the previously assigned value of `class` is read first and in line 8 the actually entered value in this field is copied to the submit list.

```js
if(blocklyItem.innerHTML==="...") {
  var blocklyClassAdded = "watcher-task-"+task+"-"+foundBlanks;
  blocklyItem.classList.add(blocklyClassAdded);
  var blocklyClassAddedItem = document.getElementsByClassName(blocklyClassAdded)[0];

  var mutateObserver = new MutationObserver(function(records) {
    var className = records[0]["target"]["parentElement"].outerHTML.split("\"")[1].split(" ")[1];
    document.getElementById(className).innerHTML = document.getElementsByClassName(className)[0].innerHTML;
  });

  mutateObserver.observe(blocklyClassAddedItem, {
    childList: true,
    characterData: true,
    subtree: true,
    characterDataOldValue: true
  });
  foundBlanks++;
}
```

After this extensive and complex process, an additional problem caused by Blockly occurs: The individual rule blocks are integrated into the HTML code from the bottom to the top. This means that the last rule block appears on the very top of the HTML generated by Blockly. However, the blanks of a rule are generated in the expected order, i.e., from top to bottom. This contradiction makes it very difficult to match a Blockly input field to the corresponding line of the submit list. A graphical overview of this problem is shown in the following graphic. Here, tasks 2, 3, and 4 are shown with their respective rules and blanks. In each blank, the number is shown in which order this blank is found in the search for this task. It was expected that in each task the numbering would start with 1 at the top and be continuous incrementing down to the bottom. In the illustration, you can see that in task 2 both blanks have the expected order in the search loop for input fields. In task 3, however, the first search result for input blocks in the workspace is the first blank of the third rule, not as expected of the first rule. Additionally, in task 4, the order in the third rule cannot be explained, as the number of `occurrence` and `plugin_sid` are switched. To solve this entire problem, the order shown in the graphic is manually stored for each task so that a blank can be assigned to the correct line in the submit list.

<img src="https://user-images.githubusercontent.com/7794412/159490911-aa22828f-b6ef-4a91-b582-bb4eab9a579e.png" width="600">

<a name="screenshots"/>
 
## 5. Screenshots of the Frontend
### Learning material
![Cyberrange_Learning](https://user-images.githubusercontent.com/56884203/112633883-3302c900-8e3a-11eb-9ed7-7d9406a4b715.png)

### JSON Version: Cloze Task
![Cyberrange_Task_A](https://user-images.githubusercontent.com/56884203/112633784-15356400-8e3a-11eb-80d4-822119da9c16.png)

### JSON Version: Editor Task
![Cyberrange_Task_B](https://user-images.githubusercontent.com/56884203/112633782-15356400-8e3a-11eb-8257-ae703441701c.png)

### Blockly Version: Cloze Task
![github-blockly-1](https://user-images.githubusercontent.com/7794412/159277461-ea2d6c9d-885b-4090-a757-c7ad7c06190e.png)

### Blockly Version: Editor Task
![github-blockly-2](https://user-images.githubusercontent.com/7794412/159277480-0476ca78-4d14-45eb-a753-55a2559db896.png)
