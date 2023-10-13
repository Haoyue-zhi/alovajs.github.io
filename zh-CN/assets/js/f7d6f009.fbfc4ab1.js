"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={title:"\u5f00\u53d1\u6307\u5357",sidebar_position:30},i=void 0,o={unversionedId:"contributing/developing-guidelines",id:"contributing/developing-guidelines",title:"\u5f00\u53d1\u6307\u5357",description:"Node.js 16+, npm 8+",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/contributing/03-developing-guidelines.md",sourceDirName:"contributing",slug:"/contributing/developing-guidelines",permalink:"/zh-CN/contributing/developing-guidelines",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/contributing/03-developing-guidelines.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u5f00\u53d1\u6307\u5357",sidebar_position:30},sidebar:"contributingSidebar",previous:{title:"\u6210\u4e3a\u6838\u5fc3\u56e2\u961f\u6210\u5458",permalink:"/zh-CN/contributing/become-core-member"},next:{title:"\u884c\u4e3a\u51c6\u5219",permalink:"/zh-CN/contributing/code-of-conduct"}},p={},s=[{value:"1. fork \u4ed3\u5e93",id:"1-fork-\u4ed3\u5e93",level:2},{value:"2. \u514b\u9686\u9879\u76ee\u5230\u672c\u5730",id:"2-\u514b\u9686\u9879\u76ee\u5230\u672c\u5730",level:2},{value:"3. \u65b0\u5efa pull request",id:"3-\u65b0\u5efa-pull-request",level:2},{value:"4. \u5728\u672c\u5730\u7f16\u7801",id:"4-\u5728\u672c\u5730\u7f16\u7801",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u5b89\u88c5\u63a8\u8350\u63d2\u4ef6\uff08vscode\uff09",id:"\u5b89\u88c5\u63a8\u8350\u63d2\u4ef6vscode",level:3},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:3},{value:"\u7f16\u7801\u89c4\u8303",id:"\u7f16\u7801\u89c4\u8303",level:3},{value:"\u4ee3\u7801\u683c\u5f0f",id:"\u4ee3\u7801\u683c\u5f0f",level:4},{value:"\u5c3d\u91cf\u51cf\u5c11\u4ee3\u7801",id:"\u5c3d\u91cf\u51cf\u5c11\u4ee3\u7801",level:4},{value:"5. \u5355\u5143\u6d4b\u8bd5\u6307\u5357",id:"5-\u5355\u5143\u6d4b\u8bd5\u6307\u5357",level:2},{value:"\u8fd0\u884c\u548c\u8c03\u8bd5\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6216\u5408\u96c6",id:"\u8fd0\u884c\u548c\u8c03\u8bd5\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6216\u5408\u96c6",level:3},{value:"\u8fd0\u884c\u5168\u90e8\u6d4b\u8bd5\u7528\u4f8b",id:"\u8fd0\u884c\u5168\u90e8\u6d4b\u8bd5\u7528\u4f8b",level:3},{value:"6. \u63d0\u4ea4\u4ee3\u7801",id:"6-\u63d0\u4ea4\u4ee3\u7801",level:2},{value:"7.\u7f16\u5199\u6587\u6863",id:"7\u7f16\u5199\u6587\u6863",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"\u7248\u672c\u8981\u6c42",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Node.js 16+, npm 8+")),(0,l.kt)("h2",{id:"1-fork-\u4ed3\u5e93"},"1. fork \u4ed3\u5e93"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/fork"},"\u6253\u5f00 alova \u4ed3\u5e93 fork \u9875"),"\uff0c\u70b9\u51fb\u201cCreate fork\u201dfork \u4ed3\u5e93\uff0c\u5e76\u5c06\u5df2 fork \u7684\u4ed3\u5e93\u514b\u9686\u5230\u672c\u5730\u3002"),(0,l.kt)("h2",{id:"2-\u514b\u9686\u9879\u76ee\u5230\u672c\u5730"},"2. \u514b\u9686\u9879\u76ee\u5230\u672c\u5730"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"git clone"),"\u547d\u4ee4\uff0c\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"Github Desktop"),"\u5e94\u7528\u514b\u9686\u9879\u76ee\u3002"),(0,l.kt)("h2",{id:"3-\u65b0\u5efa-pull-request"},"3. \u65b0\u5efa pull request"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5148\u968f\u4fbf\u4fee\u6539\u4e00\u4e9b\u4ec0\u4e48\u5e76\u63d0\u4ea4\uff0c\u7136\u540e\u65b0\u5efa pull request \u5e76\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"close #xxx"),"\u6765\u5173\u8054\u6b63\u5728\u89e3\u51b3\u7684 issue\uff0c\u8fd9\u5c06\u8868\u793a\u4f60\u5df2\u5360\u6709\u8be5 issue\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork"},"\u5982\u4f55\u901a\u8fc7 fork \u4ed3\u5e93\u521b\u5efa pull request"),"\u5728\u8fd9\u91cc\u3002"),(0,l.kt)("h2",{id:"4-\u5728\u672c\u5730\u7f16\u7801"},"4. \u5728\u672c\u5730\u7f16\u7801"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"npm install"),"\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u63a8\u8350\u63d2\u4ef6vscode"},"\u5b89\u88c5\u63a8\u8350\u63d2\u4ef6\uff08vscode\uff09"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 vscode\uff0c\u5c06\u4f1a\u63a8\u8350\u4f60\u5b89\u88c5\u4ee5\u4e0b\u63d2\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eslint\uff1a\u68c0\u67e5\u4ee3\u7801\u8d28\u91cf"),(0,l.kt)("li",{parentName:"ul"},"prettier\uff1a\u683c\u5f0f\u5316\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"jest\uff1a\u81ea\u52a8\u6267\u884c\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4ee5\u53ca\u6267\u884c\u5355\u4e2a\u5408\u96c6\u6216\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"EditorConfig\uff1a\u4fdd\u8bc1\u6587\u4ef6\u683c\u5f0f\u4e00\u81f4")),(0,l.kt)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"|-.github\n| |-ISSUE_TEMPLATE -> github issues\u6a21\u677f\n| |-workflows -> github action\n|-.husky -> husky\u914d\u7f6e\n|-.vscode -> vscode\u914d\u7f6e\n|-config -> rollup\u6253\u5305\u6587\u4ef6\n|-src -> \u6e90\u4ee3\u7801\n|-test -> \u5355\u5143\u6d4b\u8bd5\n| |-browser -> \u6d4f\u89c8\u5668\u73af\u5883\u5355\u5143\u6d4b\u8bd5\n| |-server -> SSR\u5355\u5143\u6d4b\u8bd5\n| |-components -> \u5355\u5143\u6d4b\u8bd5\u7ec4\u4ef6\n| |-mockServer.ts -> mock\u63a5\u53e3\uff08msw\uff09\n|-typings -> ts\u7c7b\u578b\u58f0\u660e\n|-\u5176\u4ed6\u914d\u7f6e\u6587\u4ef6\n\n")),(0,l.kt)("h3",{id:"\u7f16\u7801\u89c4\u8303"},"\u7f16\u7801\u89c4\u8303"),(0,l.kt)("h4",{id:"\u4ee3\u7801\u683c\u5f0f"},"\u4ee3\u7801\u683c\u5f0f"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5b89\u88c5\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"prettier"),"\u63d2\u4ef6\uff0c\u5728\u6bcf\u6b21\u4fdd\u5b58\u6587\u4ef6\u65f6\u4f1a\u81ea\u52a8\u8fdb\u884c\u683c\u5f0f\u5316\u4ee3\u7801\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u4e0d\u5fc5\u5728\u610f\u683c\u5f0f\u7684\u95ee\u9898\u3002"),(0,l.kt)("h4",{id:"\u5c3d\u91cf\u51cf\u5c11\u4ee3\u7801"},"\u5c3d\u91cf\u51cf\u5c11\u4ee3\u7801"),(0,l.kt)("p",null,"alova \u7684\u7279\u6027\u4e4b\u4e00\u662f\u8f7b\u91cf\u5316\uff0c\u56e0\u6b64\u5728\u7f16\u7801\u65f6\u9700\u8981\u5c3d\u91cf\u51cf\u5c11\u7f16\u7801\u91cf\uff0c\u8fd9\u91cc\u6709\u51e0\u4e2a\u9700\u8981\u9075\u5faa\u7684\u7f16\u7801\u89c4\u8303\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u907f\u514d\u51fa\u73b0\u76f8\u540c\u7684\u4ee3\u7801\u5757\uff0c\u8fd9\u53ef\u4ee5\u51cf\u5c11\u5e93\u7684\u4ee3\u7801\u91cf\uff0c\u4f46\u4e24\u884c\u4ee3\u7801\u53ef\u80fd\u5c31\u4e0d\u503c\u5f97\u5c01\u88c5\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e00\u4e2a\u53d8\u91cf\u58f0\u660e\u7b26\u805a\u5408\u53d8\u91cf\u7684\u58f0\u660e\uff0c\u4f8b\u5982\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u274c\nconst a = 1;\nconst b = 2;\n\n// \u2705\nconst a = 1,\n  b = 2;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5e38\u91cf\u4fdd\u5b58\u56fa\u5b9a\u503c\u3001\u539f\u578b\u65b9\u6cd5\uff0c\u5728\u7f16\u8bd1",(0,l.kt)("inlineCode",{parentName:"li"},"uglify"),"\u9636\u6bb5\u51cf\u5c11\u4ee3\u7801\u91cf\u3002\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"src/utils/variables.ts"),"\u4e2d\u5b9a\u4e49\u4e86\u5e38\u7528\u7684\u56fa\u5b9a\u503c\u548c\u539f\u578b\u65b9\u6cd5\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u274c\nif (a === false) {\n  // ...\n}\narr.forEach(item => {\n  // ...\n});\n\n// \u2705\nimport { falseValue, forEach } from '@/utils/variables';\nif (a === falseValue) {\n  // ...\n}\nforEach(arr, item => {\n  // ...\n});\n")),(0,l.kt)("h2",{id:"5-\u5355\u5143\u6d4b\u8bd5\u6307\u5357"},"5. \u5355\u5143\u6d4b\u8bd5\u6307\u5357"),(0,l.kt)("p",null,"\u7f16\u5199\u5b8c\u4ee3\u7801\u540e\uff0c\u6dfb\u52a0\u5bf9\u5e94\u7684\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5c3d\u91cf\u5305\u542b\u8fb9\u7f18\u60c5\u51b5\u7684\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"alova \u9879\u76ee\u4f7f\u7528 jest \u4f5c\u4e3a\u5355\u5143\u6d4b\u8bd5\u6846\u67b6\uff0c\u4f7f\u7528 msw \u4f5c\u4e3a\u6a21\u62df\u670d\u52a1\u5668\u3002\u5efa\u8bae\u4f7f\u7528 TDD \u6a21\u5f0f\u3002\u6bcf\u6b21\u4fee\u6539\u4ee3\u7801\u540e\uff0c\u8fd0\u884c\u5bf9\u5e94\u7684\u5355\u5143\u6d4b\u8bd5\u5e76\u901a\u8fc7\u5b83\u3002"),(0,l.kt)("admonition",{title:"\u91cd\u8981",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u51c6\u5907\u63d0\u4ea4\u4ee3\u7801\u65f6\uff0c\u8bf7\u786e\u4fdd\u901a\u8fc7\u4e86\u5168\u90e8\u5355\u5143\u6d4b\u8bd5\uff0c\u5f53\u60a8\u5904\u7406 pull request \u65f6\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u5c0f\u63d0\u4ea4\uff0cGitHub \u53ef\u4ee5\u5728\u5408\u5e76\u4e4b\u524d\u81ea\u52a8\u538b\u7f29\u5b83\u4eec\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u6d4f\u89c8\u5668\u76f8\u5173\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8bf7\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"test/browser"),"\u4e2d\u5bf9\u5e94\u7684\u6d4b\u8bd5\u5408\u96c6\uff0c\u5982\u679c\u6ca1\u6709\u5408\u9002\u7684\u6d4b\u8bd5\u5408\u96c6\u53ef\u81ea\u884c\u521b\u5efa\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 SSR \u76f8\u5173\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8bf7\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"test/server"),"\u4e2d\u5bf9\u5e94\u7684\u6d4b\u8bd5\u5408\u96c6\uff0c\u5982\u679c\u6ca1\u6709\u5408\u9002\u7684\u6d4b\u8bd5\u5408\u96c6\u53ef\u81ea\u884c\u521b\u5efa\uff1b")),(0,l.kt)("h3",{id:"\u8fd0\u884c\u548c\u8c03\u8bd5\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6216\u5408\u96c6"},"\u8fd0\u884c\u548c\u8c03\u8bd5\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6216\u5408\u96c6"),(0,l.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"jest"),"\u63d2\u4ef6\uff08\u4e0a\u9762\u63a8\u8350\u7684\u63d2\u4ef6\u4e4b\u4e00\uff09\u5bf9\u5355\u4e2a\u7528\u4f8b\u6216\u5408\u96c6\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4f60\u53ef\u4ee5\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u53f3\u952e\u70b9\u51fb\u8fd0\u884c\u6307\u5b9a\u7684\u7528\u4f8b\uff0c\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"p"},"Run Test"),"\u8fd0\u884c\u6b64\u6d4b\u8bd5\u7528\u4f8b\uff0c\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"p"},"Debug Test"),"\u65ad\u70b9\u8c03\u8bd5\u6b64\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5982\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/alovajs/alova/assets/29848971/a94ba9db-c100-472f-b870-6bcecb031bea",alt:"image"})),(0,l.kt)("h3",{id:"\u8fd0\u884c\u5168\u90e8\u6d4b\u8bd5\u7528\u4f8b"},"\u8fd0\u884c\u5168\u90e8\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,l.kt)("strong",{parentName:"li"},"jest"),"\u63d2\u4ef6\u8fd0\u884c\uff0c\u5982\u4e0b\u56fe\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/alovajs/alova/assets/29848971/5af3ff15-16b7-4b28-9ae6-d0b5a236b181",alt:"image"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u547d\u4ee4\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"npm run test:browser"),"\u8fd0\u884c\u6d4f\u89c8\u5668\u5355\u5143\u6d4b\u8bd5\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"npm run test:node"),"\u8fd0\u884c SSR \u5355\u5143\u6d4b\u8bd5\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"npm run test"),"\u540c\u65f6\u8fd0\u884c\u4e24\u8005\u3002")),(0,l.kt)("h2",{id:"6-\u63d0\u4ea4\u4ee3\u7801"},"6. \u63d0\u4ea4\u4ee3\u7801"),(0,l.kt)("p",null,"alova \u4f7f\u7528\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://semantic-release.gitbook.io"},"semantic-release")," \u4f5c\u4e3a\u81ea\u52a8\u53d1\u5e03\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u5728\u5408\u5e76\u4ee3\u7801\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\u540e\u81ea\u52a8\u53d1\u5e03\u65b0\u7248\u672c\u5305\uff0c\u4ee5\u53ca\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"CHANGELOG"),"\uff0c\u4f46\u9700\u8981\u786e\u4fdd\u63d0\u4ea4\u7684\u6d88\u606f\u683c\u5f0f\u9075\u5faa",(0,l.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/zh-hans/v1.0.0/"},"\u63d0\u4ea4\u4fe1\u606f\u7ea6\u5b9a"),"\uff0c\u5efa\u8bae\u4f60\u5c3d\u91cf\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"npm run commit"),"\u6765\u81ea\u52a8\u751f\u6210\u7b26\u5408\u89c4\u8303\u7684 git message\u3002"),(0,l.kt)("h2",{id:"7\u7f16\u5199\u6587\u6863"},"7.\u7f16\u5199\u6587\u6863"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6b63\u5728\u6dfb\u52a0\u65b0\u7279\u6027\uff0c\u53ef\u5c1d\u8bd5\u6dfb\u52a0\u65b0\u7279\u6027\u7684\u76f8\u5173\u6587\u6863\u8bf4\u660e\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"/contributing/overview#%E6%9B%B4%E6%AD%A3%E6%88%96%E7%BC%96%E5%86%99%E6%96%87%E6%A1%A3"},"\u66f4\u6b63\u6216\u7f16\u5199\u6587\u6863"),"\uff0c\u5426\u5219\u8bf7\u5728 pull request \u4e2d\u8bf4\u660e\u3002"))}m.isMDXComponent=!0}}]);