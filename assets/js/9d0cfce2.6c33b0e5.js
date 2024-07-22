"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6206],{33580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=n(85893),r=n(11151);const a={title:"Custom Request Adapter"},o=void 0,d={id:"tutorial/custom/custom-http-adapter",title:"Custom Request Adapter",description:"Remember how to create an Alova instance?",source:"@site/versioned_docs/version-v2/tutorial/10-custom/02-custom-http-adapter.md",sourceDirName:"tutorial/10-custom",slug:"/tutorial/custom/custom-http-adapter",permalink:"/v2/tutorial/custom/custom-http-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/10-custom/02-custom-http-adapter.md",tags:[],version:"v2",sidebarPosition:2,frontMatter:{title:"Custom Request Adapter"},sidebar:"tutorial",previous:{title:"Overview",permalink:"/v2/tutorial/custom/overview"},next:{title:"Custom Storage Adapter",permalink:"/v2/tutorial/custom/custom-storage-adapter"}},i={},l=[{value:"Request adapter structure",id:"request-adapter-structure",level:2},{value:"Request parameter details",id:"request-parameter-details",level:3},{value:"Return parameter details",id:"return-parameter-details",level:3},{value:"XMLHttpRequest request adapter example",id:"xmlhttprequest-request-adapter-example",level:2},{value:"Request adapter type",id:"request-adapter-type",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Remember how to create an Alova instance?"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  //...\n  requestAdapter: GlobalFetch()\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"requestAdapter"})," is a request adapter. Internal request sending and receiving will depend on the request adapter. ",(0,s.jsx)(t.code,{children:"GlobalFetch"})," manages requests through fetch api. In most cases, we can use it. However, when ",(0,s.jsx)(t.code,{children:"alova"})," When running in an environment where fetch api is not available (such as app, applet), it is necessary to replace a request adapter that supports the current environment."]}),"\n",(0,s.jsxs)(t.p,{children:["So how should you customize a request adapter? Very simple, it is actually a function, which is called every time a request is made, and returns an object, which contains such things as ",(0,s.jsx)(t.code,{children:"url"}),", ",(0,s.jsx)(t.code,{children:"method"}),", ",(0,s.jsx)(t.code,{children:"data"}),", ",(0,s.jsx)(t.code,{children:"headers"}),", ",(0,s.jsx)(t.code,{children:"timeout"}),", etc. Request related data sets. Although there are many fields, we only need to access the data we need."]}),"\n",(0,s.jsx)(t.h2,{id:"request-adapter-structure",children:"Request adapter structure"}),"\n",(0,s.jsx)(t.p,{children:"The request adapter will receive request-related parameters and the currently requesting method instance, and return a set of response-related functions."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"function CustomRequestAdapter(requestElements, methodInstance) {\n  // send request...\n  return {\n    async response() {\n      // ...return the response data\n    },\n    async headers() {\n      // Asynchronous function that returns response headers\n    },\n    abort() {\n      // Abort request, this function will be triggered when abort is called externally\n    },\n    onDownload(updateDownloadProgress) {\n      // Download progress information, internally call updateDownloadProgress continuously to update the download progress\n    },\n    onUpload(updateUploadProgress) {\n      // Upload progress information, internally call updateUploadProgress continuously to update the upload progress\n    }\n  };\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"request-parameter-details",children:"Request parameter details"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"requestElements"})}),"\n",(0,s.jsx)(t.p,{children:"Relevant elements of the send request, including the following data."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"interface RequestElements {\n  // request url, the get parameter is already included\n  readonly url: string;\n\n  // Request type, such as GET, POST, PUT, etc.\n  readonly type: MethodType;\n\n  // Request header information, object\n  readonly headers: Arg;\n\n  // request body information\n  readonly data?: RequestBody;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"methodInstance"})}),"\n",(0,s.jsx)(t.p,{children:"The method instance of the current request"}),"\n",(0,s.jsx)(t.h3,{id:"return-parameter-details",children:"Return parameter details"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"response (required)"})}),"\n",(0,s.jsx)(t.p,{children:"An asynchronous function, the function returns the response value, which will be passed to the global response interceptor responded;"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"headers (required)"})}),"\n",(0,s.jsx)(t.p,{children:"An asynchronous function, the response header object returned by the function will be passed to the transformData conversion hook function of the Method instance;"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"abort (required)"})}),"\n",(0,s.jsx)(t.p,{children:"A common function, which is used for aborting request. All aborting requests will eventually call this function to execute;"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"onDownload (optional)"})}),"\n",(0,s.jsxs)(t.p,{children:["An ordinary function that receives a callback function that updates the download progress, and customizes the frequency of the progress update within this function, in this example simulating an update every 100 milliseconds. The ",(0,s.jsx)(t.code,{children:"updateDownloadProgress"})," callback function receives two parameters, the first parameter is the total size, and the second parameter is the downloaded size;"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"onUpload (optional)"})}),"\n",(0,s.jsxs)(t.p,{children:["An ordinary function that receives a callback function that updates the upload progress, and customizes the frequency of the progress update within this function, in this example simulating an update every 100 milliseconds. The ",(0,s.jsx)(t.code,{children:"updateUploadProgress"})," callback function receives two parameters, the first parameter is the total size, and the second parameter is the uploaded size;"]}),"\n",(0,s.jsx)(t.h2,{id:"xmlhttprequest-request-adapter-example",children:"XMLHttpRequest request adapter example"}),"\n",(0,s.jsx)(t.p,{children:"The following is an example of an adapter that sends requests through XMLHttpRequest, mainly to demonstrate how to write the adapter, the code is incomplete and cannot be run."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"function XMLHttpRequestAdapter(requestElements, methodInstance) {\n  // Deconstruct the data that needs to be used\n  const { url, type, data, headers } = config;\n\n  // send request\n  const xhr = new XMLHttpRequest();\n  xhr.open(type, url);\n  for (const key in headers) {\n    xhr.setRequestHeader(key, headers[key]);\n  }\n  const responsePromise = new Promise((resolve, reject) => {\n    xhr.addEventListener('load', event => {\n      // process response data\n      resolve(/* ... */);\n    });\n    xhr.addEventListener('error', event => {\n      // Handle request errors\n      reject(/* ... */);\n    });\n  });\n\n  xhr.send(JSON.stringify(data));\n\n  return {\n    // Asynchronous function that returns response data\n    response: () => responsePromise,\n\n    // Asynchronous function that returns response headers\n    headers: () => responsePromise.then(() => xhr.getAllResponseHeaders()),\n    abort: () => {\n      xhr.abort();\n    },\n\n    // Download progress information, internally call updateDownloadProgress continuously to update the download progress\n    onDownload: updateDownloadProgress => {\n      xhr.addEventListener('progress', event => {\n        // data receiving progress\n        updateDownloadProgress(event.total, event.loaded);\n      });\n    },\n\n    // Upload progress information, internally call updateUploadProgress continuously to update the upload progress\n    onUpload: updateUploadProgress => {\n      xhr.upload.onprogress = event => {\n        updateUploadProgress(event.total, event.loaded);\n      };\n    }\n  };\n}\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["More complete request adapter details can be found in ",(0,s.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/src/predefine/GlobalFetch.ts",children:"GlobalFetch source code"})," to understand."]})}),"\n",(0,s.jsx)(t.h2,{id:"request-adapter-type",children:"Request adapter type"}),"\n",(0,s.jsxs)(t.p,{children:["The types of the global ",(0,s.jsx)(t.code,{children:"beforeRequest"}),", ",(0,s.jsx)(t.code,{children:"responded"})," interceptors, and the configuration object when the ",(0,s.jsx)(t.code,{children:"Method"})," instance is created will be automatically inferred based on the type provided by the request adapter. The following are the types of GlobalFetch."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import type { RequestElements, Method, ProgressUpdater } from 'alova';\n\nexport type GlobalFetch = () => (\n  elements: RequestElements,\n  method: Method<any, any, any, any, RequestInit, Response, Headers>\n) => {\n  response: () => Promise<Response>,\n  headers: () => Promise<Headers>,\n  onDownload: (handler: ProgressUpdater) => void,\n  abort: () => void\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Three types of values \u200b\u200bof ",(0,s.jsx)(t.code,{children:"RC"}),", ",(0,s.jsx)(t.code,{children:"RE"})," and ",(0,s.jsx)(t.code,{children:"RH"})," are specified in this type, so the type given by the request adapter will be automatically inferred in the global interceptor, method instance configuration and other places."]}),"\n",(0,s.jsx)(t.p,{children:"They are expressed as:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RC"}),": Abbreviation of ",(0,s.jsx)(t.em,{children:"RequestConfig"}),", request configuration object type"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RH"}),": Abbreviation of ",(0,s.jsx)(t.em,{children:"ResponseHeader"}),", response header object type"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RE"}),": Abbreviation of ",(0,s.jsx)(t.em,{children:"Response"}),", response type"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you are using ",(0,s.jsx)(t.strong,{children:"GlobalFetch"}),", their types will be inferred as:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RC"}),": fetch api's request configuration object ",(0,s.jsx)(t.code,{children:"RequestInit"}),";"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RH"}),": Response header object ",(0,s.jsx)(t.code,{children:"Headers"}),";"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RE"}),": response object ",(0,s.jsx)(t.code,{children:"Response"}),";"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In order to facilitate the definition of the request adapter type, alova also provides an adapter type. You only need to pass in the ",(0,s.jsx)(t.code,{children:"RC/RE/RH"})," generic parameters as needed."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import type { AlovaRequestAdapter } from 'alova';\ntype CustomRequestAdpater = AlovaRequestAdapter<any, any, RequestInit, Response, Headers>;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);