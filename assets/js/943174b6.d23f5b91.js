"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1371],{8121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var n=a(85893),o=a(11151),s=a(74866),l=a(85162),r=a(5502);const i="import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\n\nconst alovaInstance = createAlova({\n  requestAdapter: GlobalFetch()\n});\nalovaInstance\n  .Get('https://jsonplaceholder.typicode.com/todos/1')\n  .then(response => response.text())\n  .then(data => {\n    app.innerHTML = data;\n  });\n",c="import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\n\nconst alovaInstance = createAlova({\n  requestAdapter: GlobalFetch()\n});\nalovaInstance\n  .Post('https://jsonplaceholder.typicode.com/posts', {\n    title: 'foo',\n    body: 'bar',\n    userId: 1\n  })\n  .then(response => response.text())\n  .then(data => {\n    app.innerHTML = data;\n  });\n",d={title:"Quick Start"},p=void 0,h={id:"tutorial/getting-started/quick-start",title:"Quick Start",description:"If you haven\u2019t learned about alova yet, it is recommended that you read alova overview first.",source:"@site/versioned_docs/version-v2/tutorial/02-getting-started/02-quick-start.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/quick-start",permalink:"/v2/tutorial/getting-started/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/02-getting-started/02-quick-start.md",tags:[],version:"v2",sidebarPosition:2,frontMatter:{title:"Quick Start"},sidebar:"tutorial",previous:{title:"What is alova",permalink:"/v2/tutorial/getting-started/"},next:{title:"Method Instance",permalink:"/v2/tutorial/getting-started/method"}},v={},u=[{value:"Install",id:"install",level:2},{value:"Create alova instance",id:"create-alova-instance",level:2},{value:"GET request",id:"get-request",level:2},{value:"POST request",id:"post-request",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"Example tip",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you haven\u2019t learned about alova yet, it is recommended that you read ",(0,n.jsx)(t.a,{href:"/v2/tutorial/getting-started",children:"alova overview"})," first."]})}),"\n",(0,n.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{value:"1",label:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install alova --save\n"})})}),(0,n.jsx)(l.Z,{value:"2",label:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add alova\n"})})}),(0,n.jsx)(l.Z,{value:"3",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add alova\n"})})}),(0,n.jsx)(l.Z,{value:"4",label:"bun",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"bun add alova\n"})})})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["You can also ",(0,n.jsx)(t.a,{href:"/v2/tutorial/others/use-in-static",children:"use alova through CDN"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-alova-instance",children:"Create alova instance"}),"\n",(0,n.jsxs)(t.p,{children:["In alova, a request needs to be made through an alova instance. Let's create one first. When creating an alova instance, you need to specify a request adapter. It is recommended to use the ",(0,n.jsx)(t.code,{children:"GlobalFetch"})," request adapter here, which is a package based on the ",(0,n.jsx)(t.code,{children:"fetch API"}),"."]}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{value:"1",label:"esModule",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\n\nconst alovaInstance = createAlova({\n  requestAdapter: GlobalFetch()\n});\n"})})}),(0,n.jsxs)(l.Z,{value:"2",label:"commonJS",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const { createAlova } = require('alova');\nconst GlobalFetch = require('alova/GlobalFetch');\n\nconst alova = createAlova({\n   requestAdapter: GlobalFetch();\n});\n"})}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["When using GlobalFetch in nodejs, the nodejs version requires ",(0,n.jsx)(t.code,{children:"v17.5"}),", or you can use ",(0,n.jsx)(t.a,{href:"/v2/tutorial/request-adapter/alova-adapter-axios/",children:"axios request adapter"}),"."]}),"\n"]})]}),(0,n.jsx)(l.Z,{value:"3",label:"deno",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { createAlova } from 'npm:alova';\nimport GlobalFetch from 'npm:alova/GlobalFetch';\n\nconst alova = createAlova({\n   requestAdapter: GlobalFetch();\n});\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"get-request",children:"GET request"}),"\n",(0,n.jsxs)(t.p,{children:["Sending a request via ",(0,n.jsx)(t.code,{children:"alovaInstance.Get"})," will receive a ",(0,n.jsx)(t.code,{children:"Response"})," instance thanks to the ",(0,n.jsx)(t.code,{children:"GlobalFetch"})," request adapter, which is simple."]}),"\n",(0,n.jsx)(r.Z,{template:"vanilla",mainFile:i,editorHeight:400,containBaseURL:!1}),"\n",(0,n.jsxs)(t.p,{children:["In an asynchronous function, you can also use ",(0,n.jsx)(t.code,{children:"await alovaInstance.Get"})," to wait for a response."]}),"\n",(0,n.jsx)(t.h2,{id:"post-request",children:"POST request"}),"\n",(0,n.jsxs)(t.p,{children:["Submitting data via ",(0,n.jsx)(t.code,{children:"alovaInstance.Post"})," is also easy."]}),"\n",(0,n.jsx)(r.Z,{template:"vanilla",mainFile:c,editorHeight:400,containBaseURL:!1}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What\u2019s next?"}),"\n",(0,n.jsx)(t.p,{children:"In fact, this is just the simplest request example. We will learn more about the features in the next chapters, so let's start learning."})]})}function j(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},5502:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(59020),o=a(73808),s=a(92949),l=a(85893);const r={vue:{root:"/src/App.vue",files:{"/src/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport VueHook from 'alova/vue';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},"vue-options":{root:"/src/App.vue",files:{"/src/api.js":"import { VueOptionsHook } from '@alova/vue-options';\nimport { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueOptionsHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"},deps:{"@alova/vue-options":"latest"}},react:{root:"/App.js",files:{"/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: ReactHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},svelte:{root:"/App.svelte",files:{"/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport SvelteHook from 'alova/svelte';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: SvelteHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},static:{root:"/index.html"},vanilla:{root:"/index.js"}},i={svelte:e=>({files:{"/index.js":{code:'import App from "./App.svelte";    \n  const app = new App({\n    target: document.body\n  });\n  export default app;\n        ',hidden:!0},"/public/index.html":{code:'<!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf8" />\n      <meta name="viewport" content="width=device-width" />\n      <title>Svelte app</title>\n      <link rel="stylesheet" href="public/bundle.css" />\n    </head>\n    <body>\n      <script src="bundle.js"><\/script>\n    </body>\n  </html>',hidden:!0},...e.files},customSetup:{entry:"/index.js",dependencies:{svelte:"^3.59.2",...e.customSetup.dependencies}},main:"/App.svelte",environment:"svelte"})},c=e=>{let{template:t,mainFile:a,externalFiles:c={},containBaseURL:d=!0,containResponded:p=!0,editorHeight:h,style:v}=e;const u={light:o.SF,dark:o.eq},m=r[t+(v?`-${v}`:"")],j={[m.root]:a,...m.files?m.files:{},...c},x=Object.keys(j).find((e=>/api\.js$/.test(e)));j[x]&&(d||(j[x]=j[x].replace(/baseURL.+?\s{4}/,"")),p||(j[x]=j[x].replace(/,\s+responded.+json\(\)/,"")));const b={alova:"beta",...m.deps||{}},{colorMode:f}=(0,s.I)();let g={files:j,template:t,customSetup:{dependencies:b}};return g=i[t]?i[t](g):g,(0,l.jsx)(n.xR,{...g,theme:u[f],options:{editorWidthPercentage:70,editorHeight:h}})}}}]);