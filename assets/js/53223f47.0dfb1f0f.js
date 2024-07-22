"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3714],{46970:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(85893),s=i(11151);const a={title:"Sensorless data interaction - Overview"},r=void 0,l={id:"tutorial/strategy/sensorless-data-interaction/README",title:"Sensorless data interaction - Overview",description:"Non-inductive data interaction means that when users interact with the application, relevant content can be displayed immediately without waiting, or the operation result can be displayed without waiting when submitting information, just like interacting with local data, thereby greatly improving the smoothness of the application It allows users to not feel the lag caused by data transmission.",source:"@site/versioned_docs/version-v2/tutorial/05-strategy/01-sensorless-data-interaction/README.md",sourceDirName:"tutorial/05-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/",permalink:"/v2/tutorial/strategy/sensorless-data-interaction/",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/05-strategy/01-sensorless-data-interaction/README.md",tags:[],version:"v2",frontMatter:{title:"Sensorless data interaction - Overview"},sidebar:"tutorial",previous:{title:"Select next stage",permalink:"/v2/tutorial/strategy/"},next:{title:"Virtual data",permalink:"/v2/tutorial/strategy/sensorless-data-interaction/virtual-data"}},o={},d=[{value:"Application scenarios",id:"application-scenarios",level:2},{value:"Editor application",id:"editor-application",level:3},{value:"Setup module",id:"setup-module",level:3},{value:"Simple list management",id:"simple-list-management",level:3},{value:"Complex list management",id:"complex-list-management",level:3},{value:"Free Mode",id:"free-mode",level:3},{value:"Not recommended application scenarios",id:"not-recommended-application-scenarios",level:2},{value:"Information sharing class",id:"information-sharing-class",level:3},{value:"Complex data interaction class",id:"complex-data-interaction-class",level:3},{value:"Technical solutions",id:"technical-solutions",level:2},{value:"Data pre-fetching",id:"data-pre-fetching",level:3},{value:"Silent submit",id:"silent-submit",level:3},{value:"Quiet Queue",id:"quiet-queue",level:3},{value:"virtual data",id:"virtual-data",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Non-inductive data interaction means that when users interact with the application, relevant content can be displayed immediately without waiting, or the operation result can be displayed without waiting when submitting information, just like interacting with local data, thereby greatly improving the smoothness of the application It allows users to not feel the lag caused by data transmission."}),"\n",(0,n.jsx)(t.p,{children:"This is not new. The concept of optimistic update existed before 2015. It refers to displaying the submission results to the interface before the server responds. It is based on the assumption that most submissions are successful. The opposite is a conservative update, that is, the server will display a wait state before responding until the request is completed. In terms of handling failures, the current optimistic update solution is usually handled through fallback, such as the following sample code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const list = [];\nconst data = {};\naddTodo(data).catch(() => {\n  list = list.filter(item => item !== data);\n});\nlist.push(data);\n"})}),"\n",(0,n.jsx)(t.p,{children:"This can cause the following problems:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Rollback will increase the user's understanding and operation costs;"}),"\n",(0,n.jsx)(t.li,{children:"Request timing issues;"}),"\n",(0,n.jsx)(t.li,{children:"If subsequent requests depend on this submission, this failure will make subsequent requests meaningless;"}),"\n",(0,n.jsx)(t.li,{children:"Possible lost requests;"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"After several months of program design and continuous iteration, alova has taken a big step in this area. In our program, the above problems have been solved, which can ensure the success of the request more stably. Although there are still technical limitations, But it has been applied in many scenarios. In our technical solution, the problems caused by network fluctuations can be reduced to a higher extent. Your application is still available in high-latency networks or even disconnected, and the latest data can still be maintained after refreshing the page."}),"\n",(0,n.jsx)(t.h2,{id:"application-scenarios",children:"Application scenarios"}),"\n",(0,n.jsx)(t.p,{children:"Although non-inductive data interaction cannot be used on a large scale, it is very suitable in certain scenarios. During the exploration, we found at least including but not limited to the following scenarios for your reference."}),"\n",(0,n.jsx)(t.h3,{id:"editor-application",children:"Editor application"}),"\n",(0,n.jsx)(t.p,{children:"Note-taking applications such as Evernote and canvas editing applications such as MasterGO need to meet the following requirements:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"When entering the note or drawing list, the list data will be pulled in full, and the local cache data will be used next time;"}),"\n",(0,n.jsx)(t.li,{children:"Real-time synchronization to the server during the editing process, and the synchronization process occurs in the background, which will not affect the normal use of users;"}),"\n",(0,n.jsx)(t.li,{children:"You can continue to use it even when the network is poor or disconnected;"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"example",type:"info",children:(0,n.jsxs)(t.p,{children:["We provide a ",(0,n.jsx)(t.a,{href:"/v2/tutorial/example/silent-submit-notes",children:"note application example"}),", you can enter the experience."]})}),"\n",(0,n.jsx)(t.h3,{id:"setup-module",children:"Setup module"}),"\n",(0,n.jsx)(t.p,{children:"The setting module composed of commonly used switches and selectors needs to realize the requirement that the user operation is synchronized to the server in real time, and the submission status is no longer displayed, but the latest status after the operation is directly displayed."}),"\n",(0,n.jsx)(t.admonition,{title:"example",type:"info",children:(0,n.jsxs)(t.p,{children:["We provide a ",(0,n.jsx)(t.a,{href:"/v2/tutorial/example/silent-submit-setting",children:"setting page example"}),", you can enter the experience."]})}),"\n",(0,n.jsx)(t.h3,{id:"simple-list-management",children:"Simple list management"}),"\n",(0,n.jsx)(t.p,{children:"The data we fill in when creating a list item is enough for the display of the list page, which is called a simple list. For example, a student list page displays the three data of the student's name, gender, and grade. These three data are required when creating a student fill in. In a simple list the following requirements will be fulfilled:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Immediately display the latest status on the list page when adding, editing and deleting list items, no need to display it after the submission is completed, and it is not limited by network fluctuations;"}),"\n",(0,n.jsx)(t.li,{children:"When the page is refreshed, the list page is always kept up to date;"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"example",type:"info",children:(0,n.jsxs)(t.p,{children:["We provide a ",(0,n.jsx)(t.a,{href:"/v2/tutorial/example/silent-submit-simple-list",children:"simple list page example"}),", you can enter the experience."]})}),"\n",(0,n.jsx)(t.h3,{id:"complex-list-management",children:"Complex list management"}),"\n",(0,n.jsx)(t.p,{children:"A complex list means that the data filled in when creating a list item is not enough for display on the list page, and additional data needs to be generated according to the calculation of the server. For example, a Todo list page needs to list specific executions in addition to displaying basic information. date, but only the execution date range and related rules are specified on the creation page, so the execution date is calculated and generated by the server based on the date range and rules."}),"\n",(0,n.jsx)(t.p,{children:"The following requirements will be fulfilled in a complex list:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Immediately display the latest status on the list page when adding, editing and deleting list items, and update the data calculated by the server to this list item after the server responds;"}),"\n",(0,n.jsx)(t.li,{children:"When the page is refreshed, the list page is always kept up to date;"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"example",type:"info",children:(0,n.jsx)(t.p,{children:"Stay tuned for complex list examples..."})}),"\n",(0,n.jsx)(t.h3,{id:"free-mode",children:"Free Mode"}),"\n",(0,n.jsx)(t.p,{children:"In the above scenarios, you may want to judge whether to use the non-inductive interaction strategy or the most common conservative request strategy based on a condition. The requirements are as follows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"When the network status is good, or paying users will use the non-sensing interaction strategy, but when the network fluctuates greatly, or free users cannot enjoy the non-sensing interaction strategy;"}),"\n",(0,n.jsx)(t.li,{children:"Strategies can be switched freely;"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"example",type:"info",children:(0,n.jsx)(t.p,{children:"In the above examples, you can experience the free switching strategy"})}),"\n",(0,n.jsx)(t.h2,{id:"not-recommended-application-scenarios",children:"Not recommended application scenarios"}),"\n",(0,n.jsx)(t.h3,{id:"information-sharing-class",children:"Information sharing class"}),"\n",(0,n.jsx)(t.p,{children:"The submitted information needs to be synchronized to others, such as order information. This type of information has high real-time requirements, and we should ensure that the submission is successful."}),"\n",(0,n.jsx)(t.h3,{id:"complex-data-interaction-class",children:"Complex data interaction class"}),"\n",(0,n.jsx)(t.p,{children:"Complex data interaction refers to the mixed editing and filtering of data, such as adding, editing, deleting and filtering a certain list. In this case, Alova cannot currently support it well. In subsequent versions Will try to solve this puzzle too."}),"\n",(0,n.jsx)(t.h2,{id:"technical-solutions",children:"Technical solutions"}),"\n",(0,n.jsx)(t.p,{children:"In the technical solution of non-inductive data interaction, alova has implemented data pre-fetching and silent submission respectively. Next, let's understand these two technical solutions."}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"Please make sure you have mastered the following chapters before reading"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/v2/tutorial/getting-started",children:"Basic Learning"})}),"\n"]})]}),"\n",(0,n.jsx)(t.h3,{id:"data-pre-fetching",children:"Data pre-fetching"}),"\n",(0,n.jsxs)(t.p,{children:["In html, you may have seen such a tag ",(0,n.jsx)(t.code,{children:'<link rel="prefetch" href="index.css" as="style">'}),", which tells the browser to preload the style file when it is idle, and put it in the cache In , when you really need to use it, you can take it out of the cache. Alova also uses a similar scheme to pre-fetch the required data through ",(0,n.jsx)(t.a,{href:"/v2/tutorial/advanced/use-fetcher",children:"useFetcher"}),", and it will be stored locally. in cache. You can predict the content that the user needs to read under any circumstances, and then pre-fetch the corresponding content. For example, the content of the next page can be pre-loaded in the process page, or the user stays on a button 200ms, we can pre-fetch the data needed for the next interface, which is similar to ",(0,n.jsx)(t.strong,{children:"Next.js"})," page preloading."]}),"\n",(0,n.jsxs)(t.p,{children:["We provide a ",(0,n.jsx)(t.a,{href:"/v2/tutorial/example/prefetch",children:"preloaded example"}),", you can enter the experience."]}),"\n",(0,n.jsx)(t.h3,{id:"silent-submit",children:"Silent submit"}),"\n",(0,n.jsxs)(t.p,{children:["Silent submission is a mechanism of submitting and responding. In the scheme, the completion of submission will be guaranteed, so it can be regarded as a safer optimistic update scheme. Silent submission mainly uses ",(0,n.jsx)(t.strong,{children:"Silent Queue"})," to persist request information and ensure request timing issues. ",(0,n.jsx)(t.strong,{children:"Virtual data"})," is used as a placeholder for server response data, which is replaced with actual response data when the request is completed. , through these two technologies, localized data creation is realized, and operations such as editing and deleting of newly created data are realized, even if the created data has not yet been submitted successfully on the server side. In order to keep development costs to a minimum, this is done automatically in alova."]}),"\n",(0,n.jsx)(t.h3,{id:"quiet-queue",children:"Quiet Queue"}),"\n",(0,n.jsxs)(t.p,{children:["Silent queues are used to ensure the timing of requests. We can create queues arbitrarily, and all requests entering the queue will be stored in the queue in the form of ",(0,n.jsx)(t.strong,{children:"SilentMethod"})," instances. Each ",(0,n.jsx)(t.strong,{children:"SilentMethod"})," not only contains request information, but also Contains related configurations for silent submission, such as ",(0,n.jsx)(t.em,{children:"unique id"}),", ",(0,n.jsx)(t.em,{children:"error retry parameters"}),", etc. The requests in the queue will only initiate the next request after the previous response, thus ensuring the timing of the requests in the queue. You can put dependent requests in the same queue, which also ensures data consistency."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/29848971/220057005-dd467392-4a43-45a7-90dc-999dd1d95531.png",alt:"Silent queue"})}),"\n",(0,n.jsxs)(t.p,{children:["In the scheme, three behavior modes of ",(0,n.jsx)(t.code,{children:"queue"}),", ",(0,n.jsx)(t.code,{children:"silent"}),", and ",(0,n.jsx)(t.code,{children:"static"})," are provided respectively, which are used to distinguish what kind of behavior a request needs to perform."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"queue: The request will enter the silent queue, but it will not be persisted. It will wait for the previous request to complete before sending the request. The response callback will be triggered after the response. It is generally used for data acquisition that depends on the previous request;"}),"\n",(0,n.jsx)(t.li,{children:"silent: The request will enter the silent queue and be persisted, and then trigger the response callback immediately. In this behavior mode, onSuccess will receive virtual data, and onError will never be triggered. Use this pattern;"}),"\n",(0,n.jsx)(t.li,{children:"static: the request will not enter the silent queue, nor will it be persisted, it will issue the request immediately, and this mode can be used when silent submission is disabled;"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"virtual-data",children:"virtual data"}),"\n",(0,n.jsx)(t.p,{children:"In the submit-to-response mechanism, virtual data plays an important role. It means that before the server actually responds, it is used as a placeholder for the response data, and through the tracing mechanism, even if the virtual data is distributed in various locations of the application, Can be automatically replaced with the actual response data after the response. At the same time, it also plays an important role in the silent queue. It can identify the dependencies of requests in the queue, and replace the dependent data with actual data after the dependencies respond. For example, when creating a piece of data, it will return the id of this data. When the service When the terminal has not responded, the user performs a delete operation, and the id needs to be used as the delete identifier. At this time, the delete request will depend on the creation request. Before creating a request response, the virtual data will be used as an id placeholder as a parameter for deletion, and the virtual data id will be replaced after creating a request response, so that the deletion request can be completed."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/29848971/220005505-d30b7ae2-ddd0-4080-81a4-65c9be2cb0bd.png",alt:"virtual data"})}),"\n",(0,n.jsx)(t.p,{children:"Next, we will learn more about the characteristics of virtual data."})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>r});var n=i(67294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);