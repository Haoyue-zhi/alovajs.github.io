"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,l(l({ref:t},i),{},{components:n})):a.createElement(k,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),u=n(6550),s=n(1980),c=n(7392),i=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=k({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var h=n(2389);const f="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==u&&(p(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},7506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const u={title:"\u6a21\u62df\u6570\u636e",sidebar_position:10},s=void 0,c={unversionedId:"extension/alova-mock",id:"extension/alova-mock",title:"\u6a21\u62df\u6570\u636e",description:"\u6b64 mock \u63d2\u4ef6\u662f\u4e00\u4e2a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4e0e\u4f20\u7edf\u7684 Proxy \u5f62\u5f0f\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u5f88\u597d\u5730\u63a7\u5236\u4f7f\u7528 mock \u6570\u636e\u7684\u4f7f\u7528\u8303\u56f4\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u5168\u5c40\u8303\u56f4\u3001\u67d0\u4e00\u7ec4\u63a5\u53e3\u8303\u56f4\uff0c\u751a\u81f3\u662f\u67d0\u4e00\u4e2a\u63a5\u53e3\u7684\u542f\u7528\u548c\u7981\u7528\uff0c\u8fd9\u5728\u6211\u4eec\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u662f\u5f88\u6709\u7528\u7684\uff0c\u6bcf\u4e00\u6b21\u7684\u8fed\u4ee3\u90fd\u4f1a\u65b0\u589e\u6216\u4fee\u6539\u4e00\u7ec4\u63a5\u53e3\uff0c\u6211\u4eec\u5e0c\u671b\u8ba9\u4e4b\u524d\u7684\u529f\u80fd\u8fd8\u662f\u8d70\u5df2\u5f00\u53d1\u597d\u7684\u63a5\u53e3\uff0c\u800c\u8ba9\u65b0\u589e\u6216\u4fee\u6539\u7684\u63a5\u53e3\u8d70\u6a21\u62df\u6570\u636e\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u5c06\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u9488\u5bf9\u672c\u6b21\u8fed\u4ee3\u6d89\u53ca\u5230\u7684\u63a5\u53e3\u5206\u4e3a\u4e00\u7ec4\uff0c\u5e76\u5bf9\u5b83\u4eec\u8fdb\u884c\u5f00\u542f\u6216\u5173\u95ed\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/10-extension/01-alova-mock.md",sourceDirName:"10-extension",slug:"/extension/alova-mock",permalink:"/zh-CN/extension/alova-mock",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/10-extension/01-alova-mock.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u6a21\u62df\u6570\u636e",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/zh-CN/category/extensions"},next:{title:"Uniapp\u9002\u914d\u5668",permalink:"/zh-CN/extension/alova-adapter-uniapp"}},i={},p=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5b9a\u4e49 mock \u63a5\u53e3",id:"\u5b9a\u4e49-mock-\u63a5\u53e3",level:2},{value:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668",id:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668",level:2},{value:"\u5b9e\u8df5\u5efa\u8bae",id:"\u5b9e\u8df5\u5efa\u8bae",level:2},{value:"\u6309\u6bcf\u4e2a\u5f00\u53d1\u8005\u6bcf\u6b21\u7248\u672c\u5206\u7ec4\u63a5\u53e3",id:"\u6309\u6bcf\u4e2a\u5f00\u53d1\u8005\u6bcf\u6b21\u7248\u672c\u5206\u7ec4\u63a5\u53e3",level:3},{value:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6392\u9664 mock \u4ee3\u7801",id:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6392\u9664-mock-\u4ee3\u7801",level:3},{value:"\u8f6c\u6362\u6a21\u62df\u6570\u636e",id:"\u8f6c\u6362\u6a21\u62df\u6570\u636e",level:2},{value:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",id:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",level:3},{value:"\u8f6c\u6362\u9519\u8bef\u5bf9\u8c61",id:"\u8f6c\u6362\u9519\u8bef\u5bf9\u8c61",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6b64 mock \u63d2\u4ef6\u662f\u4e00\u4e2a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4e0e\u4f20\u7edf\u7684 Proxy \u5f62\u5f0f\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u5f88\u597d\u5730\u63a7\u5236\u4f7f\u7528 mock \u6570\u636e\u7684\u4f7f\u7528\u8303\u56f4\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u5168\u5c40\u8303\u56f4\u3001\u67d0\u4e00\u7ec4\u63a5\u53e3\u8303\u56f4\uff0c\u751a\u81f3\u662f\u67d0\u4e00\u4e2a\u63a5\u53e3\u7684\u542f\u7528\u548c\u7981\u7528\uff0c\u8fd9\u5728\u6211\u4eec\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u662f\u5f88\u6709\u7528\u7684\uff0c\u6bcf\u4e00\u6b21\u7684\u8fed\u4ee3\u90fd\u4f1a\u65b0\u589e\u6216\u4fee\u6539\u4e00\u7ec4\u63a5\u53e3\uff0c\u6211\u4eec\u5e0c\u671b\u8ba9\u4e4b\u524d\u7684\u529f\u80fd\u8fd8\u662f\u8d70\u5df2\u5f00\u53d1\u597d\u7684\u63a5\u53e3\uff0c\u800c\u8ba9\u65b0\u589e\u6216\u4fee\u6539\u7684\u63a5\u53e3\u8d70\u6a21\u62df\u6570\u636e\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u5c06\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u9488\u5bf9\u672c\u6b21\u8fed\u4ee3\u6d89\u53ca\u5230\u7684\u63a5\u53e3\u5206\u4e3a\u4e00\u7ec4\uff0c\u5e76\u5bf9\u5b83\u4eec\u8fdb\u884c\u5f00\u542f\u6216\u5173\u95ed\u3002"),(0,r.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2728 \u4e0e alova \u65e0\u7f1d\u534f\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u2728 \u6a21\u62df\u8bf7\u6c42\u4efb\u610f\u5206\u7ec4\uff0c\u53ef\u63a7\u5236\u5168\u5c40\u3001\u7ec4\u3001\u4ee5\u53ca\u5355\u4e2a\u6a21\u62df\u63a5\u53e3\u7684\u542f\u7528\u548c\u7981\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u2728 \u4e0d\u6c61\u67d3\u751f\u4ea7\u73af\u5883")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/mock --save\n"))),(0,r.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/mock\n")))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u4f7f\u7528\u6d41\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u5b9a\u4e49-mock-\u63a5\u53e3"},"\u5b9a\u4e49 mock \u63a5\u53e3"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"defineMock"),"\u5b9a\u4e49\u4e00\u7ec4 mock \u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e00\u9879\u6a21\u62df\u63a5\u53e3\u4e2d\u76f4\u63a5\u6307\u5b9a\u8fd4\u56de\u54cd\u5e94\u6570\u636e\uff0c\u6216\u6307\u5b9a\u4e3a\u56de\u8c03\u51fd\u6570\u52a8\u6001\u8ba1\u7b97\u54cd\u5e94\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=mockGrou1.js",title:"mockGrou1.js"},"import { defineMock } from '@alova/mock';\n\nexport default defineMock(\n  {\n    // \u6355\u83b7get\u8bf7\u6c42\n    '/todo': [1, 2, 3, 4],\n\n    // rest\u98ce\u683c\u8bf7\u6c42\n    '/todo/{id}': ({ params }) => {\n      const id = params.id;\n      // ...\n      return {\n        title: '...',\n        time: '10:00'\n      };\n    },\n\n    // \u6355\u83b7post\u8bf7\u6c42\n    '[POST]/todo': ({ query, data }) => {\n      // ...\n      return { success: true };\n    },\n\n    // \u8fd4\u56de\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\n    '[POST]/todo': ({ query, data }) => {\n      // ...\n      return {\n        status: 403,\n        statusText: 'unknown error',\n        responseHeaders: {\n          // ...\n        },\n        body: {\n          success: true\n        }\n      };\n    },\n\n    // \u6a21\u62df\u7f51\u7edc\u9519\u8bef\n    '[POST]/todo': ({ query, data }) => {\n      throw new Error('network error');\n    },\n\n    // key\u524d\u9762\u6dfb\u52a0`-`\uff0c\u8868\u793a\u7981\u7528\u6b64mock\u63a5\u53e3\n    '-[DELETE]/todo/{id}': ({ params }) => {\n      // ...\n      return { success: true };\n    }\n  },\n  true\n); // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u8868\u793a\u662f\u5426\u542f\u7528\u672c\u7ec4mock\u63a5\u53e3\uff0c\u9ed8\u8ba4\u4e3atrue\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e3afalse\u5173\u95ed\n")),(0,r.kt)("h2",{id:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668"},"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668"),(0,r.kt)("p",null,"\u5728\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"createAlova"),"\u65f6\u521b\u5efa\u4e00\u4e2a\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5e76\u5c06 mock \u63a5\u53e3\u4f20\u5165\u5373\u53ef\u5b8c\u6210\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import GlobalFetch from 'alova/GlobalFetch';\nimport { createAlovaMockAdapter } from '@alova/mock';\nimport mockGroup1 from './mockGroup1';\n\n// highlight-start\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\n  // \u5168\u5c40\u63a7\u5236\u662f\u5426\u542f\u7528mock\u63a5\u53e3\uff0c\u9ed8\u8ba4\u4e3atrue\n  enable: true,\n\n  // \u975e\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u7528\u4e8e\u672a\u5339\u914dmock\u63a5\u53e3\u65f6\u53d1\u9001\u8bf7\u6c42\n  httpAdapter: GlobalFetch(),\n\n  // mock\u63a5\u53e3\u54cd\u5e94\u5ef6\u8fdf\uff0c\u5355\u4f4d\u6beb\u79d2\n  delay: 1000,\n\n  // \u662f\u5426\u6253\u5370mock\u63a5\u53e3\u8bf7\u6c42\u4fe1\u606f\n  mockRequestLogger: true,\n\n  // \u6a21\u62df\u63a5\u53e3\u56de\u8c03\uff0cdata\u4e3a\u8fd4\u56de\u7684\u6a21\u62df\u6570\u636e\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u6784\u9020\u4efb\u4f55\u4f60\u60f3\u8981\u7684\u5bf9\u8c61\u8fd4\u56de\u7ed9alova\n  // \u4ee5\u4e0b\u4e3a\u9ed8\u8ba4\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5b83\u9002\u7528\u4e8e\u4f7f\u7528GlobalFetch\u8bf7\u6c42\u9002\u914d\u5668\n  // \u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5176\u4ed6\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5728\u6a21\u62df\u63a5\u53e3\u56de\u8c03\u4e2d\u8bf7\u81ea\u5b9a\u4e49\u8fd4\u56de\u9002\u5408\u9002\u914d\u5668\u7684\u6570\u636e\u7ed3\u6784\n  onMockResponse: data => new Response(JSON.stringify(data))\n});\n// highlight-end\n\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n\n  // \u4f7f\u7528mock\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5982\u679c\u9700\u8981\u5207\u6362\u9002\u914d\u5668\uff0c\u8bf7\u770b\u4e0b\u9762\u7684\u5b9e\u8df5\u5efa\u8bae\n  requestAdapter: mockAdapter,\n\n  statesHook: /** ... */\n});\n")),(0,r.kt)("h2",{id:"\u5b9e\u8df5\u5efa\u8bae"},"\u5b9e\u8df5\u5efa\u8bae"),(0,r.kt)("h3",{id:"\u6309\u6bcf\u4e2a\u5f00\u53d1\u8005\u6bcf\u6b21\u7248\u672c\u5206\u7ec4\u63a5\u53e3"},"\u6309\u6bcf\u4e2a\u5f00\u53d1\u8005\u6bcf\u6b21\u7248\u672c\u5206\u7ec4\u63a5\u53e3"),(0,r.kt)("p",null,"\u5728\u56e2\u961f\u5f00\u53d1\u573a\u666f\u4e0b\uff0c\u6bcf\u6b21\u7248\u672c\u5f00\u53d1\u65f6\u6211\u4eec\u7ecf\u5e38\u53ea\u9700\u8981\u5bf9\u90e8\u5206\u672a\u5f00\u53d1\u597d\u7684\u63a5\u53e3\u8fdb\u884c\u6a21\u62df\u8bf7\u6c42\uff0c\u5e76\u4e14\u5bf9\u4e4b\u524d\u7248\u672c\u7684\u63a5\u53e3\u4f7f\u7528\u6d4b\u8bd5\u73af\u5883\u63a5\u53e3\uff0c\u6b64\u65f6\u4e3a\u4e86\u8fbe\u5230\u66f4\u597d\u7684\u6a21\u62df\u63a5\u53e3\u7ba1\u7406\uff0c\u53ef\u4ee5\u4ee5\u5f00\u53d1\u7248\u672c\u548c\u5f00\u53d1\u8005\u4e24\u4e2a\u7ef4\u5ea6\u5c06\u63a5\u53e3\u5206\u7ec4\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u6709\u4e24\u4e2a\u5f00\u53d1\u8005\u540d\u4e3a ",(0,r.kt)("em",{parentName:"p"},"August"),"\u3001",(0,r.kt)("em",{parentName:"p"},"Keven"),"\uff0c\u4ed6\u4eec\u6b63\u5728\u5f00\u53d1 v1.1 \u4ea7\u54c1\u529f\u80fd\uff0c\u4ed6\u4eec\u53ef\u4ee5\u8fd9\u6837\u7ba1\u7406\u6a21\u62df\u63a5\u53e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=August-v1.1.js",title:"August-v1.1.js"},"import { defineMock } from '@alova/mock';\n\nexport default defineMock({\n  '/todo': [\n    /** */\n  ],\n  '[POST]/todo': ({ data }) => {\n    // ...\n    // return ...\n  }\n  // ...\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=Keven-v1.1.js",title:"Keven-v1.1.js"},"import { defineMock } from '@alova/mock';\n\nexport default defineMock({\n  '[PUT]/todo/add': ({ data }) => {\n    // ...\n    // return ...\n  },\n  '[DELETE]/todo/remove': ({ data }) => {\n    // ...\n    // return ...\n  }\n  // ...\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=request.js",title:"request.js"},"import Augustv1_1 from './August-v1.1';\nimport Kevenv1_1 from './Keven-v1.1';\n\nconst mockAdapter = createAlovaMockAdapter([Augustv1_1, Kevenv1_1], {\n  httpAdapter: GlobalFetch(),\n  delay: 1000\n});\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n  requestAdapter: mockAdapter\n  // ...\n});\n")),(0,r.kt)("h3",{id:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6392\u9664-mock-\u4ee3\u7801"},"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6392\u9664 mock \u4ee3\u7801"),(0,r.kt)("p",null,"mock \u6570\u636e\u4e00\u822c\u53ea\u4f5c\u7528\u4e8e\u5f00\u53d1\u73af\u5883\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u5c06\u4f1a\u5207\u6362\u5230\u5b9e\u9645\u7684\u63a5\u53e3\u4e2d\uff0c\u56e0\u6b64\u8fd9\u6bb5 mock \u4ee3\u7801\u5728\u751f\u4ea7\u73af\u5883\u5c31\u53d8\u5f97\u6ca1\u6709\u4f5c\u7528\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u7684\u5224\u65ad\u6765\u6392\u9664\u8fd9\u5757\u4ee3\u7801\uff0c\u4f60\u53ea\u9700\u8981\u8fd9\u6837\u505a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const globalFetch = GlobalFetch();\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\n  httpAdapter: globalFetch,\n  delay: 1000,\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n\n  // highlight-start\n  // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u4e0d\u4f1a\u5c06mock\u76f8\u5173\u4ee3\u7801\u6253\u5305\u8fdb\u53bb\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : globalFetch,\n  // highlight-end\n\n  statesHook: /** ... */\n});\n")),(0,r.kt)("h2",{id:"\u8f6c\u6362\u6a21\u62df\u6570\u636e"},"\u8f6c\u6362\u6a21\u62df\u6570\u636e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@alova/mock")," \u9ed8\u8ba4\u5c06\u54cd\u5e94\u6570\u636e\u5305\u88c5\u4e3a Response \u5b9e\u4f8b\uff0c\u5c06\u54cd\u5e94\u5934\u9ed8\u8ba4\u5305\u88c5\u4e3a Headers \u5b9e\u4f8b\uff0c\u8fd9\u662f\u9488\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalFetch"),"\u8fdb\u884c\u9002\u914d\u7684\uff0c\u4f46\u5982\u679c\u4f7f\u7528\u5176\u4ed6\u7684\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5c31\u9700\u8981\u5c06\u6a21\u62df\u6570\u636e\u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u683c\u5f0f\u3002"),(0,r.kt)("h3",{id:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e"},"\u8f6c\u6362\u54cd\u5e94\u6570\u636e"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"onMockResponse"),"\u5b57\u6bb5\u4e2d\u62e6\u622a\u6a21\u62df\u54cd\u5e94\u6570\u636e\u5e76\u8fd4\u56de\u8f6c\u6362\u540e\u7684\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mockAdapter = createAlovaMockAdapter(\n  [\n    /* \u6a21\u62df\u6570\u636e */\n  ],\n  {\n    // ...\n    // highlight-start\n    onMockResponse(response, request, currentMethod) {\n      // response\u4e3a\u76f8\u5e94\u6570\u636e\u96c6\u5408\uff0c\u5176\u4e2d\u5305\u542bstatus\u3001statusText\u3001responseHeaders\u3001body\n      // request\u4e3a\u8bf7\u6c42\u6570\u636e\uff0c\u5176\u4e2d\u5305\u542bquery\u3001params\u3001headers\u3001data\n      // currentMethod\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\n      // ...\n      // \u8fd4\u56de\u8f6c\u6362\u540e\u7684\u54cd\u5e94\u6570\u636e\n    }\n    // highlight-end\n  }\n);\n")),(0,r.kt)("h3",{id:"\u8f6c\u6362\u9519\u8bef\u5bf9\u8c61"},"\u8f6c\u6362\u9519\u8bef\u5bf9\u8c61"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"onMockError"),"\u5b57\u6bb5\u4e2d\u62e6\u622a\u9519\u8bef\u5b9e\u4f8b\u5e76\u8fd4\u56de\u8f6c\u6362\u540e\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mockAdapter = createAlovaMockAdapter(\n  [\n    /* \u6a21\u62df\u6570\u636e */\n  ],\n  {\n    // ...\n    // highlight-start\n    onMockError(error, currentMethod) {\n      // error\u4e3a\u9519\u8bef\u5b9e\u4f8b\n      // currentMethod\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\n      // ...\n      // \u8fd4\u56de\u8f6c\u6362\u540e\u7684\u9519\u8bef\u4fe1\u606f\u96c6\u5408\n    }\n    // highlight-end\n  }\n);\n")))}m.isMDXComponent=!0}}]);