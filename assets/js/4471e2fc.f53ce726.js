"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3975],{78779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(85893),s=n(11151);const i={title:"Method Metadata"},o=void 0,r={id:"tutorial/getting-started/basic/method-metadata",title:"Method Metadata",description:"Method instances run through the entire request life cycle of alova, and there will be a large number of different method instances in the project. Sometimes we need to add additional information to specific method instances to facilitate their identification or additional information transfer. Wait, at this point, we need to use method metadata.",source:"@site/docs/tutorial/02-getting-started/03-basic/06-method-metadata.md",sourceDirName:"tutorial/02-getting-started/03-basic",slug:"/tutorial/getting-started/basic/method-metadata",permalink:"/tutorial/getting-started/basic/method-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/03-basic/06-method-metadata.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Method Metadata"},sidebar:"tutorial",previous:{title:"Global Interceptor",permalink:"/tutorial/getting-started/basic/global-interceptor"},next:{title:"Combine UI framework",permalink:"/tutorial/getting-started/basic/combine-framework"}},d={},c=[{value:"Use metadata to identify identities",id:"use-metadata-to-identify-identities",level:2},{value:"Use identity before request",id:"use-identity-before-request",level:3},{value:"Use the identity after the response",id:"use-the-identity-after-the-response",level:3},{value:"Use metadata to pass information",id:"use-metadata-to-pass-information",level:2},{value:"Tips for non-typescript projects",id:"tips-for-non-typescript-projects",level:2}];function l(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Method instances run through the entire request life cycle of alova, and there will be a large number of different method instances in the project. Sometimes we need to add additional information to specific method instances to facilitate their identification or additional information transfer. Wait, at this point, we need to use method metadata."}),"\n",(0,a.jsx)(t.h2,{id:"use-metadata-to-identify-identities",children:"Use metadata to identify identities"}),"\n",(0,a.jsx)(t.h3,{id:"use-identity-before-request",children:"Use identity before request"}),"\n",(0,a.jsxs)(t.p,{children:["For example, most of the interfaces in your project need to be accompanied by ",(0,a.jsx)(t.code,{children:"token"})," for each request, but there are still some interfaces that do not require verification. You may handle them uniformly in the global ",(0,a.jsx)(t.code,{children:"beforeRequest"})," function."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const nonvalidateRequiredApi = [\n  '/api/url1',\n  '/api/url2',\n  '/api/url3'\n  // ...\n];\n\ncreateAlova({\n  beforeRequest(method) {\n    if (!nonvalidateRequiredApi.includes(method.url)) {\n      method.config.headers.token = '...';\n    }\n  }\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"This will cause the following two problems:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Information is not aggregated with method instances, making maintainability even worse;"}),"\n",(0,a.jsx)(t.li,{children:"Coding is more troublesome;"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"To solve these two problems, we will use metadata to identify a specific method instance when it is created."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Step 1: Define metadata when creating method instance"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const loginAPI = (username, password) => {\n  const methodInstance = alovaInst.Post('/login', {\n    username,\n    password\n  });\n  methodInstance.meta = {\n    ignoreToken: true\n  };\n  return methodInstance;\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"And you can also directly define metadata in config"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const loginAPI = (username, password) => {\n  return alovaInst.Post(\n    '/login',\n    {\n      username,\n      password\n    },\n    {\n      meta: {\n        ignoreToken: true\n      }\n    }\n  );\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["Step 2: Use metadata as the basis for judgment in ",(0,a.jsx)(t.code,{children:"beforeRequest"})]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"createAlova({\n  // ...\n  beforeRequest(method) {\n    if (!method.meta?.ignoreToken) {\n      method.config.headers.token = '...';\n    }\n  }\n});\n"})}),"\n",(0,a.jsx)(t.h3,{id:"use-the-identity-after-the-response",children:"Use the identity after the response"}),"\n",(0,a.jsxs)(t.p,{children:["This method can also be used in global ",(0,a.jsx)(t.code,{children:"responded"}),". For example, in most cases, the request api will return json data, but there may be a file download interface, which will return a binary data stream. In this case Below, you can use different metadata in ",(0,a.jsx)(t.code,{children:"responded"})," to handle different responses separately."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Step one: When creating a method instance, you also need to assign a metadata"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const downloadAPI = filePath => {\n  const methodInstance = alovaInst.Post('/download_file', {\n    filePath\n  });\n  methodInstance.meta = {\n    isDownload: true\n  };\n  return methodInstance;\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["Step 2: Use metadata in ",(0,a.jsx)(t.code,{children:"responded"})," as a basis for judgment"]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"createAlova({\n   // ...\n   responded:\n     onSuccess: (response, method) => method.meta?.isDownload ? response.blob() : response.json()\n     onError: (error, method) => {\n       //Metadata of method instances can also be accessed when responding to errors\n     }\n   }\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"use-metadata-to-pass-information",children:"Use metadata to pass information"}),"\n",(0,a.jsx)(t.p,{children:"In some cases, if you want to add additional information to different method instances for use elsewhere, you can also use metadata to save it. Take uniformly generating different method instance IDs as an example."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"createAlova({\n  beforeRequest(method) {\n    if (!method.meta.generateId) {\n      method.meta.uid = generateUUID();\n    }\n  },\n\n  responded: {\n    onSuccess(response, method) {\n      // Access the meta data generated by the current method when the request is successful.\n      const currentMethodUID = method.meta.uid;\n    },\n    onError(error, method) {\n      //Access the meta data generated by the current method when the request fails.\n      const currentMethodUID = method.meta.uid;\n    }\n  }\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"tips-for-non-typescript-projects",children:"Tips for non-typescript projects"}),"\n",(0,a.jsxs)(t.p,{children:["In a non-typescript environment, you can use any attribute as an information carrier, not limited to the ",(0,a.jsx)(t.code,{children:"meta"})," attribute."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"methodInstance.showResponseMsg = true;\nmethodInstance.others = 'abc';\n"})}),"\n",(0,a.jsxs)(t.p,{children:['Only in the typescript environment, any attribute name will report that the attribute "$0" does not exist. ts(2339)',(0,a.jsx)(t.code,{children:", so in the type we specify the "}),"meta` attribute as the information carrier."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);