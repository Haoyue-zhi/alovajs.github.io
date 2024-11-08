"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6904],{33749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(85893),r=n(11151);const i=n.p+"assets/medias/vscode-demo-video-en-b4380f598eff4e892e55665a97b7245d.mp4";var o=n(74866),s=n(85162);const l={title:"Editor extension integration"},c=void 0,d={id:"tutorial/getting-started/extension-integration",title:"Editor extension integration",description:"Integrating Alova's editor extension can make it more powerful.",source:"@site/docs/tutorial/02-getting-started/09-extension-integration.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/extension-integration",permalink:"/tutorial/getting-started/extension-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/09-extension-integration.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Editor extension integration"},sidebar:"tutorial",previous:{title:"Server Usage",permalink:"/tutorial/getting-started/basic/server"},next:{title:"Conclusion",permalink:"/tutorial/getting-started/congratulations"}},u={},p=[{value:"Demo video",id:"demo-video",level:2},{value:"Install",id:"install",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Call API",id:"call-api",level:2},{value:"Quick access to API",id:"quick-access-to-api",level:2},{value:"Search by url",id:"search-by-url",level:3},{value:"Search by description",id:"search-by-description",level:3},{value:"Specify parameters by referring to the interface parameter table",id:"specify-parameters-by-referring-to-the-interface-parameter-table",level:3},{value:"Set alova parameters",id:"set-alova-parameters",level:2},{value:"Old project migration",id:"old-project-migration",level:2},{value:"Notes",id:"notes",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Integrating Alova's editor extension can make it more powerful."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Automatically generate request code and response data types, and experience smart prompts for interface data in js projects."}),"\n",(0,a.jsx)(t.li,{children:"Embed API documents in the code to experience the effect of checking and using APIs."}),"\n",(0,a.jsx)(t.li,{children:"Update APIs regularly and actively notify front-end developers, no longer relying on server-side developers to notify."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"demo-video",children:"Demo video"}),"\n","\n",(0,a.jsx)("video",{width:"100%",controls:!0,controlsList:"nodownload",src:i}),"\n",(0,a.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)("a",{className:"button button--primary",href:"vscode:extension/Alova.alova-vscode-extension",children:"Install VSCode extension (supports swagger-v2 and openapi-v3 specifications)"}),"\n","\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{value:"1",label:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install @alova/wormhole --save\n"})})}),(0,a.jsx)(s.Z,{value:"2",label:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @alova/wormhole\n"})})}),(0,a.jsx)(s.Z,{value:"3",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add @alova/wormhole\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["Install ",(0,a.jsx)(t.code,{children:"@alova/wormhole"})," and alova's vscode extension at the same time to enjoy the complete features. ",(0,a.jsx)(t.code,{children:"@alova/wormhole"})," provides automatic generation features. The vscode extension can quickly call ",(0,a.jsx)(t.code,{children:"@alova/wormhole"})," and provide shortcut keys for quickly finding interface documents in the editor."]}),"\n",(0,a.jsxs)(t.p,{children:["If you are using an editor such as WebStorm, you can use ",(0,a.jsx)(t.a,{href:"/api/wormhole#commands",children:"@alova/wormhole's commands"})," to automatically generate API call functions, complete TypeScript types of APIs, and API documentation information."]}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(t.p,{children:"When using the extension, you need to specify the input source and output directory from the openapi file, etc. You can create a configuration file in the project root directory, which supports the following formats:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"alova.config.cjs"}),": a commonjs-standard configuration file, using ",(0,a.jsx)(t.code,{children:"module.exports"})," to export the configuration."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"alova.config.js"}),": an ESModule-standard configuration file, using ",(0,a.jsx)(t.code,{children:"export default"})," to export the configuration."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"alova.config.ts"}),": a configuration file in typescript format, using ",(0,a.jsx)(t.code,{children:"export default"})," to export the configuration."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Currently, using ",(0,a.jsx)(t.code,{children:"import"})," or ",(0,a.jsx)(t.code,{children:"require"})," to import other modules is not supported in the configuration file."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The specific configuration parameters are as follows, taking commonjs as an example."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// alova.config.js\nmodule.exports = {\n  // API generation setting array, each item represents an automatically generated rule, including the generated input and output directories, standard file paths, etc.\n  generator: [\n    // Server 1\n    {\n      // Input parameter 1: openapi json file url url\n      input: 'http://localhost:3000/openapi.json',\n\n      // Input parameter 2: local url with the current project as the relative directory\n      // input: 'openapi/api.json'\n\n      // Input parameter 3: When there is no direct reference to the openapi file, it is a document url, and the document type must be specified with the platform parameter\n      // input: 'http://192.168.5.123:8080'\n\n      // (Optional) platform is a platform that supports openapi. Currently only swagger is supported. The default is empty\n      // When this parameter is specified, the input field only needs to specify the document url without specifying the openapi file\n      platform: 'swagger',\n\n      // Output path of interface file and type file. Multiple generators cannot have the same output path, otherwise the generated code will overwrite each other.\n      output: 'src/api',\n\n      // (Optional) Specify the mediaType of the generated response data. Use this data type to generate the ts format of the response with a 2xx status code. The default is application/json.\n      responseMediaType: 'application/json',\n\n      // (Optional) Specify the bodyMediaType of the generated request body data. Use this data type to generate the ts format of the request body. The default is application/json.\n      bodyMediaType: 'application/json',\n\n      // (Optional) Specify the generated api version. The default is auto. The version of the current project will be determined by the alova version installed in the current project. If the generation is incorrect, you can also customize the specified version.\n      version: 'auto',\n\n      /**\n       * (Optional) The type of generated code. The optional values \u200b\u200bare auto/ts/typescript/module/commonjs. The default is auto. The type of the current project will be determined by certain rules. If the generation is incorrect, you can also customize the specified type:\n       * ts/typescript: The same meaning, indicating the generation of ts type files\n       * module: Generate esModule specification file\n       * commonjs: Generate commonjs specification file\n       */\n      type: 'auto',\n\n      /**\n       * Globally exported api name, you can access the automatically generated api globally through this name, the default is `Apis`, it is required when multiple generators are configured, and it cannot be repeated\n       */\n      global: 'Apis',\n\n      /**\n       * The host object of global mounting, default is `globalThis`, it means `window` in browser and `global` in nodejs\n       */\n      globalHost: 'globalThis'\n\n      /**\n       * (Optional) Filter or convert the generated api interface function, return a new apiDescriptor to generate the api call function, if this function is not specified, the apiDescripor object is not converted\n       *\n       * The type of `apiDescriptor` is the same as the api item of openapi file.\n       * @see https://spec.openapis.org/oas/v3.1.0.html#operation-object\n       */\n      handleApi: apiDescriptor => {\n        // Returning a falsy value means filtering this api\n        if (!apiDescriptor.path.startsWith('/user')) {\n          return;\n        }\n\n        apiDescriptor.parameters = (apiDescriptor.parameters || []).filter(\n          param => param.in === 'header' && param.name === 'token'\n        );\n        delete apiDescriptor.requestBody.id;\n        apiDescriptor.url = apiDescriptor.url.replace('/user', '');\n        return apiDescriptor;\n      }\n    },\n\n    // Server 2\n    {\n      // ...\n    }\n  ],\n\n  // (Optional) Whether to automatically update the interface, enabled by default, check every 5 minutes, closed when false\n  autoUpdate: true\n\n  /* You can also configure more detailed parameters\n    autoUpdate: {\n    // Update when the editor is opened, default false\n    launchEditor: true,\n    // Automatic update interval, in milliseconds\n    interval: 5 * 60 * 1000\n    }\n  */\n};\n"})}),"\n",(0,a.jsx)(t.h2,{id:"call-api",children:"Call API"}),"\n",(0,a.jsxs)(t.p,{children:["The generated API code is accessed by the global ",(0,a.jsx)(t.code,{children:"Apis"})," variable by default. You can enjoy the smart prompts provided by the editor to quickly preview the API information, allowing you to check and use the API."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Show detailed information of the interface",src:n(9322).Z+"",width:"1602",height:"948"})}),"\n",(0,a.jsxs)(t.p,{children:["Where ",(0,a.jsx)(t.code,{children:"pet"})," is the tag of the API, and the API name corresponds to ",(0,a.jsx)(t.code,{children:"operationId"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(23529).Z+"",width:"461",height:"347"})}),"\n",(0,a.jsxs)(t.p,{children:["First, you need to import ",(0,a.jsx)(t.code,{children:"index.[js/ts]"})," in the automatically generated directory in the project's entry file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="main.js"',children:"import './your-generating-api';\n"})}),"\n",(0,a.jsxs)(t.p,{children:["When using the interface, you can specify the request parameters through ",(0,a.jsx)(t.code,{children:"params/pathParams/data/headers"}),", which will intelligently prompt the parameters required by this interface. In addition, you can also specify other config parameters of the method instance."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"useRequest(() =>\n  Apis.user.changeProfile({\n    // (optional) query parameters\n    params: {\n      id: 12\n    },\n    // (optional) path parameters\n    pathParams: {\n      id2: 20\n    },\n    // (optional) body parameters\n    data: {\n      name: 'alova',\n      age: 18\n    },\n    // (optional) header parameters\n    headers: {\n      'Content-Type': 'application/json'\n    },\n\n    // config items supported by other methods\n    cacheFor: 100 * 1000,\n    transform: response => response.detail\n  })\n);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"quick-access-to-api",children:"Quick access to API"}),"\n",(0,a.jsxs)(t.p,{children:["Usually, we cannot know the tag and operationId of each API. In order to quickly access different APIs, you can quickly locate the corresponding API through the description of the target API or the url keyword, and use the trigger word ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"a->"})})," Trigger quick positioning."]}),"\n",(0,a.jsx)(t.h3,{id:"search-by-url",children:"Search by url"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(25704).Z+"",width:"1938",height:"428"})}),"\n",(0,a.jsx)(t.h3,{id:"search-by-description",children:"Search by description"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(97009).Z+"",width:"1984",height:"396"})}),"\n",(0,a.jsx)(t.h3,{id:"specify-parameters-by-referring-to-the-interface-parameter-table",children:"Specify parameters by referring to the interface parameter table"}),"\n",(0,a.jsxs)(t.p,{children:["By default, when you access the API function through ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"a->"})})," shortcut, the necessary parameters of this API will be automatically provided. When you call the API function to pass parameters, the vscode editor will automatically pop up the API document for you to fill in the parameters according to the parameter table."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(32583).Z+"",width:"627",height:"384"})}),"\n",(0,a.jsxs)(t.p,{children:["If you accidentally close the API document pop-up, you can put the cursor on the API function and call it again through the shortcut key ",(0,a.jsx)(t.code,{children:"shift+ctrl+space"}),", and the Mac is ",(0,a.jsx)(t.code,{children:"shift+command+space"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"set-alova-parameters",children:"Set alova parameters"}),"\n",(0,a.jsxs)(t.p,{children:["Usually we will set global parameters in ",(0,a.jsx)(t.code,{children:"createAlova"}),". In the automatically generated code, you can go to ",(0,a.jsx)(t.code,{children:"${output}/index.[js/ts]"})," to set it. ",(0,a.jsx)(t.code,{children:"${output}"})," is the ",(0,a.jsx)(t.code,{children:"output"})," directory you specified in the configuration file. This file will not be overwritten when the code is regenerated."]}),"\n",(0,a.jsxs)(t.p,{children:["The contents of the ",(0,a.jsx)(t.code,{children:"index"})," file are as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport vueHook from 'alova/vue';\nimport { createApis, withConfigType } from './createApis';\n\n// The alova instance corresponding to the current api, you can modify the parameters here.\nexport const alovaInstance = createAlova({\n  baseURL: 'server parameter in openapi file',\n  statesHook: vueHook,\n  requestAdapter: GlobalFetch(),\n  beforeRequest: method => {},\n  responded: res => {\n    return res.json();\n  }\n});\n\n// Reusable method parameter configuration\nexport const $$userConfigMap = withConfigType({});\n\n/**\n * @type {APIS}\n */\nconst Apis = createApis(alovaInstance, $$userConfigMap);\nglobalThis.Apis = Apis;\nexport default Apis;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can write interceptors and replace request adapters as usual in ",(0,a.jsx)(t.code,{children:"createAlova"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["One thing to note is that since method instances are automatically generated, you cannot set method parameters such as ",(0,a.jsx)(t.code,{children:"transform/cacheFor"})," directly when creating a method. To achieve the same effect, you can specify the corresponding parameters in ",(0,a.jsx)(t.code,{children:"withConfigType({})"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The following is a comparison example."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Manually define the calling function\nexport const useProfile = () =>\n  alovaInstance.Get('/user/profile', {\n    cacheFor: 100 * 1000,\n    transform(data) {\n      return data.detail;\n    }\n  });\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Set method parameters for automatically generated code\nexport const $$userConfigMap = withConfigType({\n  'user.profile': {\n    cacheFor: 100 * 1000,\n    transform(data) {\n      return data.detail;\n    }\n  }\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["user is tag, profile is operationId, you can open ",(0,a.jsx)(t.code,{children:"${output}/apiDefinitions.[js/ts]"})," to view all api interface paths."]}),"\n",(0,a.jsx)(t.h2,{id:"old-project-migration",children:"Old project migration"}),"\n",(0,a.jsx)(t.p,{children:"If you want to integrate the vscode extension in a project that already uses alova, you need to follow the steps below:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Generate code according to the openapi specification file first."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Replace the alova instance in ",(0,a.jsx)(t.code,{children:"${output}/index.[js/ts]"})," with the original alova instance code."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the api call function that has been defined in the project, change the import path of the alova instance to ",(0,a.jsx)(t.code,{children:"${output}/index.[js/ts]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In this way, you can integrate the automatically generated code without changing the original code."}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In a ts project, if you find that vscode cannot correctly prompt, please set ",(0,a.jsx)(t.code,{children:'"strictNullChecks": true'})," in ",(0,a.jsx)(t.code,{children:"tsconfig.json"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Sometimes the api will prompt as ",(0,a.jsx)(t.code,{children:"any"})," type, you can try to solve it as follows:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Step 1, confirm whether this api is introduced in the entry file."}),"\n",(0,a.jsx)(t.li,{children:"Step 2, restart vscode"}),"\n"]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(90512);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(90512),i=n(12466),o=n(16550),s=n(20469),l=n(91980),c=n(67392),d=n(20812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,u]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),j=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function y(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(c(t),o(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function w(e){const t=(0,g.Z)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(t))}},32583:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-api-call-doc-6abb54f4c7e0c328d8304e0d21edb03f.png"},9322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-api-doc-3e17c4b1f4a4dcff2b2f7a6a37fe1ddc.png"},23529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-namespace-operationid-fc8197050631bc865a34f31c9d94d5d5.png"},97009:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-query-with-description-3bb3a57904f916252032e97edf306e2b.png"},25704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-query-with-url-b7b6a3163b6d1da7cf3253e2fcbe1a86.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(67294);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);