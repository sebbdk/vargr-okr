(window.webpackJsonpokr=window.webpackJsonpokr||[]).push([[0],{101:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(14),s=r.n(o),u=(r(58),r(10)),i=r(42),c=r.n(i),d=r(1),l=r(43),p=r(44),f=r(16),b=r(8),k=r(2),g=r.n(k);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var v={primaryObjective:"Finish projects & improve skillset",keyResults:["Complete Math C","Complete 4 projects","Get detailed gold trading data for last 5 years"],taskGroups:[{title:"Current sprint!",id:1},{title:"Some future sprint!",id:2}],tasks:[{id:g()(),sort:1,title:"[OKR Sys] Add group",groupId:1,status:1,enabled:!1},{id:g()(),sort:2,title:"[OKR Sys] Close group",groupId:1,status:1,enabled:!1},{id:g()(),sort:3,title:"[OKR Sys] Drag tasks",groupId:1,status:1,enabled:!1},{id:g()(),sort:4,title:"[OKR Sys] Drop tasks into different sprint and sort",groupId:1,status:0,enabled:!1},{id:g()(),sort:5,title:"[OKR Sys] Delete tasks",groupId:1,status:1,enabled:!1},{id:g()(),sort:6,title:"[OKR Sys] Add tasks",groupId:1,status:1,enabled:!1},{id:g()(),sort:7,title:"[OKR Sys] Basic state",groupId:1,status:1,enabled:!1},{id:g()(),sort:8,title:"[OKR Sys] Basic UI",groupId:1,status:1,enabled:!1},{id:g()(),sort:9,title:"[OKR Sys] Basic task behavior",groupId:1,status:1,enabled:!1},{id:g()(),sort:10,title:"[OKR Sys] Save state to localstorage",groupId:1,status:1,enabled:!1},{id:g()(),sort:11,title:"[OKR Sys] Deploy to Github page",groupId:1,status:1,enabled:!1},{id:g()(),sort:12,title:"Sign up for Math C",groupId:2,status:0,enabled:!1},{id:g()(),sort:13,title:"Read up on first math module",groupId:2,status:0,enabled:!1},{id:g()(),sort:14,title:"GBZ audio wiring",groupId:2,status:0,enabled:!1},{id:g()(),sort:15,title:"Gift for the lady",groupId:2,status:1,enabled:!1},{id:g()(),sort:16,title:"some task \xc6\xd8\xc5",groupId:void 0,status:0,enabled:!1},{id:g()(),sort:17,title:"some task \xc6\xd8\xc5",groupId:void 0,status:0,enabled:!1}]},O={updateTask:Symbol("Update task"),addTask:Symbol("Add task"),updatePrimaryObjective:Symbol("Update primary objective"),updateKeyResult:Symbol("Update key result"),updateGroupTitle:Symbol("Update group title"),deleteTask:Symbol("Delete task"),addGroupAfter:Symbol("Add group after"),closeGroup:Symbol("close group"),moveTaskTo:Symbol("move task to"),updateState:Symbol("update state"),setAll:Symbol("set tasks")},h=r(7),j=r.n(h),w=r(11);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var P={UPDATE:Symbol("update")};function S(e,t){return function(){var r=Object(w.a)(j.a.mark(function r(n,a){var o,s;return j.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://strapi.sebb.dk/auth/local",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"identifier=".concat(e,"&password=").concat(t)});case 2:return o=r.sent,r.next=5,o.json();case 5:s=r.sent,n({type:P.UPDATE,data:I({},s)});case 7:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}()}var T={},C=Object(d.combineReducers)({okr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y({},v),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.setAll:return y({},e,{},t.data);case O.moveTaskTo:var r=y({},e.tasks.find(function(e){return e.id===t.taskId}),{groupId:-1===t.groupId?void 0:t.groupId}),n=e.tasks.filter(function(e){return e.id!==r.id}),a=n.filter(function(e){return e.groupId!==t.groupId}),o=n.filter(function(e){return e.groupId===t.groupId}).sort(function(e,t){return e.sort<t.sort?-1:1});return o.splice(t.index,0,r),o=o.map(function(e,t){return y({},e,{sort:t})}),y({},e,{tasks:[].concat(Object(f.a)(a),Object(f.a)(o))});case O.closeGroup:var s=e.tasks.map(function(e){return e.groupId!==t.id||1===e.status?e:y({},e,{groupId:void 0})}),u=e.taskGroups.map(function(e){return e.id!==t.id?e:y({},e,{deleted:!0})});return y({},e,{taskGroups:u,tasks:s});case O.updateGroupTitle:var i=e.taskGroups.map(function(e){return e.id===t.id?y({},e,{title:t.title}):e});return y({},e,{taskGroups:i});case O.updateKeyResult:var c=Object(f.a)(e.keyResults);return c[t.index]=t.keyResult,y({},e,{keyResults:c});case O.addGroupAfter:var d=e.taskGroups.find(function(e){return e.id===t.afterId}),l=e.taskGroups.indexOf(d),p=y({},t.group,{id:g()()}),b=Object(f.a)(e.taskGroups);return b.splice(l+1,0,p),y({},e,{taskGroups:b});case O.updatePrimaryObjective:return y({},e,{primaryObjective:t.primaryObjective});case O.deleteTask:return y({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.id})});case O.updateState:return y({},e,{},t.state);case O.updateTask:var k=e.tasks.map(function(e){return e.id===t.task.id?y({},e,{},t.task):e});return y({},e,{tasks:k});case O.addTask:var m=[].concat(Object(f.a)(e.tasks),[y({groupId:void 0,status:0},t.task,{id:t.task.id?t.task.id:g()(),sort:e.tasks.reduce(function(e,t){return t.sort>e?t.sort:e},0)+1})]);return y({},e,{tasks:m});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I({},T),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.UPDATE:return I({},e,{},t.data);default:return e}}}),R=Object(l.composeWithDevTools)({serialize:!0});var x=Object(d.createStore)(C,function(){var e=localStorage.getItem("okr");return e?JSON.parse(e):{}}(),R(Object(d.applyMiddleware)(p.a)));x.subscribe(function(e){localStorage.setItem("okr",JSON.stringify(x.getState()))});r(65),r(66);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var G=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")};function N(e){return function(){var t=Object(w.a)(j.a.mark(function t(r,n){var a,o,s,u,i;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={order:0,status:0,sort:0,title:"",user:n().auth.user._id},delete(o=A({},a,{},e,{group:e.groupId})).id,delete o.groupId,t.next=6,fetch("https://strapi.sebb.dk/okrtasks/".concat(e.id),{method:"put",headers:{Authorization:"Bearer "+n().auth.jwt,"Content-Type":"application/x-www-form-urlencoded"},body:G(o)});case 6:if(200!==(s=t.sent).status){t.next=15;break}return t.next=10,s.json();case 10:u=t.sent,i={id:u.id,title:u.title,status:u.status,sort:u.sort,groupId:u.group},r({type:O.updateTask,task:i}),t.next=16;break;case 15:console.error("Update task failed",s);case 16:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}function K(e){return function(){var t=Object(w.a)(j.a.mark(function t(r,n){var a,o,s,u,i;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={order:0,status:0,title:"",sort:0,user:n().auth.user._id},o=A({},a,{},e,{group:e.groupId}),t.next=4,fetch("https://strapi.sebb.dk/okrtasks",{method:"post",headers:{Authorization:"Bearer "+n().auth.jwt,"Content-Type":"application/x-www-form-urlencoded"},body:G(o)});case 4:return s=t.sent,t.next=7,s.json();case 7:u=t.sent,i={id:u.id,title:u.title,status:u.status,sort:u.sort,groupId:u.group},r({type:O.addTask,task:i});case 10:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}function _(e){return{type:O.updatePrimaryObjective,primaryObjective:e}}function B(e,t){return{type:O.updateKeyResult,keyResult:e,index:t}}function U(e,t,r){return{type:O.moveTaskTo,taskId:e,index:t,groupId:r}}function W(e,t){return{type:O.updateGroupTitle,title:e,id:t}}function z(e){return function(){var t=Object(w.a)(j.a.mark(function t(r,n){var a;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://strapi.sebb.dk/okrtasks/".concat(e),{method:"delete",headers:{Authorization:"Bearer "+n().auth.jwt}});case 2:a=t.sent,console.log(e),200===a.status?r({type:O.deleteTask,id:e}):console.error("Update task failed",a);case 5:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}function V(e,t){return console.log(e,t),{type:O.addGroupAfter,afterId:t,group:e}}function J(e){return{type:O.closeGroup,id:e}}function L(e){return{type:O.updateState,state:e}}function M(){return function(){var e=Object(w.a)(j.a.mark(function e(t,r){var n,a,o,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://strapi.sebb.dk/users/me",{method:"get",headers:{Authorization:"Bearer "+r().auth.jwt}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,o=a.okrtasks.map(function(e){return{id:e._id,title:e.title,status:e.status,sort:e.sort}}),s=a.okrtaskgroups.map(function(e){return{id:e._id,title:e.title}}),t({type:O.setAll,data:{tasks:o,taskGroups:s}});case 9:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()}var F=function(e){var t=e.okr.taskGroups.filter(function(e){return!0!==e.deleted}).map(function(t){var r=e.okr.tasks.filter(function(e){return e.groupId===t.id}).sort(function(e,t){return e.sort>t.sort?1:-1});return A({},t,{tasks:r})}),r=e.okr.tasks.filter(function(e){return void 0===e.groupId}).sort(function(e,t){return e.sort>t.sort?1:-1});return t.push({title:"Backlog tasks",tasks:r}),t},H=r(25),Z=function(e){var t=e.onChange,r=e.onClose,n=e.value;function o(e){t&&t(e)}return a.a.createElement("div",{className:"okr-list-name"},a.a.createElement("input",{type:"text",defaultValue:n,onChange:function(e){return o(e.target.value)},placeholder:"List name"}),a.a.createElement("button",{onClick:function(){window.confirm("Are you sure?")&&r()}},"Close group"))};function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Q=function(e){var t=e.onComplete,r=e.groupId,n=q({},{title:"",groupId:void 0===r?void 0:r});return a.a.createElement("div",{className:"okr-task okr-task--add"},a.a.createElement("span",{className:"okr-task__type","aria-label":"cat",role:"img"},"T"),a.a.createElement("input",{type:"text",placeholder:"Add a new task...",defaultValue:n.title,onChange:function(e){return t={title:e.target.value},void(n=q({},n,{},t));var t},onKeyPress:function(e){return function(e){13===e.charCode&&(t&&t(n),e.target.value="")}(e)}}))},X=r(45),Y=r(46),ee=r(51),te=r(47),re=r(52);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(r,!0).forEach(function(t){Object(b.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function oe(e){return{currentlyDraggin:e.okr.draggin}}var se=function(e){function t(e){var r;return Object(X.a)(this,t),(r=Object(ee.a)(this,Object(te.a)(t).call(this,e))).domRef=a.a.createRef(),r}return Object(re.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.disabled,r=ae({},this.props.task),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r=ae({},r,{},t),e.props.onChange&&e.props.onChange(r)},o=function(e,t,r){var n;return function(){var a=this,o=arguments,s=function(){n=null,r||e.apply(a,o)},u=r&&!n;clearTimeout(n),n=setTimeout(s,t),u&&e.apply(a,o)}}(n,500),s="okr-task";return 1===r.status&&(s+=" okr-task--done"),t||(s+=" okr-task--active"),a.a.createElement("div",{className:s,ref:this.domRef},a.a.createElement("div",{className:"okr-task__dragger"},a.a.createElement("span",{className:"okr-task__type","aria-label":"cat",role:"img"},"T"),a.a.createElement("input",{type:"text",onDoubleClick:function(e){var t=e.currentTarget;n({disabled:!1}),setTimeout(function(){t.focus()},50)},readOnly:t,onBlur:function(e){return n({disabled:!0})},onKeyDown:function(e){["Escape"].indexOf(e.key)>-1&&n({disabled:!0}),["Enter"].indexOf(e.key)>-1&&n({disabled:!t})},placeholder:"Something to do...",defaultValue:r.title,onChange:function(e){return o({title:e.target.value})}}),a.a.createElement("input",{type:"checkbox",defaultChecked:1===r.status,onChange:function(e){return n({status:e.target.checked?1:0})}}),a.a.createElement("span",{className:"okr-task__deletebtn",onClick:function(){window.confirm("Are you sure?")&&e.props.onWaste(e.props.task.id)}},"\ud83d\uddd1")))}}]),t}(a.a.Component),ue=Object(u.b)(function(){return oe},function(e){return Object(d.bindActionCreators)({updateState:L,moveTaskTo:U},e)})(se),ie=function(e){var t=e.onAdd,r=e.groupId;return a.a.createElement("div",{className:"okr-add-group"},a.a.createElement("button",{onClick:function(){return t(r)}},"Add group here"))};function ce(e){return{groupedTasks:F(e)}}var de=Object(u.b)(function(){return ce},function(e){return Object(d.bindActionCreators)({updateTask:N,addTask:K,updateListName:W,deleteTask:z,addGroupAfter:V,closeGroup:J,moveTaskTo:U},e)})(function(e){var t=e.groupedTasks,r=e.updateTask,n=e.addTask,o=e.updateListName,s=e.deleteTask,u=e.addGroupAfter,i=e.closeGroup,c=e.moveTaskTo;return a.a.createElement(H.a,{onDragEnd:function(e){e.destination&&c(e.draggableId,e.destination.index,e.destination.droppableId)}},t.map(function(e,t){return a.a.createElement("div",{className:"okr-task-list",key:e.id||-1},a.a.createElement(Z,{value:e.title,onChange:function(t){return o(t,e.id)},onClose:function(){return i(e.id)}}),a.a.createElement(H.c,{droppableId:e.id||-1},function(t,n){return a.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,style:(o=n.isDraggingOver,{background:o?"lightblue":"grey"})}),e.tasks.map(function(e,t){return a.a.createElement(H.b,{key:e.id,draggableId:e.id,index:t},function(t,n){return a.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),a.a.createElement(ue,{task:e,onWaste:function(e){return s(e)},key:e.id,disabled:e.disabled,onChange:function(e){return r(e)}}))})}),t.placeholder);var o}),a.a.createElement(Q,{groupId:e.id,onComplete:function(e){return n(e)}}),a.a.createElement(ie,{onAdd:function(){return u({title:"New Group"},e.id)}}))}))}),le=function(e){var t=e.value,r=e.onChange;function n(e){r&&r(e)}return a.a.createElement("div",{className:"okr-key-result"},a.a.createElement("input",{type:"text",defaultValue:t,onChange:function(e){return n(e.target.value)},placeholder:"A key result..."}))},pe=function(e){var t=e.keyResults,r=void 0===t?[]:t,n=e.objective,o=void 0===n?"":n,s=e.onObjectiveChange,u=(e.onAddKeyResult,e.onKeyResultChange),i=r.map(function(e,t){return a.a.createElement(le,{key:t,value:e,onChange:function(e){return u(e,t)}})});return a.a.createElement("div",{className:"okr-objective"},a.a.createElement("textarea",{type:"text",className:"okr-primary-objective",defaultValue:o,onChange:function(e){return t=e.target.value,void(s&&s(t));var t},placeholder:"Okr primary goal"}),i)};function fe(e){return{groupedTasks:F(e),objective:e.okr.primaryObjective,keyResults:e.okr.keyResults}}var be=Object(u.b)(function(){return fe},function(e){return Object(d.bindActionCreators)({updateObjective:_,updateKeyResult:B,login:S,getData:M},e)})(function(e){var t=e.keyResults,r=e.objective,n=e.updateObjective,o=e.updateKeyResult,s=e.login,u=e.getData;return a.a.createElement("div",{className:"okr-page"},a.a.createElement("div",{className:"okr-page__content"},a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return function(){var e=prompt("What is your username?"),t=prompt("What is your password?");s(e,t)}()}},"Login"),a.a.createElement("button",{onClick:function(){return u()}},"Get data"),a.a.createElement(pe,{keyResults:t,objective:r,onKeyResultChange:function(e,t){return o(e,t)},onObjectiveChange:function(e){return n(e)}}),a.a.createElement(de,null)))});var ke=function(){return a.a.createElement(u.a,{store:x},a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"})),a.a.createElement(be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},53:function(e,t,r){e.exports=r(101)},58:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){}},[[53,1,2]]]);
//# sourceMappingURL=main.f19e7abc.chunk.js.map