"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var k=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},5730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={title:"Mock data",sidebar_position:10},l=void 0,c={unversionedId:"tutorial/extension/alova-mock",id:"tutorial/extension/alova-mock",title:"Mock data",description:"This mock plug-in is an alova request adapter. Different from the traditional Proxy form, you can control the scope of use of mock data. You can control the global scope, a group of interface scopes, and even the enabling and use of a certain interface. Disabled, which is very useful in our actual business scenarios. Each iteration will add or modify a set of interfaces. We hope that the previous functions will still follow the developed interfaces, and let the new or modified interfaces Taking the simulation data, at this time, each developer can group the interfaces involved in this iteration into a group, and turn them on or off.",source:"@site/docs/tutorial/09-extension/01-alova-mock.md",sourceDirName:"tutorial/09-extension",slug:"/tutorial/extension/alova-mock",permalink:"/tutorial/extension/alova-mock",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/09-extension/01-alova-mock.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Mock data",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/category/extensions"},next:{title:"XMLHttpRequest Adapter",permalink:"/tutorial/extension/alova-adapter-xhr"}},u={},d=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Define the mock interface",id:"define-the-mock-interface",level:3},{value:"Create mock request adapter",id:"create-mock-request-adapter",level:3},{value:"Paths match mode",id:"paths-match-mode",level:3},{value:"Practical advice",id:"practical-advice",level:2},{value:"Group interfaces per developer per version",id:"group-interfaces-per-developer-per-version",level:3},{value:"Exclude mock code in production",id:"exclude-mock-code-in-production",level:3},{value:"Use with mockjs",id:"use-with-mockjs",level:3},{value:"Convert mock data",id:"convert-mock-data",level:2},{value:"Convert response data",id:"convert-response-data",level:3},{value:"Convert Error Instance",id:"convert-error-instance",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This mock plug-in is an alova request adapter. Different from the traditional Proxy form, you can control the scope of use of mock data. You can control the global scope, a group of interface scopes, and even the enabling and use of a certain interface. Disabled, which is very useful in our actual business scenarios. Each iteration will add or modify a set of interfaces. We hope that the previous functions will still follow the developed interfaces, and let the new or modified interfaces Taking the simulation data, at this time, each developer can group the interfaces involved in this iteration into a group, and turn them on or off."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2728Works seamlessly with alova"),(0,r.kt)("li",{parentName:"ul"},"\u2728Arbitrary grouping of simulation requests to control global, group, and individual simulation interface enable and disable"),(0,r.kt)("li",{parentName:"ul"},"\u2728Works with mockjs"),(0,r.kt)("li",{parentName:"ul"},"\u2728Do not pollute the production environment")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/mock --save\n"))),(0,r.kt)(i.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/mock\n")))),(0,r.kt)("p",null,"The following is the usage flow."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"define-the-mock-interface"},"Define the mock interface"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"defineMock")," to define a set of mock interfaces. You can directly specify the return response data in each mock interface, or specify the response data to be dynamically calculated for the callback function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=mockGrou1.js",title:"mockGrou1.js"},"import { defineMock } from '@alova/mock';\n\nexport default defineMock(\n  {\n    // capture get request\n    '/todo': [1, 2, 3, 4],\n\n    // rest style request\n    '/todo/{id}': ({ params }) => {\n      const id = params.id;\n      // ...\n      return {\n        title: '...',\n        time: '10:00'\n      };\n    },\n\n    // capture post request\n    '[POST]/todo': ({ query, data }) => {\n      // ...\n      return { success: true };\n    },\n\n    // return more detailed information\n    '[POST]/todo': ({ query, data }) => {\n      //...\n      return {\n        status: 403,\n        statusText: 'unknown error',\n        responseHeaders: {\n          //...\n        },\n        body: {\n          success: true\n        }\n      };\n    },\n\n    // simulate network error\n    '[POST]/todo': ({ query, data }) => {\n      throw new Error('network error');\n    },\n\n    // Add `-` before the key to disable this mock interface\n    '-[DELETE]/todo/{id}': ({ params }) => {\n      // ...\n      return { success: true };\n    }\n  },\n  true\n); // The second parameter indicates whether to enable this group of mock interfaces, the default is true, and can be specified as false to close\n")),(0,r.kt)("h3",{id:"create-mock-request-adapter"},"Create mock request adapter"),(0,r.kt)("p",null,"Create a mock request adapter when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"createAlova"),", and pass in the mock interface to complete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import GlobalFetch from 'alova/GlobalFetch';\nimport { createAlovaMockAdapter } from '@alova/mock';\nimport mockGroup1 from './mockGroup1';\n\n// highlight-start\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\n  // Global control whether the mock interface is enabled, the default is true\n  enable: true,\n\n  // Non-mock request adapter, used to send requests when the mock interface is not matched\n  httpAdapter: GlobalFetch(),\n\n  // mock interface response delay, in milliseconds\n  delay: 1000,\n\n  // Whether to print mock interface request information\n  mockRequestLogger: true,\n\n  // Simulation interface callback, data is the returned simulation data, you can use it to construct any object you want and return it to alova\n  // The following is the default callback function, which is suitable for requesting the adapter using GlobalFetch\n  // If you are using other request adapters, please customize the return data structure suitable for the adapter in the mock interface callback\n  onMockResponse: data => new Response(JSON.stringify(data))\n});\n// highlight-end\n\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n\n  // Use the mock request adapter, if you need to switch adapters, please see the following practical suggestions\n  requestAdapter: mockAdapter,\n\n  statesHook: /** ... */\n});\n")),(0,r.kt)("h3",{id:"paths-match-mode"},"Paths match mode"),(0,r.kt)("admonition",{title:"version required",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"1.5.0+")),(0,r.kt)("p",null,"By default, the path defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"defineMock")," is the full pathname of a url, see the following code snippet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org'\n  //...\n});\nalovaInst.Get('/user?id=1').send();\n")),(0,r.kt)("p",null,"When the request path in the example is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.alovajs.org/user?id=1"),", its full pathname is ",(0,r.kt)("inlineCode",{parentName:"p"},"/user"),", which can match ",(0,r.kt)("inlineCode",{parentName:"p"},"/user")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"defineMock"),"."),(0,r.kt)("p",null,"Usually this is enough, but when your baseURL is not just a domain name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org/v1/subname'\n  //...\n});\nalovaInst.Get('/user?id=1').send();\n")),(0,r.kt)("p",null,"In this example, the request path is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.alovajs.org/v1/subname/user?id=1"),", the matching path of the mock is ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/subname/user"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"/ in the baseURL needs to be v1/subname")," is also written together, which is slightly redundant when the number of interfaces is large."),(0,r.kt)("p",null,"At this point, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"matchMode")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"methodurl")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"createAlovaMockAdapter"),", it will only match the url defined in the method instance, for example, the above instance will match ",(0,r.kt)("inlineCode",{parentName:"p"},"/user?id=1")," instead of The part in baseURL needs to be written. On the contrary, if the url in the method instance has a get parameter, it also needs to be written in the matching path of ",(0,r.kt)("inlineCode",{parentName:"p"},"defineMock"),", just like ",(0,r.kt)("inlineCode",{parentName:"p"},"?id=1")," here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"createAlovaMockAdapter([mockGroup1 /** ... */], {\n  //...\n  // highlight-start\n  matchMode: 'methodurl'\n  // highlight-end\n});\n")),(0,r.kt)("h2",{id:"practical-advice"},"Practical advice"),(0,r.kt)("h3",{id:"group-interfaces-per-developer-per-version"},"Group interfaces per developer per version"),(0,r.kt)("p",null,"In the team development scenario, we often only need to simulate some undeveloped interfaces for each version development, and use the test environment interface for the interface of the previous version. At this time, in order to achieve better simulation interface management, you can use The two dimensions, development version and developer, group interfaces."),(0,r.kt)("p",null,"For example, there are two developers named ",(0,r.kt)("em",{parentName:"p"},"August"),", ",(0,r.kt)("em",{parentName:"p"},"kevin"),", they are developing v1.1 product features, they can manage the mock interface like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=August-v1.1.js",title:"August-v1.1.js"},"import { defineMock } from '@alova/mock';\n\nexport default defineMock({\n  '/todo': [\n    /** */\n  ],\n  '[POST]/todo': ({ data }) => {\n    // ...\n    // return...\n  }\n  // ...\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=kevin-v1.1.js",title:"kevin-v1.1.js"},"import { defineMock } from '@alova/mock';\n\nexport default defineMock({\n  '[PUT]/todo/add': ({ data }) => {\n    // ...\n    // return...\n  },\n  '[DELETE]/todo/remove': ({ data }) => {\n    // ...\n    // return...\n  }\n  // ...\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=request.js",title:"request.js"},"import Augustv1_1 from './August-v1.1';\nimport Keevenv1_1 from './kevin-v1.1';\n\nconst mockAdapter = createAlovaMockAdapter([Augustv1_1, kevinv1_1], {\n  httpAdapter: GlobalFetch(),\n  delay: 1000\n});\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n  requestAdapter: mockAdapter\n  // ...\n});\n")),(0,r.kt)("h3",{id:"exclude-mock-code-in-production"},"Exclude mock code in production"),(0,r.kt)("p",null,"The mock data is generally only used in the development environment, and will be switched to the actual interface in the production environment, so this mock code becomes useless in the production environment. At this time, we can exclude this code by judging the environment variables. , you just need to do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const globalFetch = GlobalFetch();\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\n  httpAdapter: globalFetch,\n  delay: 1000,\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n\n  // highlight-start\n  // In the production environment controlled by environment variables, the mock-related code will not be packaged in\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : globalFetch,\n  // highlight-end\n\n  statesHook: /** ... */\n});\n")),(0,r.kt)("h3",{id:"use-with-mockjs"},"Use with mockjs"),(0,r.kt)("p",null,"If you don't want to write the mock data yourself, but use it with a mock js library (such as mockjs), you can do so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { defineMock } from '@alova/mock';\nimport Mock from 'mockjs';\n\nexport default defineMock({\n  '/api1': Mock.mock({\n    'id|1-10000': 100\n  })\n});\n")),(0,r.kt)("h2",{id:"convert-mock-data"},"Convert mock data"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@alova/mock")," By default, the response data is packaged as a Response instance, and the response header is packaged as a Headers instance by default, which is adapted for ",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalFetch"),", but if you use other request adapters, you need to mock the data Convert to the corresponding format."),(0,r.kt)("h3",{id:"convert-response-data"},"Convert response data"),(0,r.kt)("p",null,"You can intercept the mock response data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onMockResponse")," field and return the transformed response data and response headers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also throw an ERROR in onMockResponse to indicate a failure request.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mockAdapter = createAlovaMockAdapter(\n   [\n     /* mock data */\n   ],\n   {\n     //...\n     // highlight-start\n     onMockResponse(response, request, currentMethod) {\n       // response is the corresponding data set, which contains status, statusText, responseHeaders, body\n       // request is the request data, which contains query, params, headers, data\n       // currentMethod is the method instance of the current request\n       //...\n       // Return converted response data and response headers\n       return {\n         response: /** response data */,\n         headers: /** Response headers */\n       };\n     }\n     // highlight-end\n   }\n);\n")),(0,r.kt)("h3",{id:"convert-error-instance"},"Convert Error Instance"),(0,r.kt)("p",null,"You can intercept the error instance in the ",(0,r.kt)("inlineCode",{parentName:"p"},"onMockError")," field and return the converted error message."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also throw an ERROR in onMockResponse to indicate failure request.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mockAdapter = createAlovaMockAdapter(\n  [\n    /* mock data */\n  ],\n  {\n    //...\n    // highlight-start\n    onMockError(error, currentMethod) {\n      // error is an error instance\n      // currentMethod is the method instance of the current request\n      //...\n      // Return the converted error message collection\n    }\n    // highlight-end\n  }\n);\n")))}h.isMDXComponent=!0}}]);