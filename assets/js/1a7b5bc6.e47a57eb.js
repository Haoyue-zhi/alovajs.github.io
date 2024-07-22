"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8564],{23346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(85893),r=t(11151),o=t(74866),s=t(85162);const i={title:"request by server-send events"},l=void 0,u={id:"tutorial/client/strategy/use-sse",title:"request by server-send events",description:"use hook",source:"@site/docs/tutorial/03-client/01-strategy/14-use-sse.md",sourceDirName:"tutorial/03-client/01-strategy",slug:"/tutorial/client/strategy/use-sse",permalink:"/tutorial/client/strategy/use-sse",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/14-use-sse.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"request by server-send events"},sidebar:"tutorial",previous:{title:"retriable request",permalink:"/tutorial/client/strategy/use-retriable-request"},next:{title:"Breakpoint upload",permalink:"/tutorial/client/strategy/use-breakpoint-uploader"}},c={},d=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Binding Custom Events",id:"binding-custom-events",level:3},{value:"Global Response Interception",id:"global-response-interception",level:3},{value:"Type Declaration",id:"type-declaration",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{title:"strategy type",type:"info",children:(0,a.jsx)(n.p,{children:"use hook"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Before using extension hooks, make sure you are familiar with the basic usage of alova."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"A use hook that can automatically retry a request failure, you can use it for important requests."}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Simpler and easier-to-use usage."}),"\n",(0,a.jsx)(n.li,{children:"Automatic connection management."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(s.Z,{value:"1",label:"vue",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { useSSE } from 'alova/client';\n\nconst method = (value: string) => alova.Get('/api/source', { param: { key: value } });\nconst { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  initialData: 'initial-data' // Data initially in `data`\n});\n\n// Connect\nsend('value');\n\nconsole.log(data.value); // Data is updated after receiving an event, by default it is `initialData`\n\n// Corresponds to the `message` event of `eventsource`\nconst unbindMessage = onMessage(({ data }) => {\n  console.log(data);\n});\n\nconst unbindError = onError(({ error }) => {\n  console.error('sse error', error);\n  close();\n});\n\n// Unbind when needed\nunbindMessage();\nunbindError();\n"})})}),(0,a.jsx)(s.Z,{value:"2",label:"react",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { useSSE } from 'alova/client';\n\nconst method = (value: string) => alova.Get('/api/source', { param: { key: value } });\nconst { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  initialData: 'initial-data' // Data initially in `data`\n});\n\n// Connect\nsend('value');\n\nconsole.log(data); // Data is updated after receiving an event, by default it is `initialData`\n\n// Corresponds to the `message` event of `eventsource`\nconst unbindMessage = onMessage(({ data }) => {\n  console.log(data);\n});\n\nconst unbindError = onError(({ error }) => {\n  console.error('sse error', error);\n  close();\n});\n\n// Unbind when needed\nunbindMessage();\nunbindError();\n"})})}),(0,a.jsx)(s.Z,{value:"3",label:"svelte",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { useSSE } from 'alova/client';\n\nconst method = (value: string) => alova.Get('/api/source', { param: { key: value } });\nconst { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  initialData: 'initial-data' // Data initially in `data`\n});\n\n// Connect\nsend('value');\n\nconsole.log(data); // Data is updated after receiving an event, by default it is `initialData`\n\n// Corresponds to the `message` event of `eventsource`\nconst unbindMessage = onMessage(({ data }) => {\n  console.log(data);\n});\n\nconst unbindError = onError(({ error }) => {\n  console.error('sse error', error);\n  close();\n});\n\n// Unbind when needed\nunbindMessage();\nunbindError();\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Currently, ",(0,a.jsx)(n.code,{children:"useSSE"})," can only connect to one source. This means that when attempting to connect to multiple targets, the previous connection will always be terminated."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method);\n\nsend('value1');\n// highlight-start\nsend('value2'); // This will terminate the previous connection\nsend('value3'); // This will also terminate the previous connection\n// highlight-end\n"})}),"\n",(0,a.jsx)(n.p,{children:"By default, no request is sent. However, by setting immediate = true, you can skip the manual send step."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { data, eventSource, readyState, onMessage, onError, on, send, close } = useSSE(method, {\n  // highlight-start\n  immediate: true\n  // highlight-end\n});\n\n// codes here...\n"})}),"\n",(0,a.jsx)(n.h3,{id:"binding-custom-events",children:"Binding Custom Events"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { data, readyState, onMessage, on } = useSSE(method);\n\non('event-name', ({ data }) => {\n  console.log(data);\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"global-response-interception",children:"Global Response Interception"}),"\n",(0,a.jsxs)(n.p,{children:["By default, the response data is captured by ",(0,a.jsx)(n.a,{href:"/tutorial/getting-started/basic/global-interceptor",children:"the global response interceptors"}),". If this is not the desired behavior, you can manually disable it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { data, readyState, onMessage, on } = useSSE(method, {\n  // highlight-start\n  interceptByGlobalResponded: false // Now the data will not be intercepted by the response interceptor\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"type-declaration",children:"Type Declaration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const enum SSEHookReadyState {\n  CONNECTING = 0,\n  OPEN = 1,\n  CLOSED = 2\n};\n\ntype SSEHookConfig = {\n  /**\n   * Passed to new EventSource\n   */\n  withCredentials?: boolean;\n\n  /**\n   * Whether to be intercepted by the global responded interceptor of Alova instance\n   * @default true\n   */\n  interceptByGlobalResponded?: boolean;\n\n  /**\n   * Initial data\n   */\n  initialData?: any;\n\n  /**\n   * Whether to initiate the request immediately\n   * @default false\n   */\n  immediate?: boolean;\n};\n\ntype SSEReturnType<S, Data> = {\n  readyState: ExportedType<SSEHookReadyState, S>;\n  data: ExportedType<Data | undefined, S>;\n  eventSource: ExportedType<EventSource | undefined, S>;\n  /**\n   * Manually initiate the request. When `immediate: true` is used, this method is triggered automatically.\n   * @param args Request parameters passed to the method\n   */\n  send: (...args: any[]) => Promise<void>;\n  /**\n   * Close the connection\n   */\n  close: () => void;\n  /**\n   * Register a callback function for the EventSource 'open' event\n   * @param callback Callback function\n   * @returns Function to unregister the callback\n   */\n  onOpen(callback: SSEOnOpenTrigger): () => void;\n\n  /**\n   * Register a callback function for the EventSource 'message' event\n   * @param callback Callback function\n   * @returns Function to unregister the callback\n   */\n  onMessage<T = Data>(callback: SSEOnMessageTrigger<T>): () => void;\n\n  /**\n   * Register a callback function for the EventSource 'error' event\n   * @param callback Callback function\n   * @returns Function to unregister the callback\n   */\n  onError(callback: SSEOnErrorTrigger): () => void;\n\n  /**\n   * @param eventName Event name, defaults to 'open' | 'error' | 'message'\n   * @param handler Event handler\n   */\n  on(\n    eventName: string,\n    handler: (event: AlovaSSEMessageEvent<S, E, R, T, RC, RE, RH>) => void\n  ) => () => void;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(90512);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(67294),r=t(90512),o=t(12466),s=t(16550),i=t(20469),l=t(91980),u=t(67392),c=t(20812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,d]=g({queryString:t,groupId:r}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=u??m;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function y(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(u(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function S(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function E(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(S,{...n,...e})]})}function x(e){const n=(0,v.Z)();return(0,f.jsx)(E,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(67294);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);