(window.webpackJsonpokr=window.webpackJsonpokr||[]).push([[0],{40:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},50:function(e,t,r){e.exports=r(97)},55:function(e,t,r){},61:function(e,t,r){},62:function(e,t,r){},97:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(12),s=r.n(o),u=(r(55),r(9)),i=r(40),c=r.n(i),d=r(1),l=r(41),p=r(14),f=r(8),b=r(2),g=r.n(b);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={primaryObjective:"Finish projects & improve skillset",keyResults:["Complete Math C","Complete 4 projects","Get detailed gold trading data for last 5 years"],taskGroups:[{title:"Current sprint!",id:1},{title:"Some future sprint!",id:2}],tasks:[{id:g()(),sort:1,title:"[OKR Sys] Add group",groupId:1,status:1,enabled:!1},{id:g()(),sort:2,title:"[OKR Sys] Close group",groupId:1,status:1,enabled:!1},{id:g()(),sort:3,title:"[OKR Sys] Drag tasks",groupId:1,status:1,enabled:!1},{id:g()(),sort:4,title:"[OKR Sys] Drop tasks into different sprint and sort",groupId:1,status:0,enabled:!1},{id:g()(),sort:5,title:"[OKR Sys] Delete tasks",groupId:1,status:1,enabled:!1},{id:g()(),sort:6,title:"[OKR Sys] Add tasks",groupId:1,status:1,enabled:!1},{id:g()(),sort:7,title:"[OKR Sys] Basic state",groupId:1,status:1,enabled:!1},{id:g()(),sort:8,title:"[OKR Sys] Basic UI",groupId:1,status:1,enabled:!1},{id:g()(),sort:9,title:"[OKR Sys] Basic task behavior",groupId:1,status:1,enabled:!1},{id:g()(),sort:10,title:"[OKR Sys] Save state to localstorage",groupId:1,status:1,enabled:!1},{id:g()(),sort:11,title:"[OKR Sys] Deploy to Github page",groupId:1,status:1,enabled:!1},{id:g()(),sort:12,title:"Sign up for Math C",groupId:2,status:0,enabled:!1},{id:g()(),sort:13,title:"Read up on first math module",groupId:2,status:0,enabled:!1},{id:g()(),sort:14,title:"GBZ audio wiring",groupId:2,status:0,enabled:!1},{id:g()(),sort:15,title:"Gift for the lady",groupId:2,status:1,enabled:!1},{id:g()(),sort:16,title:"some task \xc6\xd8\xc5",groupId:void 0,status:0,enabled:!1},{id:g()(),sort:17,title:"some task \xc6\xd8\xc5",groupId:void 0,status:0,enabled:!1}]},v={updateTask:Symbol("Update task"),addTask:Symbol("Add task"),updatePrimaryObjective:Symbol("Update primary objective"),updateKeyResult:Symbol("Update key result"),updateGroupTitle:Symbol("Update group title"),deleteTask:Symbol("Delete task"),addGroupAfter:Symbol("Add group after"),closeGroup:Symbol("close group"),moveTaskTo:Symbol("move task to"),updateState:Symbol("update state")},O=Object(d.combineReducers)({okr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m({},y),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.moveTaskTo:var r=m({},e.tasks.find(function(e){return e.id===t.taskId}),{groupId:-1===t.groupId?void 0:t.groupId}),n=e.tasks.filter(function(e){return e.id!==r.id}),a=n.filter(function(e){return e.groupId!==t.groupId}),o=n.filter(function(e){return e.groupId===t.groupId}).sort(function(e,t){return e.sort<t.sort?-1:1});return o.splice(t.index,0,r),o=o.map(function(e,t){return m({},e,{sort:t})}),m({},e,{tasks:[].concat(Object(p.a)(a),Object(p.a)(o))});case v.closeGroup:var s=e.tasks.map(function(e){return e.groupId!==t.id||1===e.status?e:m({},e,{groupId:void 0})}),u=e.taskGroups.map(function(e){return e.id!==t.id?e:m({},e,{deleted:!0})});return m({},e,{taskGroups:u,tasks:s});case v.updateGroupTitle:var i=e.taskGroups.map(function(e){return e.id===t.id?m({},e,{title:t.title}):e});return m({},e,{taskGroups:i});case v.updateKeyResult:var c=Object(p.a)(e.keyResults);return c[t.index]=t.keyResult,m({},e,{keyResults:c});case v.addGroupAfter:var d=e.taskGroups.find(function(e){return e.id===t.afterId}),l=e.taskGroups.indexOf(d),f=m({},t.group,{id:g()()}),b=Object(p.a)(e.taskGroups);return b.splice(l+1,0,f),m({},e,{taskGroups:b});case v.updatePrimaryObjective:return m({},e,{primaryObjective:t.primaryObjective});case v.deleteTask:return m({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.id})});case v.updateState:return m({},e,{},t.state);case v.updateTask:var k=e.tasks.map(function(e){return e.id===t.task.id?m({},e,{},t.task):e});return m({},e,{tasks:k});case v.addTask:var O=[].concat(Object(p.a)(e.tasks),[m({groupId:void 0,status:0},t.task,{id:g()(),sort:e.tasks.reduce(function(e,t){return t.sort>e?t.sort:e},0)+1})]);return m({},e,{tasks:O});default:return e}}}),j=Object(l.composeWithDevTools)({serialize:!0});var h=Object(d.createStore)(O,function(){var e=localStorage.getItem("okr");return e?JSON.parse(e):{}}(),j());h.subscribe(function(e){localStorage.setItem("okr",JSON.stringify(h.getState()))});r(61),r(62);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function I(e){return{type:v.updateTask,task:e}}function w(e){return{type:v.addTask,task:e}}function S(e){return{type:v.updatePrimaryObjective,primaryObjective:e}}function P(e,t){return{type:v.updateKeyResult,keyResult:e,index:t}}function C(e,t,r){return{type:v.moveTaskTo,taskId:e,index:t,groupId:r}}function T(e,t){return{type:v.updateGroupTitle,title:e,id:t}}function R(e){return{type:v.deleteTask,id:e}}function G(e,t){return console.log(e,t),{type:v.addGroupAfter,afterId:t,group:e}}function D(e){return{type:v.closeGroup,id:e}}function A(e){return{type:v.updateState,state:e}}var N=function(e){var t=e.okr.taskGroups.filter(function(e){return!0!==e.deleted}).map(function(t){var r=e.okr.tasks.filter(function(e){return e.groupId===t.id}).sort(function(e,t){return e.sort>t.sort?1:-1});return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{tasks:r})}),r=e.okr.tasks.filter(function(e){return void 0===e.groupId}).sort(function(e,t){return e.sort>t.sort?1:-1});return t.push({title:"Backlog tasks",tasks:r}),t},K=r(23),x=function(e){var t=e.onChange,r=e.onClose,n=e.value;function o(e){t&&t(e)}return a.a.createElement("div",{className:"okr-list-name"},a.a.createElement("input",{type:"text",defaultValue:n,onChange:function(e){return o(e.target.value)},placeholder:"List name"}),a.a.createElement("button",{onClick:function(){window.confirm("Are you sure?")&&r()}},"Close group"))};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var U=function(e){var t=e.onComplete,r=e.groupId,n=B({},{title:"",groupId:void 0===r?void 0:r});return a.a.createElement("div",{className:"okr-task okr-task--add"},a.a.createElement("span",{className:"okr-task__type","aria-label":"cat",role:"img"},"T"),a.a.createElement("input",{type:"text",placeholder:"Add a new task...",defaultValue:n.title,onChange:function(e){return t={title:e.target.value},void(n=B({},n,{},t));var t},onKeyPress:function(e){return function(e){13===e.charCode&&(t&&t(n),e.target.value="")}(e)}}))},V=r(42),W=r(43),J=r(48),L=r(44),M=r(49);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function H(e){return{currentlyDraggin:e.okr.draggin}}var Z=function(e){function t(e){var r;return Object(V.a)(this,t),(r=Object(J.a)(this,Object(L.a)(t).call(this,e))).domRef=a.a.createRef(),r}return Object(M.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this,t=this.props.disabled,r=F({},this.props.task),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r=F({},r,{},t),e.props.onChange&&e.props.onChange(r)},o="okr-task";return 1===r.status&&(o+=" okr-task--done"),t||(o+=" okr-task--active"),a.a.createElement("div",{className:o,ref:this.domRef},a.a.createElement("div",{className:"okr-task__dragger"},a.a.createElement("span",{className:"okr-task__type","aria-label":"cat",role:"img"},"T"),a.a.createElement("input",{type:"text",onDoubleClick:function(e){var t=e.currentTarget;n({disabled:!1}),setTimeout(function(){t.focus()},50)},readOnly:t,onBlur:function(e){return n({disabled:!0})},onKeyDown:function(e){["Escape"].indexOf(e.key)>-1&&n({disabled:!0}),["Enter"].indexOf(e.key)>-1&&n({disabled:!t})},placeholder:"Something to do...",defaultValue:r.title,onChange:function(e){return n({title:e.target.value})}}),a.a.createElement("input",{type:"checkbox",defaultChecked:1===r.status,onChange:function(e){return n({status:e.target.checked?1:0})}}),a.a.createElement("span",{className:"okr-task__deletebtn",onClick:function(){window.confirm("Are you sure?")&&e.props.onWaste(e.props.task.id)}},"\ud83d\uddd1")))}}]),t}(a.a.Component),$=Object(u.b)(function(){return H},function(e){return Object(d.bindActionCreators)({updateState:A,moveTaskTo:C},e)})(Z),q=function(e){var t=e.onAdd,r=e.groupId;return a.a.createElement("div",{className:"okr-add-group"},a.a.createElement("button",{onClick:function(){return t(r)}},"Add group here"))};function Q(e){return{groupedTasks:N(e)}}var X=Object(u.b)(function(){return Q},function(e){return Object(d.bindActionCreators)({updateTask:I,addTask:w,updateListName:T,deleteTask:R,addGroupAfter:G,closeGroup:D,moveTaskTo:C},e)})(function(e){var t=e.groupedTasks,r=e.updateTask,n=e.addTask,o=e.updateListName,s=e.deleteTask,u=e.addGroupAfter,i=e.closeGroup,c=e.moveTaskTo;return a.a.createElement(K.a,{onDragEnd:function(e){e.destination&&c(e.draggableId,e.destination.index,e.destination.droppableId)}},t.map(function(e,t){return a.a.createElement("div",{className:"okr-task-list",key:e.id||-1},a.a.createElement(x,{value:e.title,onChange:function(t){return o(t,e.id)},onClose:function(){return i(e.id)}}),a.a.createElement(K.c,{droppableId:e.id||-1},function(t,n){return a.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,style:(o=n.isDraggingOver,{background:o?"lightblue":"grey"})}),e.tasks.map(function(e,t){return a.a.createElement(K.b,{key:e.id,draggableId:e.id,index:t},function(t,n){return a.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),a.a.createElement($,{task:e,onWaste:function(e){return s(e)},key:e.id,disabled:e.disabled,onChange:function(e){return r(e)}}))})}),t.placeholder);var o}),a.a.createElement(U,{groupId:e.id,onComplete:function(e){return n(e)}}),a.a.createElement(q,{onAdd:function(){return u({title:"New Group"},e.id)}}))}))}),Y=function(e){var t=e.value,r=e.onChange;function n(e){r&&r(e)}return a.a.createElement("div",{className:"okr-key-result"},a.a.createElement("input",{type:"text",defaultValue:t,onChange:function(e){return n(e.target.value)},placeholder:"A key result..."}))},ee=function(e){var t=e.keyResults,r=void 0===t?[]:t,n=e.objective,o=void 0===n?"":n,s=e.onObjectiveChange,u=(e.onAddKeyResult,e.onKeyResultChange),i=r.map(function(e,t){return a.a.createElement(Y,{key:t,value:e,onChange:function(e){return u(e,t)}})});return a.a.createElement("div",{className:"okr-objective"},a.a.createElement("textarea",{type:"text",className:"okr-primary-objective",defaultValue:o,onChange:function(e){return t=e.target.value,void(s&&s(t));var t},placeholder:"Okr primary goal"}),i)};function te(e){return{groupedTasks:N(e),objective:e.okr.primaryObjective,keyResults:e.okr.keyResults}}var re=Object(u.b)(function(){return te},function(e){return Object(d.bindActionCreators)({updateObjective:S,updateKeyResult:P},e)})(function(e){var t=e.keyResults,r=e.objective,n=e.updateObjective,o=e.updateKeyResult;return a.a.createElement("div",{className:"okr-page"},a.a.createElement("div",{className:"okr-page__content"},a.a.createElement(ee,{keyResults:t,objective:r,onKeyResultChange:function(e,t){return o(e,t)},onObjectiveChange:function(e){return n(e)}}),a.a.createElement(X,null)))});var ne=function(){return a.a.createElement(u.a,{store:h},a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"})),a.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.f042623e.chunk.js.map