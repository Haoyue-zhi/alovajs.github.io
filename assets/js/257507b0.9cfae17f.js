"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8291],{2356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(5893),s=n(1151);const o={title:"Response states operation",sidebar_position:50},r=void 0,i={id:"api/states",title:"Response states operation",description:"updateState",source:"@site/docs/api/05-states.md",sourceDirName:"api",slug:"/api/states",permalink:"/api/states",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/api/05-states.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Response states operation",sidebar_position:50},sidebar:"apiSidebar",previous:{title:"Cache operation",permalink:"/api/cache"},next:{title:"Global configuration",permalink:"/api/global-config"}},d={},l=[{value:"updateState",id:"updatestate",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"updatestate",children:"updateState"}),"\n",(0,a.jsx)(t.p,{children:"Manually update existing response data or additional status under any module/page."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"\u26a0\ufe0f Please make sure the component is not destroyed"})}),"\n",(0,a.jsxs)(t.p,{children:["By default, ",(0,a.jsx)(t.code,{children:"updateState"})," will look for the response state created by alova's useHooks when sending a request, but to prevent memory overflow, the destruction of a component will also recycle all the states created internally, so please make sure you use ",(0,a.jsx)(t.code,{children:"updateState"})," It is hoped that the container component corresponding to the updated response status has not been destroyed, otherwise the corresponding response status will not be found and the update will fail."]}),"\n",(0,a.jsx)(t.p,{children:"This problem often occurs when updating status across pages, because what we tend to overlook when the page jumps is that the previous page has been destroyed by default. Therefore, if you want to update status across pages, here are two suggestions :"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Persist the page components to ensure that the updated status can still be found;"}),"\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.a,{href:"/tutorial/cache/set-and-query",children:"setCache"})," instead of ",(0,a.jsx)(t.code,{children:"updateState"}),". The principle is that when the request for the previous page exists in the cache, update its cache to ensure that when the page is created again, the The request can hit the updated cache to achieve the same effect."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Go to ",(0,a.jsx)(t.a,{href:"/tutorial/advanced/update-across-components",children:"Cross-page/module update response states"})," for details."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["To use updateState to manage extra states, please refer to ",(0,a.jsx)(t.a,{href:"/tutorial/advanced/manage-extra-states",children:"Extra State Management"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"type"})}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"type MethodFilter =\n  | string\n  | RegExp\n  | {\n      name?: string | RegExp;\n      filter?: MethodFilterHandler;\n      alova?: Alova<any, any, any, any, any>;\n    };\nfunction updateState(\n  matcher: Method | MethodFilter,\n  handleUpdate: UpdateStateCollection<Response>['data'] | UpdateStateCollection<Response>,\n  options?: UpdateOptions\n): boolean;\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"matcher"}),": The value is method instance, method name string, method name regular expression, it can also be set to ",(0,a.jsx)(t.a,{href:"/tutorial/advanced/method-matcher",children:"method instance matcher"}),", if it matches the qualified method, ",(0,a.jsx)(t.code,{children:"handleUpdate"})," will be called."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"handleUpdate"}),": update function or update function collection. If it is a function collection, the corresponding update function on the collection will be called and the return value will be used as the update result."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"options"}),": optional options."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"onMatch"}),(0,a.jsx)(t.td,{children:"Function"}),(0,a.jsx)(t.td,{children:"After matching method, the function will be called"})]})})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"return"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Whether the update is successful."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"useRequest"})," in page or component A to send a request and get the response data."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const { data } = useRequest(\n  alova.Get('/api/user', {\n    name: 'user'\n  })\n);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"updateState"})," in page or component B to update the response state."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { updateState } from 'alova';\n\n// Match by method instance\nupdateState(alova.Get('/api/user'), oldData => {\n   return [\n    ...oldData,\n     {\n       id: 10000,\n       name: 'Alova',\n     },\n   ]\n});\n\n// Match by method name\nupdateState('user', oldData => {\n   return [\n   ...oldData,\n     {\n       id: 10000,\n       name: 'Alova',\n     },\n   ];\n}\n\n// Regular matching through method name\nupdateState(/^us/, oldData => {\n   return [\n   ...oldData,\n     {\n       id: 10000,\n       name: 'Alova',\n     },\n   ];\n})\n\n// Match through method instance matcher\nupdateState({\n   name: 'user',\n   filter(method, i, methods) {\n     return methods.length === i + 1;\n   }\n}, oldData => {\n   return [\n  ...oldData,\n     {\n       id: 10000,\n       name: 'Alova',\n     },\n   ];\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);