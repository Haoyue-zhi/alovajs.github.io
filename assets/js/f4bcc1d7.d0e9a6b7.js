"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5227],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return t?o.createElement(m,i(i({ref:r},c),{},{components:t})):o.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7513:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const a={title:"Error logger",sidebar_position:110},i=void 0,l={unversionedId:"tutorial/next-step/error-logger",id:"tutorial/next-step/error-logger",title:"Error logger",description:"v2.6.0+",source:"@site/docs/tutorial/06-next-step/12-error-logger.md",sourceDirName:"tutorial/06-next-step",slug:"/tutorial/next-step/error-logger",permalink:"/tutorial/next-step/error-logger",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-next-step/12-error-logger.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"Error logger",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Download/Upload progress",permalink:"/tutorial/next-step/download-upload-progress"},next:{title:"cache logger",permalink:"/tutorial/next-step/cache-logger"}},s={},p=[{value:"Disable error logger",id:"disable-error-logger",level:2},{value:"Custom print error logger",id:"custom-print-error-logger",level:2}],c={toc:p},u="wrapper";function g(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"version required",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"v2.6.0+")),(0,n.kt)("p",null,"For the convenience of debugging, when using use hooks to request or respond to an error, the error logger will be printed on the console by default. If you do not want to print an error message or customize the control to print an error message in some cases (such as a production environment), alova also Support for them is provided."),(0,n.kt)("h2",{id:"disable-error-logger"},"Disable error logger"),(0,n.kt)("p",null,"Log printing can be turned off by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"errorLogger")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"false or null")," when creating an alova instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  errorLogger: false\n});\n")),(0,n.kt)("h2",{id:"custom-print-error-logger"},"Custom print error logger"),(0,n.kt)("p",null,"The error logger is printed by ",(0,n.kt)("inlineCode",{parentName:"p"},"console.error")," by default. If ",(0,n.kt)("inlineCode",{parentName:"p"},"console.error")," is not supported in your project environment, or if you want to collect error information, you can specify ",(0,n.kt)("inlineCode",{parentName:"p"},"errorLogger")," as a function to customize error logger."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  // error is the error instance, methodInstance is the method instance corresponding to the error\n  errorLogger(error, methodInstance) {\n    reportError(`${methodInstance.url}: ${error.message}`);\n  }\n});\n")))}g.isMDXComponent=!0}}]);