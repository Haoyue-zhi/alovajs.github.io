"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u5f00\u53d1React-Native\u5e94\u7528",sidebar_position:20},i=void 0,l={unversionedId:"tutorial/others/react-native",id:"tutorial/others/react-native",title:"\u5f00\u53d1React-Native\u5e94\u7528",description:"\u4f60\u540c\u6837\u53ef\u4ee5\u4f7f\u7528 alova \u5f00\u53d1 React-Native \u5e94\u7528\uff0c\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 GlobalFetch \u8bf7\u6c42\u9002\u914d\u5668\u6765\u4f5c\u4e3a\u8bf7\u6c42\u4e8b\u4ef6\u5904\u7406\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/12-others/02-react-native.md",sourceDirName:"tutorial/12-others",slug:"/tutorial/others/react-native",permalink:"/zh-CN/tutorial/others/react-native",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/12-others/02-react-native.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u5f00\u53d1React-Native\u5e94\u7528",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u9690\u85cf\u63a8\u8350\u63d0\u793a",permalink:"/zh-CN/tutorial/others/hide-recommend-tips"}},c={},p=[{value:"metro \u7248\u672c",id:"metro-\u7248\u672c",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f60\u540c\u6837\u53ef\u4ee5\u4f7f\u7528 alova \u5f00\u53d1 React-Native \u5e94\u7528\uff0c\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 GlobalFetch \u8bf7\u6c42\u9002\u914d\u5668\u6765\u4f5c\u4e3a\u8bf7\u6c42\u4e8b\u4ef6\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u6709\u4ee5\u4e0b\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,a.kt)("h2",{id:"metro-\u7248\u672c"},"metro \u7248\u672c"),(0,a.kt)("p",null,"\u5728 alova \u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"exports"),"\u6765\u5b9a\u4e49\u591a\u4e2a\u5bfc\u51fa\u9879\uff0c\u56e0\u6b64\u9700\u8981\u786e\u4fdd\u8fd9\u4e24\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"metro \u7248\u672c\u9ad8\u4e8e 0.76.0"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"metro.config.js"),"\u4e2d\u5f00\u542f",(0,a.kt)("inlineCode",{parentName:"li"},"resolver.unstable_enablePackageExports"),"\u3002",(0,a.kt)("a",{parentName:"li",href:"https://facebook.github.io/metro/docs/configuration/#unstable_enablepackageexports-experimental"},"\u8be6\u60c5\u70b9\u6b64\u67e5\u770b"))))}u.isMDXComponent=!0}}]);