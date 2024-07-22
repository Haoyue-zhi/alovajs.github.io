"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8503],{24778:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(85893),r=s(11151);s(74866),s(85162);const i={title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42"},l=void 0,a={id:"tutorial/client/strategy/action-delegation-middleware",title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42",description:"\u4e2d\u95f4\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-client/01-strategy/08-action-delegation-middleware.md",sourceDirName:"tutorial/03-client/01-strategy",slug:"/tutorial/client/strategy/action-delegation-middleware",permalink:"/zh-CN/tutorial/client/strategy/action-delegation-middleware",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/08-action-delegation-middleware.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u8de8\u7ec4\u4ef6\u89e6\u53d1\u8bf7\u6c42"},sidebar:"tutorial",previous:{title:"\u81ea\u52a8\u62c9\u53d6\u6570\u636e",permalink:"/zh-CN/tutorial/client/strategy/use-auto-request"},next:{title:"\u65e0\u611f\u6570\u636e\u4ea4\u4e92 - \u6982\u89c8",permalink:"/zh-CN/tutorial/client/strategy/sensorless-data-interaction/"}},d={},c=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570",id:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570",level:3},{value:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868",id:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868",level:2},{value:"useRequest",id:"userequest",level:3},{value:"useWatcher",id:"usewatcher",level:3},{value:"useFetcher",id:"usefetcher",level:3},{value:"usePagination",id:"usepagination",level:3},{value:"useSQRequest",id:"usesqrequest",level:3},{value:"useForm",id:"useform",level:3},{value:"useCaptcha",id:"usecaptcha",level:3},{value:"useRetriableRequest",id:"useretriablerequest",level:3},{value:"useSerialRequest",id:"useserialrequest",level:3},{value:"useSerialWatcher",id:"useserialwatcher",level:3}];function o(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"\u7b56\u7565\u7c7b\u578b",type:"info",children:(0,n.jsx)(t.p,{children:"\u4e2d\u95f4\u4ef6"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u4ece\u524d\uff0c\u5728\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u60f3\u8981\u89e6\u53d1\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u7684\u8bf7\u6c42\uff0c\u4f60\u9700\u8981\u5c06\u6570\u636e\u4fdd\u5b58\u5230 Store \u4e2d\uff0c\u901a\u8fc7\u5206\u53d1 Action \u5b8c\u6210\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u4e2d\u95f4\u4ef6",(0,n.jsx)(t.strong,{children:"\u6d88\u9664\u7ec4\u4ef6\u5c42\u7ea7\u7684\u9650\u5236"}),"\uff0c\u5728\u4efb\u610f\u7ec4\u4ef6\u4e2d\u5feb\u901f\u5730\u89e6\u53d1\u4efb\u610f\u8bf7\u6c42\u7684\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u67d0\u4e2a\u7ec4\u4ef6\u4e2d\u66f4\u65b0\u4e86\u83dc\u5355\u6570\u636e\u540e\uff0c\u91cd\u65b0\u89e6\u53d1\u4fa7\u8fb9\u83dc\u5355\u680f\u7684\u91cd\u65b0\u8bf7\u6c42\uff0c\u4ece\u800c\u5237\u65b0\u6570\u636e\u3002\u5f53\u64cd\u4f5c\u4e86\u5217\u8868\u6570\u636e\u540e\uff0c\u89e6\u53d1\u5217\u8868\u66f4\u65b0\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u59d4\u6258\u4efb\u610f alova \u4e2d\u7684 use hook \u7684\u64cd\u4f5c\u51fd\u6570\uff1b"}),"\n",(0,n.jsx)(t.li,{children:"\u4efb\u610f\u4f4d\u7f6e\u89e6\u53d1\u5df2\u59d4\u6258\u7684\u64cd\u4f5c\u51fd\u6570\uff1b"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,n.jsx)(t.h3,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u5728 react\u3001svelte \u4e2d\u7528\u6cd5\u76f8\u540c\u3002"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u7ec4\u4ef6 A \u4e2d\u4f7f\u7528",(0,n.jsx)(t.code,{children:"actionDelegationMiddleware"}),"\u59d4\u6258",(0,n.jsx)(t.code,{children:"useRequest"}),"\u7684\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6A",children:"import { actionDelegationMiddleware } from 'alova/client';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('actionName')\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u4efb\u610f\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\uff08\u5982\u7ec4\u4ef6 B\uff09\u901a\u8fc7",(0,n.jsx)(t.code,{children:"accessAction"}),"\u4f20\u5165\u6307\u5b9a\u7684\u59d4\u6258\u540d\u79f0\u89e6\u53d1\u7ec4\u4ef6 A \u4e2d\u7684",(0,n.jsx)(t.code,{children:"useRequest"}),"\u7684\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6B",children:"import { accessAction } from 'alova/client';\n\naccessAction('actionName', delegatedActions => {\n  // \u8c03\u7528\u7ec4\u4ef6A\u4e2d\u7684send\u51fd\u6570\n  delegatedActions.send();\n\n  // \u8c03\u7528\u7ec4\u4ef6A\u4e2d\u7684abort\u51fd\u6570\n  delegatedActions.abort();\n});\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"alova \u5185\u7684\u5168\u90e8 use hook \u90fd\u652f\u6301\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\uff0c\u4f46\u4e0d\u540c\u7684 use hook \u6240\u59d4\u6258\u7684\u51fd\u6570\u6709\u6240\u4e0d\u540c\u3002"}),"\n",(0,n.jsxs)(t.li,{children:["\u4f7f\u7528",(0,n.jsx)(t.code,{children:"actionDelegationMiddleware"}),"\u65f6\uff0c\u59d4\u6258\u540d\u79f0\u53ef\u4f20\u5165\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u3001symbol \u503c\u3002"]}),"\n"]})}),"\n",(0,n.jsx)(t.h3,{id:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570",children:"\u6279\u91cf\u89e6\u53d1\u64cd\u4f5c\u51fd\u6570"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",(0,n.jsx)(t.code,{children:"accessAction"}),"\u89e6\u53d1\u4e86\u4e00\u4e2a use hook \u7684\u64cd\u4f5c\u51fd\u6570\uff0c\u4f46\u5b9e\u9645\u4e0a\uff0c\u76f8\u540c\u540d\u79f0\u7684\u59d4\u6258\u4e0d\u4f1a\u4e92\u76f8\u8986\u76d6\uff0c\u800c\u662f\u4f1a\u4fdd\u5b58\u5728\u4e00\u7ec4\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u540d\u79f0\u540c\u65f6\u89e6\u53d1\u5b83\u4eec\u59d4\u6258\u7684\u51fd\u6570\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6C",children:"import { actionDelegationMiddleware } from 'alova/client';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('actionName1')\n});\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6D",children:"import { actionDelegationMiddleware } from 'alova/client';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('actionName1')\n});\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6E",children:"import { accessAction } from 'alova/client';\n\n// \u56e0\u4e3a\u5c06\u4f1a\u5339\u914d\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u7684\u59d4\u6258hook\uff0c\u56e0\u6b64\u56de\u8c03\u51fd\u6570\u5c06\u88ab\u6267\u884c\u4e24\u6b21\naccessAction('actionName1', delegatedActions => {\n  // \u8c03\u7528\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u4e2d\u7684send\u51fd\u6570\n  delegatedActions.send();\n\n  // \u8c03\u7528\u7ec4\u4ef6C\u3001\u7ec4\u4ef6D\u4e2d\u7684abort\u51fd\u6570\n  delegatedActions.abort();\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u540c\u65f6\uff0c\u8fd8\u53ef\u4ee5\u5728",(0,n.jsx)(t.code,{children:"accessAction"}),"\u4e2d\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u6279\u91cf\u89e6\u53d1\u59d4\u6258\u540d\u79f0\u6ee1\u8db3\u6761\u4ef6\u7684\u64cd\u4f5c\u51fd\u6570"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6F",children:"import { actionDelegationMiddleware } from 'alova/client';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('prefix_name1')\n});\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6G",children:"import { actionDelegationMiddleware } from 'alova/client';\n\nuseRequest(queryTodo, {\n  // ...\n  middleware: actionDelegationMiddleware('prefix_name2')\n});\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"title=\u7ec4\u4ef6H",children:"import { accessAction } from 'alova/client';\n\n// \u56e0\u4e3a\u5c06\u4f1a\u5339\u914d\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u7684\u59d4\u6258hook\uff0c\u56e0\u6b64\u56de\u8c03\u51fd\u6570\u5c06\u88ab\u6267\u884c\u4e24\u6b21\naccessAction(/^prefix_/, delegatedActions => {\n  // \u8c03\u7528\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u4e2d\u7684send\u51fd\u6570\n  delegatedActions.send();\n\n  // \u8c03\u7528\u7ec4\u4ef6F\u3001\u7ec4\u4ef6G\u4e2d\u7684abort\u51fd\u6570\n  delegatedActions.abort();\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868",children:"\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868"}),"\n",(0,n.jsx)(t.p,{children:"\u5c3d\u7ba1\u5927\u90e8\u5206 hook \u59d4\u6258\u7684\u64cd\u4f5c\u51fd\u6570\u4e0e\u5b83\u672c\u8eab\u5e26\u6709\u7684\u64cd\u4f5c\u51fd\u6570\u76f8\u540c\uff0c\u4f46\u8fd9\u4e0d\u662f\u7edd\u5bf9\u7684\uff0c\u4ee5\u4e0b\u662f\u6bcf\u4e2a hook \u7684\u64cd\u4f5c\u51fd\u6570\u59d4\u6258\u8868\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"userequest",children:"useRequest"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540d\u79f0"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,n.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,n.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,n.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"send"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".send \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"abort"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".abort \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"update"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".update \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"usewatcher",children:"useWatcher"}),"\n",(0,n.jsxs)(t.p,{children:["\u4e0e",(0,n.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"usefetcher",children:"useFetcher"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540d\u79f0"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,n.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,n.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,n.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fetch"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#usefetcher",children:"useFetcher"}),".fetch \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"abort"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#usefetcher",children:"useFetcher"}),".abort \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"update"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#usefetcher",children:"useFetcher"}),".update \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"usepagination",children:"usePagination"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540d\u79f0"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,n.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,n.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,n.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"refresh"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-pagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"insert"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-pagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"remove"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-pagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"replace"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-pagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reload"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-pagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"update"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-pagination#api",children:"usePagination \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"getState"}),(0,n.jsx)(t.td,{children:"\u6309\u540d\u79f0\u83b7\u53d6\u5206\u9875\u76f8\u5173\u6570\u636e"}),(0,n.jsx)(t.td,{children:"stateKey: 'page' | 'pageSize' | 'data' | 'pageCount' | 'total' | 'isLastPage'"}),(0,n.jsx)(t.td,{children:"\u5bf9\u5e94 statekey \u7684\u503c"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"usesqrequest",children:"useSQRequest"}),"\n",(0,n.jsxs)(t.p,{children:["\u4e0e",(0,n.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"useform",children:"useForm"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540d\u79f0"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,n.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,n.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,n.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"updateForm"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-form#api",children:"useForm \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reset"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-form#api",children:"useForm \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"send"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".send \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"abort"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".abort \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"update"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".update \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"usecaptcha",children:"useCaptcha"}),"\n",(0,n.jsxs)(t.p,{children:["\u4e0e",(0,n.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"useretriablerequest",children:"useRetriableRequest"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540d\u79f0"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"}),(0,n.jsx)(t.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,n.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,n.jsx)(t.th,{children:"\u7248\u672c"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stop"}),(0,n.jsxs)(t.td,{children:["\u8be6\u89c1",(0,n.jsx)(t.a,{href:"/tutorial/client/strategy/use-retriable-request#api",children:"useRetriableRequest \u64cd\u4f5c\u51fd\u6570"})]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"send"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".send \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"abort"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".abort \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"update"}),(0,n.jsxs)(t.td,{children:["\u4e0e ",(0,n.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"useRequset"}),".update \u76f8\u540c"]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"useserialrequest",children:"useSerialRequest"}),"\n",(0,n.jsxs)(t.p,{children:["\u4e0e",(0,n.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"useserialwatcher",children:"useSerialWatcher"}),"\n",(0,n.jsxs)(t.p,{children:["\u4e0e",(0,n.jsx)(t.a,{href:"#userequest",children:"useRequest \u59d4\u6258\u5217\u8868"}),"\u76f8\u540c\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},85162:(e,t,s)=>{s.d(t,{Z:()=>l});s(67294);var n=s(90512);const r={tabItem:"tabItem_Ymn6"};var i=s(85893);function l(e){let{children:t,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:s,children:t})}},74866:(e,t,s)=>{s.d(t,{Z:()=>y});var n=s(67294),r=s(90512),i=s(12466),l=s(16550),a=s(20469),d=s(91980),c=s(67392),o=s(20812);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function x(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:s}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,d._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function p(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,i=h(e),[l,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,u]=j({queryString:s,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,o.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),g=(()=>{const e=c??p;return x({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{g&&d(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=s(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(85893);function b(e){let{className:t,block:s,selectedValue:n,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),o=e=>{const t=e.currentTarget,s=d.indexOf(t),r=a[s].value;r!==n&&(c(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;t=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;t=d[s]??d[d.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:a.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function q(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function y(e){const t=(0,m.Z)();return(0,f.jsx)(q,{...e,children:u(e.children)},String(t))}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>l});var n=s(67294);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);