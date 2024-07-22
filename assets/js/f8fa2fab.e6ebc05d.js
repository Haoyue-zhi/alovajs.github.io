"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7069],{8877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(85893),r=t(11151),o=t(74866),s=t(85162);const i={title:"Mock data"},c=void 0,l={id:"tutorial/request-adapter/alova-mock",title:"Mock data",description:"This mock plug-in is an alova request adapter. Different from the traditional Proxy form, you can control the Scope of usage of mock data. You can control the global scope, a group of interface scopes, and even the enabling and use of a certain interface. Disabled, which is very useful in our actual business scenarios. Each iteration will add or modify a set of interfaces. We hope that the previous functions will still follow the developed interfaces, and let the new or modified interfaces Taking the simulation data, at this time, each developer can group the interfaces involved in this iteration into a group, and turn them on or off.",source:"@site/versioned_docs/version-v2/tutorial/08-request-adapter/01-alova-mock.md",sourceDirName:"tutorial/08-request-adapter",slug:"/tutorial/request-adapter/alova-mock",permalink:"/v2/tutorial/request-adapter/alova-mock",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/08-request-adapter/01-alova-mock.md",tags:[],version:"v2",sidebarPosition:1,frontMatter:{title:"Mock data"},sidebar:"tutorial",previous:{title:"Request adapter",permalink:"/v2/category/request-adapter"},next:{title:"XMLHttpRequest Adapter",permalink:"/v2/tutorial/request-adapter/alova-adapter-xhr"}},d={},u=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Define the mock interface",id:"define-the-mock-interface",level:3},{value:"Create mock request adapter",id:"create-mock-request-adapter",level:3},{value:"Paths match mode",id:"paths-match-mode",level:3},{value:"Practical advice",id:"practical-advice",level:2},{value:"Group interfaces per developer per version",id:"group-interfaces-per-developer-per-version",level:3},{value:"Exclude mock code in production",id:"exclude-mock-code-in-production",level:3},{value:"Use with mockjs",id:"use-with-mockjs",level:3},{value:"Convert mock data",id:"convert-mock-data",level:2},{value:"Convert response data",id:"convert-response-data",level:3},{value:"Convert Error Instance",id:"convert-error-instance",level:3}];function h(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This mock plug-in is an alova request adapter. Different from the traditional Proxy form, you can control the Scope of usage of mock data. You can control the global scope, a group of interface scopes, and even the enabling and use of a certain interface. Disabled, which is very useful in our actual business scenarios. Each iteration will add or modify a set of interfaces. We hope that the previous functions will still follow the developed interfaces, and let the new or modified interfaces Taking the simulation data, at this time, each developer can group the interfaces involved in this iteration into a group, and turn them on or off."}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Works seamlessly with alova"}),"\n",(0,a.jsx)(n.li,{children:"Arbitrary grouping of simulation requests to control global, group, and individual simulation interface enable and disable"}),"\n",(0,a.jsx)(n.li,{children:"Works with mockjs"}),"\n",(0,a.jsx)(n.li,{children:"Do not pollute the production environment"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(s.Z,{value:"1",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @alova/mock --save\n"})})}),(0,a.jsx)(s.Z,{value:"2",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @alova/mock\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The following is the usage flow."}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"define-the-mock-interface",children:"Define the mock interface"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"defineMock"})," to define a set of mock interfaces. You can directly specify the return response data in each mock interface, or specify the response data to be dynamically calculated for the callback function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:"title=mockGrou1.js",children:"import { defineMock } from '@alova/mock';\n\nexport default defineMock(\n  {\n    // capture get request\n    '/todo': [1, 2, 3, 4],\n\n    // rest style request\n    '/todo/{id}': ({ params }) => {\n      const id = params.id;\n      // ...\n      return {\n        title: '...',\n        time: '10:00'\n      };\n    },\n\n    // capture post request\n    '[POST]/todo': ({ query, data }) => {\n      // ...\n      return { success: true };\n    },\n\n    // return more detailed information\n    '[POST]/todo': ({ query, data }) => {\n      //...\n      return {\n        status: 403,\n        statusText: 'unknown error',\n        responseHeaders: {\n          //...\n        },\n        body: {\n          success: true\n        }\n      };\n    },\n\n    // simulate network error\n    '[POST]/todo': ({ query, data }) => {\n      throw new Error('network error');\n    },\n\n    // Add `-` before the key to disable this mock interface\n    '-[DELETE]/todo/{id}': ({ params }) => {\n      // ...\n      return { success: true };\n    }\n  },\n  true\n); // The second parameter indicates whether to enable this group of mock interfaces, the default is true, and can be specified as false to close\n"})}),"\n",(0,a.jsx)(n.h3,{id:"create-mock-request-adapter",children:"Create mock request adapter"}),"\n",(0,a.jsxs)(n.p,{children:["Create a mock request adapter when calling ",(0,a.jsx)(n.code,{children:"createAlova"}),", and pass in the mock interface to complete."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import GlobalFetch from 'alova/GlobalFetch';\nimport { createAlovaMockAdapter } from '@alova/mock';\nimport mockGroup1 from './mockGroup1';\n\n// highlight-start\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\n  // Global control whether the mock interface is enabled, the default is true\n  enable: true,\n\n  // Non-mock request adapter, used to send requests when the mock interface is not matched\n  httpAdapter: GlobalFetch(),\n\n  // mock interface response delay, in milliseconds\n  delay: 1000,\n\n  // Whether to print mock interface request information\n  mockRequestLogger: true,\n\n  // Simulation interface callback, data is the returned simulation data, you can use it to construct any object you want and return it to alova\n  // The following is the default callback function, which is suitable for requesting the adapter using GlobalFetch\n  // If you are using other request adapters, please customize the return data structure suitable for the adapter in the mock interface callback\n  onMockResponse: data => new Response(JSON.stringify(data))\n});\n// highlight-end\n\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n\n  // Use the mock request adapter, if you need to switch adapters, please see the following practical suggestions\n  requestAdapter: mockAdapter,\n\n  statesHook: /** ... */\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"paths-match-mode",children:"Paths match mode"}),"\n",(0,a.jsx)(n.admonition,{title:"version required",type:"info",children:(0,a.jsx)(n.p,{children:"1.5.0+"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, the path defined in ",(0,a.jsx)(n.code,{children:"defineMock"})," is the full pathname of a url, see the following code snippet."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org'\n  //...\n});\nalovaInst.Get('/user?id=1').send();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When the request path in the example is ",(0,a.jsx)(n.code,{children:"https://api.alovajs.org/user?id=1"}),", its full pathname is ",(0,a.jsx)(n.code,{children:"/user"}),", which can match ",(0,a.jsx)(n.code,{children:"/user"})," in ",(0,a.jsx)(n.code,{children:"defineMock"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Usually this is enough, but when your baseURL is not just a domain name."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org/v1/subname'\n  //...\n});\nalovaInst.Get('/user?id=1').send();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, the request path is ",(0,a.jsx)(n.code,{children:"https://api.alovajs.org/v1/subname/user?id=1"}),", the matching path of the mock is ",(0,a.jsx)(n.code,{children:"/v1/subname/user"}),", and ",(0,a.jsx)(n.code,{children:"/ in the baseURL needs to be v1/subname"})," is also written together, which is slightly redundant when the number of interfaces is large."]}),"\n",(0,a.jsxs)(n.p,{children:["At this point, you can set ",(0,a.jsx)(n.code,{children:"matchMode"})," to ",(0,a.jsx)(n.code,{children:"methodurl"})," in ",(0,a.jsx)(n.code,{children:"createAlovaMockAdapter"}),", it will only match the url defined in the method instance, for example, the above instance will match ",(0,a.jsx)(n.code,{children:"/user?id=1"})," instead of The part in baseURL needs to be written. On the contrary, if the url in the method instance has a get parameter, it also needs to be written in the matching path of ",(0,a.jsx)(n.code,{children:"defineMock"}),", just like ",(0,a.jsx)(n.code,{children:"?id=1"})," here."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"createAlovaMockAdapter([mockGroup1 /** ... */], {\n  //...\n  // highlight-start\n  matchMode: 'methodurl'\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"practical-advice",children:"Practical advice"}),"\n",(0,a.jsx)(n.h3,{id:"group-interfaces-per-developer-per-version",children:"Group interfaces per developer per version"}),"\n",(0,a.jsx)(n.p,{children:"In the team development scenario, we often only need to simulate some undeveloped interfaces for each version development, and use the test environment interface for the interface of the previous version. At this time, in order to achieve better simulation interface management, you can use The two dimensions, development version and developer, group interfaces."}),"\n",(0,a.jsxs)(n.p,{children:["For example, there are two developers named ",(0,a.jsx)(n.em,{children:"August"}),", ",(0,a.jsx)(n.em,{children:"kevin"}),", they are developing v1.1 product features, they can manage the mock interface like this."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:"title=August-v1.1.js",children:"import { defineMock } from '@alova/mock';\n\nexport default defineMock({\n  '/todo': [\n    /** */\n  ],\n  '[POST]/todo': ({ data }) => {\n    // ...\n    // return...\n  }\n  // ...\n});\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:"title=kevin-v1.1.js",children:"import { defineMock } from '@alova/mock';\n\nexport default defineMock({\n  '[PUT]/todo/add': ({ data }) => {\n    // ...\n    // return...\n  },\n  '[DELETE]/todo/remove': ({ data }) => {\n    // ...\n    // return...\n  }\n  // ...\n});\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:"title=request.js",children:"import Augustv1_1 from './August-v1.1';\nimport Keevenv1_1 from './kevin-v1.1';\n\nconst mockAdapter = createAlovaMockAdapter([Augustv1_1, kevinv1_1], {\n  httpAdapter: GlobalFetch(),\n  delay: 1000\n});\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n  requestAdapter: mockAdapter\n  // ...\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"exclude-mock-code-in-production",children:"Exclude mock code in production"}),"\n",(0,a.jsx)(n.p,{children:"The mock data is generally only used in the development environment, and will be switched to the actual interface in the production environment, so this mock code becomes useless in the production environment. At this time, we can exclude this code by judging the environment variables. , you just need to do:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const globalFetch = GlobalFetch();\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\n  httpAdapter: globalFetch,\n  delay: 1000,\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n\n  // highlight-start\n  // In the production environment controlled by environment variables, the mock-related code will not be packaged in\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : globalFetch,\n  // highlight-end\n\n  statesHook: /** ... */\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-with-mockjs",children:"Use with mockjs"}),"\n",(0,a.jsx)(n.p,{children:"If you don't want to write the mock data yourself, but use it with a mock js library (such as mockjs), you can do so."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { defineMock } from '@alova/mock';\nimport Mock from 'mockjs';\n\nexport default defineMock({\n  '/api1': Mock.mock({\n    'id|1-10000': 100\n  })\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"convert-mock-data",children:"Convert mock data"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"@alova/mock"})," By default, the response data is packaged as a Response instance, and the response header is packaged as a Headers instance by default, which is adapted for ",(0,a.jsx)(n.code,{children:"GlobalFetch"}),", but if you use other request adapters, you need to mock the data Convert to the corresponding format."]}),"\n",(0,a.jsx)(n.h3,{id:"convert-response-data",children:"Convert response data"}),"\n",(0,a.jsxs)(n.p,{children:["You can intercept the mock response data in the ",(0,a.jsx)(n.code,{children:"onMockResponse"})," field and return the transformed response data and response headers."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"You can also throw an ERROR in onMockResponse to indicate a failure request."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const mockAdapter = createAlovaMockAdapter(\n   [\n     /* mock data */\n   ],\n   {\n     //...\n     // highlight-start\n     onMockResponse(response, request, currentMethod) {\n       // response is the corresponding data set, which contains status, statusText, responseHeaders, body\n       // request is the request data, which contains query, params, headers, data\n       // currentMethod is the method instance of the current request\n       //...\n       // Return converted response data and response headers\n       return {\n         response: /** response data */,\n         headers: /** Response headers */\n       };\n     }\n     // highlight-end\n   }\n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"convert-error-instance",children:"Convert Error Instance"}),"\n",(0,a.jsxs)(n.p,{children:["You can intercept the error instance in the ",(0,a.jsx)(n.code,{children:"onMockError"})," field and return the converted error message."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"You can also throw an ERROR in onMockResponse to indicate failure request."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const mockAdapter = createAlovaMockAdapter(\n  [\n    /* mock data */\n  ],\n  {\n    //...\n    // highlight-start\n    onMockError(error, currentMethod) {\n      // error is an error instance\n      // currentMethod is the method instance of the current request\n      //...\n      // Return the converted error message collection\n    }\n    // highlight-end\n  }\n);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(90512);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),r=t(90512),o=t(12466),s=t(16550),i=t(20469),c=t(91980),l=t(67392),d=t(20812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,u]=m({queryString:t,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=l??f;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(85893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(l(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=f(e);return(0,k.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,k.jsx)(b,{...n,...e}),(0,k.jsx)(x,{...n,...e})]})}function y(e){const n=(0,v.Z)();return(0,k.jsx)(j,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(67294);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);