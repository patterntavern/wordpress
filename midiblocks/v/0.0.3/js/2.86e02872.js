(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2c8a":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-layout",{staticClass:"full-height",attrs:{view:"lHh Lpr lFf"}},[t("q-page-container",{staticClass:"full-height"},[t("q-page",{staticClass:"full-height"},[t("router-view"),t("Blockly",{ref:"foo",staticClass:"blockly",staticStyle:{right:"0"},attrs:{options:e.options}})],1)],1)],1)},r=[],i=t("ded3"),o=t.n(i),s=t("2f62"),l=t("79f3");t("fc06"),t("61ee"),t("9b88"),t("52d0"),t("3aad");var c={name:"MainLayout",computed:o()({},Object(s["b"])(["workspace"])),components:{Blockly:l["a"]},data(){return{id:null,options:{media:"media/",zoom:{controls:!0,pinch:!0,wheel:!0},grid:null,readOnly:!0,sounds:!1,toolbox:null,trashcan:!1,zoom:!1}}},mounted(){console.log({base:"https://midiblocks.local/wp-json/midiblocks/"}.base),this.$axios.get({base:"https://midiblocks.local/wp-json/midiblocks/"}.base+"block",{id:this.$route.params.id}).then(e=>{console.log("✅ Reponse: ",e)}).catch(e=>{console.log("🚨 Error: ",e)})}},d=c,p=t("2877"),u=t("4d5a"),h=t("09e3"),m=t("9989"),v=t("eebe"),f=t.n(v),g=Object(p["a"])(d,a,r,!1,null,null,null);n["default"]=g.exports;f()(g,"components",{QLayout:u["a"],QPageContainer:h["a"],QPage:m["a"]})},"3aad":function(e,n,t){"use strict";var a=t("b7fd"),r=t("3d20"),i=t.n(r),o=function(e){return e};a["prompt"]=function(e,n,t){i.a.fire({title:"Variable:",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,allowOutsideClick:()=>!i.a.isLoading()}).then(e=>{e.value&&t(o(e.value))})}},"52d0":function(e,n,t){"use strict";var a=t("b7fd");a["JavaScript"]["midi_send_note"]=function(e){let n=e.getFieldValue("note"),t=e.getFieldValue("device"),a=e.getFieldValue("channel"),r=`playNote({\n  event: typeof event !== 'undefined' ? event : null,\n  note: '${n}',\n  channel: '${a}',\n  device: '${t}'\n});\n`;return r},a["Blocks"]["midi_send_note"]={init:function(){this.appendDummyInput().appendField("Play note").appendField(new a["FieldTextInput"]("C4"),"note").appendField("on device").appendField(new a["FieldTextInput"]("all"),"device").appendField("on channel").appendField(new a["FieldTextInput"]("all"),"channel"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(180),this.setTooltip(""),this.setHelpUrl("")}}},"61ee":function(e,n,t){"use strict";var a=t("b7fd");a["JavaScript"]["midi_on_event"]=function(e){const n=e.getFieldValue("event"),t=e.getFieldValue("device"),r=a["JavaScript"].valueToCode(e,"args",a["JavaScript"].ORDER_ATOMIC),i=a["JavaScript"].statementToCode(e,"statements");let o=`addEventListener('${n}', [{\n  type: 'midi_arg_compare_device',\n  condition: 'is',\n  device: '${t}'\n}, ${r}], function (event) {\n  var data = event.payload;\n  var args = event.args;\n\n  console.log('event', event);\n  \n  // Exit if midi_args fail\n  var isValid = true;\n  event.args.forEach(function (arg) {\n    switch (arg.type) {\n      case 'midi_arg_compare_device':\n        if (!isAny(arg.device) && !compare(arg.device, arg.condition, data.target.id)) isValid = false;\n      break;\n      case 'midi_arg_compare_note':\n        if (!isAny(arg.note) && !isNote(arg.note, arg.condition, data.note)) isValid = false;\n      break;\n    }\n  });\n  if (!isValid) return;\n  \n${i}\n});\n`;return o},a["Blocks"]["midi_on_event"]={init:function(){this.appendValueInput("args").setCheck("midi_arg").appendField("On MIDI").appendField(new a["FieldDropdown"]([["Note On","noteon"],["Note Off","noteoff"],["Control Change","controlchange"]]),"event").appendField("from device").appendField(new a["FieldTextInput"]("any"),"device"),this.appendStatementInput("statements").setCheck(null),this.setInputsInline(!1),this.setColour(60),this.setTooltip("Runs the midiblock when the selected MIDI event is triggered from the specified device. Attach MIDI Args to the right to fine-tune the event"),this.setHelpUrl("https://midiblocks.com/block/midi_on_event")}}},"79f3":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{"min-height":"inherit"}},[t("div",{ref:"blockly",staticClass:"blockly-wrap"}),t("xml",{ref:"toolbox",staticStyle:{display:"none"}},[e._t("default")],2)],1)},r=[],i=(t("ddb0"),t("ded3")),o=t.n(i),s=t("54ca"),l=t.n(s),c=t("2f62"),d="/**\r\n * IMPORTANT NOTE\r\n * This project MUST be ES5 compliant as that is what the JS Interpreter uses\r\n */\r\n\r\n/**\r\n * Simple tests\r\n */\r\nhasNumber = /\\d/\r\n \r\n/**\r\n * Stores events being listened to\r\n * {eventName: [...callbacks]}\r\n */\r\n_events = {}\r\n\r\n/**\r\n * console.log helper to properly send data to main app w/o obfuscation\r\n */\r\nconsole = {\r\n  log: function (arguments) {\r\n    log(JSON.stringify(arguments))\r\n  }\r\n}\r\n\r\n/**\r\n * target.addEventListener subsitution\r\n * @param {String} eventName The eventName to store this callback under\r\n * @param {Array} args The list of arguments\r\n * @param {Function} callback The function to call when this event is triggered\r\n */\r\naddEventListener = function (eventName, args, callback) {\r\n  if (!_events[eventName]) {\r\n    _events[eventName] = []\r\n  }\r\n\r\n  _events[eventName].push({\r\n    args: args,\r\n    callback: callback\r\n  })\r\n}\r\n\r\n/**\r\n * Trigger an event\r\n * @param {String} eventName \r\n * @param {*} payload\r\n */\r\ntriggerEvent = function (eventName, payload) {\r\n  _events[eventName] && _events[eventName].forEach(function (event) {\r\n    event.callback({\r\n      args: event.args,\r\n      payload: JSON.parse(payload)\r\n    })\r\n  })\r\n}\r\n\r\n/**\r\n * Plays a note\r\n */\r\nplayNote = function (payload) {\r\n  _playNote(JSON.stringify(payload))\r\n}\r\n\r\n/**\r\n * Compre helper for working with \"is\", \"is not\", etc\r\n */\r\ncompare = function (a, compare, b) {\r\n  switch (compare) {\r\n    case 'is':\r\n      return a == b\r\n    case 'is not':\r\n      return a != b\r\n  }\r\n}\r\n\r\n/**\r\n * Checks if a string belongs to the \"is any\" family (\"all\", \"any\", etc)\r\n */\r\nisAny = function (str) {\r\n  var list = ['any', 'all']\r\n  var isValid = false\r\n\r\n  list.forEach(function (item) {\r\n    if (str === item) isValid = true\r\n  });\r\n\r\n  return isValid\r\n}\r\n\r\n/**\r\n * Checks if a given note matches a webmidi.name\r\n * - If no octave present, then matches the key in any octave\r\n */\r\nisNote = function (a, compare, b) {\r\n  switch (compare) {\r\n    case 'is':\r\n      if (hasNumber.test()) {\r\n        return a == b.name.concat(b.octave)\r\n      } else {\r\n        return a == b.name\r\n      }\r\n\r\n    case 'is not':\r\n      if (hasNumber.test()) {\r\n        return a != b.name.concat(b.octave)\r\n      } else {\r\n        return a != b.name\r\n      }\r\n  }\r\n}",p={name:"Blockly",props:["options"],watch:{"workspace.code"(e){this.$store.commit("set",["workspace.interpreter",new window.Interpreter(d+"\n"+this.workspace.code,this.setupInterpreter)]),this.workspace.interpreter.run()}},computed:o()({},Object(c["b"])(["workspace","devices"])),data(){return{blockly:null,interpreter:null}},mounted(){let e=this.$props.options||{};e.toolbox||(e.toolbox=this.$refs.toolbox),this.blockly=l.a.inject(this.$refs.blockly,e),this.blockly.addChangeListener(this.onChange)},methods:{onChange(e){switch(e.type){case l.a.Events.BLOCK_CREATE:case l.a.Events.BLOCK_DELETE:case l.a.Events.BLOCK_CHANGE:case l.a.Events.BLOCK_MOVE:case l.a.Events.VAR_CREATE:case l.a.Events.VAR_DELETE:case l.a.Events.VAR_RENAME:this.$store.commit("set",["workspace.code",l.a.JavaScript.workspaceToCode(this.blockly)]);break}},setupInterpreter(e,n){e.setProperty(n,"log",e.createNativeFunction(e=>{console.log("📦 log: ",...JSON.parse(e))})),e.setProperty(n,"_playNote",e.createNativeFunction(e=>{let n=JSON.parse(e);"all"===n.device&&Object.keys(this.devices.outputs).forEach(e=>{const t=this.$m.getOutputById(e);t.playNote(n.note,n.channel)})}))}}},u=p,h=t("2877"),m=Object(h["a"])(u,a,r,!1,null,null,null);n["a"]=m.exports},"9b88":function(e,n,t){"use strict";var a=t("b7fd");a["JavaScript"]["midi_arg_compare_note"]=function(e){var n=e.getFieldValue("condition"),t=e.getFieldValue("note"),r=a["JavaScript"].valueToCode(e,"args",a["JavaScript"].ORDER_ATOMIC),i=`{\n  type: 'midi_arg_compare_note',\n  condition: '${n}',\n  note: '${t}'\n}`;return r&&(i+=", "+r),[i,a["JavaScript"].ORDER_ATOMIC]},a["Blocks"]["midi_arg_compare_note"]={init:function(){this.appendValueInput("args").setCheck("midi_arg").appendField("when note").appendField(new a["FieldDropdown"]([["is","is"],["is not","is not"]]),"condition").appendField(new a["FieldTextInput"]("any"),"note"),this.setOutput(!0,"midi_arg"),this.setColour(45),this.setTooltip("Compares the MIDI note"),this.setHelpUrl("https://midiblocks.com/block/midi_arg_compare_note")}}}}]);