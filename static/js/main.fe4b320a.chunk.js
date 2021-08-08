(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,,function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(1),c=s(4),a=s.n(c),i=s(2),o=(s(9),"".concat("/to-do-app","/assets/")),r="active",l="done",u="All",d="Active",j="Completed",h="taskList",b=[u,d,j],f=(s(10),s(0));function m(t){var e=t.isActive,s=t.onClick,n=t.title;return Object(f.jsx)("button",{className:"tab-button ".concat(e?"tab-button--selected":""),onClick:s,children:n})}s(12);function O(t){var e=t.activeSection,s=t.setActiveSection;return Object(f.jsx)("nav",{className:"app-nav",children:b.map((function(t){var n=e===t;return Object(f.jsx)(m,{isActive:n,onClick:function(){s(t)},title:t},t)}))})}s(13);function v(t){var e=t.taskList,s=t.task,c=t.setTaskList,a=t.setTask,i=Object(n.useRef)();return Object(f.jsxs)("form",{className:"form-container",onSubmit:function(t){t.preventDefault();var n=e.concat({id:+new Date,title:s,status:r,avoidDelay:!0});c(n),a(""),i.current.focus()},children:[Object(f.jsx)("input",{className:"input-add",type:"text",name:"add-details",placeholder:"add details",value:s,required:!0,onChange:function(t){a(t.target.value)},ref:i}),Object(f.jsx)("button",{className:"action-button action-button--add",children:"Add"})]})}s(14),s(15);function p(t){var e=t.taskList,s=t.setTaskList,n=t.setShowDeleteTaskConfirmation,c=t.taskItem,a=t.position,i=t.avoidDelay,u="done"===c.status,d=a<=10&&!i?{animationDelay:"".concat(.3*a,"s")}:{};return Object(f.jsxs)("li",{className:"item-task",style:d,children:[Object(f.jsxs)("label",{htmlFor:"task-".concat(c.id),className:"item-checkbox",title:c.title,children:[Object(f.jsx)("input",{type:"checkbox",name:"task-".concat(c.id),id:"task-".concat(c.id),className:"item-checkbox",checked:u,onChange:function(){var t=u?r:l,n=e.map((function(e){return c.id===e.id&&(e.status=t),e}));s(n)}}),Object(f.jsx)("span",{className:"item-title",children:c.title})]}),Object(f.jsx)("button",{className:"trash-button",onClick:function(){n({message:'Are you sure you want to delete "'.concat(c.title,'"?'),show:!0,handleOnYes:function(){var t=e.filter((function(t){return t.id!==c.id}));s(t)}})},children:Object(f.jsx)("svg",{width:"59",height:"80",viewBox:"0 0 59 80",className:"trashcan-icon",children:Object(f.jsx)("use",{href:"".concat(o,"vectors/trashcan.svg#trashcan")})})})]})}function k(t){var e=t.taskList,s=t.setTaskList,n=t.filteredTasks,c=t.setShowDeleteTaskConfirmation;return Object(f.jsx)("ul",{className:"list-task",children:n.map((function(t,n){return Object(f.jsx)(p,{avoidDelay:t.avoidDelay,position:n,taskItem:t,taskList:e,setTaskList:s,setShowDeleteTaskConfirmation:c},t.id)}))})}s(16);function x(t){var e=t.setTaskList,s=t.setShowDeletionConfirmation;return Object(f.jsx)("footer",{className:"app-footer",children:Object(f.jsxs)("button",{className:"action-button action-button--delete",onClick:function(){s({message:"Are you sure you want to delete all?",show:!0,handleOnYes:function(){e([])}})},children:[Object(f.jsx)("svg",{width:"59",height:"80",viewBox:"0 0 59 80",className:"trashcan-icon",children:Object(f.jsx)("use",{href:"".concat(o,"vectors/trashcan.svg#trashcan")})}),"Delete all"]})})}s(17);function g(t){var e=t.onClose,s=t.question,n=t.handleOnYes,c=t.isOpen,a=function(){return e({message:s,show:!1})};return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{onClick:a,className:"confirmation-wrapper ".concat(c?"confirmation-wrapper--open":"")}),Object(f.jsxs)("div",{className:"message-container ".concat(c?"message-container--open":""),children:[Object(f.jsx)("button",{className:"close-button",onClick:a,children:Object(f.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",children:Object(f.jsx)("use",{href:"".concat(o,"vectors/cross-icon.svg#cross-icon")})})}),Object(f.jsx)("p",{className:"delete-confirmation-message",children:s}),Object(f.jsxs)("div",{className:"buttons-confirmation-container",children:[Object(f.jsx)("button",{onClick:function(){n(),a()},className:"action-button",children:"Yes"}),Object(f.jsx)("button",{onClick:a,className:"action-button",children:"No"})]})]})]})}s(18);function N(){return Object(f.jsxs)("p",{className:"copyright-text",children:["created by ",Object(f.jsx)("a",{href:"https://silpagui.github.io/",children:"silpagui"})," - devChallenges.io"]})}function w(){var t=Object(n.useState)(u),e=Object(i.a)(t,2),s=e[0],c=e[1],a=Object(n.useState)(function(){try{var t=localStorage.getItem(h);return JSON.parse(t)}catch(e){console.warn("getTaskListFromCache","Something happened")}}()||[]),o=Object(i.a)(a,2),b=o[0],m=o[1],p=Object(n.useState)(""),w=Object(i.a)(p,2),C=w[0],y=w[1],S=Object(n.useState)({message:"",handleOnYes:function(){},show:!1}),T=Object(i.a)(S,2),L=T[0],D=T[1],A=b.filter((function(t){var e=s===j&&t.status===l,n=s===d&&t.status===r;return e||n||s===u}));return Object(n.useEffect)((function(){!function(t){try{localStorage.setItem(h,JSON.stringify(t.map((function(t){return{id:t.id,status:t.status,title:t.title}}))))}catch(e){console.warn("setTaskListToCache","Something happened")}}(b)}),[b]),Object(n.useEffect)((function(){document.getElementsByTagName("body")[0].style.overflow=L.show?"hidden":""}),[L]),Object(f.jsxs)("div",{className:"app-container",children:[Object(f.jsxs)("div",{className:"content-container",children:[Object(f.jsx)("h1",{className:"title",children:"#todo"}),Object(f.jsx)(O,{activeSection:s,setActiveSection:c}),Object(f.jsx)(v,{taskList:b,task:C,setTaskList:m,setTask:y}),Object(f.jsx)(k,{taskList:b,setTaskList:m,filteredTasks:A,setShowDeleteTaskConfirmation:D}),s===j&&0!==A.length&&Object(f.jsx)(x,{setShowDeletionConfirmation:D,setTaskList:m}),Object(f.jsx)(N,{})]}),Object(f.jsx)(g,{isOpen:L.show,onClose:D,question:L.message,handleOnYes:L.handleOnYes})]})}s(19);a.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.fe4b320a.chunk.js.map