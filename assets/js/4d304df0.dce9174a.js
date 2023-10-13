"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const s={title:"Share Request",sidebar_position:20},i=void 0,o={unversionedId:"tutorial/next-step/share-request",id:"tutorial/next-step/share-request",title:"Share Request",description:"We always encounter this situation. When a request is sent but has not been responded to, the same request is initiated again, resulting in waste of requests, or repeated submission of problems, such as the following three scenarios:",source:"@site/docs/tutorial/06-next-step/02-share-request.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/share-request",permalink:"/tutorial/next-step/share-request",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/02-share-request.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Share Request",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Detailed request method",permalink:"/tutorial/next-step/method-details"},next:{title:"Use method to request",permalink:"/tutorial/next-step/send-request-directly"}},l={},u=[{value:"Globally close sharing requests",id:"globally-close-sharing-requests",level:2},{value:"Partially close the sharing request",id:"partially-close-the-sharing-request",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We always encounter this situation. When a request is sent but has not been responded to, the same request is initiated again, resulting in waste of requests, or repeated submission of problems, such as the following three scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A component will obtain initialization data when it is created. When a page renders multiple components at the same time, it will send multiple identical requests at the same time;"),(0,a.kt)("li",{parentName:"ol"},"The submit button is not disabled, and the user clicks the submit button multiple times;"),(0,a.kt)("li",{parentName:"ol"},"When the preloading page is entered before the preloading is completed, the same request will be initiated multiple times;"),(0,a.kt)("li",{parentName:"ol"},"Prevent dumplicate requesting in StrictMode of react;")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Share Requests are here to solve those problems! "),"It can not only improve application fluency, but also reduce server pressure."),(0,a.kt)("h2",{id:"globally-close-sharing-requests"},"Globally close sharing requests"),(0,a.kt)("p",null,"In most cases, you should need shared requests, so it is enabled by default, but if you encounter a special situation and want to disable it globally, you can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInst = createAlova({\n  //...\n  // highlight-start\n  shareRequest: false\n  // highlight-end\n});\n")),(0,a.kt)("h2",{id:"partially-close-the-sharing-request"},"Partially close the sharing request"),(0,a.kt)("p",null,"If you wish to turn off shared requests on specific requests, you can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"alovaInst.Get('/todo', {\n  //...\n  // highlight-start\n  // Only close share requests for this request\n  shareRequest: false\n  // highlight-end\n});\n")),(0,a.kt)("admonition",{title:"Notes",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It should be noted again that alova is uniquely identified through the combination of the method instance\u2019s request method, request url, request header parameters, url parameters, and request body. That is to say, it is the same request, rather than comparing the reference address of the method instance.")))}h.isMDXComponent=!0}}]);