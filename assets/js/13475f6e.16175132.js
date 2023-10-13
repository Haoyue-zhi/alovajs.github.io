"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const o=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},9263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(7462),o=r(7294),n=r(3905),i=r(3894);const l=()=>o.createElement(i.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/memory-cache?embed=1&file=%2Fsrc%2FApp.vue"}),s={title:"Response Cache - Memory Mode",sidebar_position:40},c=void 0,p={unversionedId:"tutorial/example/memory-cache",id:"tutorial/example/memory-cache",title:"Response Cache - Memory Mode",description:"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the Getting Started Guide;",source:"@site/docs/tutorial/02-example/04-memory-cache.md",sourceDirName:"tutorial/02-example",slug:"/tutorial/example/memory-cache",permalink:"/tutorial/example/memory-cache",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-example/04-memory-cache.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Response Cache - Memory Mode",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Conditional Search",permalink:"/tutorial/example/condition-search"},next:{title:"Response Cache - Cache Placeholder Mode",permalink:"/tutorial/example/storage-placeholder"}},m={},d=[],u={toc:d},h="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the ",(0,n.kt)("a",{parentName:"p",href:"/tutorial/get-started/overview"},"Getting Started Guide"),";")),(0,n.kt)(l,{mdxType:"MemoryCache"}),(0,n.kt)("admonition",{title:"example description",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The memory cache mode stores the response data in memory, and the cache is invalid when the page is refreshed."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Operation guide:")),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Click on the following student list item, the requesting student details will be sent, and the modal box will display the Loading status;"),(0,n.kt)("li",{parentName:"ol"},"Click the mask to close the pop-up box and reopen it. At this time, the cache will be hit and the student details will be displayed immediately, and the request record will no longer be printed in Request Records;"))))}y.isMDXComponent=!0}}]);