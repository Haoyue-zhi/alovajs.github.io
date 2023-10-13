"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),v=n,m=d["".concat(u,".").concat(v)]||d[v]||p[v]||l;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=v;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),u=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function v(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=u??d;return v({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!v({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var b=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(d(t),u(r))},v=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:v,onClick:p},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},9103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={title:"\u4e0e\u5176\u4ed6\u5e93\u6bd4\u8f83",sidebar_position:30},u=void 0,s={unversionedId:"tutorial/get-started/comparison",id:"tutorial/get-started/comparison",title:"\u4e0e\u5176\u4ed6\u5e93\u6bd4\u8f83",description:"\u4e0e axios \u5bf9\u6bd4",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/01-get-started/03-comparison.md",sourceDirName:"tutorial/01-get-started",slug:"/tutorial/get-started/comparison",permalink:"/zh-CN/tutorial/get-started/comparison",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/01-get-started/03-comparison.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u4e0e\u5176\u4ed6\u5e93\u6bd4\u8f83",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u8bf7\u6c42\u573a\u666f\u6a21\u578b\uff08RSM\uff09",permalink:"/zh-CN/tutorial/get-started/RSM"},next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/zh-CN/tutorial/get-started/quick-start"}},c={},d=[{value:"\u4e0e axios \u5bf9\u6bd4",id:"\u4e0e-axios-\u5bf9\u6bd4",level:2},{value:"alova \u4e3a axios \u63d0\u4f9b\u81ea\u52a8\u5316\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406",id:"alova-\u4e3a-axios-\u63d0\u4f9b\u81ea\u52a8\u5316\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406",level:3},{value:"alova \u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6027\u80fd\u8bf7\u6c42\u7b56\u7565",id:"alova-\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6027\u80fd\u8bf7\u6c42\u7b56\u7565",level:3},{value:"alova \u4e3a axios \u63d0\u4f9b\u54cd\u5e94\u6570\u636e\u7f13\u5b58",id:"alova-\u4e3a-axios-\u63d0\u4f9b\u54cd\u5e94\u6570\u636e\u7f13\u5b58",level:3},{value:"alova \u4e3a axios \u63d0\u4f9b\u8bf7\u6c42\u5171\u4eab\u529f\u80fd",id:"alova-\u4e3a-axios-\u63d0\u4f9b\u8bf7\u6c42\u5171\u4eab\u529f\u80fd",level:3},{value:"alova \u4e3a axios \u63d0\u4f9b\u6570\u636e\u9884\u62c9\u53d6",id:"alova-\u4e3a-axios-\u63d0\u4f9b\u6570\u636e\u9884\u62c9\u53d6",level:3},{value:"alova \u53ef\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001",id:"alova-\u53ef\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001",level:3},{value:"\u4e0e react-query\u3001swr \u5bf9\u6bd4",id:"\u4e0e-react-queryswr-\u5bf9\u6bd4",level:2},{value:"alova \u7684\u76ee\u6807\u4e0d\u540c",id:"alova-\u7684\u76ee\u6807\u4e0d\u540c",level:3},{value:"Method \u4ee3\u7406\u8bbe\u8ba1",id:"method-\u4ee3\u7406\u8bbe\u8ba1",level:3},{value:"\u9ad8\u7075\u6d3b\u6027",id:"\u9ad8\u7075\u6d3b\u6027",level:3},{value:"\u8f7b\u91cf\u5316",id:"\u8f7b\u91cf\u5316",level:3}],p={toc:d},v="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(v,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4e0e-axios-\u5bf9\u6bd4"},"\u4e0e axios \u5bf9\u6bd4"),(0,n.kt)("p",null,"axios \u63d0\u4f9b\u4e86\u57fa\u4e8e promise \u7684\u975e\u5e38\u7b80\u5355\u6613\u7528\u7684 HTTP \u8bf7\u6c42\u529f\u80fd\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u53d1\u9001\u548c\u63a5\u6536\u8bf7\u6c42\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u548c nodejs \u73af\u5883\u4e0b\u8fd0\u884c\uff0c\u662f\u4e00\u4e2a\u975e\u5e38\u4f18\u79c0\u7684\u8bf7\u6c42 js \u5e93\u3002"),(0,n.kt)("p",null,"\u4f46\u662f axios \u805a\u7126\u4e8e\u8bf7\u6c42\u53d1\u9001\u548c\u63a5\u6536\u54cd\u5e94\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u4f60\u9700\u8981\u81ea\u884c\u7f16\u5199\u66f4\u591a\u4ee3\u7801\u6765\u4e3b\u52a8\u4f18\u5316\u8bf7\u6c42\u529f\u80fd\uff0c\u800c alova \u50cf\u662f axios \u7684\u6b66\u5668\u88c5\u5907\uff0c\u5c06 axios \u4e0e alova \u7ec4\u5408\u4f7f\u7528\u53ef\u4ee5\u83b7\u5f97\u66f4\u5f3a\u5927\u7684\u8bf7\u6c42\u80fd\u529b\uff0c\u4ee5\u4e0b\u662f alova \u4e3a axios \u9644\u52a0\u7684\u8bf7\u6c42\u7ba1\u7406\u80fd\u529b\u3002"),(0,n.kt)("h3",{id:"alova-\u4e3a-axios-\u63d0\u4f9b\u81ea\u52a8\u5316\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406"},"alova \u4e3a axios \u63d0\u4f9b\u81ea\u52a8\u5316\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406"),(0,n.kt)("p",null,"\u4ec5\u4f7f\u7528 axios \u65f6\uff0c\u901a\u5e38\u9700\u8981\u4f60\u81ea\u884c\u7ef4\u62a4\u8bf7\u6c42\u76f8\u5173\u72b6\u6001\uff0c\u4f7f\u7528 alova \u7684 use hook \u540e\u53ef\u4ee5\u83b7\u5f97\u81ea\u52a8\u5316\u7684\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406\u80fd\u529b\u3002"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"1",label:"\u4ec5axios",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// vue3\u4ee3\u7801\u793a\u4f8b\nconst loading = ref(false);\nconst data = ref({});\nconst error = ref(null);\nconst request = async () => {\n  try {\n    loading.value = true;\n    data.value = await axios.get('/xxx');\n  } catch (e) {\n    error.value = e;\n  }\n  loading.value = false;\n};\nmounted(request);\n"))),(0,n.kt)(o.Z,{value:"2",label:"axios+alova",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5c06axios\u4f5c\u4e3aalova\u7684\u8bf7\u6c42\u9002\u914d\u5668\nconst { loading, data, error } = useRequest(alova.Get('/xxx'));\n")))),(0,n.kt)("h3",{id:"alova-\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6027\u80fd\u8bf7\u6c42\u7b56\u7565"},"alova \u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6027\u80fd\u8bf7\u6c42\u7b56\u7565"),(0,n.kt)("p",null,"alova \u4e3a\u4f60\u63d0\u4f9b\u4e86",(0,n.kt)("a",{parentName:"p",href:"/category/strategy"},"\u591a\u4e2a\u9ad8\u6027\u80fd\u7684\u8bf7\u6c42\u7b56\u7565\u6a21\u5757"),"\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u8bf7\u6c42\u573a\u666f\u4f7f\u7528\u4e0d\u540c\u7684\u6a21\u5757\uff0c\u8fd9\u662f axios \u4e0d\u5177\u5907\u7684\u3002"),(0,n.kt)("h3",{id:"alova-\u4e3a-axios-\u63d0\u4f9b\u54cd\u5e94\u6570\u636e\u7f13\u5b58"},"alova \u4e3a axios \u63d0\u4f9b\u54cd\u5e94\u6570\u636e\u7f13\u5b58"),(0,n.kt)("p",null,"alova \u5206\u522b\u63d0\u4f9b\u4e86 3 \u79cd\u7f13\u5b58\u6a21\u5f0f\u6765\u6ee1\u8db3\u4e0d\u540c\u7684\u7f13\u5b58\u573a\u666f\uff0c\u5206\u522b\u4e3a\u5185\u5b58\u6a21\u5f0f\u3001\u7f13\u5b58\u5360\u4f4d\u6a21\u5f0f\u3001\u6062\u590d\u6a21\u5f0f\u3002\u5b83\u4eec\u662f\u7ec4\u4ef6\u65e0\u5173\u7684\uff0c\u53ea\u8981\u8bf7\u6c42\u5730\u5740\u548c\u53c2\u6570\u76f8\u540c\u90fd\u53ef\u4ee5\u547d\u4e2d\u7f13\u5b58\uff0c\u9664\u975e\u4f60\u5173\u95ed\u4e86\u5b83\u3002\u54cd\u5e94\u6570\u636e\u7f13\u5b58\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u8bf7\u6c42\u6d41\u7545\u6027\uff0c\u964d\u4f4e\u670d\u52a1\u7aef\u538b\u529b\u3002"),(0,n.kt)("h3",{id:"alova-\u4e3a-axios-\u63d0\u4f9b\u8bf7\u6c42\u5171\u4eab\u529f\u80fd"},"alova \u4e3a axios \u63d0\u4f9b\u8bf7\u6c42\u5171\u4eab\u529f\u80fd"),(0,n.kt)("p",null,"\u8bf7\u6c42\u5171\u4eab\u5728\u540c\u65f6\u53d1\u9001\u591a\u4e2a\u76f8\u540c\u8bf7\u6c42\u65f6\uff0c\u5c06\u4f1a\u590d\u7528\u540c\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5b83\u4e5f\u53ef\u4ee5\u63d0\u5347\u5e94\u7528\u6d41\u7545\u6027\u548c\u964d\u4f4e\u670d\u52a1\u7aef\u538b\u529b\u3002"),(0,n.kt)("h3",{id:"alova-\u4e3a-axios-\u63d0\u4f9b\u6570\u636e\u9884\u62c9\u53d6"},"alova \u4e3a axios \u63d0\u4f9b\u6570\u636e\u9884\u62c9\u53d6"),(0,n.kt)("p",null,"\u63d0\u524d\u8bf7\u6c42\u5c06\u8981\u4f7f\u7528\u7684\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u6781\u5927\u63d0\u5347\u5e94\u7528\u6d41\u7545\u6027\u3002"),(0,n.kt)("h3",{id:"alova-\u53ef\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001"},"alova \u53ef\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 alova \u8de8\u4efb\u610f\u7684\u7ec4\u4ef6\u5c42\u7ea7\u6765\u8bbf\u95ee\u5176\u4ed6\u7ec4\u4ef6\u5185\u7684\u72b6\u6001\u5316\u6570\u636e\uff0c\u8fd9\u53ef\u4ee5\u8ba9\u4f60\u51cf\u5c11\u8de8\u7ec4\u4ef6\u901a\u4fe1\u7684\u4e00\u4e9b\u9ebb\u70e6\u3002"),(0,n.kt)("h2",{id:"\u4e0e-react-queryswr-\u5bf9\u6bd4"},"\u4e0e react-query\u3001swr \u5bf9\u6bd4"),(0,n.kt)("p",null,"react-query \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5f02\u6b65\u72b6\u6001\u7ba1\u7406\uff0cswr \u662f\u4e00\u4e2a\u7528\u4e8e\u6570\u636e\u8bf7\u6c42\u7684 React Hooks \u5e93\uff0c\u5b83\u4eec\u7684\u5171\u540c\u7279\u6027\u4e5f\u662f\u4f7f\u7528 use hook \u6765\u53d1\u9001\u548c\u7ba1\u7406\u8bf7\u6c42\uff0c\u548c\u6570\u636e\u7f13\u5b58\u529f\u80fd\uff0c\u5bf9\u4e8e\u5b83\u4eec\uff0calova \u6709\u4ee5\u4e0b\u4e0d\u540c\u4e4b\u5904\u3002"),(0,n.kt)("h3",{id:"alova-\u7684\u76ee\u6807\u4e0d\u540c"},"alova \u7684\u76ee\u6807\u4e0d\u540c"),(0,n.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0calova \u7684 use hook \u4e5f\u662f\u53c2\u8003\u4e86 react-query \u548c swr \u7684\u8bbe\u8ba1\uff0c\u4f46\u662f alova \u9009\u62e9\u4e86\u8bf7\u6c42\u7b56\u7565\u5e93\u7684\u65b9\u5411\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u8bf7\u6c42\u573a\u666f\u4e0b\u4f7f\u7528\u4e0d\u540c\u7684\u8bf7\u6c42\u7b56\u7565\u6a21\u5757\uff0c\u8ba9\u4f60\u5728\u7f16\u5199\u66f4\u5c11\u91cf\u4ee3\u7801\u540c\u65f6\uff0c\u4e5f\u80fd\u5b9e\u73b0\u66f4\u9ad8\u6548\u5730 Client-Server \u6570\u636e\u4ea4\u4e92\u3002"),(0,n.kt)("h3",{id:"method-\u4ee3\u7406\u8bbe\u8ba1"},"Method \u4ee3\u7406\u8bbe\u8ba1"),(0,n.kt)("p",null,"react-query \u548c swr \u90fd\u662f\u5728 use hook \u4e2d\u76f4\u63a5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"axios"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"fetch api"),"\u53d1\u9001\u8bf7\u6c42\uff0c\u800c alova \u4f7f\u7528\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"Method")," \u4ee3\u7406\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u8fd9\u6837\u8bbe\u8ba1\u5177\u6709\u4ee5\u4e0b 3 \u4e2a\u597d\u5904\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7edf\u4e00\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u4e0d\u4f1a\u56e0\u5e73\u53f0\u6216 UI \u6846\u67b6\u4e0d\u540c\u800c\u5b58\u5728\u4e0d\u540c\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"axios"),"\u548c",(0,n.kt)("inlineCode",{parentName:"li"},"fetch api"),"\u7b49\u8bf7\u6c42\u5e93\u4ee5\u8bf7\u6c42\u9002\u914d\u5668\u7684\u65b9\u5f0f\uff0c\u4e0e\u6bcf\u4e2a api \u89e3\u8026\uff0c\u8fd9\u8ba9 alova \u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u5f00\u53d1\u4f53\u9a8c\u548c\u5b8c\u7f8e\u7684\u4ee3\u7801\u8fc1\u79fb\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a",(0,n.kt)("inlineCode",{parentName:"li"},"Method"),"\u5b9e\u4f8b\u90fd\u4ee3\u8868\u4e0d\u540c\u7684 api\uff0c\u4f60\u53ef\u4ee5\u5c06\u540c\u4e00\u4e2a api \u7684\u8bf7\u6c42\u53c2\u6570\u4e0e\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u805a\u5408\u5230\u540c\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"li"},"Method"),"\u5b9e\u4f8b\u4e2d\uff0c\u800c\u4e0d\u4f1a\u5206\u6563\u5f00\uff0c\u66f4\u9002\u5408\u7ba1\u7406\u5927\u91cf\u7684 api\u3002"),(0,n.kt)("li",{parentName:"ol"},"alova \u901a\u8fc7\u5bf9",(0,n.kt)("inlineCode",{parentName:"li"},"Method"),"\u5b9e\u4f8b\u4e0a\u7684\u8bf7\u6c42\u53c2\u6570\u5e8f\u5217\u5316\uff0c\u5b9e\u73b0\u4e86\u81ea\u52a8\u5316\u7ba1\u7406\u54cd\u5e94\u6570\u636e\u7f13\u5b58\uff0c\u4f60\u4e0d\u9700\u8981\u6307\u5b9a\u7f13\u5b58 key\uff0c\u800c react-query \u548c swr \u90fd\u9700\u8981\u81ea\u5b9a\u4e49\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"li"},"queryKey"),"\u6765\u7ba1\u7406\u7f13\u5b58\u3002")),(0,n.kt)("h3",{id:"\u9ad8\u7075\u6d3b\u6027"},"\u9ad8\u7075\u6d3b\u6027"),(0,n.kt)("p",null,"alova \u901a\u8fc7\u5404\u79cd\u9002\u914d\u5668\u3001\u4e2d\u95f4\u4ef6\u5b9e\u73b0\u4e86\u5f88\u9ad8\u7684\u7075\u6d3b\u6027\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u8fd0\u884c\u5728\u4efb\u4f55 js \u73af\u5883\uff0c\u8fd8\u53ef\u4ee5\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u4e0d\u540c\u573a\u666f\u4e0b\u7684\u8bf7\u6c42\u6a21\u5757\u3002"),(0,n.kt)("h3",{id:"\u8f7b\u91cf\u5316"},"\u8f7b\u91cf\u5316"),(0,n.kt)("p",null,"alova \u5f88\u8f7b\u91cf\uff0c\u4f53\u79ef\u53ea\u6709 react-query \u548c axios \u7684 30%+\u3002\u4e0e swr \u4f53\u79ef\u76f8\u4f3c\uff0c\u4f46\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\u3002"))}m.isMDXComponent=!0}}]);