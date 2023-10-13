"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3894:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294);const o=e=>{let{src:t}=e;return r.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=a(7462),o=a(7294),n=a(3905),i=a(3894);const s=()=>o.createElement(i.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/update-state?embed=1&file=%2Fsrc%2FApp.vue"}),l={title:"Update state across components/pages",sidebar_position:70},p=void 0,c={unversionedId:"tutorial/example/update-state",id:"tutorial/example/update-state",title:"Update state across components/pages",description:"The example uses vue3 as an example, but you can also use alova in react and svelte, please read the Getting Started Guide for details;",source:"@site/docs/tutorial/02-example/07-update-state.md",sourceDirName:"tutorial/02-example",slug:"/tutorial/example/update-state",permalink:"/tutorial/example/update-state",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-example/07-update-state.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Update state across components/pages",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Response Caching - Restore Mode",permalink:"/tutorial/example/storage-restore"},next:{title:"Data Prefetch",permalink:"/tutorial/example/prefetch"}},u={},d=[],m={toc:d},f="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte, please read the ",(0,n.kt)("a",{parentName:"p",href:"/tutorial/get-started/overview"},"Getting Started Guide")," for details;")),(0,n.kt)(s,{mdxType:"UpdateState"}),(0,n.kt)("admonition",{title:"example description",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When you need to update state across components or pages, you are often limited by the component hierarchy. Here is a way to break this limitation."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Operation guidance:")),(0,n.kt)("p",{parentName:"admonition"},"In the edit box or edit page, after adding or editing list data, the list data is updated across component levels.")))}b.isMDXComponent=!0}}]);