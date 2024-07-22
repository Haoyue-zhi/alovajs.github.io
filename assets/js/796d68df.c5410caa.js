"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8407],{29897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(85893),o=n(11151);const s={title:"Server Strategy"},a=void 0,i={id:"tutorial/advanced/custom/server-strategy",title:"Server Strategy",description:"Server strategy is also called Server hook, which is a decorated function of a method instance.",source:"@site/docs/tutorial/06-advanced/02-custom/04-server-strategy.md",sourceDirName:"tutorial/06-advanced/02-custom",slug:"/tutorial/advanced/custom/server-strategy",permalink:"/tutorial/advanced/custom/server-strategy",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-advanced/02-custom/04-server-strategy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Server Strategy"},sidebar:"tutorial",previous:{title:"Client Strategy",permalink:"/tutorial/advanced/custom/client-strategy"},next:{title:"States Hook",permalink:"/tutorial/advanced/custom/stateshook"}},c={},d=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Server strategy is also called ",(0,r.jsx)(t.code,{children:"Server hook"}),", which is a decorated function of a method instance."]}),"\n",(0,r.jsx)(t.p,{children:"The following is the specification of server hooks, which receives a method instance and returns a new method instance, so it is very convenient to combine multiple server hooks."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export interface AlovaServerHook<Options extends Record<string, any>> {\n  (method: Method, options: Options): Method;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Customizing ",(0,r.jsx)(t.code,{children:"Server hook"})," is very simple. The following is a simple request retry example."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { HookedMethod } from 'alova/server';\n\nconst retry = (method, options) => {\n  const { retry: maxRetryTimes = 3, delay = 1000 } = options;\n  let retryTimes = 0;\n\n  return new HookedMethod(method, forceRequest =>\n    method.send(forceRequest).then(\n      value => value,\n      error => {\n        if (retryTimes < maxRetryTimes) {\n          retryTimes += 1;\n          setTimeout(() => {\n            method.send(forceRequest).catch(noop);\n          }, delay);\n        }\n      }\n    )\n  );\n};\n\n// Usage\nconst userData = await retry(alova.Get('/api/user'), {\n  retry: 5,\n  delay: 1500\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(67294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);