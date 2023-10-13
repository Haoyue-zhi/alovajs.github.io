"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2465],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const o=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=r(7462),o=r(7294),n=r(3905),i=r(3894);const l=()=>o.createElement(i.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/storage-restore?embed=1&file=%2Fsrc%2FApp.vue"}),s={title:"Response Caching - Restore Mode",sidebar_position:60},p=void 0,c={unversionedId:"tutorial/example/storage-restore",id:"tutorial/example/storage-restore",title:"Response Caching - Restore Mode",description:"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the Getting Started Guide;",source:"@site/docs/tutorial/02-example/06-storage-restore.md",sourceDirName:"tutorial/02-example",slug:"/tutorial/example/storage-restore",permalink:"/tutorial/example/storage-restore",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-example/06-storage-restore.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Response Caching - Restore Mode",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Response Cache - Cache Placeholder Mode",permalink:"/tutorial/example/storage-placeholder"},next:{title:"Update state across components/pages",permalink:"/tutorial/example/update-state"}},d={},u=[],m={toc:u},h="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the ",(0,n.kt)("a",{parentName:"p",href:"/tutorial/get-started/overview"},"Getting Started Guide"),";")),(0,n.kt)(l,{mdxType:"StorageRestore"}),(0,n.kt)("admonition",{title:"example description",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The cache restore mode is to persist the response data. When the request hits the cache, the persistent cached data will be returned, and no more requests will be issued. It is generally used for some data that needs server management but does not change for a certain period of time. The following is an example of the restore mode of holiday information."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Operation guide:")),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Reload page")," to refresh the page, you will no longer see the Loading status, but will use the cached data and render it to the page immediately, and no longer send requests;"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Invalidate the data of placeholder")," to invalidate the cached data, then you will see the Loading status again;"))))}f.isMDXComponent=!0}}]);