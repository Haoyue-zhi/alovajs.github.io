"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6902],{46895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(85893),o=n(11151);n(74866),n(85162);const r={title:"\u6b65\u9aa41-\u4ee5\u4fdd\u5b88\u8bf7\u6c42\u5b9e\u73b0\u529f\u80fd"},s=void 0,i={id:"tutorial/client/strategy/sensorless-data-interaction/conservative-request",title:"\u6b65\u9aa41-\u4ee5\u4fdd\u5b88\u8bf7\u6c42\u5b9e\u73b0\u529f\u80fd",description:"\u4ee5 Todo \u7ba1\u7406\u4e3a\u793a\u4f8b\uff0c\u6765\u5b9e\u73b0 Todo \u5728\u65e0\u611f\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u7684\u521b\u5efa\u3001\u7f16\u8f91\u3001\u5220\u9664\u7b49\u529f\u80fd\uff0c\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\u5c06\u63d0\u4f9b\u8bf7\u6c42\u76f8\u5173\u7684\u5173\u952e\u4ee3\u7801\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-client/01-strategy/09-sensorless-data-interaction/04-conservative-request.md",sourceDirName:"tutorial/03-client/01-strategy/09-sensorless-data-interaction",slug:"/tutorial/client/strategy/sensorless-data-interaction/conservative-request",permalink:"/zh-CN/tutorial/client/strategy/sensorless-data-interaction/conservative-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/09-sensorless-data-interaction/04-conservative-request.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u6b65\u9aa41-\u4ee5\u4fdd\u5b88\u8bf7\u6c42\u5b9e\u73b0\u529f\u80fd"},sidebar:"tutorial",previous:{title:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",permalink:"/zh-CN/tutorial/client/strategy/sensorless-data-interaction/start-silent-factory"},next:{title:"\u6b65\u9aa42-\u8c03\u6574\u54cd\u5e94\u5904\u7406",permalink:"/zh-CN/tutorial/client/strategy/sensorless-data-interaction/modify-response"}},l={},c=[{value:"\u521b\u5efa alova \u5b9e\u4f8b\u548c\u76f8\u5173 method",id:"\u521b\u5efa-alova-\u5b9e\u4f8b\u548c\u76f8\u5173-method",level:2},{value:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",id:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",level:2},{value:"\u52a0\u8f7d Todo \u5217\u8868",id:"\u52a0\u8f7d-todo-\u5217\u8868",level:2},{value:"\u8fdb\u5165 Todo \u521b\u5efa/\u7f16\u8f91\u9875",id:"\u8fdb\u5165-todo-\u521b\u5efa\u7f16\u8f91\u9875",level:2},{value:"\u521b\u5efa/\u7f16\u8f91 Todo \u9879",id:"\u521b\u5efa\u7f16\u8f91-todo-\u9879",level:2},{value:"\u5220\u9664 Todo \u9879",id:"\u5220\u9664-todo-\u9879",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"\u4ee5 Todo \u7ba1\u7406\u4e3a\u793a\u4f8b\uff0c\u6765\u5b9e\u73b0 Todo \u5728\u65e0\u611f\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u7684\u521b\u5efa\u3001\u7f16\u8f91\u3001\u5220\u9664\u7b49\u529f\u80fd\uff0c\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\u5c06\u63d0\u4f9b\u8bf7\u6c42\u76f8\u5173\u7684\u5173\u952e\u4ee3\u7801\u3002"}),"\n",(0,a.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(t.strong,{children:"useSQRequest"})," \u6765\u66ff\u4ee3 alova \u63d0\u4f9b\u7684 ",(0,a.jsx)(t.strong,{children:"useRequest"}),"\uff0c\u63a5\u4e0b\u6765\u5148\u4ee5\u6700\u5e38\u89c1\u7684\u4fdd\u5b88\u8bf7\u6c42\u6a21\u5f0f\u6765\u5b9e\u73b0\uff0c\u518d\u4e00\u6b65\u4e00\u6b65\u5904\u7406\u65e0\u611f\u4ea4\u4e92\u6a21\u5f0f\u7684\u517c\u5bb9\u6027\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u521b\u5efa-alova-\u5b9e\u4f8b\u548c\u76f8\u5173-method",children:"\u521b\u5efa alova \u5b9e\u4f8b\u548c\u76f8\u5173 method"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="api.js"',children:"import { createAlova } from 'alova';\n\nexport const alovaInst = createAlova({\n  /*...*/\n});\n\n/** \u52a0\u8f7dtodo\u5217\u8868 */\nconst todoList = () => alovaInst.Get('/todo');\n\n/** \u52a0\u8f7dtodo\u8be6\u60c5 */\nconst todoDetail = id =>\n  alovaInst.Get('/todo', {\n    params: { id }\n  });\n\n/** \u521b\u5efa\u3001\u7f16\u8f91todo\u9879 */\nconst createOrEditTodo = (data, id) =>\n  alovaInst.Post('/todo', {\n    data,\n    id\n  });\n\n/** \u5220\u9664todo\u9879 */\nconst deleteTodo = id => alovaInst.Delete('/todo', { id });\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",children:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="main.js"',children:"import { bootSilentFactory } from 'alova/client';\nimport { alovaInst } from './api.js';\n\nbootSilentFactory({\n  alova: alovaInst\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u52a0\u8f7d-todo-\u5217\u8868",children:"\u52a0\u8f7d Todo \u5217\u8868"}),"\n",(0,a.jsx)(t.p,{children:"\u4ee5\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u52a0\u8f7d\u5e76\u5c55\u793a\u9875\u9762\u6570\u636e"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest } from 'alova/client';\nimport { todoList } from './api.js';\nconst { data, loading, error } = useSQRequest(todoList, {\n  initialData: []\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u8fdb\u5165-todo-\u521b\u5efa\u7f16\u8f91\u9875",children:"\u8fdb\u5165 Todo \u521b\u5efa/\u7f16\u8f91\u9875"}),"\n",(0,a.jsx)(t.p,{children:"\u521b\u5efa todo \u9879\u65f6\uff0cid \u4e3a\u7a7a\uff0c\u4e0d\u53d1\u9001\u8be6\u60c5\u83b7\u53d6\u8bf7\u6c42\uff0c\u7f16\u8f91 todo \u9879\u65f6\uff0cid \u6709\u503c\uff0c\u5c06\u83b7\u53d6\u8be6\u60c5\u6570\u636e\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest } from 'alova/client';\nimport { todoDetail } from './api.js';\n\nconst id = /* todo id */;\nconst { loading, data } = useSQRequest(() => todoDetail(id), {\n  initialData: {\n    title: '',\n    time: new Date()\n  },\n  immediate: !!id\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u521b\u5efa\u7f16\u8f91-todo-\u9879",children:"\u521b\u5efa/\u7f16\u8f91 Todo \u9879"}),"\n",(0,a.jsx)(t.p,{children:"\u901a\u8fc7\u63d0\u4ea4\u4e8b\u4ef6\u89e6\u53d1\u8bf7\u6c42\uff0c\u63d0\u4ea4\u6210\u529f\u540e\u8c03\u7528 fetch \u91cd\u65b0\u62c9\u53d6\u6700\u65b0\u7684\u5217\u8868\u6570\u636e\uff0c\u754c\u9762\u5c06\u81ea\u52a8\u5c55\u793a\u6700\u65b0\u6570\u636e\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { useFetcher } from 'alova';\nimport { useSQRequest } from 'alova/client';\nimport { createOrEditTodo, todoList } from './api.js';\n\nconst id = /* todo id */;\nconst { loading, data, send, onSuccess } = useSQRequest(createOrEditTodo, {\n  immediate: false,\n});\n\nconst { fetch } = useFetcher();\nonSuccess(() => {\n  // \u91cd\u65b0\u62c9\u53d6\u5217\u8868\u6570\u636e\n  fetch(todoList);\n})\n\n// \u63d0\u4ea4\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\nconst handleSubmit = newData => {\n  send(newData, id);\n};\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u5220\u9664-todo-\u9879",children:"\u5220\u9664 Todo \u9879"}),"\n",(0,a.jsx)(t.p,{children:"\u901a\u8fc7 id \u5220\u9664\u5bf9\u5e94\u7684 todo \u9879"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest } from 'alova/client';\nimport { deleteTodo, todoList } from './api.js';\n\nconst { loading, data, send, onSuccess } = useSQRequest(deleteTodo, {\n  immediate: false\n});\n\nconst { fetch } = useFetcher();\nonSuccess(() => {\n  // \u91cd\u65b0\u62c9\u53d6\u5217\u8868\u6570\u636e\n  fetch(todoList);\n});\n\n// \u4e8b\u4ef6\u56de\u8c03\u89e6\u53d1\u5220\u9664\u8bf7\u6c42\nconst handleDelete = deletingId => {\n  send(deletingId);\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u81f3\u6b64\uff0c\u4e00\u4e2a\u7b80\u5355\u7684 Todo \u5217\u8868\u7ba1\u7406\u7684\u76f8\u5173\u8bf7\u6c42\u529f\u80fd\u5c31\u5b8c\u6210\u4e86\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u5f00\u59cb\u5bf9\u5b83\u8fdb\u884c\u6539\u9020\uff0c\u6765\u517c\u5bb9\u65e0\u611f\u4ea4\u4e92\u6a21\u5f0f\u3002"})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(90512);const o={tabItem:"tabItem_Ymn6"};var r=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(67294),o=n(90512),r=n(12466),s=n(16550),i=n(20469),l=n(91980),c=n(67392),u=n(20812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=p({queryString:n,groupId:o}),[v,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),b=(()=>{const e=c??v;return m({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==a&&(c(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function T(e){const t=(0,f.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(67294);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);