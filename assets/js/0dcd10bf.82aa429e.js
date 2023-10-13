"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),l=n(6550),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=i??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},1865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const l={title:"Middleware",sidebar_position:40},i=void 0,u={unversionedId:"tutorial/advanced/middleware",id:"tutorial/advanced/middleware",title:"Middleware",description:"Request middleware is an asynchronous function. it provides a powerful ability to control almost all behaviors of a request. If you just use alova, then you probably don't need to use request middleware, because it is mainly used to complete custom request strategies, no matter simple or complex request strategies, you may use it, let's look at it next What magical powers does it have.",source:"@site/docs/tutorial/08-advanced/04-middleware.md",sourceDirName:"tutorial/08-advanced",slug:"/tutorial/advanced/middleware",permalink:"/tutorial/advanced/middleware",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/08-advanced/04-middleware.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Middleware",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Custom Storage Adapter",permalink:"/tutorial/advanced/custom-storage-adapter"},next:{title:"Custom States Hook",permalink:"/tutorial/advanced/custom-stateshook"}},c={},d=[{value:"Middleware function",id:"middleware-function",level:2},{value:"Control response data",id:"control-response-data",level:2},{value:"change request",id:"change-request",level:2},{value:"Control errors",id:"control-errors",level:2},{value:"Catch errors",id:"catch-errors",level:3},{value:"Throw an error",id:"throw-an-error",level:3},{value:"Control response delay",id:"control-response-delay",level:2},{value:"More than that",id:"more-than-that",level:2},{value:"Included request information",id:"included-request-information",level:2},{value:"Modify responsive data",id:"modify-responsive-data",level:2},{value:"Decorate events",id:"decorate-events",level:2},{value:"Abort or repeat send request",id:"abort-or-repeat-send-request",level:2},{value:"Controlled loading state",id:"controlled-loading-state",level:2}],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Request middleware is an asynchronous function. it provides a powerful ability to control almost all behaviors of a request. If you just use alova, then you probably don't need to use request middleware, because it is mainly used to complete custom request strategies, no matter simple or complex request strategies, you may use it, let's look at it next What magical powers does it have."),(0,r.kt)("h2",{id:"middleware-function"},"Middleware function"),(0,r.kt)("p",null,"Request middleware is an async function, You can define request middleware in ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher"),". The following is a simple request middleware, which prints some information before and after the request without changing any request behavior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useRequest(todoList, {\n  async middleware(_, next) {\n    console.log('before request');\n    await next();\n    console.log('after request');\n  }\n});\n")),(0,r.kt)("p",null,"Here are a few things you need to know about the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," function call. This function is also an asynchronous function. Calling it can continue to send requests. At this time, the ",(0,r.kt)("em",{parentName:"p"},"loading")," state will be set to true, and then the request will be sent. The return value of next is a Promise instance with the response data, you can manipulate the return value in the middleware function."),(0,r.kt)("h2",{id:"control-response-data"},"Control response data"),(0,r.kt)("p",null,"The return value of the middleware function will be used as the response data of this request to participate in subsequent processing. If the middleware does not return any data but calls ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),", the response data of this request will be used for subsequent processing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// The modified result will be used as the response data\nuseRequest(todoList, {\n  async middleware(_, next) {\n    const result = await next();\n    result.code = 500;\n    return result;\n  }\n});\n\n// Will participate in subsequent processing with the response data of this request\nuseRequest(todoList, {\n  async middleware(_, next) {\n    await next();\n  }\n});\n\n// will respond with the string abc\nuseRequest(todoList, {\n  async middleware(_, next) {\n    await next();\n    return 'abc';\n  }\n});\n")),(0,r.kt)("p",null,"There is also a special case here. When ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," is not called and there is no return value, subsequent processing will not be performed, which means that ",(0,r.kt)("em",{parentName:"p"},"onSuccess"),", ",(0,r.kt)("em",{parentName:"p"},"onError"),", ",(0,r.kt)("em",{parentName:"p"},"onComplete")," response events will not be triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useRequest(todoList, {\n  async middleware() {}\n});\n")),(0,r.kt)("h2",{id:"change-request"},"change request"),(0,r.kt)("p",null,"Sometimes you want to change the request. At this time, you can specify another method instance in ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),", and the information in this method will be requested when sending the request. At the same time, you can also set whether to force the request through ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," Penetrating the cache is also very simple."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useRequest(todoList, {\n  async middleware(_, next) {\n    await next({\n      // Change the requested method instance\n      method: newMethodInstance,\n\n      // Whether to force the request this time\n      force: true\n    });\n  }\n});\n")),(0,r.kt)("h2",{id:"control-errors"},"Control errors"),(0,r.kt)("h3",{id:"catch-errors"},"Catch errors"),(0,r.kt)("p",null,"In the middleware, you can capture the request error generated in ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),", after capturing, the global ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," hook will no longer be triggered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useRequest(todoList, {\n  async middleware(_, next) {\n    try {\n      await next();\n    } catch (e) {\n      console.error('Error caught', e);\n    }\n  }\n});\n")),(0,r.kt)("h3",{id:"throw-an-error"},"Throw an error"),(0,r.kt)("p",null,"Of course, you can also throw a custom error in the middleware, even if the request is normal, it will enter the request error process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// No request is sent, and global and request-level onError will be triggered at the same time. If the request is sent through `method.send`, the promise instance of rejection will be returned\nuseRequest(todoList, {\n  async middleware(_, next) {\n    throw new Error('error on before request');\n    await next();\n  }\n});\n\n// After request is success, global and request-level onError will be triggered at the same time. If the request is sent through `method.send`, the promise instance of rejection will be returned\nuseRequest(todoList, {\n  async middleware(_, next) {\n    await next();\n    throw new Error('error on after request');\n  }\n});\n")),(0,r.kt)("h2",{id:"control-response-delay"},"Control response delay"),(0,r.kt)("p",null,"In the middleware, we can delay the response or respond in advance. In the case of advance, although the response data cannot be obtained, some other data can be returned as the response data to participate in subsequent processing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Delay response for 1 second\nuseRequest(todoList, {\n  async middleware(_, next) {\n    await new Promise(resolve => {\n      setTimeout(resolve, 1000);\n    });\n    return next();\n  }\n});\n\n// Respond immediately and use the string abc as the response data\nuseRequest(todoList, {\n  async middleware(_, next) {\n    return 'abc';\n  }\n});\n")),(0,r.kt)("h2",{id:"more-than-that"},"More than that"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"So far, all we have mentioned is the use of the second parameter ",(0,r.kt)("inlineCode",{parentName:"strong"},"next")," of the middleware, so what is the first parameter for? ")),(0,r.kt)("p",null,"The first parameter of the middleware contains some information about this request, as well as the control functions for the status and events returned in useHook such as ",(0,r.kt)("inlineCode",{parentName:"p"},"loading"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess"),". Let's move on!"),(0,r.kt)("h2",{id:"included-request-information"},"Included request information"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"front",label:"front hooks",mdxType:"TabItem"},(0,r.kt)("p",null,"The following is the request information contained in the middleware of useRequest and useWatcher"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function alovaFrontMiddleware(context, next) {\n  // The method instance of this request\n  context.method;\n\n  // The parameter array sent by the send function, the default is []\n  context.sendArgs;\n\n  // The cache data hit by this request\n  context.cachedResponse;\n\n  // configuration collection of useHook\n  context.config;\n\n  // The various states returned by useHook, including the following attributes\n  // loading, data, error, downloading, uploading, and additional states managed by managedStates\n  context.frontStates;\n  //...\n}\n"))),(0,r.kt)(s.Z,{value:"fetch",label:"fetcher hook",mdxType:"TabItem"},(0,r.kt)("p",null,"The following is the request information contained in the middleware of useFetcher"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function alovaFetcherMiddleware(context, next) {\n  // The method instance of this request\n  context.method;\n\n  // The parameter group passed in by the fetch of useFetcher, the default is []\n  context.fetchArgs;\n\n  // The cache data hit by this request\n  context.cachedResponse;\n\n  // configuration collection of useHook\n  context.config;\n\n  // The various states returned by useHook, including the following attributes\n  // fetching, error, downloading, uploading\n  context.fetchStates;\n  //...\n}\n")))),(0,r.kt)("p",null,"Next, let's take a look at what controls are available."),(0,r.kt)("h2",{id:"modify-responsive-data"},"Modify responsive data"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"context.update")," to modify reactive data."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"front",label:"front hooks",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function alovaFrontMiddleware(context, next) {\n  context.update({\n    // Modify the loading status to true in advance\n    loading: true,\n\n    // Modify the data value, such as setting custom initialization data\n    data: {\n      /* ... */\n    }\n  });\n  //...\n}\n"))),(0,r.kt)(s.Z,{value:"fetch",label:"fetcher hook",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function alovaFetcherMiddleware(context, next) {\n  context.update({\n    // Modify the fetching status to true in advance\n    fetching: true,\n\n    // Modify the value of error\n    error: new Error('custom midleware error')\n  });\n  //...\n}\n")))),(0,r.kt)("h2",{id:"decorate-events"},"Decorate events"),(0,r.kt)("p",null,"You can also decorate ",(0,r.kt)("em",{parentName:"p"},"onSuccess"),", ",(0,r.kt)("em",{parentName:"p"},"onError"),", ",(0,r.kt)("em",{parentName:"p"},"onComplete")," callback functions in middleware to make them richer, such as changing the parameters of the callback function, or receiving the return value of the callback function to achieve more functions."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateSuccess"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateError"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateComplete")," functions to decorate callback functions. The following takes the success callback as an example, which is decorated in 3 places:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"custom")," attribute to event object;"),(0,r.kt)("li",{parentName:"ol"},"Added a second parameter to the success callback function, the value is ",(0,r.kt)("inlineCode",{parentName:"li"},"extra data"),";"),(0,r.kt)("li",{parentName:"ol"},"Receive the value of the second success callback function and print it;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { onSuccess } = useRequest(todoList, {\n  //...\n  async middleware(context, next) {\n    // Decorate the successful callback function, the following function parameters are explained:\n    // handler: bound callback function\n    // event: the event object corresponding to the callback function\n    // index: The subscript of the callback function, indicating which callback function is currently being executed\n    // length: the number of callback functions bound\n    context.decorateSuccess((handler, event, index, length) => {\n      event.custom = 1;\n      const received = handler(event, 'extra data');\n      if (index === 1) {\n        console.log(`received the return value of ${index + 1} callback function:`, received);\n        // [Print information] Received the return value of the second callback function: I'm second handler\n      }\n    });\n    //...\n  }\n});\nonSuccess((event, extra) => {\n  console.log(event.custom); // 1\n  console.log(extra); // extra data\n});\nonSuccess((event, extra) => {\n  return \"I'm second handler\";\n});\n")),(0,r.kt)("p",null,"The usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateError"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateComplete")," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateSuccess"),"."),(0,r.kt)("h2",{id:"abort-or-repeat-send-request"},"Abort or repeat send request"),(0,r.kt)("p",null,"In the middleware, you can also receive ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," functions returned by use hooks (",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," in useFetcher), and you can also send multiple requests when triggering a request intent."),(0,r.kt)("p",null,"A typical usage example is request retry. After sending a request, if the request fails, it will automatically request again according to a certain strategy, and ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," will be triggered after the retry is successful. The following is a sample code for a simple request retry."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"front",label:"front hooks",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function alovaFrontMiddleware(context, next) {\n  return next().catch(error => {\n    if (needRetry) {\n      setTimeout(() => {\n        context.send(...context.sendArgs);\n      }, retryDelay);\n    }\n    return Promise.reject(error);\n  });\n}\n"))),(0,r.kt)(s.Z,{value:"fetch",label:"fetcher hook",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function alovaFetcherMiddleware(context, next) {\n  return next().catch(error => {\n    if (needRetry) {\n      setTimeout(() => {\n        context.fetch(context.method, ...context.fetchArgs);\n      }, retryDelay);\n    }\n    return Promise.reject(error);\n  });\n}\n")))),(0,r.kt)("p",null,"If you need to abort the request inside the middleware, you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"context.abort()"),"."),(0,r.kt)("h2",{id:"controlled-loading-state"},"Controlled loading state"),(0,r.kt)("p",null,"In the above content, we know that you can customize and modify the responsive data through ",(0,r.kt)("inlineCode",{parentName:"p"},"context.update"),", but when you modify the loading status value (",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"fetching"),"), it will be hindered, because in normal circumstances Next, the loading status value will be automatically set to true when ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," is called, and false will be automatically set in the response process, which will overwrite the loading status value modified by ",(0,r.kt)("inlineCode",{parentName:"p"},"context.update"),", at this time we can turn on the controlled loading status , after it is turned on, the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," function and the response process will no longer modify the loading status value, but we have full control over it."),(0,r.kt)("p",null,"Let's take request retry as an example. We hope that the loading status will remain true after the request is retried until the request ends."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"front",label:"front hooks",mdxType:"TabItem"},(0,r.kt)("p",null,"In the middleware of useRequest and useWatcher, use ",(0,r.kt)("inlineCode",{parentName:"p"},"context.controlLoading")," to enable custom control loading status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function alovaFrontMiddleware(context, next) {\n  context.controlLoading();\n\n  // Set to true when the request starts\n  context.update({ loading: true });\n  return next()\n    .then(value => {\n      // set to false after successful request\n      context.update({ loading: false });\n      return value;\n    })\n    .catch(error => {\n      if (needRetry) {\n        setTimeout(() => {\n          context.send(...context.sendArgs);\n        }, retryDelay);\n      } else {\n        // Also set to false when not retrying again\n        context.update({ loading: false });\n      }\n      return Promise.reject(error);\n    });\n}\n"))),(0,r.kt)(s.Z,{value:"fetch",label:"fetcher hook",mdxType:"TabItem"},(0,r.kt)("p",null,"In the middleware of useFetching, use ",(0,r.kt)("inlineCode",{parentName:"p"},"context.controlFetching")," to enable custom control loading state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function alovaFetcherMiddleware(context, next) {\n  context.controlFetching();\n\n  // Set to true when the request starts\n  context.update({ fetching: true });\n  return next()\n    .then(value => {\n      // set to false after successful request\n      context.update({ fetching: false });\n      return value;\n    })\n    .catch(error => {\n      if (needRetry) {\n        setTimeout(() => {\n          context.fetch(context.method, ...context.fetchArgs);\n        }, retryDelay);\n      } else {\n        // Also set to false when not retrying again\n        context.update({ fetching: false });\n      }\n      return Promise.reject(error);\n    });\n}\n")))))}m.isMDXComponent=!0}}]);