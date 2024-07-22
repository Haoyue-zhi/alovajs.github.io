"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1133],{64391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(85893),r=n(11151),s=n(74866),o=n(85162);const l={title:"Use in static html"},i=void 0,c={id:"tutorial/others/use-in-static",title:"Use in static html",description:"You can also use alova via importing from CDN.",source:"@site/versioned_docs/version-v2/tutorial/11-others/06-use-in-static.md",sourceDirName:"tutorial/11-others",slug:"/tutorial/others/use-in-static",permalink:"/v2/tutorial/others/use-in-static",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/11-others/06-use-in-static.md",tags:[],version:"v2",sidebarPosition:6,frontMatter:{title:"Use in static html"},sidebar:"tutorial",previous:{title:"React-Native app development",permalink:"/v2/tutorial/others/react-native"},next:{title:"Hide recommend Tips",permalink:"/v2/tutorial/others/hide-recommend-tips"}},u={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"You can also use alova via importing from CDN."}),"\n",(0,a.jsxs)(s.Z,{groupId:"framework",children:[(0,a.jsx)(o.Z,{value:"1",label:"vue",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/hooks/vuehook.umd.min.js"><\/script>\n  </head>\n  <body>\n    <div id="app">\n      <div v-if="loading">Loading...</div>\n      <div v-else-if="error">{{ error.message }}</div>\n      <span v-else>responseData: {{ data }}</span>\n    </div>\n  </body>\n  <script>\n    const alovaInstance = alova.createAlova({\n      statesHook: VueHook,\n      requestAdapter: GlobalFetch(),\n      responded: response => response.json()\n    });\n\n    Vue.createApp({\n      setup() {\n        return alova.useRequest(\n          alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\')\n        );\n      }\n    }).mount(\'#app\');\n  <\/script>\n</html>\n'})})}),(0,a.jsx)(o.Z,{value:"2",label:"react",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/hooks/reacthook.umd.min.js"><\/script>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n  <script type="text/babel">\n    const alovaInstance = alova.createAlova({\n      statesHook: ReactHook,\n      requestAdapter: GlobalFetch(),\n      responded: response => response.json()\n    });\n\n    const App = () => {\n      const { loading, data, error } = alova.useRequest(\n        alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\')\n      );\n\n      if (loading) {\n        return <div>Loading...</div>;\n      } else if (error) {\n        return <div>{error.message}</div>;\n      }\n      return <span>responseData: {JSON.stringify(data)}</span>;\n    };\n    const root = ReactDOM.createRoot(document.getElementById(\'app\'));\n    root.render(<App />);\n  <\/script>\n</html>\n'})})}),(0,a.jsx)(o.Z,{value:"3",label:"svelte",children:(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["svelte \u4f9d\u8d56\u4e8e\u7f16\u8bd1\u5de5\u5177\uff0c\u4e0d\u80fd\u901a\u8fc7 CDN \u76f4\u63a5\u4f7f\u7528\uff0c\u8be6\u60c5\u89c1 ",(0,a.jsx)(t.a,{href:"https://svelte.dev/",children:"svelte.dev"})]})})}),(0,a.jsx)(o.Z,{value:"4",label:"vue options",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/vue@2/dist/vue.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/@alova/vue-options/dist/alova-vue-options.umd.min.js"><\/script>\n  </head>\n  <body>\n    <div id="app">\n      <div v-if="todo.loading">Loading...</div>\n      <div v-else-if="todo.error">{{ todo.error.message }}</div>\n      <span v-else>responseData: {{ todo.data }}</span>\n    </div>\n  </body>\n  <script>\n    const alovaInstance = alova.createAlova({\n      statesHook: AlovaVueOptions.VueOptionsHook,\n      requestAdapter: GlobalFetch(),\n      responded: response => response.json()\n    });\n\n    new Vue({\n      el: \'#app\',\n      mixins: AlovaVueOptions.mapAlovaHook(function () {\n        return {\n          todo: alova.useRequest(\n            alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\')\n          )\n        };\n      }),\n      data() {\n        return {};\n      }\n    });\n  <\/script>\n</html>\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(90512);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),r=n(90512),s=n(12466),o=n(16550),l=n(20469),i=n(91980),c=n(67392),u=n(20812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=v({queryString:n,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=c??h;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function j(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(k,{...t,...e})]})}function y(e){const t=(0,b.Z)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var a=n(67294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);