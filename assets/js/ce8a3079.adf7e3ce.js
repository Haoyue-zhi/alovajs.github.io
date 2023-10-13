"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Parallel Requests",sidebar_position:70},s=void 0,l={unversionedId:"tutorial/next-step/parallel-request",id:"tutorial/next-step/parallel-request",title:"Parallel Requests",description:"Simple parallel requests only need to call multiple useRequest at the same time.",source:"@site/docs/tutorial/06-next-step/08-parallel-request.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/parallel-request",permalink:"/tutorial/next-step/parallel-request",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/08-parallel-request.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Parallel Requests",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Manage additional state",permalink:"/tutorial/next-step/manage-extra-states"},next:{title:"Serial request",permalink:"/tutorial/next-step/serial-request"}},i={},u=[{value:"Way 1",id:"way-1",level:2},{value:"Way 2",id:"way-2",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Simple parallel requests only need to call multiple useRequest at the same time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { data: todoList } = useRequest(todoListGetter);\nconst { data: todoCounter } = useRequest(todoCountGetter);\n")),(0,o.kt)("p",null,"But this kind of request is only suitable for pure parallel requests. If you need to perform some operations after the parallel requests are completed, there are two ways to achieve it:"),(0,o.kt)("h2",{id:"way-1"},"Way 1"),(0,o.kt)("p",null,"Create promise objects manually, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all")," to complete the effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { data: todoList, onSuccess: onListSuccess, onError: onListError } = useRequest(todoListGetter);\nconst { data: todoCounter, onSuccess: onCountSuccess, onError: onCountError } = useRequest(todoCountGetter);\n\n// Manually create the promise object\nconst listPromise = new Promise((resolve, reject) => {\n  onListSuccess(resolve);\n  onListError(reject);\n});\nconst countPromise = new Promise((resolve, reject) => {\n  onCountSuccess(resolve);\n  onCountError(reject);\n});\nconst [listEvent, countEvent] = await Promise.all([listPromise, countPromise]);\n// The parallel request is completed, continue to process the business...\n")),(0,o.kt)("h2",{id:"way-2"},"Way 2"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"send")," function returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest")," function, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"send")," will return an available promise object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Let them not automatically send requests first\nconst { send: sendList } = useRequest(todoListGetter, { immediate: false });\nconst { send: sendCount } = useRequest(todoCountGetter, { immediate: false });\n\n// Use the promise object returned by the send function\nconst parallelRequest = async () => {\n  const [listResponse, countResponse] = await Promise.all([sendList(), sendCount()]);\n  // The parallel request is completed, continue to process the business...\n};\n")))}d.isMDXComponent=!0}}]);