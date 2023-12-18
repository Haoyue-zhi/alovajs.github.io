"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[32],{8617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(5893),r=a(1151),s=a(4866),o=a(5162);const l={title:"Manage extra states",sidebar_position:70},i=void 0,d={id:"tutorial/advanced/manage-extra-states",title:"Manage extra states",description:"In the previous [Cross Page/Module Update Response Status] (/learning/update-response-data-across-modules) chapter, we introduced how to update the response status across pages or modules, but in this chapter we It only introduces updating the data state returned by useRequest and useWatcher through updateState, the value of data is always consistent with the response data, but in many cases we will use additional states(such as state A) to display data, and After the request is successful, the data data is appended to the additional state A, such as the pagination scheme of pull-down loading. In this case, we need to manage the additional state A so that it can be updated across pages/modules.",source:"@site/docs/tutorial/05-advanced/07-manage-extra-states.md",sourceDirName:"tutorial/05-advanced",slug:"/tutorial/advanced/manage-extra-states",permalink:"/tutorial/advanced/manage-extra-states",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-advanced/07-manage-extra-states.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Manage extra states",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"cache logger",permalink:"/tutorial/advanced/cache-logger"},next:{title:"Server-Side Rendering(SSR)",permalink:"/tutorial/advanced/ssr"}},u={},c=[{value:"Update a single state",id:"update-a-single-state",level:2},{value:"Update multiple states",id:"update-multiple-states",level:2},{value:"shorthand for data status update",id:"shorthand-for-data-status-update",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In the previous [Cross Page/Module Update Response Status] (/learning/update-response-data-across-modules) chapter, we introduced how to update the response status across pages or modules, but in this chapter we It only introduces updating the ",(0,n.jsx)(t.code,{children:"data"})," state returned by ",(0,n.jsx)(t.code,{children:"useRequest"})," and ",(0,n.jsx)(t.code,{children:"useWatcher"})," through ",(0,n.jsx)(t.code,{children:"updateState"}),", the value of data is always consistent with the response data, but in many cases we will use additional states(such as state A) to display data, and After the request is successful, the data data is appended to the additional state A, such as the pagination scheme of pull-down loading. In this case, we need to manage the additional state A so that it can be updated across pages/modules."]}),"\n",(0,n.jsx)(t.h2,{id:"update-a-single-state",children:"Update a single state"}),"\n",(0,n.jsxs)(t.p,{children:["Additional states can be managed via ",(0,n.jsx)(t.code,{children:"managedStates"})," when called by the use hook, and automatically assigned the state name to update it when ",(0,n.jsx)(t.code,{children:"updateState"})," is called in other modules/pages."]}),"\n",(0,n.jsxs)(s.Z,{groupId:"framework",children:[(0,n.jsxs)(o.Z,{value:"1",label:"vue composition",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="A.vue"',children:"const todoList = page =>\r\n  alova.Get('/todo', {\r\n    name: 'todoList'\r\n  });\r\n\r\nconst allTodo = ref([]);\r\nuseRequest(todoList, {\r\n  //...\r\n\r\n  // highlight-start\r\n  // manage allTodo as additional state\r\n  managedStates: {\r\n    allTodo\r\n  }\r\n  // highlight-end\r\n});\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="B.vue"',children:"const handleSuccess = () => {\r\n  // highlight-start\r\n  // Pass in an object and specify the state name to look up\r\n  updateState('todoList', {\r\n    allTodo: allTodoData => {\r\n      // Add a new todo item\r\n      allTodoData.push({\r\n        title: 'new todo',\r\n        time: '10:00'\r\n      });\r\n      return allTodoData;\r\n    }\r\n  });\r\n  // highlight-end\r\n};\n"})})]}),(0,n.jsxs)(o.Z,{value:"2",label:"react",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="A.jsx"',children:"const PageA = () => {\r\n   const todoList = page =>\r\n     alova.Get('/todo', {\r\n       name: 'todoList'\r\n     });\r\n\r\n   const [allTodo, setAllTodo] = allTodoState = useState([]);\r\n   useRequest(todoList, {\r\n     //...\r\n\r\n     // highlight-start\r\n     // manage allTodo as additional state\r\n     managedStates: {\r\n       allTodo: allTodoState\r\n     }\r\n     // highlight-end\r\n   });\r\n\r\n   return (\r\n     //...\r\n   );\r\n}\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="B.jsx"',children:"const PageB = () => {\r\n   //...\r\n   const handleSuccess = () => {\r\n     // highlight-start\r\n     // Pass in an object and specify the state name to look up\r\n     updateState('todoList', {\r\n       allTodo: allTodoData => {\r\n         // Add a new todo item\r\n         allTodoData.push({\r\n           title: 'new todo',\r\n           time: '10:00'\r\n         });\r\n         return allTodoData;\r\n       }\r\n     });\r\n     // highlight-end\r\n   };\r\n\r\n   return (\r\n     //...\r\n   );\r\n}\n"})})]}),(0,n.jsxs)(o.Z,{value:"3",label:"svelte",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="A.svelte"',children:"const todoList = page =>\r\n  alova.Get('/todo', {\r\n    name: 'todoList'\r\n  });\r\n\r\nconst allTodo = ref([]);\r\nuseRequest(todoList, {\r\n  //...\r\n\r\n  // highlight-start\r\n  // manage allTodo as additional state\r\n  managedStates: {\r\n    allTodo\r\n  }\r\n  // highlight-end\r\n});\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="B.svelte"',children:"const handleSuccess = () => {\r\n  // highlight-start\r\n  // Pass in an object and specify the state name to look up\r\n  updateState('todoList', {\r\n    allTodo: allTodoData => {\r\n      // Add a new todo item\r\n      allTodoData.push({\r\n        title: 'new todo',\r\n        time: '10:00'\r\n      });\r\n      return allTodoData;\r\n    }\r\n  });\r\n  // highlight-end\r\n};\n"})})]}),(0,n.jsx)(o.Z,{value:"4",label:"vue options",children:(0,n.jsx)(t.admonition,{title:"Note",type:"info",children:(0,n.jsx)(t.p,{children:"Not support to manage additional states."})})})]}),"\n",(0,n.jsx)(t.h2,{id:"update-multiple-states",children:"Update multiple states"}),"\n",(0,n.jsxs)(t.p,{children:["In the above example, we implemented the update of a single ",(0,n.jsx)(t.code,{children:"allTodo"})," state across pages. In fact, any number of states can be updated at the same time through the object description method of ",(0,n.jsx)(t.code,{children:"updateState"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"updateState('todoList', {\r\n  state1: state1Data => {\r\n    //...\r\n  },\r\n  state2: state2Data => {\r\n    //...\r\n  },\r\n  state3: state3Data => {\r\n    //...\r\n  }\r\n  //...\r\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["It should be noted that the above 3 additional states need to be managed through the ",(0,n.jsx)(t.code,{children:"managedStates"})," property before updating."]}),"\n",(0,n.jsx)(t.h2,{id:"shorthand-for-data-status-update",children:"shorthand for data status update"}),"\n",(0,n.jsx)(t.p,{children:"When only updating the data state, you can directly pass in the callback function instead of specifying it as an object."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"updateState('todoList', {\r\n  data: dataRaw => {\r\n    //...\r\n  }\r\n});\r\n\r\n// The following are shorthand\r\nupdateState('todoList', dataRaw => {\r\n  //...\r\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var n=a(4334);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7294),r=a(4334),s=a(2466),o=a(6550),l=a(469),i=a(1980),d=a(7392),u=a(12);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,c]=g({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=d??m;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(5893);function x(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),r=l[a].value;r!==n&&(d(t),o(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:c,onClick:u,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,v.jsx)(w,{...e,children:c(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>o});var n=a(7294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);