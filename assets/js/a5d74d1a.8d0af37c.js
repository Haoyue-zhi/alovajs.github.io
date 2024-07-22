"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5344],{11372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(85893),s=n(11151);const a={title:"Step 4 - Data Compensation"},o=void 0,r={id:"tutorial/client/strategy/sensorless-data-interaction/data-compensation",title:"Step 4 - Data Compensation",description:"The user may perform some data operations in a disconnected environment. At this time, the silent queue will be full of unsubmitted requests. When the network is restored, due to the limitation of the timing mechanism, it will take a little time to complete these requests. The list loaded at this time The data does not include unsubmitted requests, which can cause some confusion for users:",source:"@site/docs/tutorial/03-client/01-strategy/09-sensorless-data-interaction/07-data-compensation.md",sourceDirName:"tutorial/03-client/01-strategy/09-sensorless-data-interaction",slug:"/tutorial/client/strategy/sensorless-data-interaction/data-compensation",permalink:"/tutorial/client/strategy/sensorless-data-interaction/data-compensation",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/09-sensorless-data-interaction/07-data-compensation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Step 4 - Data Compensation"},sidebar:"tutorial",previous:{title:"Step 3 - Set Request Retry",permalink:"/tutorial/client/strategy/sensorless-data-interaction/request-retry"},next:{title:"Step 5 - Edit Data",permalink:"/tutorial/client/strategy/sensorless-data-interaction/edit-item"}},l={},d=[{value:"Explanation of related functions",id:"explanation-of-related-functions",level:2},{value:"filterSilentMethods",id:"filtersilentmethods",level:3}];function c(e){const t={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The user may perform some data operations in a disconnected environment. At this time, the silent queue will be full of unsubmitted requests. When the network is restored, due to the limitation of the timing mechanism, it will take a little time to complete these requests. The list loaded at this time The data does not include unsubmitted requests, which can cause some confusion for users:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:'"I have clearly added multiple pieces of data, why is it not in the list?"'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Therefore, we need to manually compensate the unsubmitted data to the list, so that the list data is always kept up-to-date. In this step, the saved operation records will be used to compensate the list data. It is actually very simple. We It is only necessary to traverse the silentMethod instance of the relevant queue after the list request is successful, and update the operation records recorded in the previous step to the list data."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest, filterSilentMethods, equals } from 'alova/client';\nimport { todoList } from './api.js';\nconst { data, loading, onSuccess } = useSQRequest(todoList, {\n  initialData: []\n});\n\nonSuccess(() => {\n  // Get all silentMethod instances under the default queue\n  const silentMethods = filterSilentMethods();\n  silentMethods.forEach(({ reviewData }) => {\n    if (!reviewData) {\n      return;\n    }\n    const { operate, data } = reviewData;\n    const index = todoListData.findIndex(({ id }) => equals(id, data.id));\n    if ((operate === 'edit' || operate === 'remove') && index >= 0) {\n      operate === 'edit' ? todoListData.splice(index, 1, data) : todoListData.splice(index, 1);\n    } else if (operate === 'add' && index < 0) {\n      // There will be added uncommitted items when re-requesting and hitting the cache, these need to be filtered\n      todoListData.unshift(data);\n    }\n  });\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"explanation-of-related-functions",children:"Explanation of related functions"}),"\n",(0,i.jsx)(t.h3,{id:"filtersilentmethods",children:"filterSilentMethods"}),"\n",(0,i.jsx)(t.p,{children:"Filter out the specified silentMethod instance by method name or regular expression, which is defined as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function filterSilentMethods(\n  methodNameMatcher?: string | number | RegExp,\n  queueName?: string,\n  filterActive?: boolean\n): SilentMethod[];\n"})}),"\n",(0,i.jsx)(t.p,{children:"**methodNameMatcher: **method name matcher, if it is a number or string, it will filter out the results that completely match the name, if it is a regular expression, it will filter out the matching results, if it is not passed, it will filter out all the results;"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"queueName"}),": Specify the queue to search for, if not uploaded, the ",(0,i.jsx)(t.em,{children:"default"})," queue will be searched by default;"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"filterActive"}),": whether to filter out the active state instance"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);