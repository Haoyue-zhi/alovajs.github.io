"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3658],{90513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(85893),a=n(11151);const i={title:"Request Scene Model (RSM)"},r=void 0,o={id:"about/RSM",title:"Request Scene Model (RSM)",description:"What is the request scene model",source:"@site/docs/about/01-RSM.md",sourceDirName:"about",slug:"/about/RSM",permalink:"/about/RSM",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/about/01-RSM.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Request Scene Model (RSM)"}},l={},c=[{value:"What is the request scene model",id:"what-is-the-request-scene-model",level:2},{value:"Request scene model",id:"request-scene-model",level:2},{value:"request timing",id:"request-timing",level:2},{value:"Request Behavior",id:"request-behavior",level:2},{value:"request event",id:"request-event",level:2},{value:"Response management",id:"response-management",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"what-is-the-request-scene-model",children:"What is the request scene model"}),"\n",(0,s.jsx)(t.p,{children:"The request scenario model is based on the perspective of the client. It describes the abstract model of the client from triggering the request intent to receiving the request result. It consists of four stages: request timing, request behavior, request event, and response management. For example, when making a request, you often need to think about the following questions,"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"When the request is made;"}),"\n",(0,s.jsx)(t.li,{children:"Whether to display the request status;"}),"\n",(0,s.jsx)(t.li,{children:"Do you need to retry the request on failure;"}),"\n",(0,s.jsx)(t.li,{children:"How to process the response data;"}),"\n",(0,s.jsx)(t.li,{children:"Do you need to encrypt the request parameters;"}),"\n",(0,s.jsx)(t.li,{children:"Whether to cache the frequently used response data;"}),"\n",(0,s.jsx)(t.li,{children:"How to operate data across pages;"}),"\n",(0,s.jsx)(t.li,{children:"How to process requests in a weak or disconnected network environment;"}),"\n",(0,s.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"fetch"})," or ",(0,s.jsx)(t.code,{children:"axios"})," are often more focused on how to interact with the server, but we always need to deal with the above problems by ourselves. These functions that are beneficial to application performance and stability will always allow programmers to write low-maintenance sexual code. The request scene model is to abstract all links from preparing the request to processing the response data, so as to cover the model of the entire CS interaction life cycle from the perspective of the front end. ",(0,s.jsx)(t.code,{children:"alova"})," is a library that requests scene models, it is a supplement to request libraries such as ",(0,s.jsx)(t.code,{children:"axios"}),", not a substitute."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"CS interaction: generally refers to data interaction between all client types and servers"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"request-scene-model",children:"Request scene model"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"RSM",src:n(4591).Z+"",width:"917",height:"950"})}),"\n",(0,s.jsx)(t.h2,{id:"request-timing",children:"request timing"}),"\n",(0,s.jsxs)(t.p,{children:["Describe when a request needs to be made, implemented with ",(0,s.jsx)(t.code,{children:"useHook"})," in ",(0,s.jsx)(t.code,{children:"alova"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Initialize display data, such as just entering a certain interface or sub-interface;"}),"\n",(0,s.jsx)(t.li,{children:"Human-computer interaction triggers CS interaction, and the request needs to be changed again, such as page turning, filtering, sorting, fuzzy search, etc.;"}),"\n",(0,s.jsx)(t.li,{children:"Send requests in an anti-shake manner, avoid view data flickering, and reduce server pressure"}),"\n",(0,s.jsx)(t.li,{children:"Preloading data, such as preloading the content of the next page in a page, predicting that the user clicks a button to pre-fetch data;"}),"\n",(0,s.jsx)(t.li,{children:"To operate server data, it is necessary to issue a request for addition, deletion, modification and query, such as submitting data, deleting data, etc.;"}),"\n",(0,s.jsx)(t.li,{children:"Synchronize server status, such as polling requests in scenarios where data changes rapidly, and re-pull data after operating a certain data;"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"request-behavior",children:"Request Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["Describes how to process the request, implemented as a Method abstraction in ",(0,s.jsx)(t.code,{children:"alova"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Placeholder request, when requesting, display loading, skeleton diagram, or real data used last time;"}),"\n",(0,s.jsx)(t.li,{children:"Cache high-frequency responses, multiple execution requests will use fresh data;"}),"\n",(0,s.jsx)(t.li,{children:"Multi-request serial and parallel;"}),"\n",(0,s.jsx)(t.li,{children:"The retry mechanism of important interfaces reduces the probability of request failure caused by network instability;"}),"\n",(0,s.jsx)(t.li,{children:"Submit silently. When you only care about submitting data, directly respond to the success event after submitting the request, and the background guarantees that the request is successful;"}),"\n",(0,s.jsx)(t.li,{children:"Offline submission, the submitted data will be temporarily stored locally when offline, and then submitted after the network connection;"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"request-event",children:"request event"}),"\n",(0,s.jsxs)(t.p,{children:["Indicates sending a request with request parameters and getting a response. ",(0,s.jsx)(t.code,{children:"alova"})," can work with any request library or native solution such as ",(0,s.jsx)(t.code,{children:"axios"}),", ",(0,s.jsx)(t.code,{children:"fetch"}),", ",(0,s.jsx)(t.code,{children:"XMLHttpRequest"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"response-management",children:"Response management"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"alova"})," makes the response data stateful and manages it in a unified manner, refreshes the view data and operates the cache at the request level, avoids operations at the component level, and is more elegant and unified."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Remove the cached response data, which will be pulled from the server when the request is made again;"}),"\n",(0,s.jsx)(t.li,{children:"Update the cached response data, which can update the response data at any location, which is very helpful for updating data across pages;"}),"\n",(0,s.jsx)(t.li,{children:"Refresh the response data, which can re-refresh the response data at any position, and is also very helpful for updating data across pages;"}),"\n",(0,s.jsx)(t.li,{children:"Customize the cache setting. When requesting batch data, you can manually set the cache for the batch data one by one, so as to meet the cache hit of subsequent single data;"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4591:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rsm-en-e01231b66784e7cb7bddbf629392897f.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);