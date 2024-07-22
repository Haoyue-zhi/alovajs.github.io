"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9116],{63050:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=s(85893),n=s(11151);const i={title:"\u4e32\u884c\u8bf7\u6c42"},r=void 0,a={id:"tutorial/project/best-practice/serial-request",title:"\u4e32\u884c\u8bf7\u6c42",description:"\u4f7f\u7528 method",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-project/01-best-practice/07-serial-request.md",sourceDirName:"tutorial/07-project/01-best-practice",slug:"/tutorial/project/best-practice/serial-request",permalink:"/zh-CN/tutorial/project/best-practice/serial-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-project/01-best-practice/07-serial-request.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u4e32\u884c\u8bf7\u6c42"},sidebar:"tutorial",previous:{title:"\u5e76\u884c\u8bf7\u6c42",permalink:"/zh-CN/tutorial/project/best-practice/parallel-request"},next:{title:"\u670d\u52a1\u7aefL2\u5b58\u50a8\u5b9e\u8df5",permalink:"/zh-CN/tutorial/project/best-practice/l2-storage"}},c={},d=[{value:"\u4f7f\u7528 method",id:"\u4f7f\u7528-method",level:2},{value:"\u4f7f\u7528 useRequest",id:"\u4f7f\u7528-userequest",level:2},{value:"\u65b9\u6cd5 1",id:"\u65b9\u6cd5-1",level:3},{value:"\u65b9\u6cd5 2",id:"\u65b9\u6cd5-2",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u4f7f\u7528-method",children:"\u4f7f\u7528 method"}),"\n",(0,o.jsxs)(t.p,{children:["\u7531\u4e8e method \u662f PromiseLike \u5b9e\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,o.jsx)(t.code,{children:"await"}),"\u7b49\u5f85\u8bf7\u6c42\u6210\u529f\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const todoList = await todoListGetter;\nconst todoDetail = await todoDetailGetter(todoList[0].id);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u4f7f\u7528-userequest",children:"\u4f7f\u7528 useRequest"}),"\n",(0,o.jsx)(t.p,{children:"\u4e32\u884c\u8bf7\u6c42\u4e5f\u5177\u6709\u4e24\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,o.jsx)(t.h3,{id:"\u65b9\u6cd5-1",children:"\u65b9\u6cd5 1"}),"\n",(0,o.jsxs)(t.p,{children:["\u8ba9\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u81ea\u52a8\u53d1\u51fa\uff0c\u7b2c\u4e8c\u4e2a\u8bf7\u6c42\u5728\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u7684",(0,o.jsx)(t.code,{children:"onSuccess"}),"\u56de\u8c03\u4e2d\u89e6\u53d1\uff0c\u5373\u53ef\u5b8c\u6210\u4e32\u884c\u8bf7\u6c42\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u5199\u6cd5\u5b8c\u6210\u4e32\u884c\u8bf7\u6c42\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"//\nconst { data: todoList, onSuccess } = useRequest(todoListGetter);\nconst { data: todoDetail, send: sendTodoDetail } = useRequest(\n  todoId => todoDetailGetter(todoId),\n  { immediate: false }\n);\n\n// \u5148\u83b7\u53d6\u5217\u8868\uff0c\u518d\u83b7\u53d6\u7b2c\u4e00\u4e2atodo\u7684\u8be6\u60c5\nonSuccess(event => {\n  sendTodoDetail(event.todoList[0].id);\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"\u65b9\u6cd5-2",children:"\u65b9\u6cd5 2"}),"\n",(0,o.jsxs)(t.p,{children:["\u4f7f\u7528",(0,o.jsx)(t.code,{children:"useRequest"}),"\u51fd\u6570\u8fd4\u56de\u7684",(0,o.jsx)(t.code,{children:"send"}),"\u51fd\u6570\uff0c\u8c03\u7528",(0,o.jsx)(t.code,{children:"send"}),"\u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a\u53ef\u7528\u7684 promise \u5bf9\u8c61\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"// \u5148\u8ba9\u5b83\u4eec\u4e0d\u81ea\u52a8\u53d1\u9001\u8bf7\u6c42\nconst { send: sendList } = useRequest(todoListGetter, { immediate: false });\nconst { send: sendTodoDetail } = useRequest(todoId => todoDetailGetter(todoId), {\n  immediate: false\n});\n\n// \u5229\u7528send\u51fd\u6570\u8fd4\u56de\u7684promise\u5bf9\u8c61\nconst serialRequest = async () => {\n  const todoList = await sendList();\n  const todoDetail = await sendTodoDetail(todoList[0].id);\n  // \u4e32\u884c\u8bf7\u6c42\u5b8c\u6210\uff0c\u7ee7\u7eed\u5904\u7406\u4e1a\u52a1...\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var o=s(67294);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);