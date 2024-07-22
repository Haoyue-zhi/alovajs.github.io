"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2349],{25084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(85893),i=n(11151);const r={title:"\u5e38\u7528\u4e2d\u95f4\u4ef6\u5b9e\u8df5"},o=void 0,s={id:"tutorial/best-practice/middleware",title:"\u5e38\u7528\u4e2d\u95f4\u4ef6\u5b9e\u8df5",description:"\u5ef6\u8fdf\u66f4\u65b0 loading",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-v2/tutorial/07-best-practice/05-middleware.md",sourceDirName:"tutorial/07-best-practice",slug:"/tutorial/best-practice/middleware",permalink:"/zh-CN/v2/tutorial/best-practice/middleware",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/07-best-practice/05-middleware.md",tags:[],version:"v2",sidebarPosition:5,frontMatter:{title:"\u5e38\u7528\u4e2d\u95f4\u4ef6\u5b9e\u8df5"},sidebar:"tutorial",previous:{title:"\u591a\u670d\u52a1\u5668",permalink:"/zh-CN/v2/tutorial/best-practice/multiple-servers"},next:{title:"Request adapter",permalink:"/zh-CN/v2/category/request-adapter"}},l={},d=[{value:"\u5ef6\u8fdf\u66f4\u65b0 loading",id:"\u5ef6\u8fdf\u66f4\u65b0-loading",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u5ef6\u8fdf\u66f4\u65b0-loading",children:"\u5ef6\u8fdf\u66f4\u65b0 loading"}),"\n",(0,a.jsx)(t.p,{children:"\u5f53\u54cd\u5e94\u975e\u5e38\u5feb\u7684\u65f6\u5019\uff0c\u52a0\u8f7d\u72b6\u6001\u4f1a\u51fa\u73b0\u4e00\u6b21\u95ea\u70c1\uff0c\u8fd9\u7ed9\u4f1a\u7528\u6237\u5e26\u6765\u7cdf\u7cd5\u7684\u4f53\u9a8c\uff0c\u5ef6\u8fdf\u66f4\u65b0 loading \u53ef\u4ee5\u8ba9\u52a0\u8f7d\u72b6\u6001\u5728\u4e00\u6bb5\u65f6\u95f4\u540e\u624d\u663e\u793a\uff0c\u5982\u679c\u5728\u8fd9\u6bb5\u65f6\u95f4\u5185\u5b8c\u6210\u54cd\u5e94\u5219\u4e0d\u4f1a\u51fa\u73b0\u52a0\u8f7d\u72b6\u6001\u3002\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e2a\u5e26\u5ef6\u8fdf\u66f4\u65b0 loading \u7684 middleware\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const delayLoadingMiddleware =\n  (delayTimer = 1000) =>\n  async (ctx, next) => {\n    // \u81ea\u884c\u63a7\u5236loading\n    ctx.controlLoading();\n\n    // \u5ef6\u8fdf\u7279\u5b9a\u65f6\u95f4\u66f4\u65b0\n    const timer = setTimeout(() => {\n      ctx.update({ loading: true });\n    }, delayTimer);\n    await next();\n    ctx.update({ loading: false });\n    clearTimeout(timer);\n  };\n\nuseRequest(methodInstance, {\n  middleware: delayLoadingMiddleware()\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(67294);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);