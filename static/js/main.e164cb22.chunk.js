(window.webpackJsonpokr=window.webpackJsonpokr||[]).push([[0],{14:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,r){e.exports=r(29)},21:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(6),s=r.n(o),u=(r(21),r(7)),i=r(14),c=r.n(i),l=r(3),d=r(15),p=r(8),f=r(4),k=r(1),m=r.n(k);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={primaryObjective:"Finish projects & improve skillset",keyResults:["Complete Math C","Complete 4 projects","Get detailed gold trading data for last 5 years"],taskGroups:[{title:"Current sprint!",id:1},{title:"Some future sprint!",id:2}],tasks:[{id:m()(),title:"[OKR Sys] Add group",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Close group",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Drag tasks",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Drop tasks into different sprint and sort",groupId:1,status:0,enabled:!1},{id:m()(),title:"[OKR Sys] Delete tasks",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Add tasks",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Basic state",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Basic UI",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Basic task behavior",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Save state to localstorage",groupId:1,status:1,enabled:!1},{id:m()(),title:"[OKR Sys] Deploy to Github page",groupId:1,status:1,enabled:!1},{id:m()(),title:"Sign up for Math C",groupId:2,status:0,enabled:!1},{id:m()(),title:"Read up on first math module",groupId:2,status:0,enabled:!1},{id:m()(),title:"GBZ audio wiring",groupId:2,status:0,enabled:!1},{id:m()(),title:"Gift for the lady",groupId:2,status:1,enabled:!1},{id:m()(),title:"some task \xc6\xd8\xc5",groupId:void 0,status:0,enabled:!1},{id:m()(),title:"some task \xc6\xd8\xc5",groupId:void 0,status:0,enabled:!1}]},v={updateTask:Symbol("Update task"),addTask:Symbol("Add task"),updatePrimaryObjective:Symbol("Update primary objective"),updateKeyResult:Symbol("Update key result"),updateGroupTitle:Symbol("Update group title"),deleteTask:Symbol("Delete task"),addGroupAfter:Symbol("Add group after"),closeGroup:Symbol("close group")},O=Object(l.combineReducers)({okr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g({},b),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.closeGroup:var r=e.tasks.map(function(e){return e.groupId!==t.id||1===e.status?e:g({},e,{groupId:void 0})}),a=e.taskGroups.map(function(e){return e.id!==t.id?e:g({},e,{deleted:!0})});return g({},e,{taskGroups:a,tasks:r});case v.updateGroupTitle:var n=e.taskGroups.map(function(e){return e.id===t.id?g({},e,{title:t.title}):e});return g({},e,{taskGroups:n});case v.updateKeyResult:var o=Object(p.a)(e.keyResults);return o[t.index]=t.keyResult,g({},e,{keyResults:o});case v.addGroupAfter:var s=e.taskGroups.find(function(e){return e.id===t.afterId}),u=e.taskGroups.indexOf(s),i=g({},t.group,{id:m()()}),c=Object(p.a)(e.taskGroups);return c.splice(u+1,0,i),g({},e,{taskGroups:c});case v.updatePrimaryObjective:return g({},e,{primaryObjective:t.primaryObjective});case v.deleteTask:return g({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.id})});case v.updateTask:var l=e.tasks.map(function(e){return e.id===t.task.id?t.task:e});return g({},e,{tasks:l});case v.addTask:var d=[].concat(Object(p.a)(e.tasks),[g({groupId:void 0,status:0},t.task,{id:m()()})]);return g({},e,{tasks:d});default:return e}}}),j=Object(d.composeWithDevTools)({serialize:!0});var h=Object(l.createStore)(O,function(){var e=localStorage.getItem("okr");return e?JSON.parse(e):{}}(),j());h.subscribe(function(e){localStorage.setItem("okr",JSON.stringify(h.getState()))});r(27),r(28);var E=function(e){var t=e.onChange,r=e.onClose,a=e.value;function o(e){t&&t(e)}return n.a.createElement("div",{className:"okr-list-name"},n.a.createElement("input",{type:"text",defaultValue:a,onChange:function(e){return o(e.target.value)},placeholder:"List name"}),n.a.createElement("button",{onClick:function(){window.confirm("Are you sure?")&&r()}},"Close group"))},w=function(e){var t=e.value,r=e.onChange;function a(e){r&&r(e)}return n.a.createElement("div",{className:"okr-key-result"},n.a.createElement("input",{type:"text",defaultValue:t,onChange:function(e){return a(e.target.value)},placeholder:"A key result..."}))},S=function(e){var t=e.keyResults,r=void 0===t?[]:t,a=e.objective,o=void 0===a?"":a,s=e.onObjectiveChange,u=(e.onAddKeyResult,e.onKeyResultChange),i=r.map(function(e,t){return n.a.createElement(w,{key:t,value:e,onChange:function(e){return u(e,t)}})});return n.a.createElement("div",{className:"okr-objective"},n.a.createElement("textarea",{type:"text",className:"okr-primary-objective",defaultValue:o,onChange:function(e){return t=e.target.value,void(s&&s(t));var t},placeholder:"Okr primary goal"}),i)};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var I=function(e){var t=e.onComplete,r=e.groupId,a=C({},{title:"",groupId:void 0===r?void 0:r});return n.a.createElement("div",{className:"okr-task okr-task--add"},n.a.createElement("span",{className:"okr-task__type","aria-label":"cat",role:"img"},"T"),n.a.createElement("input",{type:"text",placeholder:"Add a new task...",defaultValue:a.title,onChange:function(e){return t={title:e.target.value},void(a=C({},a,{},t));var t},onKeyPress:function(e){return function(e){13===e.charCode&&(t&&t(a),e.target.value="")}(e)}}))};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var T=function(e){var t=e.task,r=e.onChange,a=e.onWaste,o=e.disabled,s=void 0===o||o,u=G({},t);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u=G({},u,{},e),r&&r(u)}var c="okr-task";return 1===u.status&&(c+=" okr-task--done"),s||(c+=" okr-task--active"),n.a.createElement("div",{className:c},n.a.createElement("div",{className:"okr-task__dragger",onMouseDown:function(e){var t=e.clientX,r=e.clientY,a=e.currentTarget,n=!1;function o(e){var n=t-e.clientX,o=r-e.clientY;a.style.transform="translate(".concat(-n,"px, ").concat(-o,"px)")}setTimeout(function(){n||a.classList.add("okr-task__dragger--active")},150),document.addEventListener("mouseup",function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",o),a.classList.remove("okr-task__dragger--active"),a.style.transform="translate(0px, 0px)",n=!0}),document.addEventListener("mousemove",o)}},n.a.createElement("span",{className:"okr-task__type","aria-label":"cat",role:"img"},"T"),n.a.createElement("input",{type:"text",onDoubleClick:function(e){var t=e.currentTarget;i({disabled:!1}),setTimeout(function(){t.focus()},50)},readOnly:s,onBlur:function(e){return i({disabled:!0})},onKeyDown:function(e){["Escape"].indexOf(e.key)>-1&&i({disabled:!0}),["Enter"].indexOf(e.key)>-1&&i({disabled:!s})},placeholder:"Something to do...",defaultValue:u.title,onChange:function(e){return i({title:e.target.value})}}),n.a.createElement("input",{type:"checkbox",defaultChecked:1===u.status,onChange:function(e){return i({status:e.target.checked?1:0})}}),n.a.createElement("span",{className:"okr-task__deletebtn",onClick:function(){window.confirm("Are you sure?")&&a(t.id)}},"\ud83d\uddd1")))},D=function(e){var t=e.onAdd,r=e.groupId;return n.a.createElement("div",{className:"okr-add-group"},n.a.createElement("button",{onClick:function(){return t(r)}},"Add group here"))};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function A(e){return{type:v.updateTask,task:e}}function K(e){return{type:v.addTask,task:e}}function x(e){return{type:v.updatePrimaryObjective,primaryObjective:e}}function _(e,t){return{type:v.updateKeyResult,keyResult:e,index:t}}function L(e,t){return{type:v.updateGroupTitle,title:e,id:t}}function B(e){return{type:v.deleteTask,id:e}}function U(e,t){return console.log(e,t),{type:v.addGroupAfter,afterId:t,group:e}}function V(e){return{type:v.closeGroup,id:e}}var W=function(e){var t=e.okr.taskGroups.filter(function(e){return!0!==e.deleted}).map(function(t){var r=e.okr.tasks.filter(function(e){return e.groupId===t.id});return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{tasks:r})}),r=e.okr.tasks.filter(function(e){return void 0===e.groupId});return t.push({title:"Backlog tasks",id:-1,tasks:r}),t};function J(e){return{groupedTasks:W(e),objective:e.okr.primaryObjective,keyResults:e.okr.keyResults}}var M=Object(u.b)(function(){return J},function(e){return Object(l.bindActionCreators)({updateTask:A,addTask:K,updateObjective:x,updateKeyResult:_,updateListName:L,deleteTask:B,addGroupAfter:U,closeGroup:V},e)})(function(e){var t=e.groupedTasks,r=e.updateTask,a=e.addTask,o=e.keyResults,s=e.objective,u=e.updateObjective,i=e.updateKeyResult,c=e.updateListName,l=e.deleteTask,d=e.addGroupAfter,p=e.closeGroup;return n.a.createElement("div",{className:"okr-page"},n.a.createElement("div",{className:"okr-page__content"},n.a.createElement(S,{keyResults:o,objective:s,onKeyResultChange:function(e,t){return i(e,t)},onObjectiveChange:function(e){return u(e)}}),function(e,t,r,a,o,s,u){return e.map(function(e,i){var c=e.tasks.map(function(e,r){return n.a.createElement(T,{task:e,onWaste:function(e){return o(e)},key:e.id,disabled:e.disabled,onChange:function(e){return t(e)}})});return n.a.createElement("div",{className:"okr-task-list",key:e.id},n.a.createElement(E,{value:e.title,onChange:function(t){return a(t,e.id)},onClose:function(){return u(e.id)}}),c,n.a.createElement(I,{groupId:e.id,onComplete:function(e){return r(e)}}),n.a.createElement(D,{onAdd:function(){return s({title:"New Group"},e.id)}}))})}(t,r,a,c,l,d,p)))});var X=function(){return n.a.createElement(u.a,{store:h},n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"})),n.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.e164cb22.chunk.js.map