"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5065],{8345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var o=a(5893),n=a(1151),r=a(4866),l=a(5162),s=a(5502);const i="import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\n\r\nconst alovaInstance = createAlova({\r\n  requestAdapter: GlobalFetch()\r\n});\r\nalovaInstance\r\n  .Get('https://jsonplaceholder.typicode.com/todos/1')\r\n  .then(response => response.text())\r\n  .then(data => {\r\n    app.innerHTML = data;\r\n  });\r\n",c="import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\n\r\nconst alovaInstance = createAlova({\r\n  requestAdapter: GlobalFetch()\r\n});\r\nalovaInstance\r\n  .Post('https://jsonplaceholder.typicode.com/posts', {\r\n    title: 'foo',\r\n    body: 'bar',\r\n    userId: 1\r\n  })\r\n  .then(response => response.text())\r\n  .then(data => {\r\n    app.innerHTML = data;\r\n  });\r\n",d={title:"\u5feb\u901f\u5f00\u59cb",sidebar_position:20},p=void 0,h={id:"tutorial/getting-started/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5982\u679c\u4f60\u8fd8\u672a\u4e86\u89e3 alova\uff0c\u63a8\u8350\u4f60\u5148\u9605\u8bfb alova \u6982\u8ff0\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-getting-started/02-quick-start.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/quick-start",permalink:"/zh-CN/tutorial/getting-started/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/02-quick-start.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"alova \u662f\u4ec0\u4e48",permalink:"/zh-CN/tutorial/getting-started/"},next:{title:"method\u8be6\u89e3",permalink:"/zh-CN/tutorial/getting-started/method"}},v={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u521b\u5efa alova \u5b9e\u4f8b",id:"\u521b\u5efa-alova-\u5b9e\u4f8b",level:2},{value:"GET \u8bf7\u6c42",id:"get-\u8bf7\u6c42",level:2},{value:"POST \u8bf7\u6c42",id:"post-\u8bf7\u6c42",level:2},{value:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48\uff1f",id:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48",level:2}];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"\u793a\u4f8b\u63d0\u793a",type:"tip",children:(0,o.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u8fd8\u672a\u4e86\u89e3 alova\uff0c\u63a8\u8350\u4f60\u5148\u9605\u8bfb ",(0,o.jsx)(t.a,{href:"/tutorial/getting-started",children:"alova \u6982\u8ff0"}),"\u3002"]})}),"\n",(0,o.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(l.Z,{value:"1",label:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install alova --save\n"})})}),(0,o.jsx)(l.Z,{value:"2",label:"yarn",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn add alova\n"})})}),(0,o.jsx)(l.Z,{value:"3",label:"pnpm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pnpm add alova\n"})})}),(0,o.jsx)(l.Z,{value:"4",label:"bun",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"bun add alova\n"})})})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u4f60\u4e5f\u53ef\u4ee5",(0,o.jsx)(t.a,{href:"/tutorial/others/use-in-static",children:"\u901a\u8fc7 CDN \u4f7f\u7528 alova"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\u521b\u5efa-alova-\u5b9e\u4f8b",children:"\u521b\u5efa alova \u5b9e\u4f8b"}),"\n",(0,o.jsxs)(t.p,{children:["\u5728 alova \u4e2d\u9700\u8981\u901a\u8fc7 alova \u5b9e\u4f8b\u53d1\u8d77\u8bf7\u6c42\uff0c\u6211\u4eec\u5148\u521b\u5efa\u4e00\u4e2a\u3002\u5728\u521b\u5efa alova \u5b9e\u4f8b\u65f6\u9700\u8981\u6307\u5b9a\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5728\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528",(0,o.jsx)(t.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c \u5b83\u662f\u57fa\u4e8e",(0,o.jsx)(t.code,{children:"fetch API"}),"\u7684\u5c01\u88c5\u3002"]}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(l.Z,{value:"1",label:"esModule",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\n\r\nconst alovaInstance = createAlova({\r\n  requestAdapter: GlobalFetch()\r\n});\n"})})}),(0,o.jsxs)(l.Z,{value:"2",label:"commonJS",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const { createAlova } = require('alova');\r\nconst GlobalFetch = require('alova/GlobalFetch');\r\n\r\nconst alova = createAlova({\r\n  requestAdapter: GlobalFetch();\r\n});\n"})}),(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u5728 nodejs \u4e2d\u4f7f\u7528 GlobalFetch \u65f6\uff0cnodejs \u7248\u672c\u8981\u6c42",(0,o.jsx)(t.code,{children:"v17.5"}),"\uff0c\u6216\u8005\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-axios/",children:"axios \u8bf7\u6c42\u9002\u914d\u5668"}),"\u3002"]}),"\n"]})]}),(0,o.jsx)(l.Z,{value:"3",label:"deno",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"import { createAlova } from 'npm:alova';\r\nimport GlobalFetch from 'npm:alova/GlobalFetch';\r\n\r\nconst alova = createAlova({\r\n  requestAdapter: GlobalFetch();\r\n});\n"})})})]}),"\n",(0,o.jsx)(t.h2,{id:"get-\u8bf7\u6c42",children:"GET \u8bf7\u6c42"}),"\n",(0,o.jsxs)(t.p,{children:["\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"alovaInstance.Get"})," \u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u7531\u4e8e\u4f7f\u7528\u4e86",(0,o.jsx)(t.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5c06\u4f1a\u63a5\u6536\u5230\u4e00\u4e2a",(0,o.jsx)(t.code,{children:"Response"}),"\u5b9e\u4f8b\uff0c\u8fd9\u5f88\u7b80\u5355\u3002"]}),"\n",(0,o.jsx)(s.Z,{template:"vanilla",mainFile:i,editorHeight:400,containBaseURL:!1}),"\n",(0,o.jsxs)(t.p,{children:["\u5728\u5f02\u6b65\u51fd\u6570\u4e2d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,o.jsx)(t.code,{children:"await alovaInstance.Get"}),"\u7b49\u5f85\u54cd\u5e94\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"post-\u8bf7\u6c42",children:"POST \u8bf7\u6c42"}),"\n",(0,o.jsxs)(t.p,{children:["\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"alovaInstance.Post"}),"\u63d0\u4ea4\u6570\u636e\uff0c\u8fd9\u540c\u6837\u5f88\u7b80\u5355\u3002"]}),"\n",(0,o.jsx)(s.Z,{template:"vanilla",mainFile:c,editorHeight:400,containBaseURL:!1}),"\n",(0,o.jsx)(t.h2,{id:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48",children:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48\uff1f"}),"\n",(0,o.jsx)(t.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u8fd9\u53ea\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u8bf7\u6c42\u793a\u4f8b\uff0c\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\u5c06\u4f1a\u4e86\u89e3\u66f4\u591a\u529f\u80fd\uff0c\u8ba9\u6211\u4eec\u5f00\u59cb\u5b66\u4e60\u5427\u3002"})]})}function j(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},5502:(e,t,a)=>{a.d(t,{Z:()=>c});var o=a(9020),n=a(3808),r=a(2949),l=a(5893);const s={vue:{root:"/src/App.vue",files:{"/src/api.js":"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport VueHook from 'alova/vue';\r\nexport const alovaInstance = createAlova({\r\n  baseURL: 'https://jsonplaceholder.typicode.com',\r\n  statesHook: VueHook,\r\n  requestAdapter: GlobalFetch(),\r\n  responded: response => response.json()\r\n});\r\n"}},"vue-options":{root:"/src/App.vue",files:{"/src/api.js":"import { VueOptionsHook } from '@alova/vue-options';\r\nimport { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nexport const alovaInstance = createAlova({\r\n  baseURL: 'https://jsonplaceholder.typicode.com',\r\n  statesHook: VueOptionsHook,\r\n  requestAdapter: GlobalFetch(),\r\n  responded: response => response.json()\r\n});\r\n"},deps:{"@alova/vue-options":"latest"}},react:{root:"/App.js",files:{"/api.js":"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport ReactHook from 'alova/react';\r\nexport const alovaInstance = createAlova({\r\n  baseURL: 'https://jsonplaceholder.typicode.com',\r\n  statesHook: ReactHook,\r\n  requestAdapter: GlobalFetch(),\r\n  responded: response => response.json()\r\n});\r\n"}},svelte:{root:"/App.svelte",files:{"/api.js":"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport SvelteHook from 'alova/svelte';\r\nexport const alovaInstance = createAlova({\r\n  baseURL: 'https://jsonplaceholder.typicode.com',\r\n  statesHook: SvelteHook,\r\n  requestAdapter: GlobalFetch(),\r\n  responded: response => response.json()\r\n});\r\n"}},static:{root:"/index.html"},vanilla:{root:"/index.js"}},i={svelte:e=>({files:{"/index.js":{code:'import App from "./App.svelte";    \n  const app = new App({\n    target: document.body\n  });\n  export default app;\n        ',hidden:!0},"/public/index.html":{code:'<!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf8" />\n      <meta name="viewport" content="width=device-width" />\n      <title>Svelte app</title>\n      <link rel="stylesheet" href="public/bundle.css" />\n    </head>\n    <body>\n      <script src="bundle.js"><\/script>\n    </body>\n  </html>',hidden:!0},...e.files},customSetup:{entry:"/index.js",dependencies:{svelte:"^3.59.2",...e.customSetup.dependencies}},main:"/App.svelte",environment:"svelte"})},c=e=>{let{template:t,mainFile:a,externalFiles:c={},containBaseURL:d=!0,containResponded:p=!0,editorHeight:h,style:v}=e;const u={light:n.SF,dark:n.eq},m=s[t+(v?`-${v}`:"")],j={[m.root]:a,...m.files?m.files:{},...c},b=Object.keys(j).find((e=>/api\.js$/.test(e)));j[b]&&(d||(j[b]=j[b].replace(/baseURL.+?\s{4}/,"")),p||(j[b]=j[b].replace(/,\s+responded.+json\(\)/,"")));const x={alova:"latest",...m.deps||{}},{colorMode:f}=(0,r.I)();let g={files:j,template:t,customSetup:{dependencies:x}};return g=i[t]?i[t](g):g,(0,l.jsx)(o.xR,{...g,theme:u[f],options:{editorWidthPercentage:70,editorHeight:h}})}}}]);