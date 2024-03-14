"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3941],{286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(5893),a=n(1151),s=n(4866),o=n(5162);const i={title:"Automatically refetch data",sidebar_position:60},l=void 0,u={id:"tutorial/strategy/useAutoRequest",title:"Automatically refetch data",description:"use hook",source:"@site/docs/tutorial/05-strategy/06-useAutoRequest.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/useAutoRequest",permalink:"/tutorial/strategy/useAutoRequest",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-strategy/06-useAutoRequest.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Automatically refetch data",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Cross components to trigger request",permalink:"/tutorial/strategy/actionDelegationMiddleware"},next:{title:"Breakpoint upload",permalink:"/tutorial/strategy/useBreakpointUploader"}},c={},d=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Custom listening functions",id:"custom-listening-functions",level:2},{value:"Network reconnection custom function",id:"network-reconnection-custom-function",level:3},{value:"Polling custom function",id:"polling-custom-function",level:3},{value:"App switching custom function",id:"app-switching-custom-function",level:3},{value:"App focus custom function",id:"app-focus-custom-function",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"strategy type",type:"info",children:(0,r.jsx)(t.p,{children:"use hook"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Before using extension hooks, make sure you are familiar with the basic use of alova."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Automatically fetch data through browser events or polling, allowing the interface to display the newest data."}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u2728 Supports refetching the newest data in scenarios such as browser focus, tab switching, network reconnection, polling requests, etc;"}),"\n",(0,r.jsx)(t.li,{children:"\u2728 Supports request throttling, only one request will be sent if triggered multiple times in a short period of time;"}),"\n",(0,r.jsx)(t.li,{children:"\u2728 Support custom event listening functions to adapt to usage scenarios in non-browser environments;"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(s.Z,{groupId:"framework",children:[(0,r.jsx)(o.Z,{value:"1",label:"vue composition",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"#npm\r\nnpm install @alova/scene-vue --save\r\n# yarn\r\nyarn add @alova/scene-vue\r\n\n"})})}),(0,r.jsx)(o.Z,{value:"2",label:"react",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"#npm\r\nnpm install @alova/scene-react --save\r\n# yarn\r\nyarn add @alova/scene-react\r\n\n"})})}),(0,r.jsx)(o.Z,{value:"3",label:"svelte",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"#npm\r\nnpm install @alova/scene-svelte --save\r\n# yarn\r\nyarn add @alova/scene-svelte\r\n\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsxs)(t.p,{children:["By default, useHook",(0,r.jsx)(t.code,{children:"useAutoRequest"})," that automatically fetches data will automatically fetch the newest data when browser is visible, hidden, focused, and the network is reconnected, and will automatically cancel the listening event when the component is uninstalled."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { useAutoRequest } from '@alova/scene-*';\r\n\r\nconst { loading, data, error } = useAutoRequest(() => method());\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The return value of ",(0,r.jsx)(t.code,{children:"useAutoRequest"})," is the same as ",(0,r.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequest"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In addition to supporting all configuration parameters of ",(0,r.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequest"}),", it also supports automatically fetched configuration parameters. You can turn on or off some events through the following configuration, or modify request throttling events."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const { loading, data, error, onSuccess, onError, onComplete } = useAutoRequest(() => method(), {\r\n  /**\r\n   * Browser display hide trigger\r\n   * @default true\r\n   */\r\n  enableVisibility: true,\r\n\r\n  /**\r\n   * Triggered by browser focus\r\n   * @default true\r\n   */\r\n  enableFocus: true,\r\n\r\n  /**\r\n   * Triggered by network reconnection\r\n   * @default true\r\n   */\r\n  enableNetwork: true,\r\n\r\n  /**\r\n   *Throttling time, only one request will be sent if triggered multiple times within a certain period, unit ms\r\n   * @default 1000\r\n   */\r\n  throttle: 1000,\r\n\r\n  /**\r\n   * The time of polling request, effective when set greater than 0, unit ms\r\n   * @default 0\r\n   */\r\n  pollingTime: 2000\r\n\r\n  //Other parameters are the same as useRequest...\r\n});\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"caching advice",type:"warning",children:(0,r.jsxs)(t.p,{children:["It is recommended to turn off the cache of the corresponding request when using ",(0,r.jsx)(t.code,{children:"useAutoRequest"}),", because when the cache is set, the cache will be hit when the automatic request is triggered and the newest data cannot be obtained. Please read ",(0,r.jsx)(t.a,{href:"/tutorial/cache/mode",children:"Cache Mode"})," for details."]})}),"\n",(0,r.jsx)(t.h2,{id:"custom-listening-functions",children:"Custom listening functions"}),"\n",(0,r.jsx)(t.p,{children:"The above 4 methods of automatically fetching data are implemented by listening browser's events by default. When users use it in a non-browser environment, you may need to customize the listening function. This function receives the notification request function and useHook config as parameters, and returns a cancel listening function.\r\n."}),"\n",(0,r.jsxs)(t.p,{children:["The following is an example of custom listening function in ",(0,r.jsx)(t.code,{children:"react-native"}),":"]}),"\n",(0,r.jsx)(t.h3,{id:"network-reconnection-custom-function",children:"Network reconnection custom function"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import NetInfo from '@react-native-community/netinfo';\r\nuseAutoRequest.onNetwork = (notify, config) => {\r\n  const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {\r\n    isConnected && notify();\r\n  });\r\n  return unsubscribe;\r\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"polling-custom-function",children:"Polling custom function"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"useAutoRequest.onPolling = (notify, config) => {\r\n  const timer = setInterval(notify, config.pollingTime);\r\n  return () => clearInterval(timer);\r\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"app-switching-custom-function",children:"App switching custom function"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { AppState, Text } from 'react-native';\r\nuseAutoRequest.onVisibility = (notify, config) => {\r\n  const subscription = AppState.addEventListener('change', state => {\r\n    state === 'active' && notify();\r\n  });\r\n  return () => subscription.remove();\r\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"app-focus-custom-function",children:"App focus custom function"}),"\n",(0,r.jsx)(t.p,{children:"Since the App doesn't have a focus event, it can be set to an empty function to avoid throwing error."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"useAutoRequest.onFocus = (notify, config) => {\r\n  return () => {};\r\n};\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(512),s=n(2466),o=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);