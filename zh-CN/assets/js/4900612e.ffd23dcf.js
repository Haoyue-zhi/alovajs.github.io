"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7111],{90184:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(85893),o=s(11151);const r={title:"\u5e76\u884c\u8bf7\u6c42"},i=void 0,c={id:"tutorial/project/best-practice/parallel-request",title:"\u5e76\u884c\u8bf7\u6c42",description:"\u4f7f\u7528 method",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-project/01-best-practice/06-parallel-request.md",sourceDirName:"tutorial/07-project/01-best-practice",slug:"/tutorial/project/best-practice/parallel-request",permalink:"/zh-CN/tutorial/project/best-practice/parallel-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-project/01-best-practice/06-parallel-request.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u5e76\u884c\u8bf7\u6c42"},sidebar:"tutorial",previous:{title:"\u5e38\u7528\u4e2d\u95f4\u4ef6\u5b9e\u8df5",permalink:"/zh-CN/tutorial/project/best-practice/middleware"},next:{title:"\u4e32\u884c\u8bf7\u6c42",permalink:"/zh-CN/tutorial/project/best-practice/serial-request"}},a={},l=[{value:"\u4f7f\u7528 method",id:"\u4f7f\u7528-method",level:2},{value:"\u4f7f\u7528 useRequest",id:"\u4f7f\u7528-userequest",level:2},{value:"\u65b9\u6cd5 1",id:"\u65b9\u6cd5-1",level:3},{value:"\u65b9\u6cd5 2",id:"\u65b9\u6cd5-2",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u4f7f\u7528-method",children:"\u4f7f\u7528 method"}),"\n",(0,n.jsxs)(t.p,{children:["\u7531\u4e8e method \u662f PromiseLike \u5b9e\u4f8b\uff0c\u901a\u8fc7 method \u53d1\u9001\u5e76\u884c\u8bf7\u6c42\u53ea\u9700\u8981\u4f7f\u7528",(0,n.jsx)(t.code,{children:"Promise.all"}),"\u7b49\u5f85\u5373\u53ef\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const [todoList, todoCounter] = await Promise.all[(todoListGetter, todoCountGetter)];\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u4f7f\u7528-userequest",children:"\u4f7f\u7528 useRequest"}),"\n",(0,n.jsx)(t.p,{children:"\u7b80\u5355\u7684\u5e76\u884c\u8bf7\u6c42\uff0c\u53ea\u9700\u8981\u540c\u65f6\u8c03\u7528\u591a\u4e2a useRequest \u5373\u53ef\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const { data: todoList } = useRequest(todoListGetter);\nconst { data: todoCounter } = useRequest(todoCountGetter);\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u4f46\u8fd9\u6837\u7684\u8bf7\u6c42\u53ea\u9002\u7528\u4e8e\u5355\u7eaf\u7684\u5e76\u884c\u8bf7\u6c42\uff0c\u5982\u679c\u4f60\u9700\u8981\u5728\u5e76\u884c\u8bf7\u6c42\u90fd\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u67d0\u4e9b\u64cd\u4f5c\uff0c\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b9e\u73b0\uff1a"}),"\n",(0,n.jsx)(t.h3,{id:"\u65b9\u6cd5-1",children:"\u65b9\u6cd5 1"}),"\n",(0,n.jsxs)(t.p,{children:["\u624b\u52a8\u521b\u5efa promise \u5bf9\u8c61\uff0c\u5e76\u4f7f\u7528",(0,n.jsx)(t.code,{children:"Promise.all"}),"\u5b8c\u6210\u6548\u679c\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const {\n  data: todoList,\n  onSuccess: onListSuccess,\n  onError: onListError\n} = useRequest(todoListGetter);\nconst {\n  data: todoCounter,\n  onSuccess: onCountSuccess,\n  onError: onCountError\n} = useRequest(todoCountGetter);\n\n// \u624b\u52a8\u521b\u5efapromise\u5bf9\u8c61\nconst listPromise = new Promise((resolve, reject) => {\n  onListSuccess(resolve);\n  onListError(reject);\n});\nconst countPromise = new Promise((resolve, reject) => {\n  onCountSuccess(resolve);\n  onCountError(reject);\n});\nconst [listEvent, countEvent] = await Promise.all([listPromise, countPromise]);\n// \u5e76\u884c\u8bf7\u6c42\u5b8c\u6210\uff0c\u7ee7\u7eed\u5904\u7406\u4e1a\u52a1...\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u65b9\u6cd5-2",children:"\u65b9\u6cd5 2"}),"\n",(0,n.jsxs)(t.p,{children:["\u4f7f\u7528",(0,n.jsx)(t.code,{children:"useRequest"}),"\u51fd\u6570\u8fd4\u56de\u7684",(0,n.jsx)(t.code,{children:"send"}),"\u51fd\u6570\uff0c\u8c03\u7528",(0,n.jsx)(t.code,{children:"send"}),"\u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a\u53ef\u7528\u7684 promise \u5bf9\u8c61\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// \u5148\u8ba9\u5b83\u4eec\u4e0d\u81ea\u52a8\u53d1\u9001\u8bf7\u6c42\nconst { send: sendList } = useRequest(todoListGetter, { immediate: false });\nconst { send: sendCount } = useRequest(todoCountGetter, { immediate: false });\n\n// \u5229\u7528send\u51fd\u6570\u8fd4\u56de\u7684promise\u5bf9\u8c61\nconst parallelRequest = async () => {\n  const [listResponse, countResponse] = await Promise.all([sendList(), sendCount()]);\n  // \u5e76\u884c\u8bf7\u6c42\u5b8c\u6210\uff0c\u7ee7\u7eed\u5904\u7406\u4e1a\u52a1...\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var n=s(67294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);