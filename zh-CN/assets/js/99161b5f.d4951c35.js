"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},9924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=r(7462),n=r(7294),o=r(3905),i=r(3894);const l=()=>n.createElement(i.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/pagination?embed=1&file=%2Fsrc%2FApp.vue"}),p={title:"\u9875\u7801\u5217\u8868",sidebar_position:100},c=void 0,s={unversionedId:"tutorial/example/paginated-list",id:"tutorial/example/paginated-list",title:"\u9875\u7801\u5217\u8868",description:"\u793a\u4f8b\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u5728 react\u3001svelte \u4e2d\u4f7f\u7528 alova\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb \u5165\u95e8\u6307\u5357;",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-example/10-paginated-list.md",sourceDirName:"tutorial/02-example",slug:"/tutorial/example/paginated-list",permalink:"/zh-CN/tutorial/example/paginated-list",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-example/10-paginated-list.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"\u9875\u7801\u5217\u8868",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u9884\u62c9\u53d6",permalink:"/zh-CN/tutorial/example/prefetch"},next:{title:"\u4f7f\u7528IndexedDB\u7ba1\u7406\u7f13\u5b58",permalink:"/zh-CN/tutorial/example/controlled-cache-by-indexeddb"}},u={},m=[],d={toc:m},f="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u5728 react\u3001svelte \u4e2d\u4f7f\u7528 alova\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb ",(0,o.kt)("a",{parentName:"p",href:"/tutorial/get-started/overview"},"\u5165\u95e8\u6307\u5357"),";")),(0,o.kt)(l,{mdxType:"Pagination"}),(0,o.kt)("admonition",{title:"\u793a\u4f8b\u8bf4\u660e",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u5206\u9875\u7b56\u7565\uff0c\u5b9e\u73b0\u66f4\u52a0\u9ad8\u6027\u80fd\u6613\u7528\u7684\u5206\u9875\u529f\u80fd\uff0c\u5206\u9875\u76f8\u5173\u72b6\u6001\u81ea\u52a8\u7ba1\u7406\u3001\u524d\u540e\u4e00\u9875\u9884\u52a0\u8f7d\u3001\u81ea\u52a8\u7ef4\u62a4\u6570\u636e\u7684\u65b0\u589e/\u7f16\u8f91/\u66ff\u6362/\u79fb\u9664\uff0c\u4ee5\u53ca\u8bf7\u6c42\u7ea7\u7684\u9632\u6296\u529f\u80fd\u3002"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"\u64cd\u4f5c\u5f15\u5bfc\uff1a")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u5b8c\u6210\u540e\u4f1a\u9884\u52a0\u8f7d\u4e0b\u4e00\u9875\u6570\u636e\uff0c\u7ffb\u9875\u5230\u4e0b\u4e00\u9875\u65f6\u65e0\u9700\u7b49\u5f85\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u5217\u8868\u9879\u65e0\u9700\u91cd\u7f6e\u5217\u8868\uff0c\u5b83\u5c06\u81ea\u52a8\u5904\u7406\u6210\u548c\u91cd\u65b0\u8bf7\u6c42\u4e00\u81f4\u7684\u6548\u679c\uff1b")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"../strategy/usePagination"},"usePagination \u6587\u6863"))))}b.isMDXComponent=!0}}]);