"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},1651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e",sidebar_position:90},i=void 0,u={unversionedId:"tutorial/learning/cache-set-and-query",id:"tutorial/learning/cache-set-and-query",title:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e",description:"\u6709\u4e9b\u670d\u52a1\u63a5\u53e3\u652f\u6301\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u5b83\u610f\u5473\u7740\u603b\u662f\u7531\u4e0d\u786e\u5b9a\u7684\u82e5\u5e72\u7ec4\u54cd\u5e94\u6570\u636e\u7ec4\u6210\uff0c\u5f53\u6211\u4eec\u60f3\u8981\u5728\u521d\u59cb\u5316\u9875\u9762\u65f6\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u7136\u540e\u5728\u4ea4\u4e92\u4e2d\u53ea\u8bf7\u6c42\u5355\u6761\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u9020\u6210\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-learning/09-cache-set-and-query.md",sourceDirName:"tutorial/03-learning",slug:"/tutorial/learning/cache-set-and-query",permalink:"/zh-CN/tutorial/learning/cache-set-and-query",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-learning/09-cache-set-and-query.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u52a8\u5931\u6548\u54cd\u5e94\u7f13\u5b58",permalink:"/zh-CN/tutorial/learning/invalidate-response-cache"},next:{title:"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001",permalink:"/zh-CN/tutorial/learning/update-response-data-across-modules"}},c={},d=[{value:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",id:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",level:2},{value:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e",id:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e",level:2},{value:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",id:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",level:2},{value:"\u7f13\u5b58\u67e5\u8be2",id:"\u7f13\u5b58\u67e5\u8be2",level:2}],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6709\u4e9b\u670d\u52a1\u63a5\u53e3\u652f\u6301\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u5b83\u610f\u5473\u7740\u603b\u662f\u7531\u4e0d\u786e\u5b9a\u7684\u82e5\u5e72\u7ec4\u54cd\u5e94\u6570\u636e\u7ec4\u6210\uff0c\u5f53\u6211\u4eec\u60f3\u8981\u5728\u521d\u59cb\u5316\u9875\u9762\u65f6\u6279\u91cf\u8bf7\u6c42\u6570\u636e\uff0c\u7136\u540e\u5728\u4ea4\u4e92\u4e2d\u53ea\u8bf7\u6c42\u5355\u6761\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u9020\u6210\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u9700\u8981\u6309\u65e5\u671f\u83b7\u53d6 todo \u5217\u8868\u6570\u636e\uff0c\u5728\u521d\u59cb\u5316\u65f6\u4e00\u6b21\u8bf7\u6c42\u83b7\u53d6\u4e86 5 \u6708 1 \u65e5\u5230 5 \u65e5\uff0c5 \u5929\u7684\u6570\u636e\uff0c\u7136\u540e\u7528\u6237\u5728\u64cd\u4f5c\u65f6\u53c8\u83b7\u53d6\u4e86\u4e00\u6b21 5 \u6708 1 \u65e5\u7684\u6570\u636e\uff0c\u6b64\u65f6\u4e0d\u4f1a\u547d\u4e2d\u521d\u59cb\u5316\u65f6\u7684 5 \u6708 1 \u65e5\u6570\u636e\uff0c\u56e0\u4e3a\u521d\u59cb\u5316\u7684 5 \u5929\u6570\u636e\u662f\u5b58\u653e\u5728\u4e00\u8d77\u7684\uff0c\u800c\u4e0d\u662f\u5206\u5f00\u7f13\u5b58\u7684\uff0c\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u4e3a\u8fd9 5 \u5929\u7684\u6570\u636e\u76f8\u7ee7\u624b\u52a8\u521b\u5efa\u5355\u6761\u7684\u54cd\u5e94\u7f13\u5b58\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u89e3\u51b3\u5355\u6761\u6570\u636e\u8bf7\u6c42\u65f6\u7684\u7f13\u5b58\u7a7f\u900f\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"../learning/response-cache"},"\u7f13\u5b58\u6a21\u5f0f"),"\u4e2d\u6211\u4eec\u63d0\u5230\u8fc7\uff0c\u6bcf\u4efd\u7f13\u5b58\u6570\u636e\u662f\u4ee5\u53d1\u9001\u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u4f5c\u4e3a key \u8fdb\u884c\u4fdd\u5b58\u7684\uff0c\u56e0\u6b64\u5728\u624b\u52a8\u66f4\u65b0\u7f13\u5b58\u65f6\u4e5f\u5c06\u4f7f\u7528 method \u5b9e\u4f8b\u6765\u67e5\u627e\u5bf9\u5e94\u7684\u7f13\u5b58\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e"},"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <button @click=\"handleTodolistToggle\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n</template>\n<script setup>\n  import { setCache } from 'alova';\n  import { ref } from 'vue';\n\n  const getTodoListByDate = dateList =>\n    alovaInstance.Get('/todo/list/dates', {\n      params: { dateList }\n    });\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\n  const dates = ref(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\n  const {\n    // ...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate(dates.value.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(todoListDates => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u76f8\u7ee7\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n    todoListDates.forEach(todoDate => {\n      // setCache\u53c2\u6570\u8bf4\u660e\uff1a\n      // \u53c2\u65701\uff1amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n      // \u53c2\u65702\uff1a\u7f13\u5b58\u6570\u636e\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n    dates.value = ['2022-05-01'];\n  };\n  // highlight-end\n<\/script>\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { setCache } from 'alova';\nimport { useState } from 'react';\n\nconst getTodoListByDate = dateList =>\n  alovaInstance.Get('/todo/list/dates', {\n    params: { dateList }\n  });\n\nconst App = () => {\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\n  const [dates, setDates] = useState(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\n  const {\n    // ...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate(dates.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(todoListDates => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u4e00\u4e00\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n    // setCache\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f13\u5b58\u6570\u636e\n    todoListDates.forEach(todoDate => {\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n    setDates(['2022-05-01']);\n  };\n  // highlight-end\n\n  return <button onClick={handleTodolistToggle}>\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>;\n};\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  import { setCache } from 'alova';\n  import { writable } from 'svelte/store';\n\n  const getTodoListByDate = dateList =>\n    alovaInstance.Get('/todo/list/dates', {\n      params: { dateList }\n    });\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\n  const dates = writable(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\n  const {\n    // ...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate($dates.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(todoListDates => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u4e00\u4e00\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n    // setCache\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f13\u5b58\u6570\u636e\n    todoListDates.forEach(todoDate => {\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n    $dates = ['2022-05-01'];\n  };\n  // highlight-end\n<\/script>\n<button on:click=\"{handleTodolistToggle}\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n")))),(0,r.kt)("h2",{id:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e"},"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"setCache"),"\u4e2d\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u52a8\u6001\u8ba1\u7b97\u7f13\u5b58\u6570\u636e\uff0c\u5e76\u8fd4\u56de\u9700\u8981\u66f4\u65b0\u7684\u7f13\u5b58\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"setCache(getTodoListByDate('2022-10-01'), oldCache => {\n  // \u8fd4\u56de\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\n  return {\n    ...oldCache,\n    expire: isAfter('2022-10-01', new Date())\n  };\n});\n")),(0,r.kt)("p",null,"\u540c\u6837\u7684\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"../next-step/method-instance-matcher"},"method \u5b9e\u4f8b\u5339\u914d\u5668")," \u52a8\u6001\u67e5\u627e method \u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"setCache(\n  {\n    name: 'todoList',\n    filter: (method, index, ary) => {\n      return index < 5;\n    }\n  },\n  'newCache'\n);\n")),(0,r.kt)("h2",{id:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0"},"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u9700\u8981\u52a8\u6001\u5224\u65ad\u662f\u5426\u9700\u8981\u66f4\u65b0\u7f13\u5b58\uff0c\u5982\u679c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"setCache"),"\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u672a\u8fd4\u56de\u6570\u636e\uff0c\u6216\u8fd4\u56de\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u6b64\u65f6\u5c06\u4e0d\u66f4\u65b0\u539f\u7f13\u5b58\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"setCache(getTodoListByDate('2022-10-01'), oldCache => {\n  const isExpired = isAfter('2022-10-01', new Date());\n  if (!isExpired) {\n    return; // \u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0\n  }\n  return null; // \u5c06\u7f13\u5b58\u66f4\u65b0\u4e3anull\n});\n")),(0,r.kt)("h2",{id:"\u7f13\u5b58\u67e5\u8be2"},"\u7f13\u5b58\u67e5\u8be2"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u7f13\u5b58\u67e5\u8be2\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { queryCache } from 'alova';\n\nconst cacheData = queryCache(getTodoListByDate('2022-10-01'));\n")),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"../next-step/method-instance-matcher"},"method \u5b9e\u4f8b\u5339\u914d\u5668")," \u52a8\u6001\u67e5\u627e method \u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const cacheData = queryCache({\n  name: 'todoList',\n  filter: (method, index, ary) => {\n    return index < 5;\n  }\n});\n")))}m.isMDXComponent=!0}}]);