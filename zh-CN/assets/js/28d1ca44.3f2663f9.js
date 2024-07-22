"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1732],{85072:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=a(85893),s=a(11151),t=a(74866),o=a(85162);const l={title:"axios\u9002\u914d\u5668"},i=void 0,c={id:"tutorial/request-adapter/alova-adapter-axios",title:"axios\u9002\u914d\u5668",description:"\u5b89\u88c5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-v2/tutorial/08-request-adapter/03-alova-adapter-axios.md",sourceDirName:"tutorial/08-request-adapter",slug:"/tutorial/request-adapter/alova-adapter-axios",permalink:"/zh-CN/v2/tutorial/request-adapter/alova-adapter-axios",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/08-request-adapter/03-alova-adapter-axios.md",tags:[],version:"v2",sidebarPosition:3,frontMatter:{title:"axios\u9002\u914d\u5668"},sidebar:"tutorial",previous:{title:"XMLHttpRequest\u9002\u914d\u5668",permalink:"/zh-CN/v2/tutorial/request-adapter/alova-adapter-xhr"},next:{title:"Taro\u9002\u914d\u5668",permalink:"/zh-CN/v2/tutorial/request-adapter/alova-adapter-taro"}},d={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 axios \u5b9e\u4f8b",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684-axios-\u5b9e\u4f8b",level:2},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3},{value:"\u9519\u8bef",id:"\u9519\u8bef",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"1",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @alova/adapter-axios --save\n"})})}),(0,r.jsx)(o.Z,{value:"2",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @alova/adapter-axios\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.h3,{id:"\u521b\u5efa-alova",children:"\u521b\u5efa alova"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"axiosRequestAdapter"})," \u4f5c\u4e3a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport { axiosRequestAdapter } from '@alova/adapter-axios';\n\nconst alovaInst = createAlova({\n  // ...\n  requestAdapter: axiosRequestAdapter()\n  // ...\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9002\u914d\u5668\u5185\u90e8\u5c06\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684 axios \u5b9e\u4f8b\u8fdb\u884c\u8bf7\u6c42\uff0c\u5982\u679c\u4f60\u4e3a axios \u8bbe\u7f6e\u4e86\u4e00\u4e9b\u5168\u5c40\u53c2\u6570\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f18\u5148\u4f7f\u7528 axios \u5b9e\u4f8b\u5185\u7684",(0,r.jsx)(n.code,{children:"baseURL"}),"\u548c",(0,r.jsx)(n.code,{children:"timeout"}),"\u53c2\u6570\uff0c\u56e0\u6b64\u5982\u679c\u4f60\u5728 axios \u5b9e\u4f8b\u4e0a\u8bbe\u7f6e\u4e86\u8fd9\u4e9b\u53c2\u6570\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4e0d\u9700\u8981\u5728",(0,r.jsx)(n.code,{children:"createAlova"}),"\u65f6\u8bbe\u7f6e\u4e86\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["alova \u5b9e\u4f8b\u7684",(0,r.jsx)(n.code,{children:"beforeRequest"}),"\u94a9\u5b50\u5c06\u4f1a\u65e9\u4e8e axios \u7684",(0,r.jsx)(n.code,{children:"interceptor.request"}),"\u89e6\u53d1\uff0calova \u5b9e\u4f8b\u7684",(0,r.jsx)(n.code,{children:"responded"}),"\u94a9\u5b50\u5c06\u4f1a\u665a\u4e8e axios \u5b9e\u4f8b\u7684",(0,r.jsx)(n.code,{children:"interceptor.response"}),"\u89e6\u53d1\uff1b"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5",(0,r.jsx)(n.a,{href:"#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84-axios-%E5%AE%9E%E4%BE%8B",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 axios \u5b9e\u4f8b"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bf7\u6c42",children:"\u8bf7\u6c42"}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6c42\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e web \u73af\u5883\u4e2d\u4f7f\u7528\u5b8c\u5168\u4e00\u81f4\u3002\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,r.jsx)(n.strong,{children:"axios"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,r.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,r.jsx)(n.code,{children:"axios"}),"\u652f\u6301\u7684",(0,r.jsx)(n.a,{href:"https://axios-http.com/docs/req_config",children:"\u5168\u90e8\u914d\u7f6e\u9879"})]}),"\n",(0,r.jsxs)(t.Z,{groupId:"framework",children:[(0,r.jsx)(o.Z,{value:"1",label:"vue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<tempate>\n  <div v-if=\"loading\">\u52a0\u8f7d\u4e2d...</div>\n  <div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</div>\n</tempate>\n\n<script setup>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9axios\n      paramsSerializer: params => {\n        return Qs.stringify(params, { arrayFormat: 'brackets' });\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n"})})}),(0,r.jsx)(o.Z,{value:"2",label:"react",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const list = () =>\n  alovaInst.Get('/list', {\n    // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9axios\n    paramsSerializer: params => {\n      return Qs.stringify(params, {arrayFormat: 'brackets'})\n    },\n  });\n\nconst App = () => {\n  const { loading, data } = useRequest(list);\n\n  return (\n    { loading ? <div>\u52a0\u8f7d\u4e2d...</div> : null }\n    <div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ JSON.stringify(data) }</div>\n  )\n};\n"})})}),(0,r.jsx)(o.Z,{value:"3",label:"svelte",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<script>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9axios\n      paramsSerializer: params => {\n        return Qs.stringify(params, { arrayFormat: 'brackets' });\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n\n{#if $loading}\n<div>\u52a0\u8f7d\u4e2d...</div>\n{/if}\n<div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ data }</div>\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u4e0a\u4f20",children:"\u4e0a\u4f20"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"FormData"}),"\u4e0a\u4f20\u6587\u4ef6\uff0c\u8fd9\u4e2a",(0,r.jsx)(n.code,{children:"FormData"}),"\u5b9e\u4f8b\u4f1a\u88ab\u4f20\u9012\u5230 axios \u4e2d\uff0c\u4e0e axios \u4e0a\u4f20\u6587\u4ef6\u7528\u6cd5\u4fdd\u6301\u4e86\u4e00\u81f4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const uploadFile = imageFile => {\n  const formData = new FormData();\n  formData.append('file', imageFile);\n  return alovaInst.Post('/uploadImg', formData, {\n    // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\n    enableUpload: true\n  });\n};\n\nconst {\n  loading,\n  data,\n  uploading,\n  send: sendUpload\n} = useRequest(uploadFile, {\n  immediate: false\n});\n\n// \u56fe\u7247\u9009\u62e9\u4e8b\u4ef6\u56de\u8c03\nconst handleImageChoose = ({ target }) => {\n  sendUpload(target.files[0]);\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u8bf7\u6c42 url \u6307\u5411\u6587\u4ef6\u5730\u5740\u5373\u53ef\u4e0b\u8f7d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,r.jsx)(n.code,{children:"enableDownload"}),"\u8bbe\u7f6e\u4e3a true \u6765\u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const downloadFile = () =>\n  alovaInst.Get('/bigImage.jpg', {\n    // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\n    enableDownload: true,\n    responseType: 'blob'\n  });\n\nconst { loading, data, downloading, send, onSuccess } = useRequest(downloadFile, {\n  immediate: false\n});\nonSuccess(({ data: imageBlob }) => {\n  // \u4e0b\u8f7d\u56fe\u7247\n  const anchor = document.createElement('a');\n  anchor.href = URL.createObjectURL(blob);\n  anchor.download = 'image.jpg';\n  anchor.click();\n  URL.revokeObjectURL(anchor.href);\n});\nconst handleImageDownload = () => {\n  send();\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684-axios-\u5b9e\u4f8b",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 axios \u5b9e\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u9002\u914d\u5668\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684 axios \u5b9e\u4f8b\u8fdb\u884c\u8bf7\u6c42\uff0c\u4f46\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u4f60\u9700\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u521b\u5efa\u7684 axios \u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u8fd9\u4e48\u505a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const customAxios = axios.create({\n  // ...\n});\n\nconst alovaInst = createAlova({\n  // ...\n  // highlight-start\n  requestAdapter: axiosRequestAdapter({\n    axios: customAxios\n  })\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\u3002\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.a,{href:"/v2/tutorial/request-adapter/alova-mock",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"}),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"Response"}),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,r.jsx)(n.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u4f7f\u7528 axios \u9002\u914d\u5668\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u662f",(0,r.jsx)(n.strong,{children:"AxiosResponse"}),"\u517c\u5bb9\u7684\uff0c\u9519\u8bef\u5b9e\u4f8b\u662f",(0,r.jsx)(n.strong,{children:"AxiosError"}),"\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528**@alova/adapter-axios**\u5305\u4e2d\u5bfc\u51fa\u7684",(0,r.jsx)(n.code,{children:"axiosMockResponse"}),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport { axiosRequestAdapter, axiosMockResponse } from '@alova/adapter-axios';\n\nconst mocks = defineMock({\n  // ...\n});\n\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\nexport default createAlovaMockAdapter([mocks], {\n  // \u6307\u5b9aaxios\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\n  httpAdapter: axiosRequestAdapter(),\n\n  // axiosMockResponse\u4e2d\u5305\u542b\u4e86onMockResponse\u548conMockError\n  // \u7528\u4e8e\u5c06\u6a21\u62df\u6570\u636e\u8f6c\u6362\u4e3aAxiosResponse\u548cAxiosError\u517c\u5bb9\u7684\u683c\u5f0f\n  ...axiosMockResponse\n});\n\nexport const alovaInst = createAlova({\n  // ...\n  // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : axiosRequestAdapter()\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,r.jsx)(n.p,{children:"axios \u8bf7\u6c42\u9002\u914d\u5668 \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\uff0cmethod \u914d\u7f6e\u3001\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b\u5c06\u4e0e axios \u7684\u7c7b\u578b\u5b8c\u5168\u5339\u914d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"method-\u914d\u7f6e",children:"method \u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"AxiosRequestConfig"}),"\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u6211\u4eec\u5df2\u7ecf\u5728\u7c7b\u578b\u4e2d\u53bb\u9664\u4e86\u548c method \u5b9e\u4f8b\u901a\u7528\u914d\u7f6e\u51b2\u7a81\u7684\u9879\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"/**\n * axios\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\n * \u53bb\u6389\u4e86\u4e0emethod\u51b2\u7a81\u7684\u5c5e\u6027\n */\nexport type AlovaAxiosRequestConfig = Omit<\n  AxiosRequestConfig,\n  | 'url'\n  | 'method'\n  | 'baseURL'\n  | 'headers'\n  | 'params'\n  | 'data'\n  | 'timeout'\n  | 'cancelToken'\n  | 'signal'\n  | 'onUploadProgress'\n  | 'onDownloadProgress'\n>;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u54cd\u5e94\u6570\u636e",children:"\u54cd\u5e94\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["axios \u7684\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u662f",(0,r.jsx)(n.code,{children:"AxiosResponse"}),"\uff0c\u5f53\u4f60\u4f7f\u7528 axios \u9002\u914d\u5668\u65f6\uff0c\u4e5f\u5c06\u83b7\u5f97\u76f8\u540c\u683c\u5f0f\u7684\u54cd\u5e94\u6570\u636e\u3002\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u5728\u5168\u5c40\u5904\u7406\u54cd\u5e94\u6570\u636e\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  requestAdapter: axiosRequestAdapter(),\n  responded(response) {\n    // response\u81ea\u52a8\u88ab\u63a8\u65ad\u4e3aAxiosResponse\u7c7b\u578b\n    return response.data;\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u9519\u8bef",children:"\u9519\u8bef"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53 axios \u9047\u5230\u975e 20x \u548c 30x \u7684\u54cd\u5e94\u72b6\u6001\u7801\u65f6\u5c06\u4f1a\u629b\u51fa\u9519\u8bef\uff0c\u4e3a\u4e86\u5305\u542b\u66f4\u591a\u4fe1\u606f\uff0caxios \u5c06\u9519\u8bef\u5b9e\u4f8b\u81ea\u5b9a\u4e49\u8bbe\u8ba1\u6210\u4e86\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"AxiosError"}),"\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u666e\u901a\u7684 Error \u5b9e\u4f8b\uff0c\u56e0\u6b64\u5f53\u9047\u5230\u670d\u52a1\u7aef\u9519\u8bef\u6216\u7f51\u7edc\u9519\u8bef\u65f6\u90fd\u5c06\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u4f60\u53ef\u4ee5\u5728\u5168\u5c40\u7684\u9519\u8bef\u56de\u8c03\u4e2d\u6355\u83b7\u5b83\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  requestAdapter: axiosRequestAdapter(),\n  responded: {\n    onSuccess(response) {\n      // response\u81ea\u52a8\u88ab\u63a8\u65ad\u4e3aAxiosResponse\u7c7b\u578b\n      return response.data;\n    },\n    onError(err: AxiosError) {\n      // err\u9ed8\u8ba4\u4e3aany\uff0c\u4f60\u53ef\u4ee5\u5f3a\u5236\u8f6c\u6362\u4e3aAxiosError\u5904\u7406\n      // ...\n    }\n  }\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>o});a(67294);var r=a(90512);const s={tabItem:"tabItem_Ymn6"};var t=a(85893);function o(e){let{children:n,hidden:a,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>q});var r=a(67294),s=a(90512),t=a(12466),o=a(16550),l=a(20469),i=a(91980),c=a(67392),d=a(20812);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:s}}=e;return{value:n,label:a,attributes:r,default:s}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:a}=e;const s=(0,o.k6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i._X)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function v(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,t=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[c,u]=x({queryString:a,groupId:s}),[v,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,d.Nk)(a);return[s,(0,r.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:s}),j=(()=>{const e=c??v;return h({value:e,tabValues:t})?e:null})();(0,l.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,t]),tabValues:t}}var m=a(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function f(e){let{className:n,block:a,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const n=e.currentTarget,a=i.indexOf(n),s=l[a].value;s!==r&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...t,className:(0,s.Z)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:s}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function A(e){const n=v(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function q(e){const n=(0,m.Z)();return(0,g.jsx)(A,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var r=a(67294);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);