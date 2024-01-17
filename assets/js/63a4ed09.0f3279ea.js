"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2353],{1623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(5893),n=r(1151);const a={title:"Use on server side",sidebar_position:180},o=void 0,i={id:"tutorial/getting-started/server",title:"Use on server side",description:"v2.17.0+",source:"@site/docs/tutorial/02-getting-started/18-server.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/server",permalink:"/tutorial/getting-started/server",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/18-server.md",tags:[],version:"current",sidebarPosition:180,frontMatter:{title:"Use on server side",sidebar_position:180},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/tutorial/getting-started/typescript"},next:{title:"Response Cache",permalink:"/category/response-cache"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"version requirements",type:"info",children:(0,s.jsx)(t.p,{children:"v2.17.0+"})}),"\n",(0,s.jsxs)(t.p,{children:["alova supports the commonjs specification. When using alova on the server side, there is no need to use useHooks, so there is no need to set ",(0,s.jsx)(t.code,{children:"statesHook"}),". In addition, you can still enjoy all other features such as request sharing and response cache."]}),"\n",(0,s.jsx)(t.p,{children:"A simple usage example is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const { createAlova } = require('alova');\r\nconst GlobalFetch = require('alova/GlobalFetch');\r\n\r\nconst alova = createAlova({\r\n   requestAdapter: GlobalFetch();\r\n});\r\n\r\nawait alova.Get('/user/1');\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When using GlobalFetch in nodejs, the nodejs version requires ",(0,s.jsx)(t.code,{children:"v17.5"}),", or you can use ",(0,s.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-axios/",children:"axios request adapter"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const { createAlova } = require('alova');\r\nconst { axiosRequestAdapter } = require('@alova/adapter-axios');\r\n\r\nconst alova = createAlova({\r\n   requestAdapter: axiosRequestAdapter();\r\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var s=r(7294);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);