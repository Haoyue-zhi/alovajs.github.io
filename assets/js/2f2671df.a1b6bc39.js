"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7326],{80603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(85893),s=r(11151);const i={title:"Step 3 - Set Request Retry"},a=void 0,o={id:"tutorial/client/strategy/sensorless-data-interaction/request-retry",title:"Step 3 - Set Request Retry",description:"When a request enters the silent queue, you can set request retry parameters for it to ensure its request success rate. This is valid when the behavior mode is set to queue and silent. The difference is, The request under the behavior of silent is persistent by default, and the request will continue to be sent even if it is refreshed before the request succeeds, while the request under the behavior of queue will not be persisted and will be cleared after refreshing.",source:"@site/docs/tutorial/03-client/01-strategy/09-sensorless-data-interaction/06-request-retry.md",sourceDirName:"tutorial/03-client/01-strategy/09-sensorless-data-interaction",slug:"/tutorial/client/strategy/sensorless-data-interaction/request-retry",permalink:"/tutorial/client/strategy/sensorless-data-interaction/request-retry",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/09-sensorless-data-interaction/06-request-retry.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Step 3 - Set Request Retry"},sidebar:"tutorial",previous:{title:"Step 2 - Adjust Response Handling",permalink:"/tutorial/client/strategy/sensorless-data-interaction/modify-response"},next:{title:"Step 4 - Data Compensation",permalink:"/tutorial/client/strategy/sensorless-data-interaction/data-compensation"}},l={},d=[{value:"Maximum number of retries",id:"maximum-number-of-retries",level:2},{value:"Request delay time",id:"request-delay-time",level:2},{value:"set retry rules",id:"set-retry-rules",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["When a request enters the silent queue, you can set request retry parameters for it to ensure its request success rate. This is valid when the behavior mode is set to ",(0,n.jsx)(t.strong,{children:"queue"})," and ",(0,n.jsx)(t.strong,{children:"silent"}),". The difference is, The request under the behavior of ",(0,n.jsx)(t.strong,{children:"silent"})," is persistent by default, and the request will continue to be sent even if it is refreshed before the request succeeds, while the request under the behavior of ",(0,n.jsx)(t.strong,{children:"queue"})," will not be persisted and will be cleared after refreshing."]}),"\n",(0,n.jsx)(t.h2,{id:"maximum-number-of-retries",children:"Maximum number of retries"}),"\n",(0,n.jsx)(t.p,{children:"Set the maximum number of retries, no retries by default."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\n  //...\n  // highlight-start\n  // The number of retries is 3 times\n  maxRetryTimes: 3\n  // highlight-end\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"request-delay-time",children:"Request delay time"}),"\n",(0,n.jsx)(t.p,{children:"By default, each retry interval is 1000ms, and we can customize the delay time of each retry in the avoidance strategy."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\n  //...\n  maxRetryTimes: 3,\n  // highlight-start\n  // Requests are delayed by 2000ms each time\n  backoff: {\n    delay: 2000\n  }\n  // highlight-end\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"If you need to increase the delay time according to the rules, you can set a growth factor for it."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\n  //...\n  maxRetryTimes: 3,\n  backoff: {\n    delay: 2000,\n    // highlight-start\n    // When multiplier is set to 2, the first retry delay is 2 seconds, the second is 4 seconds, and the third is 6 seconds\n    multiplier: 2\n    // highlight-end\n  }\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"not enough? You can even add a random jitter value to each delay to make it look less regular"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\n   //...\n   maxRetryTimes: 3,\n   backoff: {\n     delay: 2000,\n     multiplier: 2,\n     // highlight-start\n     /**\n      * The initial jitter percentage value of the delay request, the range is 0-1\n      * When only startQuiver is set, endQuiver defaults to 1\n      * For example set to 0.5, it will add 50% to 100% random time on the current delay time\n      * If endQuiver has a value, the delay time will be increased by a random value in the range of startQuiver and endQuiver\n      */\n     startQuiver: 0.5,\n\n     /**\n      * The jitter end percentage value of the delayed request, the range is 0-1\n      * When only endQuiver is set, startQuiver defaults to 0\n      * For example set to 0.8, it will add a random time from 0% to 80% on the current delay time\n      * If startQuiver has a value, the delay time will increase the random value in the range of startQuiver and endQuiver\n      */\n     endQuiver: 0.8;\n     // highlight-end\n   }\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"set-retry-rules",children:"set retry rules"}),"\n",(0,n.jsx)(t.p,{children:"By default, as long as the request fails, it will be retried. The request failure is divided into the following situations:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The request is wrong, and the error is not caught by the global ",(0,n.jsx)(t.code,{children:"onError"})," hook;"]}),"\n",(0,n.jsxs)(t.li,{children:["The request was successful, but an error was thrown in the global ",(0,n.jsx)(t.code,{children:"onSuccess"})," hook;"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["But in reality, not all requests need to be retried. For example, when a server error occurs or the network is disconnected, it should not be retried. In this case, it is necessary to set a retry judgment rule. When a request fails, an instance of ",(0,n.jsx)(t.code,{children:"Error"})," is usually obtained. We can set a regular expression to match ",(0,n.jsx)(t.code,{children:"error.message"})," or ",(0,n.jsx)(t.code,{children:"error.name"}),", and if the match passes, no retry will be made."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\n  //...\n  // highlight-start\n  // When the thrown error name is 500, or the wrong message matches network error, do not retry\n  retryError: {\n    name: /^500$/,\n    message: /network error/i\n  }\n  // highlight-end\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also set one of the matching rules. When only setting the matching rules for ",(0,n.jsx)(t.code,{children:"message"}),", it can be directly abbreviated as a regular expression."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// Only set the name that matches the error\nuseSQRequest(createOrEditTodo, {\n  //...\n  retryError: {\n    name: /^500$/\n  }\n});\n\n// Only set the message that matches the error\nuseSQRequest(createOrEditTodo, {\n  //...\n  retryError: /network error/i\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In order not to pollute the error message, usually we will put the error code returned by the server in ",(0,n.jsx)(t.code,{children:"error.name"}),", of course, you can also splice it into ",(0,n.jsx)(t.code,{children:"error.message"}),", the error handling example of Response is as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInst = createAlova({\n  //...\n  responded: {\n    onSuccess(response) {\n      // Error thrown on 500 error\n      if (response.status === 500) {\n        const error = new Error(response.statusText);\n        error.name = response.status;\n        throw error;\n      }\n      return response.json();\n    }\n  }\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"In the next step, the saved operation records will be used to perform data compensation on the list data to achieve the latest state."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(67294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);