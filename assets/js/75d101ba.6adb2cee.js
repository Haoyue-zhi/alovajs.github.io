"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),p=i,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||r;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),i=a(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),i=a(7294),r=a(6010),s=a(2466),o=a(6550),l=a(1980),d=a(7392),u=a(12);function c(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function h(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,d]=m({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=l??c;return p({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==o&&(c(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:h},s,{className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},i.createElement(v,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return i.createElement(k,(0,n.Z)({key:String(t)},e))}},4893:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(4866),s=a(5162);const o={title:"Step 2 - Adjust Response Handling",sidebar_position:50},l=void 0,d={unversionedId:"tutorial/strategy/sensorless-data-interaction/modify-response",id:"tutorial/strategy/sensorless-data-interaction/modify-response",title:"Step 2 - Adjust Response Handling",description:"In the conservative request example in the previous section, we called fetch to re-fetch the refreshed page after creating, editing, and deleting requests for Todo items. In order to display the results immediately after the operation, we need to make the following adjustments:",source:"@site/docs/tutorial/07-strategy/01-sensorless-data-interaction/05-modify-response.md",sourceDirName:"tutorial/07-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/modify-response",permalink:"/tutorial/strategy/sensorless-data-interaction/modify-response",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-strategy/01-sensorless-data-interaction/05-modify-response.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Step 2 - Adjust Response Handling",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Step 1 - Implement features with conservative requests",permalink:"/tutorial/strategy/sensorless-data-interaction/conservative-request"},next:{title:"Step 3 - Set Request Retry",permalink:"/tutorial/strategy/sensorless-data-interaction/request-retry"}},u={},c=[{value:"Set behavior mode",id:"set-behavior-mode",level:2},{value:"Silent queue description",id:"silent-queue-description",level:2},{value:"Manually update the list in the callback",id:"manually-update-the-list-in-the-callback",level:2},{value:"Update the list after adding/editing",id:"update-the-list-after-addingediting",level:3},{value:"Update list after removal",id:"update-list-after-removal",level:3},{value:"Save the operation record",id:"save-the-operation-record",level:2},{value:"create/edit success callback",id:"createedit-success-callback",level:3},{value:"delete success callback",id:"delete-success-callback",level:3},{value:"Precautions",id:"precautions",level:3}],h={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the conservative request example in the previous section, we called ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," to re-fetch the refreshed page after creating, editing, and deleting requests for Todo items. In order to display the results immediately after the operation, we need to make the following adjustments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the behavior mode of create, edit and delete requests to ",(0,i.kt)("inlineCode",{parentName:"li"},"silent"),", they will trigger the success callback immediately when the request is made;"),(0,i.kt)("li",{parentName:"ol"},"Manually update the list, instead of pulling data, use virtual data to occupy the response data of the server;"),(0,i.kt)("li",{parentName:"ol"},"Save operation records for data compensation when refreshing the page;")),(0,i.kt)("h2",{id:"set-behavior-mode"},"Set behavior mode"),(0,i.kt)("p",null,"Set by configuring the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"behavior"),", the optional parameters are ",(0,i.kt)("inlineCode",{parentName:"p"},"queue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"silent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"static"),", or a function that returns behavior data to dynamically set the behavior mode, the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"queue"),"."),(0,i.kt)("p",null,"The following sets the behavior parameters statically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"useSQRequest(createOrEditTodo, {\n  // highlight-start\n  behavior: 'silent',\n  // highlight-end\n  immediate: false\n});\n")),(0,i.kt)("p",null,"The following is to dynamically set the behavior parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useSQRequest(createOrEditTodo, {\n  // highlight-start\n  // The arg parameter can be passed in through the send function\n  behavior: arg => {\n    if (arg === 0) return 'silent';\n    return 'queue';\n  },\n  // highlight-end\n  immediate: false\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When behavior is set as a function, it will be called every time a request is initiated to determine which behavior to process this request.")),(0,i.kt)("h2",{id:"silent-queue-description"},"Silent queue description"),(0,i.kt)("p",null,"After setting the behavior parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"queue")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"silent"),", the request will enter the silent queue and wait for the request to be initiated. By default, they will enter the queue named ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". You can also specify other queues to save silentMethod instances. without interfering with each other."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"useSQRequest(createOrEditTodo, {\n  // highlight-start\n  // The specified request information enters the queue named queue-2\n  queue: 'queue-2',\n  // highlight-end\n  behavior: 'silent',\n  immediate: false\n});\n")),(0,i.kt)("h2",{id:"manually-update-the-list-in-the-callback"},"Manually update the list in the callback"),(0,i.kt)("h3",{id:"update-the-list-after-addingediting"},"Update the list after adding/editing"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"1",label:"Page is not destroyed",mdxType:"TabItem"},(0,i.kt)("p",null,"When the list page is not destroyed, such as using the modal box operation on the current page, or using ",(0,i.kt)("inlineCode",{parentName:"p"},"<keep-alive>")," (Vue) to keep the page components, the data will still exist. At this time, we use ",(0,i.kt)("strong",{parentName:"p"},"updateStateEffect")," to Update the list data. Compared with the ",(0,i.kt)("strong",{parentName:"p"},"updateState")," exported by alova, it has the function of tracking virtual data. When the response data is obtained, it will automatically track the virtual data in the list data and replace it with the actual data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useSQRequest, updateStateEffect } from '@alova/scene-*';\nimport { createOrEditTodo, todoList } from './api.js';\n\nconst { onSuccess } = useSQRequest(createOrEditTodo, {\n  behavior: 'silent',\n  immediate: false,\n\n  // highlight-start\n  // Before processing list updates, it is necessary to construct virtual response data of the same structure according to the structure of the response data\n  // For example, when creating a Todo item, the id of this piece of data will be returned.\n  silentDefaultResponse: () => {\n    return {\n      id: '--'\n    };\n  }\n  // highlight-end\n});\n\n// highlight-start\nonSuccess(({ data, silentMethod }) => {\n  // Construct list data items\n  const editingItem = {\n    ...detail,\n\n    // When editing, use the original id, otherwise use the id in the response data\n    // When submitting silently, data.id is virtual data, and when in static behavior mode, data.id is the actual id value\n    id: id || data.id\n  };\n\n  // use updateStateEffect instead of updateState\n  updateStateEffect(todoList(), todoListRaw => {\n    if (id) {\n      todoListRaw = todoListRaw.map(item => (item.id === id ? editingItem : item));\n    } else {\n      todoListRaw.unshift(editingItem);\n    }\n    return todoListRaw;\n  });\n});\n// highlight-end\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"updateStateEffect is used in the same way as ",(0,i.kt)("a",{parentName:"p",href:"../../learning/update-response-data-across-modules"},"updateState")))),(0,i.kt)(s.Z,{value:"2",label:"Page has been destroyed",mdxType:"TabItem"},(0,i.kt)("p",null,"When the list page has been destroyed and the data has been released, such as jumping to a new page, use ",(0,i.kt)("strong",{parentName:"p"},"setCache")," to update the cache data. When the list page is returned, the request will be re-initiated and the updated cache will be hit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useSQRequest, setCache, equals } from '@alova/scene-*';\nimport { createOrEditTodo, todoList } from './api.js';\n\nconst urlParams = new URLSearchParams(window.location.search);\nconst id = urlParams.get('id') || '';\nconst { onSuccess } = useSQRequest(createOrEditTodo, {\n   behavior: 'silent',\n   immediate: false,\n\n   // highlight-start\n   // Before processing list updates, it is necessary to construct virtual response data of the same structure according to the structure of the response data\n   // For example, when creating a Todo item, the id of this piece of data will be returned.\n   silentDefaultResponse: () => {\n     return {\n       id: '--'\n     };\n   }\n   // highlight-end\n});\n// highlight-start\nonSuccess(({ data, silentMethod }) => {\n   // Construct list data items\n   const editingItem = {\n     ...detail,\n\n     // When editing, use the original id, otherwise use the id in the response data\n     // When submitting silently, data.id is virtual data, and when in static behavior mode, data.id is the actual id value\n     id: id || data.id\n   };\n\n   const method TodoList = todoList();\n   setCache(methodTodoList, todoListRaw => {\n     if (id) {\n       todoListRaw = todoListRaw.map(item => (equals(item.id, id) ? editingItem : item));\n     } else {\n       todoListRaw.unshift(editingItem);\n     }\n     return todoListRaw;\n   });\n   // Call setUpdateState to set response data tracking, so as to achieve the same delayed update effect as updateStateEffect\n   if (silentMethod) {\n     silentMethod.setUpdateState(methodTodoList);\n     silentMethod.save();\n   }\n});\n// highlight-end\n")))),(0,i.kt)("h3",{id:"update-list-after-removal"},"Update list after removal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useSQRequest, updateStateEffect } from '@alova/scene-*';\nimport { deleteTodo, todoList } from './api.js';\n\nconst { loading, data, send, onSuccess } = useSQRequest(deleteTodo, {\n  immediate: false,\n  // highlight-start\n  behavior: 'silent'\n  // highlight-end\n});\n\nonSuccess(({ sendArgs: [deletingId] }) => {\n  updateStateEffect(todoList(), todoListRaw => todoListRaw.filter(item => item.id !== deletingId));\n});\n\n// Event callback triggers delete request\nconst handleDelete = deletingId => {\n  send(deletingId);\n};\n")),(0,i.kt)("h2",{id:"save-the-operation-record"},"Save the operation record"),(0,i.kt)("p",null,"It is not enough to just update the list manually. We also need to consider that when the network is restored and there are still waiting requests in the request queue, the list data loaded at this time does not include the part of the unsubmitted request, which will cause certain problems for the user. Puzzled:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"I have clearly added multiple pieces of data, why is it not in the list?"')),(0,i.kt)("p",null,"Therefore, we need to record the operation and related data in the success callback, so that when the list data is loaded again, the uncommitted data will be manually compensated to the list, so that the list data will always be kept up-to-date."),(0,i.kt)("p",null,"Saving operation records is also very simple, you only need to mount the relevant data to the silentMethod instance, and it will be persisted along with the instance."),(0,i.kt)("h3",{id:"createedit-success-callback"},"create/edit success callback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"//...\nonSuccess(({ silentMethod }) => {\n  // Construct list data items\n  const editingItem = {\n    ...detail,\n    id: id || data.id\n  };\n  //...\n  // highlight-start\n  if (silentMethod) {\n    // Set the name for subsequent queries\n    // If editingItem.id is virtual data will be automatically converted to its id\n    silentMethod.entity.setName('edit' + editingItem.id);\n    silentMethod.reviewData = {\n      operate: id ? 'edit' : 'add',\n      data: editingItem\n    };\n    silentMethod.save();\n  }\n  // highlight-end\n});\n")),(0,i.kt)("h3",{id:"delete-success-callback"},"delete success callback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"//...\nonSuccess(({ sendArgs: [deletingId], silentMethod }) => {\n  //...\n  // highlight-start\n  if (silentMethod) {\n    silentMethod.reviewData = {\n      operate: 'delete',\n      data: {\n        id: deletingId\n      }\n    };\n    silentMethod.save();\n  }\n  // highlight-end\n});\n")),(0,i.kt)("h3",{id:"precautions"},"Precautions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the onSuccess callback function, silentMethod has a value only in the ",(0,i.kt)("inlineCode",{parentName:"li"},"queue")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"silent")," behavior modes;"),(0,i.kt)("li",{parentName:"ol"},"Generally speaking, you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"silentMethod.a = ...")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"silentMethod.b = ...")," to save operation records, but it will report an error in typescript, so ",(0,i.kt)("em",{parentName:"li"},"reviewData")," is specially provided as a silent Submit the save attribute of the operation record;"),(0,i.kt)("li",{parentName:"ol"},"After modifying the silentMethod data, you need to save the modification through ",(0,i.kt)("inlineCode",{parentName:"li"},"silentMethod.save()"),";")),(0,i.kt)("p",null,"The next step is to set retry parameters on silent submit requests."))}m.isMDXComponent=!0}}]);