"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[260],{32631:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=s(85893),n=s(11151);const o={title:"Overview"},i=void 0,r={id:"tutorial/advanced/custom/README",title:"Overview",description:"alova has high scalability. In addition to providing common features such as core caching mechanism, request sharing mechanism and state management, it also provides various customization functions and middleware mechanisms, which can adapt to different js environments and customize request strategies. In the following chapters, we will introduce them in detail.",source:"@site/docs/tutorial/06-advanced/02-custom/README.md",sourceDirName:"tutorial/06-advanced/02-custom",slug:"/tutorial/advanced/custom/",permalink:"/tutorial/advanced/custom/",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-advanced/02-custom/README.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"tutorial",previous:{title:"Typescript",permalink:"/tutorial/advanced/in-depth/typescript"},next:{title:"Request Adapter",permalink:"/tutorial/advanced/custom/http-adapter"}},c={},l=[{value:"Custom Adapter",id:"custom-adapter",level:2},{value:"Custom client strategy",id:"custom-client-strategy",level:2},{value:"Custom server-side strategy",id:"custom-server-side-strategy",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"alova has high scalability. In addition to providing common features such as core caching mechanism, request sharing mechanism and state management, it also provides various customization functions and middleware mechanisms, which can adapt to different js environments and customize request strategies. In the following chapters, we will introduce them in detail."}),"\n",(0,a.jsx)(t.h2,{id:"custom-adapter",children:"Custom Adapter"}),"\n",(0,a.jsx)(t.p,{children:"In order to meet the running requirements of js in different environments, you can customize the request adapter, storage adapter, and even the state adapter of the UI framework, which will also be introduced in detail in the following chapters. Some adapter examples are listed below."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/alova/src/predefine/adapterFetch.ts",children:"fetch adapter"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/alova/src/defaults/cacheAdapter.ts",children:"localStorage storage adapter"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/statesHook/vue.ts",children:"vue states hook"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["You can also group multiple types of adapters into a collection, such as ",(0,a.jsx)(t.a,{href:"/resource/request-adapter/uniapp",children:"Uniapp adapter"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"custom-client-strategy",children:"Custom client strategy"}),"\n",(0,a.jsxs)(t.p,{children:["alova provides 10+ custom client strategy modules, but sometimes you may need to write your own strategy module. Usually, a custom request strategy is based on the combination of the three core useHooks of ",(0,a.jsx)(t.code,{children:"useRequest"}),", ",(0,a.jsx)(t.code,{children:"useWatcher"})," and ",(0,a.jsx)(t.code,{children:"useFetcher"}),", and writes ",(0,a.jsx)(t.a,{href:"/tutorial/client/in-depth/middleware",children:"middleware"})," and cache manipulation functions for them to control their request methods, so as to achieve various request strategies"]}),"\n",(0,a.jsx)(t.p,{children:"The following strategy modules are very representative, and it is strongly recommended that you refer to the source code for inspiration."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/scene/blob/main/packages/client/src/hooks/pagination/usePagination.ts",children:"source of usePagination"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/scene/blob/main/packages/client/src/hooks/useCaptcha.ts",children:"source of useCaptcha"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/scene/blob/main/packages/client/src/hooks/useForm.ts",children:"source of useForm"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"custom-server-side-strategy",children:"Custom server-side strategy"}),"\n",(0,a.jsxs)(t.p,{children:["The server-side strategy module is a simple function. The following is a ",(0,a.jsx)(t.code,{children:"Server hook"})," for request retry."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/scene/blob/main/packages/server/src/hooks/retry.ts",children:"Request retry"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var a=s(67294);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);