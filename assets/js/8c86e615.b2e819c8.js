"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4465],{46120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(85893),s=n(11151);const a={title:"What more?"},l=void 0,o={id:"tutorial/strategy/sensorless-data-interaction/what-more",title:"What more?",description:"Description of the role of virtual data",source:"@site/versioned_docs/version-v2/tutorial/05-strategy/01-sensorless-data-interaction/09-what-more.md",sourceDirName:"tutorial/05-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/what-more",permalink:"/v2/tutorial/strategy/sensorless-data-interaction/what-more",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/05-strategy/01-sensorless-data-interaction/09-what-more.md",tags:[],version:"v2",sidebarPosition:9,frontMatter:{title:"What more?"},sidebar:"tutorial",previous:{title:"Step 5 - Edit Data",permalink:"/v2/tutorial/strategy/sensorless-data-interaction/edit-item"},next:{title:"Pagination request strategy",permalink:"/v2/tutorial/strategy/usePagination"}},r={},d=[{value:"Description of the role of virtual data",id:"description-of-the-role-of-virtual-data",level:2},{value:"New events in useSQRequest",id:"new-events-in-usesqrequest",level:2},{value:"onFallback",id:"onfallback",level:3},{value:"Save additional operation data",id:"save-additional-operation-data",level:2},{value:"Custom serializer",id:"custom-serializer",level:2},{value:"Manipulate the silent queue",id:"manipulate-the-silent-queue",level:2},{value:"Using multiple silent queues",id:"using-multiple-silent-queues",level:3},{value:"Find silentMethod",id:"find-silentmethod",level:3},{value:"Find a silentMethod instance",id:"find-a-silentmethod-instance",level:4},{value:"Custom Lookup",id:"custom-lookup",level:4},{value:"Change the silentMethod in the queue",id:"change-the-silentmethod-in-the-queue",level:3},{value:"replace silentMethod",id:"replace-silentmethod",level:4},{value:"remove silentMethod",id:"remove-silentmethod",level:4},{value:"Use silentQueueMap to change silentMethod",id:"use-silentqueuemap-to-change-silentmethod",level:4},{value:"Queue request delay",id:"queue-request-delay",level:2},{value:"Set request delay",id:"set-request-delay",level:3},{value:"Dynamically set the request delay",id:"dynamically-set-the-request-delay",level:3},{value:"Dynamically set the method name",id:"dynamically-set-the-method-name",level:2},{value:"Global silent submit event",id:"global-silent-submit-event",level:2},{value:"onSilentSubmitBoot",id:"onsilentsubmitboot",level:3},{value:"onSilentSubmitError",id:"onsilentsubmiterror",level:3},{value:"onSilentSubmitFail",id:"onsilentsubmitfail",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description-of-the-role-of-virtual-data",children:"Description of the role of virtual data"}),"\n",(0,i.jsx)(t.p,{children:"In the previous chapters we used virtual data as the id placeholder, but its function is more than that, it can occupy any response data, for example, in a complex list, when creating a data item, the server needs to calculate additional Data, at this time, these additional data can also be occupied by virtual data, but this requires that the additional data needs to be returned together when the data item is created. See the following example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const { onSuccess, send } = useSQRequest(createOrEditData, {\n  behavior: 'silent',\n  immediate: false,\n\n  // Construct the same data structure as the response data\n  silentDefaultResponse: () => {\n    return {\n      id: '--',\n      extra1: '',\n      extra2: ''\n    };\n  }\n});\nonSuccess(event => {\n  event.data.id; // virtual data\n  event.data.extra1; //virtual data\n  event.data.extra2; //virtual data\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"new-events-in-usesqrequest",children:"New events in useSQRequest"}),"\n",(0,i.jsxs)(t.p,{children:["In order to better monitor the behavior of requests in the queue, ",(0,i.jsx)(t.code,{children:"useSQRequset"})," also provides the following 3 additional event monitoring functions, you can obtain the binding functions in the following ways."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const { onBeforePushQueue, onPushedQueue, onFallback } = useSQRequest(/* ... */);\n"})}),"\n",(0,i.jsx)(t.p,{children:"###onBeforePushQueue"}),"\n",(0,i.jsxs)(t.p,{children:["silentMethod is an event before entering the request queue. It is valid when the behavior mode is ",(0,i.jsx)(t.code,{children:"queue"})," or ",(0,i.jsx)(t.code,{children:"silent"}),". You can return ",(0,i.jsx)(t.code,{children:"false"})," in this event callback to prevent the current silentMethod from entering the queue. For example, you may want to replace the current silentMethod with another one. It can be done like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"//...\nonBeforePushQueue(event => {\n  // Replace the old silentMethod with the specified id each time, reducing the number of requests\n  const prevSumbmitMethod = getSilentMethod('temp' + id);\n  if (event.silentMethod && prevSumbmitMethod) {\n    prevSumbmitMethod.replace(event.silentMethod);\n    return false;\n  }\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"###onPushedQueue"}),"\n",(0,i.jsxs)(t.p,{children:["silentMethod The event after entering the queue. It is valid when the behavior mode is ",(0,i.jsx)(t.code,{children:"queue"})," or ",(0,i.jsx)(t.code,{children:"silent"}),". If the queue is blocked in the ",(0,i.jsx)(t.strong,{children:"onBeforePushQueue"})," event, this function will not trigger."]}),"\n",(0,i.jsx)(t.h3,{id:"onfallback",children:"onFallback"}),"\n",(0,i.jsx)(t.p,{children:"Similar to the traditional optimistic ui solution, we also provide a request rollback event, which will be triggered when the request reaches the maximum number of retries or the retry judgment fails. You can use it to handle some rollback operations."}),"\n",(0,i.jsx)(t.admonition,{title:"Warning",type:"warning",children:(0,i.jsxs)(t.p,{children:["When the fallback event is bound, even if the behavior mode is ",(0,i.jsx)(t.code,{children:"silent"}),", the request will no longer be persisted, and it will be lost after refreshing the page. This is because the persistent silentMethod usually needs to ensure completion, not Rollbacks allow the user to re-process, in which case the rollback function should not be used."]})}),"\n",(0,i.jsx)(t.h2,{id:"save-additional-operation-data",children:"Save additional operation data"}),"\n",(0,i.jsxs)(t.p,{children:["When creating or editing a data item, the previous chapters only saved the echo data to ",(0,i.jsx)(t.code,{children:"silentMethod.reviewData"}),", if there are some additional data that need to be recorded, such as the menu options of the edit page, etc., we also need to record them to ensure They can also be selected when the network is disconnected. At this time, these data are mounted on the silentMethod instance and persisted together."]}),"\n",(0,i.jsxs)(t.p,{children:["Generally speaking, you can save persistent data with any property name, but an error will be reported in typescript, so the ",(0,i.jsx)(t.code,{children:"silentMethod.extraData"})," attribute is specified for you as the storage field for extra data, remember to use ",(0,i.jsx)(t.code,{children:"silentMethod.save()"})," for persistence data."]}),"\n",(0,i.jsx)(t.h2,{id:"custom-serializer",children:"Custom serializer"}),"\n",(0,i.jsxs)(t.p,{children:["By default, alova uses localStorage for silentMethod data persistence, so it will call ",(0,i.jsx)(t.code,{children:"JSON.stringify"})," to convert to a string when persisting, but json data only supports basic data types, pure objects and arrays, if you want Serialize special data structures such as Date instances, RegExp instances, functions, and custom class instances. Alova supports custom serializers to handle them. How to convert it to a data structure supported by json when storing it? How to convert to the original object structure."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const regExpSerializer = {\n   // forward is called when serializing\n   // Need to judge whether the data is the target value, if not, return undefined, indicating that it will not be processed\n   forward: data => data instanceof RegExp ? data.source : undefined,\n\n   // backward is called during deserialization, data is the value returned in forward\n   backward: source => new RegExp(source);\n};\n\nbootSilentFactory({\n   //...\n   // use this serializer via serializers\n   serializers: {\n     customRegExp: regExpSerializer\n   }\n})\n"})}),"\n",(0,i.jsx)(t.p,{children:"SilentFactory provides Date and RegExp serializers by default, and you can also use the same key to override the default serializers"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const defaultSerializers = {\n  Date: dateSerializer,\n  RegExp: regExpSerializer\n};\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/alovajs/scene/blob/main/src/hooks/silent/serializer/date.ts",children:"Read Date serializer source code"})}),"\n",(0,i.jsx)(t.h2,{id:"manipulate-the-silent-queue",children:"Manipulate the silent queue"}),"\n",(0,i.jsxs)(t.p,{children:["Silent queues are used to ensure the timing of requests. We can create queues arbitrarily, and all requests entering the queue will be stored in the queue in the form of ",(0,i.jsx)(t.strong,{children:"SilentMethod"})," instances. Each ",(0,i.jsx)(t.strong,{children:"SilentMethod"})," not only contains request information, but also Contains relevant configuration for silent submission. Any number of silent queues can be generated, and it supports searching, modifying, and deleting silentMethod instances in the queue."]}),"\n",(0,i.jsx)(t.h3,{id:"using-multiple-silent-queues",children:"Using multiple silent queues"}),"\n",(0,i.jsxs)(t.p,{children:["Requests whose behavior mode is set to ",(0,i.jsx)(t.code,{children:"queue"})," and ",(0,i.jsx)(t.code,{children:"silent"})," will enter the silent queue. By default, the silentMethod instance will be assigned to the ",(0,i.jsx)(t.strong,{children:"default"})," queue. When it needs to be assigned to other queues, it can be assigned in ",(0,i.jsx)(t.em,{children:"useSQRequest"})," Specify the ",(0,i.jsx)(t.code,{children:"queue"})," parameter."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\n  //...\n  // Specify the silentMethod instance to enter the queue named customQueue\n  queue: 'customQueue',\n  behavior: 'silent'\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also specify ",(0,i.jsx)(t.code,{children:"queue"})," as a function to return the name of the queue. This function will be called every time a request is made, and the function parameters come from the send function."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const { send } = useSQRequest(createOrEditTodo, {\n  //...\n  // Determine whether to enter the customQueue queue according to useCustomQueue\n  queue: useCustomQueue => (useCustomQueue ? 'customQueue' : 'default'),\n  behavior: 'silent',\n  immediate: false\n});\nconst handleClick = () => {\n  send(true);\n};\n"})}),"\n",(0,i.jsx)(t.h3,{id:"find-silentmethod",children:"Find silentMethod"}),"\n",(0,i.jsxs)(t.p,{children:["In the previous ",(0,i.jsx)(t.a,{href:"/v2/tutorial/strategy/sensorless-data-interaction/data-compensation",children:"data compensation"}),", we used ",(0,i.jsx)(t.a,{href:"/v2/tutorial/strategy/sensorless-data-interaction/data-compensation#filtersilentmethods",children:"filterSilentMethods"})," to find the silentMethod of the specified queue instance, it will return all matching silentMethod instances, here are two more ways to find the queue:"]}),"\n",(0,i.jsx)(t.h4,{id:"find-a-silentmethod-instance",children:"Find a silentMethod instance"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"getSilentMethod"})," to query the first matching silentMethod instance, the usage is the same as ",(0,i.jsx)(t.a,{href:"/v2/tutorial/strategy/sensorless-data-interaction/data-compensation#filtersilentmethods",children:"filterSilentMethods"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function filterSilentMethods(\n  methodNameMatcher?: string | number | RegExp,\n  queueName?: string,\n  filterActive?: boolean\n): SilentMethod | undefined;\n"})}),"\n",(0,i.jsx)(t.h4,{id:"custom-lookup",children:"Custom Lookup"}),"\n",(0,i.jsxs)(t.p,{children:["Customize the lookup through the exported ",(0,i.jsx)(t.code,{children:"silentQueueMap"})," queue collection, the data structure of ",(0,i.jsx)(t.code,{children:"silentQueueMap"})," is:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const silentQueueMap = {\n  default: [silentMethod1, silentMethod2 /* ... */],\n  queueName1: [silentMethod3, silentMethod4 /* ... */],\n  queueName2: [silentMethod5, silentMethod6 /* ... */]\n  //...\n};\n"})}),"\n",(0,i.jsx)(t.h3,{id:"change-the-silentmethod-in-the-queue",children:"Change the silentMethod in the queue"}),"\n",(0,i.jsx)(t.p,{children:"After finding the silentMethod instance you want, you can manipulate these waiting silentMethod instances."}),"\n",(0,i.jsx)(t.h4,{id:"replace-silentmethod",children:"replace silentMethod"}),"\n",(0,i.jsxs)(t.p,{children:["Call ",(0,i.jsx)(t.code,{children:"silentMethod.replace"})," to replace a silentMethod with another silentMethod in the queue."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"oldSilentMethod.replace(newSilentMethod);\n"})}),"\n",(0,i.jsx)(t.h4,{id:"remove-silentmethod",children:"remove silentMethod"}),"\n",(0,i.jsxs)(t.p,{children:["Call ",(0,i.jsx)(t.code,{children:"silentMethod.remove"})," to remove the current silentMethod from the queue."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"oldSilentMethod.remove();\n"})}),"\n",(0,i.jsx)(t.h4,{id:"use-silentqueuemap-to-change-silentmethod",children:"Use silentQueueMap to change silentMethod"}),"\n",(0,i.jsxs)(t.p,{children:["You can also access ",(0,i.jsx)(t.code,{children:"silentQueueMap"})," to custom change any data of any queue."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import { silentQueueMap } from '@alova/scene-*';\n\n// Modify all silentMethods in the default queue\nsilentQueueMap.default.forEach(silentMethodItem => {\n  //...\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"queue-request-delay",children:"Queue request delay"}),"\n",(0,i.jsx)(t.p,{children:"Some applications need to submit data frequently, such as editor-type applications, which are saved in real time during the editing process without aborting the user's use. When using silent submission in this type of application, more request information will be generated, not only It will fill up the front-end cache and make the server receive too many requests. At this time, we may no longer need to synchronize all save operations, but send an operation within a period of time. There will be the following two solutions:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Throttle the editing operation, and only initiate one submission within n seconds. This solution may lose the operation records during the delay period, resulting in only the status of the last submission being obtained when refreshing;"}),"\n",(0,i.jsx)(t.li,{children:"Delay the save request in the queue, and only keep the latest request information during the delay time, so that you can reduce the request while retaining the latest editing status;"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["By default, the silentMethod in the queue will send the request immediately after the last response. We can set the delay sending time of the silentMethod through ",(0,i.jsx)(t.code,{children:"requestWait"})," at startup, and keep the latest silentMethod by manipulating the queue during this time."]}),"\n",(0,i.jsx)(t.h3,{id:"set-request-delay",children:"Set request delay"}),"\n",(0,i.jsx)(t.p,{children:"You can set the delay time for the specified queue, or you can set multiple queues at once."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"bootSilentFactory({\n  alova: alovaInst,\n  // highlight-start\n  requestWait: [\n    // Each silentMethod in the customQueue queue will delay 5000ms to initiate a request\n    { queue: 'customQueue', wait: 5000 },\n\n    //Use a regular expression to uniformly set a 3000ms delay request time for the queue whose name is prefixed with delay\n    { queue: /^delay/, wait: 3000 }\n  ]\n  // highlight-end\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When ",(0,i.jsx)(t.code,{children:"requestWait"})," is directly set to a number, it is valid for the default queue by default."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"bootSilentFactory({\n  alova: alovaInst,\n  // highlight-start\n  // Each silentMethod in the default queue will delay 5000ms to initiate a request\n  requestWait: 5000\n  // highlight-end\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"dynamically-set-the-request-delay",children:"Dynamically set the request delay"}),"\n",(0,i.jsx)(t.p,{children:"Many times we only want a specific silentMethod in the queue to set a delay request. At this time, a function can be used to dynamically set the request delay. Each silentMethod of the specified queue will call this function before initiating a request to determine the delay time."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"bootSilentFactory({\n   alova: alovaInst,\n   // highlight-start\n   requestWait: [\n     {\n       queue: /^delay,\n       // Only delay 5000ms for post requests with url /edit\n       wait: (silentMethod, queueName) => {\n         const { type, url, data } = silentMethod.entity;\n         if (type === 'POST' && url === '/edit') {\n           return 5000;\n         }\n       }\n     },\n   ]\n   // highlight-end\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Similarly, when ",(0,i.jsx)(t.code,{children:"requestWait"})," is set directly to a function, it defaults to the default queue."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"bootSilentFactory({\n  alova: alovaInst,\n  // highlight-start\n  requestWait: (silentMethod, queueName) => {\n    const { type, url, data } = silentMethod.entity;\n    if (type === 'POST' && url === '/edit') {\n      return 5000;\n    }\n  }\n  // highlight-end\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"dynamically-set-the-method-name",children:"Dynamically set the method name"}),"\n",(0,i.jsx)(t.p,{children:"For easy search, if you need to dynamically set the name of the method in silentMethod, you can call setName."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// Reset the name of silentMethod on successful request\nonSuccess(({ data, silentMethod }) => {\n  silentMethod.entity.setName('name' + data.id);\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"global-silent-submit-event",children:"Global silent submit event"}),"\n",(0,i.jsxs)(t.p,{children:["In the previous chapter, we touched ",(0,i.jsx)(t.code,{children:"onSilentSubmitSuccess"}),", we provided a total of 5 global events."]}),"\n",(0,i.jsx)(t.h3,{id:"onsilentsubmitboot",children:"onSilentSubmitBoot"}),"\n",(0,i.jsx)(t.p,{children:"Silent factory start event, triggered after the silent factory is started."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function onSilentSubmitBoot(handler: () => void): OffEventCallback;\n"})}),"\n",(0,i.jsx)(t.p,{children:"###onBeforeSilentSubmit"}),"\n",(0,i.jsxs)(t.p,{children:["Fired before a silentMethod request with ",(0,i.jsx)(t.code,{children:"behavior=silent"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function onBeforeSilentSubmit(handler: (event: GlobalSQEvent)): OffEventCallback;\n"})}),"\n",(0,i.jsx)(t.p,{children:"###onSilentSubmitSuccess"}),"\n",(0,i.jsxs)(t.p,{children:["Fired when a silentMethod request with ",(0,i.jsx)(t.code,{children:"behavior=silent"})," succeeds."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function onSilentSubmitSuccess(\n  handler: (event: GlobalSQSuccessEvent) => void\n): OffEventCallback;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"onsilentsubmiterror",children:"onSilentSubmitError"}),"\n",(0,i.jsxs)(t.p,{children:["Fired when the silentMethod request with ",(0,i.jsx)(t.code,{children:"behavior=silent"})," fails, but the maximum number of retries has not been reached."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function onSilentSubmitError(handler: (event: GlobalSQErrorEvent) => void): OffEventCallback;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"onsilentsubmitfail",children:"onSilentSubmitFail"}),"\n",(0,i.jsxs)(t.p,{children:["When the silentMethod of ",(0,i.jsx)(t.code,{children:"behavior=silent"})," encounters a request failure, the following 3 situations will trigger this event:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Triggered when the request reaches the maximum number of retries;"}),"\n",(0,i.jsx)(t.li,{children:"When the number of retries is not set, the first request failure will trigger;"}),"\n",(0,i.jsx)(t.li,{children:"Triggered when the request has not reached the maximum number of retries, but the retry is judged to be no more retries;"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function onSilentSubmitFail(handler: (event: GlobalSQFailEvent) => void): OffEventCallback;\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above event binding functions will return the unbinding function, and you can unbind the event before the component is unmounted."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var i=n(67294);const s={},a=i.createContext(s);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);