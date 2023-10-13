"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"method metadata",sidebar_position:35},i=void 0,s={unversionedId:"tutorial/next-step/method-metadata",id:"tutorial/next-step/method-metadata",title:"method metadata",description:"v2.7.0+",source:"@site/docs/tutorial/06-next-step/04-method-metadata.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/method-metadata",permalink:"/tutorial/next-step/method-metadata",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/04-method-metadata.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"method metadata",sidebar_position:35},sidebar:"tutorialSidebar",previous:{title:"Use method to request",permalink:"/tutorial/next-step/send-request-directly"},next:{title:"Method instance matcher",permalink:"/tutorial/next-step/method-instance-matcher"}},d={},l=[{value:"Use metadata to identify identities",id:"use-metadata-to-identify-identities",level:2},{value:"Use the identity before the request",id:"use-the-identity-before-the-request",level:3},{value:"Use identity after response",id:"use-identity-after-response",level:3},{value:"Use metadata to pass data",id:"use-metadata-to-pass-data",level:2},{value:"Prompt for non-typescript projects",id:"prompt-for-non-typescript-projects",level:2}],p={toc:l},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"version requirements",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"v2.7.0+")),(0,r.kt)("p",null,"Method instances run through the entire request life cycle of alova, and there are a large number of different method instances in the project. Sometimes we need to add additional information to specific method instances in order to identify them or pass additional information Wait, at this point, we need to use method metadata."),(0,r.kt)("h2",{id:"use-metadata-to-identify-identities"},"Use metadata to identify identities"),(0,r.kt)("h3",{id:"use-the-identity-before-the-request"},"Use the identity before the request"),(0,r.kt)("p",null,"For example, most of the interfaces in your project need to be accompanied by ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," for each request, but there are still some interfaces that do not need to be verified, and you may handle them uniformly in the global ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeRequest")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const nonvalidateRequiredApi = [\n  '/api/url1',\n  '/api/url2',\n  '/api/url3'\n  //...\n];\n\ncreateAlova({\n  beforeRequest(method) {\n    if (!nonvalidateRequiredApi.includes(method.url)) {\n      method.config.headers.token = '...';\n    }\n  }\n});\n")),(0,r.kt)("p",null,"This will cause the following two problems:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The information is not aggregated with the method instance, and the maintainability is worse;"),(0,r.kt)("li",{parentName:"ol"},"Coding is more troublesome;")),(0,r.kt)("p",null,"To solve these two problems, we will use metadata to identify a specific method instance when it is created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Define metadata when creating a method instance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const loginAPI = (username, password) => {\n  const methodInstance = alovaInst.Post('/login', {\n    username,\n    password\n  });\n  methodInstance.meta = {\n    ignoreToken: true\n  };\n  return methodInstance;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Use metadata as the basis for judgment in ",(0,r.kt)("inlineCode",{parentName:"strong"},"beforeRequest"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"createAlova({\n  //...\n  beforeRequest(method) {\n    if (!method.meta?.ignoreToken) {\n      method.config.headers.token = '...';\n    }\n  }\n});\n")),(0,r.kt)("h3",{id:"use-identity-after-response"},"Use identity after response"),(0,r.kt)("p",null,"This method can also be used in the global ",(0,r.kt)("inlineCode",{parentName:"p"},"responded"),". For example, in most cases, the request api will return json data, but there may be a file download interface, which will return a binary data stream. In this case Next, you can use different metadata in ",(0,r.kt)("inlineCode",{parentName:"p"},"responded")," to handle different responses separately."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: When creating a method instance, you also need to assign a metadata")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const downloadAPI = filePath => {\n  const methodInstance = alovaInst.Post('/download_file', {\n    filePath\n  });\n  methodInstance.meta = {\n    isDownload: true\n  };\n  return methodInstance;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Use metadata as the basis for judgment in ",(0,r.kt)("inlineCode",{parentName:"strong"},"responded"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"createAlova({\n   //...\n   responded:\n     onSuccess: (response, method) => method.meta?.isDownload ? response.blob() : response.json()\n     onError: (error, method) => {\n       // You can also access the metadata of the method instance when responding to errors\n     }\n   }\n});\n")),(0,r.kt)("h2",{id:"use-metadata-to-pass-data"},"Use metadata to pass data"),(0,r.kt)("p",null,"In some cases, if you want to add additional information to different method instances for use elsewhere, you can also use metadata to save it. Take the uniform generation of different method instance ids as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"createAlova({\n  beforeRequest(method) {\n    if (!method.meta.generateId) {\n      method.meta.uid = generateUUID();\n    }\n  },\n\n  responded: {\n    onSuccess(response, method) {\n      // Access the meta data generated by the current method in a successful request\n      const currentMethodUID = method.meta.uid;\n    },\n    onError(error, method) {\n      // Access the meta data generated by the current method in the request failure\n      const currentMethodUID = method.meta.uid;\n    }\n  }\n});\n")),(0,r.kt)("h2",{id:"prompt-for-non-typescript-projects"},"Prompt for non-typescript projects"),(0,r.kt)("p",null,"In a non-typescript environment, you can use any attribute as an information carrier, not limited to the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"methodInstance.showResponseMsg = true;\nmethodInstance.others = 'abc';\n")),(0,r.kt)("p",null,"It\u2019s just that in the typescript environment, any property name will report ",(0,r.kt)("inlineCode",{parentName:"p"},"the property \u201c$0\u201d does not exist. ts(2339)"),", so in the type we specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," attribute as the information carrier."))}c.isMDXComponent=!0}}]);