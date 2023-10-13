"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,u(u({ref:t},p),{},{components:a})):n.createElement(k,u({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,u[1]=i;for(var s=2;s<l;s++)u[s]=a[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),u=a(2466),i=a(6550),o=a(1980),s=a(7392),p=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[u,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,s]=k({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),N=(()=>{const e=o??d;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var N=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==i&&(d(t),o(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:u}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},u,{className:(0,l.Z)("tabs__item",h.tabItem,u?.className,{"tabs__item--active":i===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(f,(0,n.Z)({},e,t)))}function y(e){const t=(0,N.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},1575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),u=a(5162);const i={title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",sidebar_position:80},o=void 0,s={unversionedId:"tutorial/strategy/actionDelegationMiddleware",id:"tutorial/strategy/actionDelegationMiddleware",title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",description:"\u4e2d\u95f4\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-strategy/08-actionDelegationMiddleware.md",sourceDirName:"tutorial/07-strategy",slug:"/tutorial/strategy/actionDelegationMiddleware",permalink:"/zh-CN/tutorial/strategy/actionDelegationMiddleware",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/08-actionDelegationMiddleware.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u9a8c\u8bc1\u7801",permalink:"/zh-CN/tutorial/strategy/useCaptcha"},next:{title:"\u4e32\u884c\u8bf7\u6c42\u7684useRequest",permalink:"/zh-CN/tutorial/strategy/useSerialRequest"}},p={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570",id:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570",level:3},{value:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868",id:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868",level:2},{value:"useRequest",id:"userequest",level:3},{value:"useWatcher",id:"usewatcher",level:3},{value:"useFetcher",id:"usefetcher",level:3},{value:"usePagination",id:"usepagination",level:3},{value:"useSQRequest",id:"usesqrequest",level:3},{value:"useForm",id:"useform",level:3},{value:"useCaptcha",id:"usecaptcha",level:3},{value:"useRetriableRequest",id:"useretriablerequest",level:3},{value:"useSerialRequest",id:"useserialrequest",level:3},{value:"useSerialWatcher",id:"useserialwatcher",level:3}],m={toc:d},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u7b56\u7565\u7c7b\u578b",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e2d\u95f4\u4ef6")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"\u4ece\u524d\uff0c\u5728\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u60f3\u8981\u89e6\u53d1\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u7684\u8bf7\u6c42\uff0c\u4f60\u9700\u8981\u5c06\u6570\u636e\u4fdd\u5b58\u5230 Store \u4e2d\uff0c\u901a\u8fc7\u5206\u53d1 Action \u5b8c\u6210\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u4e2d\u95f4\u4ef6",(0,r.kt)("strong",{parentName:"p"},"\u6d88\u9664\u7ec4\u4ef6\u5c42\u7ea7\u7684\u9650\u5236"),"\uff0c\u5728\u4efb\u610f\u7ec4\u4ef6\u4e2d\u5feb\u901f\u5730\u89e6\u53d1\u4efb\u610f\u8bf7\u6c42\u7684\u64cd\u4f5c\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u67d0\u4e2a\u7ec4\u4ef6\u4e2d\u66f4\u65b0\u4e86\u83dc\u5355\u6570\u636e\u540e\uff0c\u91cd\u65b0\u89e6\u53d1\u4fa7\u8fb9\u83dc\u5355\u680f\u7684\u91cd\u65b0\u8bf7\u6c42\uff0c\u4ece\u800c\u5237\u65b0\u6570\u636e\u3002\u5f53\u64cd\u4f5c\u4e86\u5217\u8868\u6570\u636e\u540e\uff0c\u89e6\u53d1\u5217\u8868\u66f4\u65b0\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../example/action-delegation-middleware"},"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42 Demo")),(0,r.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2728 \u59d4\u6258\u4efb\u610f alova \u4e2d\u7684 use hook \u7684\u64cd\u4f5c\u51fd\u6570\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728 \u4efb\u610f\u4f4d\u7f6e\u89e6\u53d1\u5df2\u59d4\u6258\u7684\u64cd\u4f5c\u51fd\u6570\uff1b")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(l.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-vue --save\n# yarn\nyarn add @alova/scene-vue\n\n"))),(0,r.kt)(u.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-react --save\n# yarn\nyarn add @alova/scene-react\n\n"))),(0,r.kt)(u.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-svelte --save\n# yarn\nyarn add @alova/scene-svelte\n\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u5728 react\u3001svelte \u4e2d\u7528\u6cd5\u76f8\u540c\u3002")),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6 A \u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"actionDelegationMiddleware"),"\u59d4\u6258",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u7684\u64cd\u4f5c\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=\u7ec4\u4ef6A",title:"\u7ec4\u4ef6A"},"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('actionName')\n});\n")),(0,r.kt)("p",null,"\u5728\u4efb\u610f\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\uff08\u5982\u7ec4\u4ef6 B\uff09\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"accessAction"),"\u4f20\u5165\u6307\u5b9a\u7684\u59d4\u6258\u540d\u79f0\u89e6\u53d1\u7ec4\u4ef6 A \u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u7684\u64cd\u4f5c\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=\u7ec4\u4ef6B",title:"\u7ec4\u4ef6B"},"import { accessAction } from '@alova/scene-vue';\n\naccessAction('actionName', delegatedActions => {\n  // \u8c03\u7528\u7ec4\u4ef6A\u4e2d\u7684send\u51fd\u6570\n  delegatedActions.send();\n\n  // \u8c03\u7528\u7ec4\u4ef6A\u4e2d\u7684abort\u51fd\u6570\n  delegatedActions.abort();\n});\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"alova \u5185\u7684\u5168\u90e8 use hook \u90fd\u652f\u6301\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\uff0c\u4f46\u4e0d\u540c\u7684 use hook \u6240\u59d4\u6258\u7684\u51fd\u6570\u6709\u6240\u4e0d\u540c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"actionDelegationMiddleware"),"\u65f6\uff0c\u59d4\u6258\u540d\u79f0\u53ef\u4f20\u5165\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u3001symbol \u503c\u3002"))),(0,r.kt)("h3",{id:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570"},"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"accessAction"),"\u89e6\u53d1\u4e86\u4e00\u4e2a use hook \u7684\u64cd\u4f5c\u51fd\u6570\uff0c\u4f46\u5b9e\u9645\u4e0a\uff0c\u76f8\u540c\u540d\u79f0\u7684\u59d4\u6258\u4e0d\u4f1a\u4e92\u76f8\u8986\u76d6\uff0c\u800c\u662f\u4f1a\u4fdd\u5b58\u5728\u4e00\u7ec4\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u540d\u79f0\u540c\u65f6\u89e6\u53d1\u5b83\u4eec\u59d4\u6258\u7684\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=\u7ec4\u4ef6C",title:"\u7ec4\u4ef6C"},"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('actionName1')\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=\u7ec4\u4ef6D",title:"\u7ec4\u4ef6D"},"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('actionName1')\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=\u7ec4\u4ef6E",title:"\u7ec4\u4ef6E"},"import { accessAction } from '@alova/scene-vue';\n\n// \u56e0\u4e3a\u5c06\u4f1a\u5339\u914d\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u7684\u59d4\u6258hook\uff0c\u56e0\u6b64\u56de\u8c03\u51fd\u6570\u5c06\u88ab\u6267\u884c\u4e24\u6b21\naccessAction('actionName1', delegatedActions => {\n  // \u8c03\u7528\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u4e2d\u7684send\u51fd\u6570\n  delegatedActions.send();\n\n  // \u8c03\u7528\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u4e2d\u7684abort\u51fd\u6570\n  delegatedActions.abort();\n});\n")),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u8fd8\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"accessAction"),"\u4e2d\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u6279\u91cf\u89e6\u53d1\u59d4\u6258\u540d\u79f0\u6ee1\u8db3\u6761\u4ef6\u7684\u64cd\u4f5c\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=\u7ec4\u4ef6F",title:"\u7ec4\u4ef6F"},"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('prefix_name1')\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=\u7ec4\u4ef6G",title:"\u7ec4\u4ef6G"},"import { actionDelegationMiddleware } from '@alova/scene-vue';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('prefix_name2')\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=\u7ec4\u4ef6H",title:"\u7ec4\u4ef6H"},"import { accessAction } from '@alova/scene-vue';\n\n// \u56e0\u4e3a\u5c06\u4f1a\u5339\u914d\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u7684\u59d4\u6258hook\uff0c\u56e0\u6b64\u56de\u8c03\u51fd\u6570\u5c06\u88ab\u6267\u884c\u4e24\u6b21\naccessAction(/^prefix_/, delegatedActions => {\n  // \u8c03\u7528\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u4e2d\u7684send\u51fd\u6570\n  delegatedActions.send();\n\n  // \u8c03\u7528\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u4e2d\u7684abort\u51fd\u6570\n  delegatedActions.abort();\n});\n")),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868"},"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868"),(0,r.kt)("p",null,"\u5c3d\u7ba1\u5927\u90e8\u5206 hook \u59d4\u6258\u7684\u64cd\u4f5c\u51fd\u6570\u4e0e\u5b83\u672c\u8eab\u5e26\u6709\u7684\u64cd\u4f5c\u51fd\u6570\u76f8\u540c\uff0c\u4f46\u8fd9\u4e0d\u662f\u7edd\u5bf9\u7684\uff0c\u4ee5\u4e0b\u662f\u6bcf\u4e2a hook \u7684\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868\u3002"),(0,r.kt)("h3",{id:"userequest"},"useRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".send \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".abort \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".update \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"usewatcher"},"useWatcher"),(0,r.kt)("p",null,"\u4e0e",(0,r.kt)("a",{parentName:"p",href:"#userequest"},"useRequest \u59d4\u6258\u5217\u8868"),"\u76f8\u540c\u3002"),(0,r.kt)("h3",{id:"usefetcher"},"useFetcher"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fetch"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-fetcher"},"useFetcher"),".fetch \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-fetcher"},"useFetcher"),".abort \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-fetcher"},"useFetcher"),".update \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"usepagination"},"usePagination"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refresh"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/usePagination#api"},"usePagination \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"insert"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/usePagination#api"},"usePagination \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remove"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/usePagination#api"},"usePagination \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/usePagination#api"},"usePagination \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reload"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/usePagination#api"},"usePagination \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/usePagination#api"},"usePagination \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getState"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u540d\u79f0\u83b7\u53d6\u5206\u9875\u76f8\u5173\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},"stateKey: 'page' ","|"," 'pageSize' ","|"," 'data' ","|"," 'pageCount' ","|"," 'total' ","|"," 'isLastPage'"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5e94 statekey \u7684\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"usesqrequest"},"useSQRequest"),(0,r.kt)("p",null,"\u4e0e",(0,r.kt)("a",{parentName:"p",href:"#userequest"},"useRequest \u59d4\u6258\u5217\u8868"),"\u76f8\u540c\u3002"),(0,r.kt)("h3",{id:"useform"},"useForm"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updateForm"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/useForm#api"},"useForm \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/useForm#api"},"useForm \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".send \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".abort \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".update \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"usecaptcha"},"useCaptcha"),(0,r.kt)("p",null,"\u4e0e",(0,r.kt)("a",{parentName:"p",href:"#userequest"},"useRequest \u59d4\u6258\u5217\u8868"),"\u76f8\u540c\u3002"),(0,r.kt)("h3",{id:"useretriablerequest"},"useRetriableRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stop"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"../strategy/useRetriableRequest#api"},"useRetriableRequest \u64cd\u4f5c\u51fd\u6570")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".send \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".abort \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"../learning/use-request"},"useRequset"),".update \u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"useserialrequest"},"useSerialRequest"),(0,r.kt)("p",null,"\u4e0e",(0,r.kt)("a",{parentName:"p",href:"#userequest"},"useRequest \u59d4\u6258\u5217\u8868"),"\u76f8\u540c\u3002"),(0,r.kt)("h3",{id:"useserialwatcher"},"useSerialWatcher"),(0,r.kt)("p",null,"\u4e0e",(0,r.kt)("a",{parentName:"p",href:"#userequest"},"useRequest \u59d4\u6258\u5217\u8868"),"\u76f8\u540c\u3002"))}k.isMDXComponent=!0}}]);