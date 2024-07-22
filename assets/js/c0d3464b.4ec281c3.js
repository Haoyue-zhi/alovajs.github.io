"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1058],{23911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>x,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var s=n(85893),o=n(11151),a=n(74866),r=n(85162),i=n(5502),l=n(9286);const d='<template>\n  <select v-model="userId">\n    <option :value="1">User 1</option>\n    <option :value="2">User 2</option>\n    <option :value="3">User 3</option>\n  </select>\n\n  \x3c!-- Render the filtered todo list --\x3e\n  <div v-if="loading">Loading...</div>\n  <ul v-else>\n    <li\n      v-for="todo in data"\n      :key="todo.id">\n      {{ todo.completed ? \'(Completed)\' : \'\' }}{{ todo.title }}\n    </li>\n  </ul>\n</template>\n\n<script setup>\nimport { useWatcher } from \'alova\';\nimport { ref } from \'vue\';\nimport { alovaInstance } from \'./api\';\n\n// Create method instance\nconst filterTodoList = userId => {\n  return alovaInstance.Get(`/users/${userId}/todos`);\n};\nconst userId = ref(1);\nconst { loading, data, error } = useWatcher(\n  // Must be set to a function that returns a method instance\n  () => filterTodoList(userId.value),\n\n  // The monitored status array, these status changes will trigger a request\n  [userId]\n);\n<\/script>\n',c="import { useWatcher } from 'alova';\nimport { useState } from 'react';\nimport { alovaInstance } from './api';\n\n//Create method instance\nconst filterTodoList = userId => {\n  return alovaInstance.Get(`/users/${userId}/todos`);\n};\n\nconst App = () => {\n  const [userId, setUserId] = useState(1);\n  const { loading, data = [] } = useWatcher(\n    // Must be set to a function that returns a method instance\n    () => filterTodoList(userId),\n\n    // The monitored status array, these status changes will trigger a request\n    [userId]\n  );\n\n  return (\n    <>\n      <select\n        value={userId}\n        onChange={e => setUserId(e.target.value)}>\n        <option value={1}>User 1</option>\n        <option value={2}>User 2</option>\n        <option value={3}>User 3</option>\n      </select>\n\n      {/* Render the filtered todo list */}\n      {loading ? <div>Loading...</div> : null}\n      {!loading ? (\n        <ul>\n          {data.map(todo => (\n            <li>\n              {todo.completed ? '(Completed)' : ''}\n              {todo.title}\n            </li>\n          ))}\n        </ul>\n      ) : null}\n    </>\n  );\n};\nexport default App;\n",h='<script>\r\nimport { writable } from \'svelte/store\';\r\n\r\n//Create method instance\r\nconst filterTodoList = userId => {\r\n  return alovaInstance.Get(`/users/${userId}/todos`);\r\n};\r\nconst userId = writable(0);\r\nconst { loading, data, error } = useWatcher(\r\n  // Parameters must be set to functions that return method instances\r\n  () => filterTodoList($userId),\r\n\r\n  // The monitored status array, these status changes will trigger a request\r\n  [userId]\r\n);\r\n<\/script>\r\n\r\n<select bind:value="{$userId}">\r\n  <option value="{1}">User 1</option>\r\n  <option value="{2}">User 2</option>\r\n  <option value="{3}">User 3</option>\r\n</select>\r\n\r\n\x3c!-- Render the filtered todo list --\x3e\r\n{#if $loading}\r\n<div>Loading...</div>\r\n{:else}\r\n<ul>\r\n  {#each $data as todo}\r\n    <li class="todo-title">{{ todo.completed ? \'(Completed)\' : \'\' }}{{ todo.title }}</li>\r\n  {/each}\r\n</ul>\r\n{/if}',u={title:"Watching Request"},p=void 0,m={id:"tutorial/client/strategy/use-watcher",title:"Watching Request",description:"use hook",source:"@site/docs/tutorial/03-client/01-strategy/02-use-watcher.md",sourceDirName:"tutorial/03-client/01-strategy",slug:"/tutorial/client/strategy/use-watcher",permalink:"/tutorial/client/strategy/use-watcher",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/02-use-watcher.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Watching Request"},sidebar:"tutorial",previous:{title:"Auto Manage States",permalink:"/tutorial/client/strategy/use-request"},next:{title:"Fetch Data",permalink:"/tutorial/client/strategy/use-fetcher"}},g={},v=[{value:"Example",id:"example",level:2},{value:"Usage",id:"usage",level:2},{value:"Send request immediately",id:"send-request-immediately",level:3},{value:"Request debounce",id:"request-debounce",level:3},{value:"Request sequence",id:"request-sequence",level:3},{value:"API",id:"api",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Strategy type",type:"info",children:(0,s.jsx)(t.p,{children:"use hook"})}),"\n",(0,s.jsxs)(t.p,{children:["In some scenarios where you need to re-request as data changes, such as paging, data filtering, fuzzy search, tab bar switching, etc., you can use ",(0,s.jsx)(t.code,{children:"useWatcher"})," to listen to the specified state change and send a request immediately."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Next, let's take the search for todo items as an example and try to change the options in the selection box to see how the todo list changes."}),"\n",(0,s.jsxs)(a.Z,{groupId:"framework",children:[(0,s.jsx)(r.Z,{value:"1",label:"vue",children:(0,s.jsx)(i.Z,{template:"vue",mainFile:d,editorHeight:800})}),(0,s.jsx)(r.Z,{value:"2",label:"react",children:(0,s.jsx)(i.Z,{template:"react",mainFile:c,editorHeight:800})}),(0,s.jsx)(r.Z,{value:"3",label:"svelte",children:(0,s.jsx)(l.Z,{language:"html",children:h})})]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.admonition,{title:"Usage Tips",type:"tip",children:(0,s.jsxs)(t.p,{children:["useWatcher supports all the features of useRequest. For details, please see ",(0,s.jsx)(t.a,{href:"/tutorial/client/strategy/use-request",children:"useRequest"}),". The following are the unique uses of useWatcher."]})}),"\n",(0,s.jsx)(t.h3,{id:"send-request-immediately",children:"Send request immediately"}),"\n",(0,s.jsxs)(t.p,{children:["Unlike ",(0,s.jsx)(t.code,{children:"useRequest"}),", the ",(0,s.jsx)(t.code,{children:"immediate"})," property of ",(0,s.jsx)(t.code,{children:"useWatcher"})," defaults to ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const { send } = useWatcher(() => getTodoList(currentPage), [currentPage], {\n  // highlight-start\n  immediate: true\n  // highlight-end\n});\nsend();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"request-debounce",children:"Request debounce"}),"\n",(0,s.jsx)(t.p,{children:"Usually we write debounce code at the level of frequently triggered events. This time we implemented the debounce function at the request level, which means you no longer need to implement debounce yourself in the fuzzy search function, and the usage is also very simple."}),"\n",(0,s.jsx)(t.admonition,{title:"What is debounce?",type:"info",children:(0,s.jsx)(t.p,{children:"Debounce means that after an event is triggered, a function can only be executed once within n seconds. If another event is triggered within n seconds after the event is triggered, the function execution delay time will be recalculated (distinguished from throttling here. Throttling means that the event cannot be triggered again within a period of time after the event is triggered)"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Set the debounce for all watching states"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const { loading, data, error } = useWatcher(\n  () => filterTodoList(keyword, date),\n  [keyword, date],\n  {\n    // highlight-start\n    // Setting debounce to a number means the debounce time for all watching states in milliseconds\n    // For example, this means that when one or more of the states keyword and date change, the request will be sent after 500ms\n    debounce: 500\n    // highlight-end\n  }\n);\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Set the debounce for a single watching state"})}),"\n",(0,s.jsxs)(t.p,{children:["In many scenarios, we only need to debounce a few frequently changing watching states, such as the state change triggered by ",(0,s.jsx)(t.code,{children:"onInput"})," of the text box. This can be done as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const { loading, data, error } = useWatcher(\n  () => filterTodoList(keyword, date),\n  [keyword, date],\n  {\n    // highlight-start\n    // Set the debounce time in the order of the array of watching states. 0 or no transmission means no debounce\n    // The order of the watching states here is [keyword, date], and the debounce array is set to [500, 0], which means that only the keyword is set to debounce\n    debounce: [500, 0]\n    // You can also set it as follows:\n    // debounce: [500],\n    // highlight-end\n  }\n);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"request-sequence",children:"Request sequence"}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes when the state watched by ",(0,s.jsx)(t.code,{children:"useWatcher"})," changes continuously and causes continuous requests to be initiated, the latter request gets a response before the previous request, but when the previous request gets a response, it will overwrite the response of the latter request, resulting in a response that does not match the state; for example, if a state ",(0,s.jsx)(t.code,{children:"state"})," changes and request ",(0,s.jsx)(t.code,{children:"1"})," is issued, and then the ",(0,s.jsx)(t.code,{children:"state"})," value is changed before request ",(0,s.jsx)(t.code,{children:"1"})," is responded, and request ",(0,s.jsx)(t.code,{children:"2"})," is issued, if request ",(0,s.jsx)(t.code,{children:"1"})," returns after request ",(0,s.jsx)(t.code,{children:"2"}),", the final response data will remain in request ",(0,s.jsx)(t.code,{children:"1"}),".\nTherefore, we designed the ",(0,s.jsx)(t.code,{children:"abortLast"})," parameter, which is used to mark whether to interrupt the last unresponsive request when the next request is sent. The default value is ",(0,s.jsx)(t.code,{children:"true"}),", so that only the last request sent by ",(0,s.jsx)(t.code,{children:"useWatcher"})," is valid."]}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n  participant U as user\n  participant S as server\n  U ->> U: watch state\n  U ->> S: state changes and initiates request 1\n  U ->> S: state changes and initiates request 2\n  S ->> U: request 2 responds first\n  S ->> U: request 1 responds later\n  U ->> U: request 2 response is overwritten"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"useWatcher(\n  () => getTodoList($currentPage),\n  // Array of watched states, these state changes will trigger a request\n  [state],\n  {\n    // highlight-start\n    abortLast: true // Whether to interrupt the last unresponsive request, the default is true\n    // highlight-end\n  }\n);\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"Notes",type:"warning",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"abortLast"})," defaults to ",(0,s.jsx)(t.code,{children:"true"}),". Under normal circumstances, you don't need to pay attention to this parameter. If it is changed to ",(0,s.jsx)(t.code,{children:"false"}),", it may cause problems with state and response mismatch."]})}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(t.p,{children:["Please refer to ",(0,s.jsx)(t.a,{href:"/api/core-hooks#usewatcher",children:"API-useWatcher"}),"."]})]})}function x(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},5502:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(59020),o=n(73808),a=n(92949),r=n(85893);const i={vue:{root:"/src/App.vue",files:{"/src/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport VueHook from 'alova/vue';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},"vue-options":{root:"/src/App.vue",files:{"/src/api.js":"import { VueOptionsHook } from '@alova/vue-options';\nimport { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueOptionsHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"},deps:{"@alova/vue-options":"latest"}},react:{root:"/App.js",files:{"/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: ReactHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},svelte:{root:"/App.svelte",files:{"/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport SvelteHook from 'alova/svelte';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: SvelteHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},static:{root:"/index.html"},vanilla:{root:"/index.js"}},l={svelte:e=>({files:{"/index.js":{code:'import App from "./App.svelte";    \n  const app = new App({\n    target: document.body\n  });\n  export default app;\n        ',hidden:!0},"/public/index.html":{code:'<!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf8" />\n      <meta name="viewport" content="width=device-width" />\n      <title>Svelte app</title>\n      <link rel="stylesheet" href="public/bundle.css" />\n    </head>\n    <body>\n      <script src="bundle.js"><\/script>\n    </body>\n  </html>',hidden:!0},...e.files},customSetup:{entry:"/index.js",dependencies:{svelte:"^3.59.2",...e.customSetup.dependencies}},main:"/App.svelte",environment:"svelte"})},d=e=>{let{template:t,mainFile:n,externalFiles:d={},containBaseURL:c=!0,containResponded:h=!0,editorHeight:u,style:p}=e;const m={light:o.SF,dark:o.eq},g=i[t+(p?`-${p}`:"")],v={[g.root]:n,...g.files?g.files:{},...d},f=Object.keys(v).find((e=>/api\.js$/.test(e)));v[f]&&(c||(v[f]=v[f].replace(/baseURL.+?\s{4}/,"")),h||(v[f]=v[f].replace(/,\s+responded.+json\(\)/,"")));const x={alova:"beta",...g.deps||{}},{colorMode:j}=(0,a.I)();let b={files:v,template:t,customSetup:{dependencies:x}};return b=l[t]?l[t](b):b,(0,r.jsx)(s.xR,{...b,theme:m[j],options:{editorWidthPercentage:70,editorHeight:u}})}}}]);