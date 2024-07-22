"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5719],{44433:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>r,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=t(85893),i=t(11151);const c={title:"Manually Invalidate"},s=void 0,o={id:"tutorial/cache/manually-invalidate",title:"Manually Invalidate",description:"Generally, automatic invalidate cache is more concise, and it is recommended to use it first to invalidate the cache. When the automatic invalidate cache does not meet the needs, you can also invalidate the cache by calling invalidateCache.",source:"@site/versioned_docs/version-v2/tutorial/04-cache/03-manually-invalidate.md",sourceDirName:"tutorial/04-cache",slug:"/tutorial/cache/manually-invalidate",permalink:"/v2/tutorial/cache/manually-invalidate",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/04-cache/03-manually-invalidate.md",tags:[],version:"v2",sidebarPosition:3,frontMatter:{title:"Manually Invalidate"},sidebar:"tutorial",previous:{title:"Auto Invalidate",permalink:"/v2/tutorial/cache/auto-invalidate"},next:{title:"Force Request",permalink:"/v2/tutorial/cache/force-request"}},l={},d=[{value:"Use method instance invalidate cache",id:"use-method-instance-invalidate-cache",level:2},{value:"Batch invalidate cache",id:"batch-invalidate-cache",level:2},{value:"Dynamic invalidate cache",id:"dynamic-invalidate-cache",level:2},{value:"Invalidate all caches",id:"invalidate-all-caches",level:2}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Generally, automatic invalidate cache is more concise, and it is recommended to use it first to invalidate the cache. When the automatic invalidate cache does not meet the needs, you can also invalidate the cache by calling ",(0,n.jsx)(a.code,{children:"invalidateCache"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"use-method-instance-invalidate-cache",children:"Use method instance invalidate cache"}),"\n",(0,n.jsxs)(a.p,{children:["Pass in a method instance in the ",(0,n.jsx)(a.code,{children:"invalidateCache"})," function, it will look for the cache under this instance to invalidate it."]}),"\n",(0,n.jsx)(a.p,{children:"In the following example, when the submission is successful, the todo details data cache will be invalidated."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"// Get the todo details data with id 1\nconst getTodoDetail = id =>\n  alovaInstance.Get(`/todo/${id}`, {\n    localCache: 1000000\n  });\nconst { loading, data } = useRequest(getTodoDetail(1));\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"// Submit the data and invalidate the todo details with id 1.\nconst {\n  // ...\n  send,\n  onSuccess\n} = useRequest(createTodoPoster, { immediate: false });\n\n// highlight-start\n//Invalid cache after successful submission\nonSuccess(() => {\n  invalidateCache(getTodoDetail(1));\n});\n// highlight-end\n\nconst handleSubmit = () => {\n  send({\n    title: 'new todo',\n    content: 'new todo content'\n  });\n};\n"})}),"\n",(0,n.jsx)(a.h2,{id:"batch-invalidate-cache",children:"Batch invalidate cache"}),"\n",(0,n.jsx)(a.p,{children:"In the following example, we invalidate caches in batches by specifying the name of the cache or a regular expression of the name."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"//The cache of the method named todoList will be invalidated\ninvalidateCache('todoList');\n\n// The cache of methods whose names match the following regular expression will be invalidated\ninvalidateCache(/^todoList/);\n"})}),"\n",(0,n.jsx)(a.h2,{id:"dynamic-invalidate-cache",children:"Dynamic invalidate cache"}),"\n",(0,n.jsxs)(a.p,{children:["Maybe sometimes you are not sure which cached data needs to be invalidated. We can use ",(0,n.jsx)(a.a,{href:"/v2/tutorial/advanced/method-matcher",children:"Method instance matcher"})," to dynamically find the corresponding method instance. The following example shows how to invalidate the cache of the first 5 method instances named todoList."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const getTodoList = currentPage => {\n  return alovaInstance.Get('/todo/list', {\n    // highlight-start\n    // First set the name for the method instance, which is used to filter out the required Method instance when the Method instance cannot be specified directly.\n    name: 'todoList',\n    // highlight-end\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst {\n  // ...\n  send,\n  onSuccess\n} = useRequest(createTodoPoster, { immediate: false });\n// After successful submission, the todo data cache of the first page will be invalidated.\nonSuccess(() => {\n  // highlight-start\n  //The cache of the first 5 Method instances whose invalid name is todoList\n  invalidateCache({\n    name: 'todoList',\n    filter: (method, index, ary) => {\n      return index < 5;\n    }\n  });\n  // highlight-end\n});\n"})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["For more methods of using method instance matcher, see ",(0,n.jsx)(a.a,{href:"/v2/tutorial/advanced/method-matcher",children:"Method instance matcher"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"invalidate-all-caches",children:"Invalidate all caches"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"// When no parameters are passed, all response caches are invalidated\ninvalidateCache();\n"})})]})}function r(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>s});var n=t(67294);const i={},c=n.createContext(i);function s(e){const a=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:a},e.children)}}}]);