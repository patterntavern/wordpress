(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"full-height",attrs:{view:"lHh Lpr lFf"}},[a("q-page-container",{staticClass:"full-height"},[a("q-page",{staticClass:"full-height"},[a("q-bar",{attrs:{id:"appbar"}},[a("q-space"),a("q-btn",{attrs:{dense:"",flat:"",icon:"fas fa-play",color:t.workspace.isRunning?"green":"grey-8"},on:{click:function(e){t.workspace.isRunning=!t.workspace.isRunning}}}),a("q-space"),a("q-btn",{attrs:{dense:"",flat:"",icon:"fas fa-columns "+(!t.isHoriz&&"fa-rotate-270")},on:{click:t.toggleHoriz}})],1),a("q-splitter",{key:+t.isHoriz,staticClass:"full-height q-pt-appbar",attrs:{id:"main-splitter",horizontal:t.isHoriz,unit:"px",reverse:""},scopedSlots:t._u([{key:"after",fn:function(){return[a("q-tabs",{attrs:{dense:"","narrow-indicator":"",align:"left"}},[a("q-route-tab",{attrs:{to:"/",label:"Overview"}}),a("q-route-tab",{attrs:{to:"/code",label:"Code"}})],1),a("q-separator"),a("router-view",{attrs:{isHoriz:t.isHoriz,errors:t.errors}})]},proxy:!0},{key:"before",fn:function(){return[a("Blockly",{ref:"foo",staticClass:"blockly",attrs:{options:t.options}},[a("category",{attrs:{name:"🎹 MIDI Events",colour:"#9fa55b"}},[a("block",{attrs:{type:"midi_on_event"}})],1),a("category",{attrs:{name:"🔢 MIDI Arguments",colour:"#9fa55b"}},[a("block",{attrs:{type:"midi_arg_compare_note"}})],1),a("category",{attrs:{name:"🎵 Send MIDI",colour:"#9fa55b"}},[a("block",{attrs:{type:"midi_send_note"}})],1),a("sep"),a("category",{attrs:{name:"Logic",colour:"#5b80a5"}},[a("block",{attrs:{type:"controls_if"}}),a("block",{attrs:{type:"logic_compare"}},[a("field",{attrs:{name:"OP"}},[t._v("EQ")])],1),a("block",{attrs:{type:"logic_operation"}},[a("field",{attrs:{name:"OP"}},[t._v("AND")])],1),a("block",{attrs:{type:"logic_negate"}}),a("block",{attrs:{type:"logic_boolean"}},[a("field",{attrs:{name:"BOOL"}},[t._v("TRUE")])],1),a("block",{attrs:{type:"logic_null"}}),a("block",{attrs:{type:"logic_ternary"}})],1),a("category",{attrs:{name:"Loops",colour:"#5ba55b"}},[a("block",{attrs:{type:"controls_repeat_ext"}},[a("value",{attrs:{name:"TIMES"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("10")])],1)])],1),a("block",{attrs:{type:"controls_whileUntil"}},[a("field",{attrs:{name:"MODE"}},[t._v("WHILE")])],1),a("block",{attrs:{type:"controls_for"}},[a("field",{attrs:{name:"VAR",id:"+x@[E{uUuMC(G!%lB~vF"}},[t._v("i")]),a("value",{attrs:{name:"FROM"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("1")])],1)]),a("value",{attrs:{name:"TO"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("10")])],1)]),a("value",{attrs:{name:"BY"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("1")])],1)])],1),a("block",{attrs:{type:"controls_forEach"}},[a("field",{attrs:{name:"VAR",id:"E`D{pL/f#h?~8#[VL5rC"}},[t._v("j")])],1),a("block",{attrs:{type:"controls_flow_statements"}},[a("field",{attrs:{name:"FLOW"}},[t._v("BREAK")])],1)],1),a("category",{attrs:{name:"Math",colour:"#5b67a5"}},[a("block",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("0")])],1),a("block",{attrs:{type:"math_arithmetic"}},[a("field",{attrs:{name:"OP"}},[t._v("ADD")]),a("value",{attrs:{name:"A"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("1")])],1)]),a("value",{attrs:{name:"B"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("1")])],1)])],1),a("block",{attrs:{type:"math_single"}},[a("field",{attrs:{name:"OP"}},[t._v("ROOT")]),a("value",{attrs:{name:"NUM"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("9")])],1)])],1),a("block",{attrs:{type:"math_trig"}},[a("field",{attrs:{name:"OP"}},[t._v("SIN")]),a("value",{attrs:{name:"NUM"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("45")])],1)])],1),a("block",{attrs:{type:"math_constant"}},[a("field",{attrs:{name:"CONSTANT"}},[t._v("PI")])],1),a("block",{attrs:{type:"math_number_property"}},[a("mutation",{attrs:{divisor_input:"false"}}),a("field",{attrs:{name:"PROPERTY"}},[t._v("EVEN")]),a("value",{attrs:{name:"NUMBER_TO_CHECK"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("0")])],1)])],1),a("block",{attrs:{type:"math_round"}},[a("field",{attrs:{name:"OP"}},[t._v("ROUND")]),a("value",{attrs:{name:"NUM"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("3.1")])],1)])],1),a("block",{attrs:{type:"math_on_list"}},[a("mutation",{attrs:{op:"SUM"}}),a("field",{attrs:{name:"OP"}},[t._v("SUM")])],1),a("block",{attrs:{type:"math_modulo"}},[a("value",{attrs:{name:"DIVIDEND"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("64")])],1)]),a("value",{attrs:{name:"DIVISOR"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("10")])],1)])],1),a("block",{attrs:{type:"math_constrain"}},[a("value",{attrs:{name:"VALUE"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("50")])],1)]),a("value",{attrs:{name:"LOW"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("1")])],1)]),a("value",{attrs:{name:"HIGH"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("100")])],1)])],1),a("block",{attrs:{type:"math_random_int"}},[a("value",{attrs:{name:"FROM"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("1")])],1)]),a("value",{attrs:{name:"TO"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("100")])],1)])],1),a("block",{attrs:{type:"math_random_float"}})],1),a("category",{attrs:{name:"Text",colour:"#5ba58c"}},[a("block",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}})],1),a("block",{attrs:{type:"text_join"}},[a("mutation",{attrs:{items:"2"}})],1),a("block",{attrs:{type:"text_append"}},[a("field",{attrs:{name:"VAR",id:"AHM@IhCozpbm(mnOWJdU"}},[t._v("item")]),a("value",{attrs:{name:"TEXT"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}})],1)])],1),a("block",{attrs:{type:"text_length"}},[a("value",{attrs:{name:"VALUE"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}},[t._v("abc")])],1)])],1),a("block",{attrs:{type:"text_isEmpty"}},[a("value",{attrs:{name:"VALUE"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}})],1)])],1),a("block",{attrs:{type:"text_indexOf"}},[a("field",{attrs:{name:"END"}},[t._v("FIRST")]),a("value",{attrs:{name:"VALUE"}},[a("block",{attrs:{type:"variables_get"}},[a("field",{attrs:{name:"VAR",id:"IKPMutPmnS`RhpSFFD-*"}},[t._v("text")])],1)],1),a("value",{attrs:{name:"FIND"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}},[t._v("abc")])],1)])],1),a("block",{attrs:{type:"text_charAt"}},[a("mutation",{attrs:{at:"true"}}),a("field",{attrs:{name:"WHERE"}},[t._v("FROM_START")]),a("value",{attrs:{name:"VALUE"}},[a("block",{attrs:{type:"variables_get"}},[a("field",{attrs:{name:"VAR",id:"IKPMutPmnS`RhpSFFD-*"}},[t._v("text")])],1)],1)],1),a("block",{attrs:{type:"text_getSubstring"}},[a("mutation",{attrs:{at1:"true",at2:"true"}}),a("field",{attrs:{name:"WHERE1"}},[t._v("FROM_START")]),a("field",{attrs:{name:"WHERE2"}},[t._v("FROM_START")]),a("value",{attrs:{name:"STRING"}},[a("block",{attrs:{type:"variables_get"}},[a("field",{attrs:{name:"VAR",id:"IKPMutPmnS`RhpSFFD-*"}},[t._v("text")])],1)],1)],1),a("block",{attrs:{type:"text_changeCase"}},[a("field",{attrs:{name:"CASE"}},[t._v("UPPERCASE")]),a("value",{attrs:{name:"TEXT"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}},[t._v("abc")])],1)])],1),a("block",{attrs:{type:"text_trim"}},[a("field",{attrs:{name:"MODE"}},[t._v("BOTH")]),a("value",{attrs:{name:"TEXT"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}},[t._v("abc")])],1)])],1),a("block",{attrs:{type:"text_print"}},[a("value",{attrs:{name:"TEXT"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}},[t._v("abc")])],1)])],1),a("block",{attrs:{type:"text_prompt_ext"}},[a("mutation",{attrs:{type:"TEXT"}}),a("field",{attrs:{name:"TYPE"}},[t._v("TEXT")]),a("value",{attrs:{name:"TEXT"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}},[t._v("abc")])],1)])],1)],1),a("category",{attrs:{name:"Lists",colour:"#745ba5"}},[a("block",{attrs:{type:"lists_create_with"}},[a("mutation",{attrs:{items:"0"}})],1),a("block",{attrs:{type:"lists_create_with"}},[a("mutation",{attrs:{items:"3"}})],1),a("block",{attrs:{type:"lists_repeat"}},[a("value",{attrs:{name:"NUM"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("5")])],1)])],1),a("block",{attrs:{type:"lists_length"}}),a("block",{attrs:{type:"lists_isEmpty"}}),a("block",{attrs:{type:"lists_indexOf"}},[a("field",{attrs:{name:"END"}},[t._v("FIRST")]),a("value",{attrs:{name:"VALUE"}},[a("block",{attrs:{type:"variables_get"}},[a("field",{attrs:{name:"VAR",id:"FCjet]zykpk;L@@J9Ht,"}},[t._v("list")])],1)],1)],1),a("block",{attrs:{type:"lists_getIndex"}},[a("mutation",{attrs:{statement:"false",at:"true"}}),a("field",{attrs:{name:"MODE"}},[t._v("GET")]),a("field",{attrs:{name:"WHERE"}},[t._v("FROM_START")]),a("value",{attrs:{name:"VALUE"}},[a("block",{attrs:{type:"variables_get"}},[a("field",{attrs:{name:"VAR",id:"FCjet]zykpk;L@@J9Ht,"}},[t._v("list")])],1)],1)],1),a("block",{attrs:{type:"lists_setIndex"}},[a("mutation",{attrs:{at:"true"}}),a("field",{attrs:{name:"MODE"}},[t._v("SET")]),a("field",{attrs:{name:"WHERE"}},[t._v("FROM_START")]),a("value",{attrs:{name:"LIST"}},[a("block",{attrs:{type:"variables_get"}},[a("field",{attrs:{name:"VAR",id:"FCjet]zykpk;L@@J9Ht,"}},[t._v("list")])],1)],1)],1),a("block",{attrs:{type:"lists_getSublist"}},[a("mutation",{attrs:{at1:"true",at2:"true"}}),a("field",{attrs:{name:"WHERE1"}},[t._v("FROM_START")]),a("field",{attrs:{name:"WHERE2"}},[t._v("FROM_START")]),a("value",{attrs:{name:"LIST"}},[a("block",{attrs:{type:"variables_get"}},[a("field",{attrs:{name:"VAR",id:"FCjet]zykpk;L@@J9Ht,"}},[t._v("list")])],1)],1)],1),a("block",{attrs:{type:"lists_split"}},[a("mutation",{attrs:{mode:"SPLIT"}}),a("field",{attrs:{name:"MODE"}},[t._v("SPLIT")]),a("value",{attrs:{name:"DELIM"}},[a("shadow",{attrs:{type:"text"}},[a("field",{attrs:{name:"TEXT"}},[t._v(",")])],1)])],1),a("block",{attrs:{type:"lists_sort"}},[a("field",{attrs:{name:"TYPE"}},[t._v("NUMERIC")]),a("field",{attrs:{name:"DIRECTION"}},[t._v("1")])],1)],1),a("category",{attrs:{name:"Color",colour:"#a5745b"}},[a("block",{attrs:{type:"colour_picker"}},[a("field",{attrs:{name:"COLOUR"}},[t._v("#ff0000")])],1),a("block",{attrs:{type:"colour_random"}}),a("block",{attrs:{type:"colour_rgb"}},[a("value",{attrs:{name:"RED"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("100")])],1)]),a("value",{attrs:{name:"GREEN"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("50")])],1)]),a("value",{attrs:{name:"BLUE"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("0")])],1)])],1),a("block",{attrs:{type:"colour_blend"}},[a("value",{attrs:{name:"COLOUR1"}},[a("shadow",{attrs:{type:"colour_picker"}},[a("field",{attrs:{name:"COLOUR"}},[t._v("#ff0000")])],1)]),a("value",{attrs:{name:"COLOUR2"}},[a("shadow",{attrs:{type:"colour_picker"}},[a("field",{attrs:{name:"COLOUR"}},[t._v("#3333ff")])],1)]),a("value",{attrs:{name:"RATIO"}},[a("shadow",{attrs:{type:"math_number"}},[a("field",{attrs:{name:"NUM"}},[t._v("0.5")])],1)])],1)],1),a("sep"),a("category",{attrs:{name:"Variables",colour:"#a55b80",custom:"VARIABLE"}}),a("category",{attrs:{name:"Functions",colour:"#995ba5",custom:"PROCEDURE"}})],1)]},proxy:!0}]),model:{value:t.splitter,callback:function(e){t.splitter=e},expression:"splitter"}})],1)],1)],1)},r=[],s=a("ded3"),i=a.n(s),o=a("2f62"),l=a("2ef0"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"min-height":"inherit"}},[a("div",{ref:"blockly",staticClass:"blockly-wrap"}),a("xml",{ref:"toolbox",staticStyle:{display:"none"}},[t._t("default")],2)],1)},d=[],m=(a("ddb0"),a("54ca")),p=a.n(m),u="/**\r\n * IMPORTANT NOTE\r\n * This project MUST be ES5 compliant as that is what the JS Interpreter uses\r\n */\r\n\r\n/**\r\n * Simple tests\r\n */\r\nhasNumber = /\\d/\r\n \r\n/**\r\n * Stores events being listened to\r\n * {eventName: [...callbacks]}\r\n */\r\n_events = {}\r\n\r\n/**\r\n * console.log helper to properly send data to main app w/o obfuscation\r\n */\r\nconsole = {\r\n  log: function (arguments) {\r\n    log(JSON.stringify(arguments))\r\n  }\r\n}\r\n\r\n/**\r\n * target.addEventListener subsitution\r\n * @param {String} eventName The eventName to store this callback under\r\n * @param {Array} args The list of arguments\r\n * @param {Function} callback The function to call when this event is triggered\r\n */\r\naddEventListener = function (eventName, args, callback) {\r\n  if (!_events[eventName]) {\r\n    _events[eventName] = []\r\n  }\r\n\r\n  _events[eventName].push({\r\n    args: args,\r\n    callback: callback\r\n  })\r\n}\r\n\r\n/**\r\n * Trigger an event\r\n * @param {String} eventName \r\n * @param {*} payload\r\n */\r\ntriggerEvent = function (eventName, payload) {\r\n  _events[eventName] && _events[eventName].forEach(function (event) {\r\n    event.callback({\r\n      args: event.args,\r\n      payload: JSON.parse(payload)\r\n    })\r\n  })\r\n}\r\n\r\n/**\r\n * Plays a note\r\n */\r\nplayNote = function (payload) {\r\n  _playNote(JSON.stringify(payload))\r\n}\r\n\r\n/**\r\n * Compre helper for working with \"is\", \"is not\", etc\r\n */\r\ncompare = function (a, compare, b) {\r\n  switch (compare) {\r\n    case 'is':\r\n      return a == b\r\n    case 'is not':\r\n      return a != b\r\n  }\r\n}\r\n\r\n/**\r\n * Checks if a string belongs to the \"is any\" family (\"all\", \"any\", etc)\r\n */\r\nisAny = function (str) {\r\n  var list = ['any', 'all']\r\n  var isValid = false\r\n\r\n  list.forEach(function (item) {\r\n    if (str === item) isValid = true\r\n  });\r\n\r\n  return isValid\r\n}\r\n\r\n/**\r\n * Checks if a given note matches a webmidi.name\r\n * - If no octave present, then matches the key in any octave\r\n */\r\nisNote = function (a, compare, b) {\r\n  switch (compare) {\r\n    case 'is':\r\n      if (hasNumber.test()) {\r\n        return a == b.name.concat(b.octave)\r\n      } else {\r\n        return a == b.name\r\n      }\r\n\r\n    case 'is not':\r\n      if (hasNumber.test()) {\r\n        return a != b.name.concat(b.octave)\r\n      } else {\r\n        return a != b.name\r\n      }\r\n  }\r\n}",v={name:"Blockly",props:["options"],watch:{"workspace.code"(t){this.$store.commit("set",["workspace.interpreter",new window.Interpreter(u+"\n"+this.workspace.code,this.setupInterpreter)]),this.workspace.interpreter.run()}},computed:i()({},Object(o["b"])(["workspace","devices"])),data(){return{blockly:null,interpreter:null}},mounted(){let t=this.$props.options||{};t.toolbox||(t.toolbox=this.$refs.toolbox),this.blockly=p.a.inject(this.$refs.blockly,t),this.blockly.addChangeListener(this.onChange)},methods:{onChange(t){switch(t.type){case p.a.Events.BLOCK_CREATE:case p.a.Events.BLOCK_DELETE:case p.a.Events.BLOCK_CHANGE:case p.a.Events.BLOCK_MOVE:case p.a.Events.VAR_CREATE:case p.a.Events.VAR_DELETE:case p.a.Events.VAR_RENAME:this.$store.commit("set",["workspace.code",p.a.JavaScript.workspaceToCode(this.blockly)]);break}},setupInterpreter(t,e){t.setProperty(e,"log",t.createNativeFunction(t=>{console.log("📦 log: ",...JSON.parse(t))})),t.setProperty(e,"_playNote",t.createNativeFunction(t=>{let e=JSON.parse(t);"all"===e.device&&Object.keys(this.devices.outputs).forEach(t=>{const a=this.$m.getOutputById(t);a.playNote(e.note,e.channel)})}))}}},_=v,h=a("2877"),b=Object(h["a"])(_,c,d,!1,null,null,null),f=b.exports,g=(a("fc06"),a("8ded")),y=a.n(g),k=a("b7fd");k["JavaScript"]["midi_on_event"]=function(t){const e=t.getFieldValue("event"),a=t.getFieldValue("device"),n=k["JavaScript"].valueToCode(t,"args",k["JavaScript"].ORDER_ATOMIC),r=k["JavaScript"].statementToCode(t,"statements");let s=`addEventListener('${e}', [{\n  type: 'midi_arg_compare_device',\n  condition: 'is',\n  device: '${a}'\n}, ${n}], function (event) {\n  var data = event.payload;\n  var args = event.args;\n\n  console.log('event', event);\n  \n  // Exit if midi_args fail\n  var isValid = true;\n  event.args.forEach(function (arg) {\n    switch (arg.type) {\n      case 'midi_arg_compare_device':\n        if (!isAny(arg.device) && !compare(arg.device, arg.condition, data.target.id)) isValid = false;\n      break;\n      case 'midi_arg_compare_note':\n        if (!isAny(arg.note) && !isNote(arg.note, arg.condition, data.note)) isValid = false;\n      break;\n    }\n  });\n  if (!isValid) return;\n  \n${r}\n});\n`;return s},k["Blocks"]["midi_on_event"]={init:function(){this.appendValueInput("args").setCheck("midi_arg").appendField("On MIDI").appendField(new k["FieldDropdown"]([["Note On","noteon"],["Note Off","noteoff"],["Control Change","controlchange"]]),"event").appendField("from device").appendField(new k["FieldTextInput"]("any"),"device"),this.appendStatementInput("statements").setCheck(null),this.setInputsInline(!1),this.setColour(60),this.setTooltip("Runs the midiblock when the selected MIDI event is triggered from the specified device. Attach MIDI Args to the right to fine-tune the event"),this.setHelpUrl("https://midiblocks.com/block/midi_on_event")}},k["JavaScript"]["midi_arg_compare_note"]=function(t){var e=t.getFieldValue("condition"),a=t.getFieldValue("note"),n=k["JavaScript"].valueToCode(t,"args",k["JavaScript"].ORDER_ATOMIC),r=`{\n  type: 'midi_arg_compare_note',\n  condition: '${e}',\n  note: '${a}'\n}`;return n&&(r+=", "+n),[r,k["JavaScript"].ORDER_ATOMIC]},k["Blocks"]["midi_arg_compare_note"]={init:function(){this.appendValueInput("args").setCheck("midi_arg").appendField("when note").appendField(new k["FieldDropdown"]([["is","is"],["is not","is not"]]),"condition").appendField(new k["FieldTextInput"]("any"),"note"),this.setOutput(!0,"midi_arg"),this.setColour(45),this.setTooltip("Compares the MIDI note"),this.setHelpUrl("https://midiblocks.com/block/midi_arg_compare_note")}},k["JavaScript"]["midi_send_note"]=function(t){let e=t.getFieldValue("note"),a=t.getFieldValue("device"),n=t.getFieldValue("channel"),r=`playNote({\n  event: typeof event !== 'undefined' ? event : null,\n  note: '${e}',\n  channel: '${n}',\n  device: '${a}'\n});\n`;return r},k["Blocks"]["midi_send_note"]={init:function(){this.appendDummyInput().appendField("Play note").appendField(new k["FieldTextInput"]("C4"),"note").appendField("on device").appendField(new k["FieldTextInput"]("all"),"device").appendField("on channel").appendField(new k["FieldTextInput"]("all"),"channel"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(60),this.setTooltip(""),this.setHelpUrl("")}};var E=a("3d20"),w=a.n(E),T=function(t){return t};k["prompt"]=function(t,e,a){w.a.fire({title:"Variable:",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,allowOutsideClick:()=>!w.a.isLoading()}).then(t=>{t.value&&a(T(t.value))})};const O=200;var R={name:"MainLayout",computed:i()({},Object(o["b"])(["workspace"])),components:{Blockly:f},mounted(){this.$m.enable(t=>{const e={},a={};this.errors.webmidi.enable=t,this.$m.inputs.forEach(t=>{e[t.id]=t,t.led=!1,t.lastMessage="",this.bindInput(t.id)}),this.$m.outputs.forEach(t=>{a[t.id]=t}),this.$store.commit("set",["devices",{inputs:e,outputs:a}]),this.$root.$on("interpreter.triggerEvent",this.triggerEvent)})},watch:{splitter:Object(l["throttle"])((function(){y.a.set("splitter",this.splitter),setTimeout(()=>{window.dispatchEvent(new Event("resize"))})}),50,{leading:!0,trailing:!0}),isHoriz:Object(l["throttle"])((function(){y.a.set("isHoriz",this.isHoriz),setTimeout(()=>{window.dispatchEvent(new Event("resize"))})}),50,{leading:!0,trailing:!0})},data(){return{errors:{webmidi:{enable:!1}},isHoriz:y.a.get("isHoriz"),options:{media:"media/",zoom:{controls:!0,pinch:!0,wheel:!0},grid:{spacing:25,length:3,colour:"#ccc",snap:!0}},splitter:y.a.get("splitter")||window.innerWidth/3}},methods:{toggleHoriz(){this.isHoriz?this.splitter=window.innerWidth/3:this.splitter=O,this.isHoriz=!this.isHoriz},bindInput(t){const e=this.$m.getInputById(t),a=["activesensing","channelaftertouch","channelmode","clock","continue","controlchange","keyaftertouch","noteoff","noteon","nrpn","pitchbend","programchange","reset","songposition","songselect","start","stop","sysex","timecode","tuningrequest","unknownsystemmessage"];a.forEach(t=>{e.addListener(t,"all",e=>{this.$root.$emit("interpreter.triggerEvent",t,e)})}),e.addListener("midimessage","all",t=>{this.$store.commit("set",[`devices.inputs['${t.target.id}'].led`,!0]),setTimeout(()=>{this.$store.commit("set",[`devices.inputs['${t.target.id}'].led`,!1])},10)})},triggerEvent(t,e){if(this.workspace.code){let a=Object.assign({},e);a.target=Object.assign({},a.target),delete a.target._midiInput,delete a.target._userHandlers,delete a.target.lastMessage,a=JSON.stringify(a),this.workspace.interpreter.appendCode(`triggerEvent('${t}', '${a}')`),this.workspace.interpreter.run()}let a;switch(t){case"noteon":case"noteoff":a=`[${e.note.number}, ${e.note.name}, ${e.note.octave}]`;break;case"controlchange":a=`[${e.controller.number}, ${e.controller.name}]`;break}this.$store.commit("set",[`devices.inputs['${e.target.id}'].lastMessage`,`<div>\n          <strong>${t}</strong>:\n          <span>${a}</span>\n        </div>\n        <div>\n          <strong>data</strong>:\n          <span>[${e.data[0]}, ${e.data[1]}, ${e.data[2]}]</span>\n        </div>`])}}},N=R,M=a("4d5a"),I=a("09e3"),C=a("9989"),S=a("d847"),F=a("2c91"),A=a("9c40"),U=a("8562"),x=a("429b"),L=a("7867"),V=a("eb85"),$=a("eebe"),D=a.n($),H=Object(h["a"])(N,n,r,!1,null,null,null);e["default"]=H.exports;D()(H,"components",{QLayout:M["a"],QPageContainer:I["a"],QPage:C["a"],QBar:S["a"],QSpace:F["a"],QBtn:A["a"],QSplitter:U["a"],QTabs:x["a"],QRouteTab:L["a"],QSeparator:V["a"]})}}]);