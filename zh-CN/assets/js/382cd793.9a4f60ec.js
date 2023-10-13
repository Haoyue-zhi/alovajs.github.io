"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,u(u({ref:t},c),{},{components:a})):r.createElement(f,u({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,u[1]=s;for(var i=2;i<l;i++)u[i]=a[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(7462),n=a(7294),l=a(6010),u=a(2466),s=a(6550),o=a(1980),i=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[u,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,i]=f({queryString:a,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),v(e)}),[i,v,l]),tabValues:l}}var b=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==s&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",h.tabItem,u?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=v(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},1012:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),u=a(5162);const s={title:"\u4e32\u884c\u8bf7\u6c42\u7684useRequest",sidebar_position:90},o=void 0,i={unversionedId:"tutorial/strategy/useSerialRequest",id:"tutorial/strategy/useSerialRequest",title:"\u4e32\u884c\u8bf7\u6c42\u7684useRequest",description:"use hook",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-strategy/09-useSerialRequest.md",sourceDirName:"tutorial/07-strategy",slug:"/tutorial/strategy/useSerialRequest",permalink:"/zh-CN/tutorial/strategy/useSerialRequest",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/09-useSerialRequest.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"\u4e32\u884c\u8bf7\u6c42\u7684useRequest",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",permalink:"/zh-CN/tutorial/strategy/actionDelegationMiddleware"},next:{title:"\u4e32\u884c\u8bf7\u6c42\u7684useWatcher",permalink:"/zh-CN/tutorial/strategy/useSerialWatcher"}},c={},p=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u8bf7\u6c42\u9519\u8bef",id:"\u8bf7\u6c42\u9519\u8bef",level:3},{value:"API",id:"api",level:2},{value:"Hook \u914d\u7f6e",id:"hook-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u5f0f\u6570\u636e",id:"\u54cd\u5e94\u5f0f\u6570\u636e",level:3},{value:"\u64cd\u4f5c\u51fd\u6570",id:"\u64cd\u4f5c\u51fd\u6570",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"\u7b56\u7565\u7c7b\u578b",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"use hook")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002")),(0,n.kt)("p",null,"\u8fd9\u4e2a use hook \u6bd4",(0,n.kt)("a",{parentName:"p",href:"../next-step/serial-request"},"alova \u7684\u4e32\u884c\u8bf7\u6c42\u65b9\u5f0f"),"\u66f4\u52a0\u7b80\u6d01\u6613\u7528\uff0c\u7edf\u4e00\u7684 loading \u72b6\u6001\u3001error\u3001\u56de\u8c03\u51fd\u6570\u3002"),(0,n.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2728 \u66f4\u52a0\u7b80\u6d01\u6613\u7528\u7684\u4e32\u884c\u65b9\u5f0f\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u2728 \u7edf\u4e00\u7684\u8bf7\u6c42\u72b6\u6001\u548c\u56de\u8c03\u51fd\u6570\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u2728 send \u51fd\u6570\u53ef\u89e6\u53d1\u591a\u4e2a\u8bf7\u6c42\u4e32\u884c\u6267\u884c\uff1b")),(0,n.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../example/serial-request"},"\u4e32\u884c\u8bf7\u6c42")),(0,n.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)(l.Z,{groupId:"framework",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-vue --save\n# yarn\nyarn add @alova/scene-vue\n\n"))),(0,n.kt)(u.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-react --save\n# yarn\nyarn add @alova/scene-react\n\n"))),(0,n.kt)(u.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @alova/scene-svelte --save\n# yarn\nyarn add @alova/scene-svelte\n\n")))),(0,n.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,n.kt)("p",null,"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u7684\u7528\u6cd5\u4e00\u6837\uff0c\u53ea\u662f\u7b2c\u4e00\u4e2a\u53c2\u6570\u6539\u53d8\u6210\u4e86\u4e00\u4e2a\u4e32\u884c\u6267\u884c\u7684 handler \u6570\u7ec4\uff0c\u6bcf\u4e2a handler \u5c06\u63a5\u6536\u4e0a\u4e00\u4e2a\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // \u4e32\u884c\u52a0\u8f7d\u72b6\u6001\uff0c\u5168\u90e8\u8bf7\u6c42\u5b8c\u6210\u624d\u4f1a\u6539\u4e3afalse\n  loading,\n\n  // \u6700\u540e\u4e00\u4e2a\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\n  data,\n\n  // \u4efb\u610f\u4e00\u4e2a\u8bf7\u6c42\u9519\u8bef\u90fd\u5c06\u5728\u8fd9\u8bb0\u5f55\u9519\u8bef\u4fe1\u606f\n  error,\n\n  // \u624b\u52a8\u53d1\u9001\u4e32\u884c\u8bf7\u6c42\n  send,\n\n  // \u4e32\u884c\u8bf7\u6c42\u6210\u529f\u56de\u8c03\u7ed1\u5b9a\u51fd\u6570\n  onSuccess,\n\n  // \u4e32\u884c\u8bf7\u6c42\u9519\u8bef\u56de\u8c03\u7ed1\u5b9a\u51fd\u6570\uff0c\u4efb\u610f\u4e00\u4e2a\u8bf7\u6c42\u9519\u8bef\u90fd\u5c06\u89e6\u53d1\u5b83\n  onError,\n\n  // \u4e32\u884c\u8bf7\u6c42\u5b8c\u6210\u56de\u8c03\u7ed1\u5b9a\u51fd\u6570\n  onComplete\n} = useSerialRequest(\n  [\n    // args\u4e3asend\u51fd\u6570\u4f20\u5165\u7684\u53c2\u6570\n    (...args) => request1(args),\n\n    // \u4ece\u7b2c\u4e8c\u4e2ahandler\u5f00\u59cb\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u4e0a\u4e00\u4e2a\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\uff0cargs\u4ece\u7b2c\u4e8c\u4e2a\u5f00\u59cb\u63a5\u6536\n    (response1, ...args) => request2(response1, args),\n    (response2, ...args) => request3(response2, args)\n  ],\n  {\n    immediate: false\n  }\n);\n\n// \u624b\u52a8\u89e6\u53d1\u8bf7\u6c42\u5e76\u4f20\u53c2\nsend(1, 2, 3);\n")),(0,n.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0chandler \u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u9879\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e3a\u4e00\u4e2a method \u5b9e\u4f8b\uff0c\u4ece\u7b2c\u4e8c\u9879\u5f00\u59cb\u5fc5\u987b\u4e3a\u51fd\u6570\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"useSerialRequest([\n  methodInstance,\n  (response1, ...args) => request2(response1, args),\n  (response2, ...args) => request3(response2, args)\n]);\n")),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u9519\u8bef"},"\u8bf7\u6c42\u9519\u8bef"),(0,n.kt)("p",null,"\u4e32\u884c\u8bf7\u6c42\u4efb\u610f\u4e00\u4e2a\u8bf7\u6c42\u9519\u8bef\u65f6\uff0c\u5c06\u4f1a\u89e6\u53d1",(0,n.kt)("inlineCode",{parentName:"p"},"onError"),"\uff0c\u5b83\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"event.method"),"\u5c06\u6307\u5411\u8bf7\u6c42\u9519\u8bef\u7684 method \u5b9e\u4f8b\u3002"),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"hook-\u914d\u7f6e"},"Hook \u914d\u7f6e"),(0,n.kt)("p",null,"\u7ee7\u627f",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"\u6240\u6709\u914d\u7f6e\u3002"),(0,n.kt)("h3",{id:"\u54cd\u5e94\u5f0f\u6570\u636e"},"\u54cd\u5e94\u5f0f\u6570\u636e"),(0,n.kt)("p",null,"\u7ee7\u627f",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"\u6240\u6709\u54cd\u5e94\u5f0f\u6570\u636e\u3002"),(0,n.kt)("h3",{id:"\u64cd\u4f5c\u51fd\u6570"},"\u64cd\u4f5c\u51fd\u6570"),(0,n.kt)("p",null,"\u7ee7\u627f",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"\u6240\u6709\u64cd\u4f5c\u51fd\u6570\u3002"),(0,n.kt)("h3",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u7ee7\u627f",(0,n.kt)("a",{parentName:"p",href:"../learning/use-request#api"},(0,n.kt)("strong",{parentName:"a"},"useRequest")),"\u6240\u6709\u4e8b\u4ef6\u3002"))}f.isMDXComponent=!0}}]);