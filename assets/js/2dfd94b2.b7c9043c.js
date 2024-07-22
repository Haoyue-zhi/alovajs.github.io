"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8533],{67068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=t(85893),r=t(11151),s=t(74866),o=t(85162);const i={title:"XMLHttpRequest Adapter"},l=void 0,d={id:"resource/request-adapter/xhr",title:"XMLHttpRequest Adapter",description:"Install",source:"@site/docs/resource/01-request-adapter/03-xhr.md",sourceDirName:"resource/01-request-adapter",slug:"/resource/request-adapter/xhr",permalink:"/resource/request-adapter/xhr",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/resource/01-request-adapter/03-xhr.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"XMLHttpRequest Adapter"},sidebar:"resource",previous:{title:"Fetch Adapter",permalink:"/resource/request-adapter/fetch"},next:{title:"axios adapter",permalink:"/resource/request-adapter/axios"}},c={},u=[{value:"Install",id:"install",level:2},{value:"Instructions",id:"instructions",level:2},{value:"create alova",id:"create-alova",level:3},{value:"Request",id:"request",level:3},{value:"Upload",id:"upload",level:3},{value:"download",id:"download",level:3},{value:"Mock request adapter compatible",id:"mock-request-adapter-compatible",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method configuration",id:"method-configuration",level:3},{value:"Response data",id:"response-data",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"1",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @alova/adapter-xhr --save\n"})})}),(0,a.jsx)(o.Z,{value:"2",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @alova/adapter-xhr\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,a.jsx)(n.h3,{id:"create-alova",children:"create alova"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.strong,{children:"xhrRequestAdapter"})," as request adapter for alova."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\nimport { xhrRequestAdapter } from '@alova/adapter-xhr';\n\nconst alovaInst = createAlova({\n  //...\n  requestAdapter: xhrResponseAdapter()\n  //...\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(n.p,{children:["The XMLHttpRequest adapter provides basic configuration parameters, including ",(0,a.jsx)(n.code,{children:"responseType"}),", ",(0,a.jsx)(n.code,{children:"withCredentials"}),", ",(0,a.jsx)(n.code,{children:"mimeType"}),", ",(0,a.jsx)(n.code,{children:"auth"}),", as follows:"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"framework",children:[(0,a.jsx)(o.Z,{value:"1",label:"vue",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<tempate>\n   <div v-if="loading">Loading...</div>\n   <div>The request data is: {{ data }}</div>\n</template>\n\n<script setup>\n   const list = () =>\n     alovaInst. Get(\'/list\', {\n       /**\n        * Set the response data type\n        * Can be set to change the response type. Values are: "arraybuffer", "blob", "document", "json" and "text"\n        * defaults to "json"\n        */\n       responseType: \'text\',\n\n       /**\n        * True when credentials are to be included in cross-origin requests. false when they are excluded from cross-origin requests and when cookies are ignored in their responses. Default is false\n        */\n       withCredentials: true,\n\n       /**\n        * Set the mimeType of the response data\n        */\n       mimeType: \'text/plain; charset=x-user-defined\',\n\n       /**\n        * auth means use HTTP Basic authentication and provide credentials.\n        * This will set an `Authorization` header, overriding any existing\n        * Custom headers for `Authorization` set using `headers`.\n        * Note that only HTTP Basic authentication can be configured via this parameter.\n        * For Bearer tokens etc., use the `Authorization` custom header instead.\n        */\n       auth: {\n         username: \'name1\',\n         password: \'123456\'\n       }\n     });\n   const { loading, data } = useRequest(list);\n<\/script>\n'})})}),(0,a.jsx)(o.Z,{value:"2",label:"react",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'const list = () =>\n   alovaInst.Get(\'/list\', {\n     /**\n        * Set the response data type\n        * Can be set to change the response type. Values are: "arraybuffer", "blob", "document", "json" and "text"\n        * defaults to "json"\n        */\n       responseType: \'text\',\n\n       /**\n        * True when credentials are to be included in cross-origin requests. false when they are excluded from cross-origin requests and when cookies are ignored in their responses. Default is false\n        */\n       withCredentials: true,\n\n       /**\n        * Set the mimeType of the response data\n        */\n       mimeType: \'text/plain; charset=x-user-defined\',\n\n       /**\n        * auth means use HTTP Basic authentication and provide credentials.\n        * This will set an `Authorization` header, overriding any existing\n        * Custom headers for `Authorization` set using `headers`.\n        * Note that only HTTP Basic authentication can be configured via this parameter.\n        * For Bearer tokens etc., use the `Authorization` custom header instead.\n        */\n       auth: {\n         username: \'name1\',\n         password: \'123456\'\n       }\n   });\n\nconst App = () => {\n   const { loading, data } = useRequest(list);\n\n   return (\n     { loading ? <div>Loading...</div> : null }\n     <div>The request data is: { JSON.stringify(data) }</div>\n   )\n};\n'})})}),(0,a.jsx)(o.Z,{value:"3",label:"svelte",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<script>\n  const list = () =>\n    alovaInst.Get(\'/list\', {\n      /**\n       * Set the response data type\n       * Can be set to change the response type. Values are: "arraybuffer", "blob", "document", "json" and "text"\n       * defaults to "json"\n       */\n      responseType: \'text\',\n\n      /**\n       * True when credentials are to be included in cross-origin requests. false when they are excluded from cross-origin requests and when cookies are ignored in their responses. Default is false\n       */\n      withCredentials: true,\n\n      /**\n       * Set the mimeType of the response data\n       */\n      mimeType: \'text/plain; charset=x-user-defined\',\n\n      /**\n       * auth means use HTTP Basic authentication and provide credentials.\n       * This will set an `Authorization` header, overriding any existing\n       * Custom headers for `Authorization` set using `headers`.\n       * Note that only HTTP Basic authentication can be configured via this parameter.\n       * For Bearer tokens etc., use the `Authorization` custom header instead.\n       */\n      auth: {\n        username: \'name1\',\n        password: \'123456\'\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n\n{#if $loading}\n<div>Loading...</div>\n{/if}\n<div>The request data is: { data }</div>\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"upload",children:"Upload"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"FormData"})," to upload files, and this ",(0,a.jsx)(n.code,{children:"FormData"})," instance will be sent to the server through ",(0,a.jsx)(n.code,{children:"xhr.send"}),". It will be set ",(0,a.jsx)(n.code,{children:"Content-Type"})," automatically, you don't need to custom it with ",(0,a.jsx)(n.code,{children:"multipart/form-data"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const uploadFile = imageFile => {\n  const formData = new FormData();\n  formData.append('file', imageFile);\n  return alovaInst.Post('/uploadImg', formData, {\n    // Start upload progress\n    enableUpload: true\n  });\n};\n\nconst {\n  loading,\n  data,\n  uploading,\n  send: sendUpload\n} = useRequest(uploadFile, {\n  immediate: false\n});\n\n// Picture selection event callback\nconst handleImageChoose = ({ target }) => {\n  sendUpload(target.files[0]);\n};\n"})}),"\n",(0,a.jsx)(n.h3,{id:"download",children:"download"}),"\n",(0,a.jsxs)(n.p,{children:["Point the request url to the file address to download, you can also enable the download progress by setting ",(0,a.jsx)(n.code,{children:"enableDownload"})," to true."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const downloadFile = () =>\n  alovaInst.Get('/bigImage.jpg', {\n    // Start download progress\n    enableDownload: true,\n    responseType: 'blob'\n  });\n\nconst { loading, data, downloading, send, onSuccess } = useRequest(downloadFile, {\n  immediate: false\n});\nonSuccess(({ data: imageBlob }) => {\n  // download image\n  const anchor = document.createElement('a');\n  anchor.href = URL.createObjectURL(blob);\n  anchor.download = 'image.jpg';\n  anchor.click();\n  URL.revokeObjectURL(anchor.href);\n});\nconst handleImageDownload = () => {\n  send();\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"mock-request-adapter-compatible",children:"Mock request adapter compatible"}),"\n",(0,a.jsxs)(n.p,{children:["When developing applications, we may still need to use simulated requests. Only by default, the response data of ",(0,a.jsx)(n.a,{href:"/resource/request-adapter/alova-mock",children:"Mock Request Adapter (@alova/mock)"})," is a ",(0,a.jsx)(n.code,{children:"Response"})," instance, which is compatible with the ",(0,a.jsx)(n.code,{children:"alova/fetch"})," request adapter by default. When using the XMLHttpRequest adapter, we You need to adapt the response data of the mock request adapter to the XMLHttpRequest adapter. In this case, you need to use the ",(0,a.jsx)(n.code,{children:"xhrMockResponse"})," exported in the ",(0,a.jsx)(n.strong,{children:"@alova/adapter-xhr"})," package as the response adapter."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport { xhrRequestAdapter, xhrMockResponse } from '@alova/adapter-xhr';\n\nconst mocks = defineMock({\n  //...\n});\n\n// mock data request adapter\nexport default createAlovaMockAdapter([mocks], {\n  // After specifying the request adapter, requests that do not match the simulated interface will use this adapter to send requests\n  httpAdapter: xhrRequestAdapter(),\n\n  // Use xhrMockResponse to adapt the simulated data to the XMLHttpRequest adapter\n  onMockResponse: xhrMockResponse\n});\n\nexport const alovaInst = createAlova({\n  //...\n  // Control whether to use the simulated request adapter through environment variables\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : xhrRequestAdapter()\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,a.jsx)(n.p,{children:"The XMLHttpRequest request adapter provides complete type adaptation."}),"\n",(0,a.jsx)(n.h3,{id:"method-configuration",children:"method configuration"}),"\n",(0,a.jsxs)(n.p,{children:["When creating a method instance, in addition to the common configuration items in the method, you can also use the configuration items in ",(0,a.jsx)(n.code,{children:"AlovaXHRRequestConfig"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'/**\n * xhr request configuration parameters\n */\ninterface AlovaXHRRequestConfig {\n  /**\n   * Set the response data type.\n   *\n   * Can be set to change the response type. Values are: "arraybuffer", "blob", "document", "json", and "text".\n   * Setting 1: If the current global object is not a Window object, the setting to "document" is ignored.\n   * Setup 2: Throw an "InvalidStateError" DOMException if the state is loading or complete.\n   * Setting 3: Throws an "InvalidAccessError" DOMException if the sync flag is set and the current global object is a Window object.\n   * @default "json"\n   */\n  responseType?: XMLHttpRequestResponseType;\n\n  /**\n   * True when credentials are to be included in cross-origin requests. false when they are excluded from cross-origin requests and when cookies are ignored in their responses. The default is false.\n   * An \'InvalidStateError\' DOMException is thrown if the state is not sent or not opened, or if the send() flag is set.\n   * @default false\n   */\n  withCredentials?: boolean;\n\n  /**\n   * Set the mimeType of the response data\n   */\n  mimeType?: string;\n\n  /**\n   * `auth` indicates that HTTP Basic authentication should be used, and credentials are provided.\n   * This will set an `Authorization` header, overriding any existing\n   * Custom headers for `Authorization` set using `headers`.\n   * Note that only HTTP Basic authentication can be configured via this parameter.\n   * For Bearer tokens etc., use the `Authorization` custom header instead.\n   */\n  auth?: {\n    username: string;\n    password: string;\n  };\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"response-data",children:"Response data"}),"\n",(0,a.jsx)(n.p,{children:"XMLHttpRequest adapter response data is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"interface AlovaXHRResponseHeaders {\n  [x: string]: any;\n}\ninterface AlovaXHRResponse<T = any> {\n  status: number;\n  statusText: string;\n  data: T;\n  headers: AlovaXHRResponseHeaders;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(90512);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(90512),s=t(12466),o=t(16550),i=t(20469),l=t(91980),d=t(67392),c=t(20812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=m({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=d??f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.Z)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);