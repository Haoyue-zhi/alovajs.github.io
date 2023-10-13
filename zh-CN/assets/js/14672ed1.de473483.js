"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const i={title:"\u8fd8\u6709\u4ec0\u4e48\uff1f",sidebar_position:90},o=void 0,r={unversionedId:"tutorial/strategy/sensorless-data-interaction/what-more",id:"tutorial/strategy/sensorless-data-interaction/what-more",title:"\u8fd8\u6709\u4ec0\u4e48\uff1f",description:"\u865a\u62df\u6570\u636e\u7684\u4f5c\u7528\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-strategy/01-sensorless-data-interaction/09-what-more.md",sourceDirName:"tutorial/07-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/what-more",permalink:"/zh-CN/tutorial/strategy/sensorless-data-interaction/what-more",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/01-sensorless-data-interaction/09-what-more.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"\u8fd8\u6709\u4ec0\u4e48\uff1f",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\u6b65\u9aa45-\u7f16\u8f91\u6570\u636e",permalink:"/zh-CN/tutorial/strategy/sensorless-data-interaction/edit-item"},next:{title:"\u5206\u9875\u8bf7\u6c42\u7b56\u7565",permalink:"/zh-CN/tutorial/strategy/usePagination"}},s={},u=[{value:"\u865a\u62df\u6570\u636e\u7684\u4f5c\u7528\u8bf4\u660e",id:"\u865a\u62df\u6570\u636e\u7684\u4f5c\u7528\u8bf4\u660e",level:2},{value:"useSQRequest \u4e2d\u65b0\u589e\u7684\u4e8b\u4ef6",id:"usesqrequest-\u4e2d\u65b0\u589e\u7684\u4e8b\u4ef6",level:2},{value:"onBeforePushQueue",id:"onbeforepushqueue",level:3},{value:"onPushedQueue",id:"onpushedqueue",level:3},{value:"onFallback",id:"onfallback",level:3},{value:"\u4fdd\u5b58\u989d\u5916\u7684\u64cd\u4f5c\u6570\u636e",id:"\u4fdd\u5b58\u989d\u5916\u7684\u64cd\u4f5c\u6570\u636e",level:2},{value:"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5668",id:"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5668",level:2},{value:"\u64cd\u7eb5\u9759\u9ed8\u961f\u5217",id:"\u64cd\u7eb5\u9759\u9ed8\u961f\u5217",level:2},{value:"\u4f7f\u7528\u591a\u4e2a\u9759\u9ed8\u961f\u5217",id:"\u4f7f\u7528\u591a\u4e2a\u9759\u9ed8\u961f\u5217",level:3},{value:"\u67e5\u627e silentMethod",id:"\u67e5\u627e-silentmethod",level:3},{value:"\u67e5\u627e\u4e2a silentMethod \u5b9e\u4f8b",id:"\u67e5\u627e\u4e2a-silentmethod-\u5b9e\u4f8b",level:4},{value:"\u81ea\u5b9a\u4e49\u67e5\u627e",id:"\u81ea\u5b9a\u4e49\u67e5\u627e",level:4},{value:"\u66f4\u6539\u961f\u5217\u4e2d\u7684 silentMethod",id:"\u66f4\u6539\u961f\u5217\u4e2d\u7684-silentmethod",level:3},{value:"\u66ff\u6362 silentMethod",id:"\u66ff\u6362-silentmethod",level:4},{value:"\u79fb\u9664 silentMethod",id:"\u79fb\u9664-silentmethod",level:4},{value:"\u4f7f\u7528 silentQueueMap \u66f4\u6539 silentMethod",id:"\u4f7f\u7528-silentqueuemap-\u66f4\u6539-silentmethod",level:4},{value:"\u961f\u5217\u8bf7\u6c42\u5ef6\u8fdf",id:"\u961f\u5217\u8bf7\u6c42\u5ef6\u8fdf",level:2},{value:"\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf",id:"\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf",level:3},{value:"\u52a8\u6001\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf",id:"\u52a8\u6001\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf",level:3},{value:"\u52a8\u6001\u8bbe\u7f6e method \u540d\u79f0",id:"\u52a8\u6001\u8bbe\u7f6e-method-\u540d\u79f0",level:2},{value:"\u5168\u5c40\u7684\u9759\u9ed8\u63d0\u4ea4\u4e8b\u4ef6",id:"\u5168\u5c40\u7684\u9759\u9ed8\u63d0\u4ea4\u4e8b\u4ef6",level:2},{value:"onSilentSubmitBoot",id:"onsilentsubmitboot",level:3},{value:"onBeforeSilentSubmit",id:"onbeforesilentsubmit",level:3},{value:"onSilentSubmitSuccess",id:"onsilentsubmitsuccess",level:3},{value:"onSilentSubmitError",id:"onsilentsubmiterror",level:3},{value:"onSilentSubmitFail",id:"onsilentsubmitfail",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u865a\u62df\u6570\u636e\u7684\u4f5c\u7528\u8bf4\u660e"},"\u865a\u62df\u6570\u636e\u7684\u4f5c\u7528\u8bf4\u660e"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\u6211\u4eec\u4ee5\u865a\u62df\u6570\u636e\u4f5c\u4e3a id \u5360\u4f4d\u7b26\uff0c\u4f46\u5b83\u7684\u4f5c\u7528\u4e0d\u6b62\u4e8e\u6b64\uff0c\u5b83\u53ef\u4ee5\u5360\u4f4d\u4efb\u610f\u7684\u54cd\u5e94\u6570\u636e\uff0c\u4f8b\u5982\u5728\u590d\u6742\u5217\u8868\u4e2d\uff0c\u5f53\u521b\u5efa\u6570\u636e\u9879\u65f6\u670d\u52a1\u7aef\u9700\u8981\u8ba1\u7b97\u4ea7\u751f\u989d\u5916\u7684\u6570\u636e\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u989d\u5916\u6570\u636e\u4e5f\u901a\u8fc7\u865a\u62df\u6570\u636e\u5360\u4f4d\uff0c\u4f46\u8fd9\u8981\u6c42\u989d\u5916\u7684\u6570\u636e\u9700\u8981\u5728\u521b\u5efa\u6570\u636e\u9879\u65f6\u4e00\u5e76\u8fd4\u56de\u3002\u770b\u4ee5\u4e0b\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const { onSuccess, send } = useSQRequest(createOrEditData, {\n  behavior: 'silent',\n  immediate: false,\n\n  // \u6784\u9020\u4e0e\u54cd\u5e94\u6570\u636e\u76f8\u540c\u7684\u6570\u636e\u7ed3\u6784\n  silentDefaultResponse: () => {\n    return {\n      id: '--',\n      extra1: '',\n      extra2: ''\n    };\n  }\n});\nonSuccess(event => {\n  event.data.id; // \u865a\u62df\u6570\u636e\n  event.data.extra1; //\u865a\u62df\u6570\u636e\n  event.data.extra2; //\u865a\u62df\u6570\u636e\n});\n")),(0,l.kt)("h2",{id:"usesqrequest-\u4e2d\u65b0\u589e\u7684\u4e8b\u4ef6"},"useSQRequest \u4e2d\u65b0\u589e\u7684\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u5730\u76d1\u542c\u8bf7\u6c42\u5728\u961f\u5217\u4e2d\u7684\u884c\u4e3a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"useSQRequset")," \u8fd8\u989d\u5916\u63d0\u4f9b\u4e86\u4ee5\u4e0b 3 \u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6\u7ed1\u5b9a\u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const { onBeforePushQueue, onPushedQueue, onFallback } = useSQRequest(/* ... */);\n")),(0,l.kt)("h3",{id:"onbeforepushqueue"},"onBeforePushQueue"),(0,l.kt)("p",null,"silentMethod \u8fdb\u5165\u8bf7\u6c42\u961f\u5217\u524d\u4e8b\u4ef6\uff0c\u5f53\u884c\u4e3a\u6a21\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"queue"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"silent"),"\u65f6\u6709\u6548\uff0c\u53ef\u4ee5\u5728\u8fd9\u4e2a\u4e8b\u4ef6\u56de\u8c03\u4e2d\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u6765\u963b\u6b62\u5f53\u524d silentMethod \u8fdb\u5165\u961f\u5217\uff0c\u4f8b\u5982\u4f60\u53ef\u80fd\u60f3\u5f53\u524d silentMethod \u66ff\u6362\u6389\u53e6\u5916\u4e00\u4e2a\u65f6\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// ...\nonBeforePushQueue(event => {\n  // \u6bcf\u6b21\u66ff\u6362\u6307\u5b9aid\u7684\u65e7silentMethod\uff0c\u51cf\u5c11\u8bf7\u6c42\u6b21\u6570\n  const prevSumbmitMethod = getSilentMethod('temp' + id);\n  if (event.silentMethod && prevSumbmitMethod) {\n    prevSumbmitMethod.replace(event.silentMethod);\n    return false;\n  }\n});\n")),(0,l.kt)("h3",{id:"onpushedqueue"},"onPushedQueue"),(0,l.kt)("p",null,"silentMethod \u8fdb\u5165\u961f\u5217\u540e\u7684\u4e8b\u4ef6\uff0c\u5f53\u884c\u4e3a\u6a21\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"queue"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"silent"),"\u65f6\u6709\u6548\uff0c\u5982\u679c\u5728 ",(0,l.kt)("strong",{parentName:"p"},"onBeforePushQueue")," \u4e8b\u4ef6\u4e2d\u963b\u6b62\u4e86\u8fdb\u5165\u961f\u5217\uff0c\u5219\u6b64\u51fd\u6570\u4e0d\u4f1a\u89e6\u53d1\u3002"),(0,l.kt)("h3",{id:"onfallback"},"onFallback"),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4f20\u7edf\u7684 optimistic ui \u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u8bf7\u6c42\u56de\u9000\u4e8b\u4ef6\uff0c\u5f53\u8bf7\u6c42\u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u6216\u8005\u91cd\u8bd5\u5224\u5b9a\u5931\u8d25\u65f6\u90fd\u5c06\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u65f6\u95f4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u5904\u7406\u4e00\u4e9b\u56de\u9000\u64cd\u4f5c\u3002"),(0,l.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u7ed1\u5b9a\u56de\u9000\u4e8b\u4ef6\u540e\uff0c\u5373\u4f7f\u884c\u4e3a\u6a21\u5f0f\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"silent"),"\u7684\u8bf7\u6c42\u4e5f\u4e0d\u518d\u88ab\u6301\u4e45\u5316\uff0c\u5b83\u5c06\u4f1a\u5728\u5237\u65b0\u9875\u9762\u540e\u4e22\u5931\uff0c\u8fd9\u662f\u56e0\u4e3a\u6301\u4e45\u5316\u7684 silentMethod \u901a\u5e38\u90fd\u662f\u9700\u8981\u786e\u4fdd\u5b8c\u6210\u7684\uff0c\u800c\u4e0d\u662f\u56de\u9000\u8ba9\u7528\u6237\u91cd\u65b0\u5904\u7406\u7684\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e0d\u5e94\u8be5\u4f7f\u7528\u56de\u9000\u529f\u80fd\u3002")),(0,l.kt)("h2",{id:"\u4fdd\u5b58\u989d\u5916\u7684\u64cd\u4f5c\u6570\u636e"},"\u4fdd\u5b58\u989d\u5916\u7684\u64cd\u4f5c\u6570\u636e"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u6216\u7f16\u8f91\u6570\u636e\u9879\u65f6\uff0c\u4e4b\u524d\u7684\u7ae0\u8282\u4ec5\u4fdd\u5b58\u4e86\u56de\u663e\u6570\u636e\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"silentMethod.reviewData"),"\u4e2d\uff0c\u5982\u679c\u6709\u4e00\u4e9b\u989d\u5916\u7684\u6570\u636e\u9700\u8981\u8bb0\u5f55\uff0c\u4f8b\u5982\u7f16\u8f91\u9875\u7684\u83dc\u5355\u53ef\u9009\u9879\u7b49\uff0c\u6211\u4eec\u540c\u6837\u9700\u8981\u8bb0\u5f55\u5b83\u4eec\u4ee5\u786e\u4fdd\u5728\u65ad\u7f51\u60c5\u51b5\u4e0b\u8fd8\u53ef\u4ee5\u9009\u62e9\u5230\u5b83\u4eec\uff0c\u6b64\u65f6\u5c06\u8fd9\u4e9b\u6570\u636e\u6302\u8f7d\u5230 silentMethod \u5b9e\u4f8b\u4e0a\u4e00\u8d77\u6301\u4e45\u5316\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u800c\u8a00\uff0c\u4f60\u53ef\u4ee5\u4ee5\u4efb\u610f\u5c5e\u6027\u540d\u4fdd\u5b58\u6301\u4e45\u5316\u6570\u636e\uff0c\u4f46\u5728 typescript \u4e2d\u4f1a\u62a5\u9519\uff0c\u56e0\u6b64\u4e3a\u4f60\u6307\u5b9a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"silentMethod.extraData")," \u5c5e\u6027\u4f5c\u4e3a\u989d\u5916\u6570\u636e\u7684\u4fdd\u5b58\u5b57\u6bb5\uff0c\u8bb0\u5f97\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"silentMethod.save()")," \u6301\u4e45\u5316\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5668"},"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5668"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0calova \u662f\u4f7f\u7528 localStorage \u8fdb\u884c silentMethod \u7684\u6570\u636e\u6301\u4e45\u5316\u7684\uff0c\u56e0\u6b64\u5728\u6301\u4e45\u5316\u65f6\u4f1a\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"JSON.stringify"),"\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f46 json \u6570\u636e\u53ea\u652f\u6301\u57fa\u672c\u6570\u636e\u7c7b\u578b\u3001\u7eaf\u5bf9\u8c61\u4ee5\u53ca\u6570\u7ec4\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u5e8f\u5217\u5316\u7279\u6b8a\u7684\u6570\u636e\u7ed3\u6784\u4f8b\u5982 Date \u5b9e\u4f8b\u3001RegExp \u5b9e\u4f8b\u3001\u51fd\u6570\u4ee5\u53ca\u81ea\u5b9a\u4e49\u7684\u7c7b\u5b9e\u4f8b\uff0calova \u652f\u6301\u81ea\u5b9a\u4e49\u7684\u5e8f\u5217\u5316\u5668\u6765\u5904\u7406\u5b83\u4eec\uff0c\u5728\u5b58\u50a8\u65f6\u5e94\u8be5\u5982\u4f55\u5c06\u5b83\u8f6c\u6362\u4e3a json \u652f\u6301\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5728\u53d6\u51fa\u65f6\u5982\u4f55\u8f6c\u6362\u4e3a\u539f\u5bf9\u8c61\u7ed3\u6784\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const regExpSerializer = {\n  // forward\u5728\u5e8f\u5217\u5316\u65f6\u88ab\u8c03\u7528\n  // \u9700\u8981\u5224\u65addata\u662f\u5426\u4e3a\u76ee\u6807\u503c\uff0c\u5982\u679c\u4e0d\u662f\u76ee\u6807\u503c\u5219\u8fd4\u56deundefined\uff0c\u8868\u793a\u4e0d\u5904\u7406\u5b83\n  forward: data => data instanceof RegExp ? data.source : undefined,\n\n  // backward\u5728\u53cd\u5e8f\u5217\u5316\u65f6\u88ab\u8c03\u7528\uff0cdata\u4e3aforward\u4e2d\u8fd4\u56de\u7684\u503c\n  backward: source => new RegExp(source);\n};\n\nbootSilentFactory({\n  // ...\n  // \u901a\u8fc7serializers\u4f7f\u7528\u8fd9\u4e2a\u5e8f\u5217\u5316\u5668\n  serializers: {\n    customRegExp: regExpSerializer\n  }\n})\n")),(0,l.kt)("p",null,"SilentFactory \u5185\u90e8\u9ed8\u8ba4\u63d0\u4f9b\u4e86 Date \u548c RegExp \u7684\u5e8f\u5217\u5316\u5668\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684 key \u6765\u8986\u76d6\u9ed8\u8ba4\u7684\u5e8f\u5217\u5316\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const defaultSerializers = {\n  Date: dateSerializer,\n  RegExp: regExpSerializer\n};\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/alovajs/scene/blob/main/src/hooks/silent/serializer/date.ts"},"\u9605\u8bfb Date \u5e8f\u5217\u5316\u5668\u6e90\u7801")),(0,l.kt)("h2",{id:"\u64cd\u7eb5\u9759\u9ed8\u961f\u5217"},"\u64cd\u7eb5\u9759\u9ed8\u961f\u5217"),(0,l.kt)("p",null,"\u9759\u9ed8\u961f\u5217\u7528\u4e8e\u4fdd\u8bc1\u8bf7\u6c42\u65f6\u5e8f\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4efb\u610f\u521b\u5efa\u961f\u5217\uff0c\u8fdb\u5165\u961f\u5217\u7684\u8bf7\u6c42\u90fd\u5c06\u4f1a\u4ee5",(0,l.kt)("strong",{parentName:"p"},"SilentMethod"),"\u5b9e\u4f8b\u7684\u5f62\u5f0f\u4fdd\u5b58\u5728\u961f\u5217\u4e2d\uff0c\u6bcf\u4e2a",(0,l.kt)("strong",{parentName:"p"},"SilentMethod"),"\u9664\u4e86\u5305\u542b\u8bf7\u6c42\u4fe1\u606f\u5916\uff0c\u8fd8\u5305\u542b\u9759\u9ed8\u63d0\u4ea4\u7684\u76f8\u5173\u914d\u7f6e\u3002\u9759\u9ed8\u961f\u5217\u662f\u53ef\u4ee5\u751f\u6210\u4efb\u610f\u591a\u4e2a\u7684\uff0c\u4e14\u652f\u6301\u67e5\u627e\u3001\u4fee\u6539\u3001\u5220\u9664\u961f\u5217\u4e2d\u7684 silentMethod \u5b9e\u4f8b\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u591a\u4e2a\u9759\u9ed8\u961f\u5217"},"\u4f7f\u7528\u591a\u4e2a\u9759\u9ed8\u961f\u5217"),(0,l.kt)("p",null,"\u884c\u4e3a\u6a21\u5f0f\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"queue"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"silent"),"\u7684\u8bf7\u6c42\u90fd\u4f1a\u8fdb\u5165\u9759\u9ed8\u961f\u5217\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0csilentMethod \u5b9e\u4f8b\u5c06\u4f1a\u88ab\u5206\u914d\u5230",(0,l.kt)("strong",{parentName:"p"},"default"),"\u961f\u5217\u4e2d\uff0c\u5f53\u9700\u8981\u5206\u914d\u5230\u5176\u4ed6\u961f\u5217\u65f6\u53ef\u4ee5\u5728",(0,l.kt)("em",{parentName:"p"},"useSQRequest"),"\u4e2d\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"queue"),"\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"useSQRequest(createOrEditTodo, {\n  // ...\n  // \u6307\u5b9asilentMethod\u5b9e\u4f8b\u8fdb\u5165\u540d\u79f0\u4e3acustomQueue\u7684\u961f\u5217\u4e2d\n  queue: 'customQueue',\n  behavior: 'silent'\n});\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"queue"),"\u6307\u5b9a\u4e3a\u51fd\u6570\uff0c\u8981\u6c42\u8fd4\u56de\u961f\u5217\u540d\u79f0\uff0c\u8fd9\u4e2a\u51fd\u6570\u5c06\u4f1a\u5728\u6bcf\u6b21\u53d1\u8d77\u8bf7\u6c42\u65f6\u88ab\u8c03\u7528\uff0c\u51fd\u6570\u53c2\u6570\u6765\u81ea\u4e8e send \u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useSQRequest(createOrEditTodo, {\n  // ...\n  // \u6839\u636euseCustomQueue\u5224\u65ad\u662f\u5426\u8fdb\u5165customQueue\u961f\u5217\n  queue: useCustomQueue => (useCustomQueue ? 'customQueue' : 'default'),\n  behavior: 'silent',\n  immediate: false\n});\nconst handleClick = () => {\n  send(true);\n};\n")),(0,l.kt)("h3",{id:"\u67e5\u627e-silentmethod"},"\u67e5\u627e silentMethod"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684",(0,l.kt)("a",{parentName:"p",href:"../../strategy/sensorless-data-interaction/data-compensation"},"\u6570\u636e\u8865\u507f"),"\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"../../strategy/sensorless-data-interaction/data-compensation#filtersilentmethods"},"filterSilentMethods")," \u67e5\u627e\u6307\u5b9a\u961f\u5217\u7684 silentMethod \u5b9e\u4f8b\uff0c\u5b83\u5c06\u8fd4\u56de\u6240\u6709\u5339\u914d\u7684 silentMethod \u5b9e\u4f8b\uff0c\u8fd9\u91cc\u518d\u4ecb\u7ecd\u4e24\u79cd\u67e5\u627e\u961f\u5217\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("h4",{id:"\u67e5\u627e\u4e2a-silentmethod-\u5b9e\u4f8b"},"\u67e5\u627e\u4e2a silentMethod \u5b9e\u4f8b"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"getSilentMethod"),"\u67e5\u8be2\u5339\u914d\u7684\u7b2c\u4e00\u4e2a silentMethod \u5b9e\u4f8b\uff0c\u7528\u6cd5\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"../../strategy/sensorless-data-interaction/data-compensation#filtersilentmethods"},"filterSilentMethods")," \u76f8\u540c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function filterSilentMethods(\n  methodNameMatcher?: string | number | RegExp,\n  queueName?: string,\n  filterActive?: boolean\n): SilentMethod | undefined;\n")),(0,l.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u67e5\u627e"},"\u81ea\u5b9a\u4e49\u67e5\u627e"),(0,l.kt)("p",null,"\u901a\u8fc7\u5bfc\u51fa\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"silentQueueMap")," \u961f\u5217\u96c6\u5408\u81ea\u5b9a\u4e49\u67e5\u627e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"silentQueueMap")," \u7684\u6570\u636e\u7ed3\u6784\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const silentQueueMap = {\n  default: [silentMethod1, silentMethod2 /* ... */],\n  queueName1: [silentMethod3, silentMethod4 /* ... */],\n  queueName2: [silentMethod5, silentMethod6 /* ... */]\n  // ...\n};\n")),(0,l.kt)("h3",{id:"\u66f4\u6539\u961f\u5217\u4e2d\u7684-silentmethod"},"\u66f4\u6539\u961f\u5217\u4e2d\u7684 silentMethod"),(0,l.kt)("p",null,"\u5f53\u67e5\u627e\u5230\u4f60\u60f3\u8981\u7684 silentMethod \u5b9e\u4f8b\u540e\uff0c\u53ef\u4ee5\u5bf9\u8fd9\u4e9b\u7b49\u5f85\u4e2d\u7684 silentMethod \u5b9e\u4f8b\u8fdb\u884c\u64cd\u7eb5\u3002"),(0,l.kt)("h4",{id:"\u66ff\u6362-silentmethod"},"\u66ff\u6362 silentMethod"),(0,l.kt)("p",null,"\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"silentMethod.replace"),"\u53ef\u4ee5\u5728\u961f\u5217\u4e2d\u5c06\u4e00\u4e2a silentMethod \u66ff\u6362\u4e3a\u53e6\u4e00\u4e2a silentMethod\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"oldSilentMethod.replace(newSilentMethod);\n")),(0,l.kt)("h4",{id:"\u79fb\u9664-silentmethod"},"\u79fb\u9664 silentMethod"),(0,l.kt)("p",null,"\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"silentMethod.remove"),"\u53ef\u4ee5\u5c06\u5f53\u524d silentMethod \u5728\u961f\u5217\u4e2d\u79fb\u9664\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"oldSilentMethod.remove();\n")),(0,l.kt)("h4",{id:"\u4f7f\u7528-silentqueuemap-\u66f4\u6539-silentmethod"},"\u4f7f\u7528 silentQueueMap \u66f4\u6539 silentMethod"),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"silentQueueMap")," \u81ea\u5b9a\u4e49\u66f4\u6539\u4efb\u610f\u961f\u5217\u7684\u4efb\u610f\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { silentQueueMap } from '@alova/scene-*';\n\n// \u4fee\u6539default\u961f\u5217\u4e2d\u7684\u6240\u6709silentMethod\nsilentQueueMap.default.forEach(silentMethodItem => {\n  // ...\n});\n")),(0,l.kt)("h2",{id:"\u961f\u5217\u8bf7\u6c42\u5ef6\u8fdf"},"\u961f\u5217\u8bf7\u6c42\u5ef6\u8fdf"),(0,l.kt)("p",null,"\u6709\u4e9b\u5e94\u7528\u9700\u8981\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u4f8b\u5982\u7f16\u8f91\u5668\u7c7b\u578b\u5e94\u7528\uff0c\u5728\u7f16\u8f91\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u5b9e\u65f6\u4fdd\u5b58\uff0c\u540c\u65f6\u4e0d\u6253\u65ad\u7528\u6237\u4f7f\u7528\uff0c\u5728\u8fd9\u79cd\u7c7b\u578b\u7684\u5e94\u7528\u4e2d\u4f7f\u7528\u9759\u9ed8\u63d0\u4ea4\u65f6\u5c06\u4f1a\u4ea7\u751f\u8f83\u591a\u7684\u8bf7\u6c42\u4fe1\u606f\uff0c\u4e0d\u4ec5\u4f1a\u585e\u6ee1\u524d\u7aef\u7f13\u5b58\u8fd8\u4f1a\u8ba9\u670d\u52a1\u7aef\u63a5\u6536\u8fc7\u591a\u7684\u8bf7\u6c42\uff0c\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u4e0d\u518d\u9700\u8981\u5c06\u540c\u6b65\u6240\u6709\u4fdd\u5b58\u64cd\u4f5c\uff0c\u800c\u662f\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u53d1\u9001\u4e00\u6b21\u64cd\u4f5c\uff0c\u5c06\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6848\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u7f16\u8f91\u64cd\u4f5c\u8282\u6d41\uff0c\u5728 n \u79d2\u5185\u53ea\u53d1\u8d77\u4e00\u6b21\u63d0\u4ea4\uff0c\u8fd9\u79cd\u65b9\u6848\u53ef\u80fd\u4f1a\u4e22\u5931\u5ef6\u8fdf\u65f6\u95f4\u6bb5\u5185\u7684\u64cd\u4f5c\u8bb0\u5f55\uff0c\u5bfc\u81f4\u5237\u65b0\u65f6\u53ea\u80fd\u83b7\u53d6\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u65f6\u7684\u72b6\u6001\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5ef6\u8fdf\u961f\u5217\u5185\u7684\u4fdd\u5b58\u8bf7\u6c42\uff0c\u5e76\u5728\u5ef6\u8fdf\u65f6\u95f4\u5185\u53ea\u4fdd\u7559\u6700\u65b0\u4e00\u6b21\u7684\u8bf7\u6c42\u4fe1\u606f\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u51cf\u5c11\u8bf7\u6c42\u7684\u540c\u65f6\u4fdd\u7559\u6700\u65b0\u7684\u7f16\u8f91\u72b6\u6001\uff1b")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u961f\u5217\u4e2d\u7684 silentMethod \u4f1a\u5728\u4e0a\u4e00\u4e2a\u54cd\u5e94\u540e\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u542f\u52a8\u65f6\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"requestWait")," \u8bbe\u7f6e silentMethod \u7684\u5ef6\u8fdf\u53d1\u9001\u65f6\u95f4\uff0c\u5728\u8fd9\u6bb5\u65f6\u95f4\u91cc\u901a\u8fc7\u64cd\u7eb5\u961f\u5217\u4fdd\u7559\u6700\u65b0\u7684 silentMethod\u3002"),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf"},"\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5bf9\u6307\u5b9a\u7684\u961f\u5217\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4\uff0c\u4e5f\u53ef\u4ee5\u4e00\u6b21\u8bbe\u7f6e\u591a\u4e2a\u961f\u5217\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bootSilentFactory({\n  alova: alovaInst,\n  // highlight-start\n  requestWait: [\n    // customQueue\u961f\u5217\u5185\u7684\u6bcf\u4e2asilentMethod\u5c06\u4f1a\u5ef6\u8fdf5000ms\u53d1\u8d77\u8bf7\u6c42\n    { queue: 'customQueue', wait: 5000 },\n\n    // \u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u540d\u79f0\u524d\u7f00\u4e3adelay\u7684\u961f\u5217\u7edf\u4e00\u8bbe\u7f6e3000ms\u5ef6\u8fdf\u8bf7\u6c42\u65f6\u95f4\n    { queue: /^delay/, wait: 3000 }\n  ]\n  // highlight-end\n});\n")),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"requestWait")," \u76f4\u63a5\u8bbe\u7f6e\u4e3a\u6570\u5b57\u65f6\u9ed8\u8ba4\u5bf9 default \u961f\u5217\u6709\u6548\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bootSilentFactory({\n  alova: alovaInst,\n  // highlight-start\n  // default\u961f\u5217\u5185\u7684\u6bcf\u4e2asilentMethod\u5c06\u4f1a\u5ef6\u8fdf5000ms\u53d1\u8d77\u8bf7\u6c42\n  requestWait: 5000\n  // highlight-end\n});\n")),(0,l.kt)("h3",{id:"\u52a8\u6001\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf"},"\u52a8\u6001\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf"),(0,l.kt)("p",null,"\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53ea\u5e0c\u671b\u961f\u5217\u5185\u7684\u7279\u5b9a silentMethod \u8bbe\u7f6e\u5ef6\u8fdf\u8bf7\u6c42\uff0c\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570\u6765\u52a8\u6001\u8bbe\u7f6e\u8bf7\u6c42\u5ef6\u8fdf\uff0c\u6307\u5b9a\u961f\u5217\u7684\u6bcf\u4e2a silentMethod \u5728\u53d1\u8d77\u8bf7\u6c42\u524d\u90fd\u5c06\u4f1a\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff0c\u6765\u786e\u5b9a\u5ef6\u8fdf\u7684\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bootSilentFactory({\n  alova: alovaInst,\n  // highlight-start\n  requestWait: [\n    {\n      queue: /^delay,\n      // \u53ea\u5bf9url\u4e3a/edit\u7684post\u8bf7\u6c42\u5ef6\u8fdf5000ms\n      wait: (silentMethod, queuName) => {\n        const { type, url, data } = silentMethod.entity;\n        if (type === 'POST' && url === '/edit') {\n          return 5000;\n        }\n      }\n    },\n  ]\n  // highlight-end\n});\n")),(0,l.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"requestWait")," \u76f4\u63a5\u8bbe\u7f6e\u4e3a\u51fd\u6570\u65f6\u9ed8\u8ba4\u5bf9 default \u961f\u5217\u6709\u6548\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bootSilentFactory({\n  alova: alovaInst,\n  // highlight-start\n  requestWait: (silentMethod, queuName) => {\n    const { type, url, data } = silentMethod.entity;\n    if (type === 'POST' && url === '/edit') {\n      return 5000;\n    }\n  }\n  // highlight-end\n});\n")),(0,l.kt)("h2",{id:"\u52a8\u6001\u8bbe\u7f6e-method-\u540d\u79f0"},"\u52a8\u6001\u8bbe\u7f6e method \u540d\u79f0"),(0,l.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u67e5\u627e\uff0c\u5982\u679c\u4f60\u9700\u8981\u52a8\u6001\u8bbe\u7f6e silentMethod \u5185 method \u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 setName\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5728\u8bf7\u6c42\u6210\u529f\u65f6\u5bf9silentMethod\u91cd\u65b0\u8bbe\u7f6e\u540d\u79f0\nonSuccess(({ data, silentMethod }) => {\n  silentMethod.entity.setName('name' + data.id);\n});\n")),(0,l.kt)("h2",{id:"\u5168\u5c40\u7684\u9759\u9ed8\u63d0\u4ea4\u4e8b\u4ef6"},"\u5168\u5c40\u7684\u9759\u9ed8\u63d0\u4ea4\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u63a5\u89e6\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"onSilentSubmitSuccess"),"\uff0c\u6211\u4eec\u603b\u5171\u63d0\u4f9b\u4e86 5 \u4e2a\u5168\u5c40\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("h3",{id:"onsilentsubmitboot"},"onSilentSubmitBoot"),(0,l.kt)("p",null,"\u9759\u9ed8\u5de5\u5382\u542f\u52a8\u4e8b\u4ef6\uff0c\u5728\u9759\u9ed8\u5de5\u5382\u542f\u52a8\u540e\u89e6\u53d1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function onSilentSubmitBoot(handler: () => void): OffEventCallback;\n")),(0,l.kt)("h3",{id:"onbeforesilentsubmit"},"onBeforeSilentSubmit"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"behavior=silent"),"\u7684 silentMethod \u8bf7\u6c42\u524d\u89e6\u53d1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function onBeforeSilentSubmit(handler: (event: GlobalSQEvent)): OffEventCallback;\n")),(0,l.kt)("h3",{id:"onsilentsubmitsuccess"},"onSilentSubmitSuccess"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"behavior=silent"),"\u7684 silentMethod \u8bf7\u6c42\u6210\u529f\u65f6\u89e6\u53d1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function onSilentSubmitSuccess(handler: (event: GlobalSQSuccessEvent) => void): OffEventCallback;\n")),(0,l.kt)("h3",{id:"onsilentsubmiterror"},"onSilentSubmitError"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"behavior=silent"),"\u7684 silentMethod \u8bf7\u6c42\u5931\u8d25\uff0c\u4f46\u8fd8\u6ca1\u6709\u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u65f6\u89e6\u53d1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function onSilentSubmitError(handler: (event: GlobalSQErrorEvent) => void): OffEventCallback;\n")),(0,l.kt)("h3",{id:"onsilentsubmitfail"},"onSilentSubmitFail"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"behavior=silent"),"\u7684 silentMethod \u5728\u9047\u5230\u8bf7\u6c42\u5931\u8d25\u65f6\uff0c\u4ee5\u4e0b 3 \u79cd\u60c5\u51b5\u5c06\u4f1a\u89e6\u53d1\u6b64\u4e8b\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u91cd\u8bd5\u5230\u8fbe\u6700\u5927\u6b21\u6570\u65f6\u89e6\u53d1\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u672a\u8bbe\u7f6e\u91cd\u8bd5\u6b21\u6570\u65f6\uff0c\u9996\u6b21\u8bf7\u6c42\u5931\u8d25\u5c06\u4f1a\u89e6\u53d1\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u672a\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0c\u4f46\u91cd\u8bd5\u5224\u5b9a\u4e3a\u4e0d\u518d\u91cd\u8bd5\u65f6\u89e6\u53d1\uff1b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function onSilentSubmitFail(handler: (event: GlobalSQFailEvent) => void): OffEventCallback;\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u7684\u4e8b\u4ef6\u7ed1\u5b9a\u51fd\u6570\u90fd\u5c06\u8fd4\u56de\u89e3\u7ed1\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u5728\u7ec4\u4ef6\u5378\u8f7d\u524d\u89e3\u7ed1\u4e8b\u4ef6\u3002"))}c.isMDXComponent=!0}}]);