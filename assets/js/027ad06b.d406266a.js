"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4414],{56227:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var t=r(85893),a=r(11151),s=r(74866),l=r(85162);const i={title:"useWatcher with serial"},o=void 0,u={id:"tutorial/strategy/useSerialWatcher",title:"useWatcher with serial",description:"use hook",source:"@site/versioned_docs/version-v2/tutorial/05-strategy/11-useSerialWatcher.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/useSerialWatcher",permalink:"/v2/tutorial/strategy/useSerialWatcher",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/05-strategy/11-useSerialWatcher.md",tags:[],version:"v2",sidebarPosition:11,frontMatter:{title:"useWatcher with serial"},sidebar:"tutorial",previous:{title:"useRequest with serial",permalink:"/v2/tutorial/strategy/useSerialRequest"},next:{title:"retriable request",permalink:"/v2/tutorial/strategy/useRetriableRequest"}},c={},d=[{value:"Features",id:"features",level:2},{value:"Example",id:"example",level:2},{value:"Install",id:"install",level:2},{value:"use",id:"use",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Request error",id:"request-error",level:3},{value:"API",id:"api",level:2},{value:"Hook configuration",id:"hook-configuration",level:3},{value:"Responsive data",id:"responsive-data",level:3},{value:"Action function",id:"action-function",level:3},{value:"Event",id:"event",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"policy type",type:"info",children:(0,t.jsx)(n.p,{children:"use hook"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Before using extension hooks, make sure you are familiar with the basic usage of alova."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Status update triggers a set of serial requests, which is more concise and easy to use than ",(0,t.jsx)(n.a,{href:"/v2/tutorial/best-practice/skills",children:"serial request in best practice"}),", with unified loading status, error, and callback functions."]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A more concise and easy-to-use serial method;"}),"\n",(0,t.jsx)(n.li,{children:"Unified request status and callback function;"}),"\n",(0,t.jsx)(n.li,{children:"Status update triggers serial execution of multiple requests;"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/v2/tutorial/example/serial-request",children:"serial request"})}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(s.Z,{groupId:"framework",children:[(0,t.jsx)(l.Z,{value:"1",label:"vue",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-vue --save\n#yarn\nyarn add @alova/scene-vue\n\n"})})}),(0,t.jsx)(l.Z,{value:"2",label:"react",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-react --save\n#yarn\nyarn add @alova/scene-react\n\n"})})}),(0,t.jsx)(l.Z,{value:"3",label:"svelte",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-svelte --save\n#yarn\nyarn add @alova/scene-svelte\n\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"use",children:"use"}),"\n",(0,t.jsx)(n.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,t.jsxs)(n.p,{children:["Same usage as ",(0,t.jsx)(n.code,{children:"useWatcher"}),", except that the first parameter is changed to an array of handlers executed serially, and each handler will receive the response data of the previous request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {\n  // Serial loading status, all requests will be changed to false\n  loading,\n\n  // The response data of the last request\n  data,\n\n  // Any request error will record the error message here\n  error,\n\n  // Manually send a serial request\n  send,\n\n  // serial request success callback binding function\n  onSuccess,\n\n  // Serial request error callback binding function, any request error will trigger it\n  onError,\n\n  // Serial request completion callback binding function\n  onComplete\n} = useSerialWatcher(\n  [\n    // args is the parameter passed in by the send function\n    (...args) => request1(args),\n\n    // Starting from the second handler, the first parameter is the response data of the previous request, and args is received from the second\n    (response1, ...args) => request2(response1, args),\n    (response2, ...args) => request3(response2, args)\n  ],\n  [watchedState1, watchedState2],\n  {\n    immediate: true\n  }\n);\n\n// Manually trigger the request and pass parameters\nsend(1, 2, 3);\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is worth noting that the first item in the handler array can also be specified as a method instance, and the second item must be a function."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"useSerialRequest([\n  methodInstance,\n  (response1, ...args) => request2(response1, args),\n  (response2, ...args) => request3(response2, args)\n]);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"request-error",children:"Request error"}),"\n",(0,t.jsxs)(n.p,{children:["When any of the serial requests is wrong, ",(0,t.jsx)(n.code,{children:"onError"})," will be triggered, and its ",(0,t.jsx)(n.code,{children:"event.method"})," will point to the method instance of the request error."]}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"hook-configuration",children:"Hook configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Inherit all configurations of ",(0,t.jsx)(n.a,{href:"/api/core-hooks#usewatcher",children:(0,t.jsx)(n.strong,{children:"useWatcher"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"responsive-data",children:"Responsive data"}),"\n",(0,t.jsxs)(n.p,{children:["Inherit all responsive data from ",(0,t.jsx)(n.a,{href:"/api/core-hooks#usewatcher",children:(0,t.jsx)(n.strong,{children:"useWatcher"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"action-function",children:"Action function"}),"\n",(0,t.jsxs)(n.p,{children:["Inherit all action functions of ",(0,t.jsx)(n.a,{href:"/api/core-hooks#usewatcher",children:(0,t.jsx)(n.strong,{children:"useWatcher"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"event",children:"Event"}),"\n",(0,t.jsxs)(n.p,{children:["Inherit all events from ",(0,t.jsx)(n.a,{href:"/api/core-hooks#usewatcher",children:(0,t.jsx)(n.strong,{children:"useWatcher"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(90512);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>q});var t=r(67294),a=r(90512),s=r(12466),l=r(16550),i=r(20469),o=r(91980),u=r(67392),c=r(20812);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:r,groupId:a}),[v,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=u??v;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function q(e){const n=(0,m.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>l});var t=r(67294);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);