"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1152],{4914:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(85893),i=r(11151);const s={title:"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565"},l=void 0,a={id:"tutorial/server/strategy/retry",title:"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565",description:"server hook",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/04-server/01-strategy/01-retry.md",sourceDirName:"tutorial/04-server/01-strategy",slug:"/tutorial/server/strategy/retry",permalink:"/zh-CN/tutorial/server/strategy/retry",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/04-server/01-strategy/01-retry.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565"},sidebar:"tutorial",previous:{title:"\u670d\u52a1\u7aef\u7b56\u7565",permalink:"/zh-CN/tutorial/server/strategy/"},next:{title:"\u53d1\u9001\u9a8c\u8bc1\u7801",permalink:"/zh-CN/tutorial/server/strategy/send-captcha"}},o={},c=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u8bbe\u7f6e\u9759\u6001\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570",id:"\u8bbe\u7f6e\u9759\u6001\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570",level:3},{value:"\u52a8\u6001\u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570",id:"\u52a8\u6001\u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570",level:3},{value:"\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4",id:"\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4",level:3},{value:"\u8bbe\u7f6e\u4e0d\u56fa\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4",id:"\u8bbe\u7f6e\u4e0d\u56fa\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"\u7c7b\u578b",type:"info",children:(0,t.jsx)(n.p,{children:"server hook"})}),"\n",(0,t.jsx)(n.p,{children:"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u7528\u4e8e\u91cd\u8981\u7684\u8bf7\u6c42\u4e0a\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u91cd\u8bd5\u6b21\u6570\u6216\u6309\u6761\u4ef6\u5224\u65ad\u662f\u5426\u9700\u8981\u91cd\u8bd5\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u91cd\u8bd5\u5ef6\u8fdf\u673a\u5236\uff1b"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { retry } = require('alova/server');\nconst { alovaInstance } = require('./api');\n\nconst request = alovaInstance.Get('/api/user');\nconst hookedMethod = retry(request);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"retry"}),"\u7684\u6700\u5927\u8bf7\u6c42\u91cd\u8bd5\u6b21\u6570\u9ed8\u8ba4\u4e3a 3\uff0c\u4e14\u6bcf\u6b21\u5c06\u5ef6\u8fdf 1 \u79d2\u91cd\u8bd5\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbe\u7f6e\u9759\u6001\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570",children:"\u8bbe\u7f6e\u9759\u6001\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u8868\u793a\u9996\u6b21\u8bf7\u6c42\u5931\u8d25\u540e\uff0c\u6700\u591a\u91cd\u8bd5\u8bf7\u6c42\u7684\u6b21\u6570\uff0c\u671f\u95f4\u5982\u679c\u8bf7\u6c42\u6210\u529f\u7684\u8bdd\u5c06\u4f1a\u505c\u6b62\u7ee7\u7eed\u91cd\u8bd5\u3002\u9ed8\u8ba4\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u4e3a 3 \u6b21\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const hookedMethod = retry(request, {\n  // ...\n  // highlight-start\n  // \u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u4e3a5\n  retry: 5\n  // highlight-end\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u52a8\u6001\u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570",children:"\u52a8\u6001\u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u80fd\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u901a\u8fc7\u67d0\u4e2a\u6761\u4ef6\u6765\u5224\u65ad\u662f\u5426\u9700\u8981\u7ee7\u7eed\u91cd\u8bd5\uff0c\u6b64\u65f6\u4f60\u53ef\u4ee5\u5c06",(0,t.jsx)(n.code,{children:"retry"}),"\u8bbe\u7f6e\u4e3a\u8fd4\u56de boolean \u503c\u7684\u51fd\u6570\uff0c\u6765\u52a8\u6001\u5224\u65ad\u662f\u5426\u7ee7\u7eed\u91cd\u8bd5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const hookedMethod = retry(request, {\n  // ...\n  // highlight-start\n  // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u4e0a\u4e00\u6b21\u7684\u9519\u8bef\u5b9e\u4f8b\uff0c\u4ece\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5f00\u59cb\u4e3asend\u4f20\u5165\u7684\u53c2\u6570\n  retry(error) {\n    // \u8bf7\u6c42\u8d85\u65f6\u5219\u7ee7\u7eed\u91cd\u8bd5\n    return /network timeout/i.test(error.message);\n  }\n  // highlight-end\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4",children:"\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4"}),"\n",(0,t.jsx)(n.p,{children:"\u9ed8\u8ba4\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4\u4e3a 1 \u79d2\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"retry(request, {\n  // ...\n  backoff: {\n    // highlight-start\n    // \u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4\u4e3a2\u79d2\n    delay: 2000\n    // highlight-end\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbe\u7f6e\u4e0d\u56fa\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4",children:"\u8bbe\u7f6e\u4e0d\u56fa\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u6bcf\u6b21\u8bf7\u6c42\u5ef6\u8fdf\u65f6\u95f4\u90fd\u4e0d\u662f\u56fa\u5b9a\u7684\uff0c\u4f60\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u8bbe\u7f6e\u5ef6\u8fdf\u589e\u957f\u500d\u6570\uff0c\u5ef6\u8fdf\u65f6\u95f4\u5c06\u6309\u91cd\u8bd5\u6b21\u6570\u6307\u6570\u589e\u957f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"retry(request, {\n  // ...\n  backoff: {\n    delay: 2000,\n    // highlight-start\n    // multiplier\u8bbe\u7f6e\u4e3a2\u65f6\uff0c\u7b2c\u4e00\u6b21\u91cd\u8bd5\u5ef6\u8fdf\u4e3a2\u79d2\uff0c\u7b2c\u4e8c\u6b21\u4e3a4\u79d2\uff0c\u7b2c\u4e09\u6b21\u4e3a8\u79d2\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\n    multiplier: 2\n    // highlight-end\n  }\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd8\u4e0d\u591f\uff1f\u4f60\u751a\u81f3\u8fd8\u53ef\u4ee5\u4e3a\u6bcf\u6b21\u5ef6\u8fdf\u65f6\u95f4\u589e\u52a0\u968f\u673a\u6296\u52a8\u503c\uff0c\u8ba9\u5b83\u770b\u7740\u4e0d\u90a3\u4e48\u89c4\u5f8b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"retry(request, {\n  // ...\n  backoff: {\n    delay: 2000,\n    multiplier: 2,\n    // highlight-start\n    /**\n     * \u5ef6\u8fdf\u8bf7\u6c42\u7684\u6296\u52a8\u8d77\u59cb\u767e\u5206\u6bd4\u503c\uff0c\u8303\u56f4\u4e3a0-1\n     * \u5f53\u53ea\u8bbe\u7f6e\u4e86startQuiver\u65f6\uff0cendQuiver\u9ed8\u8ba4\u4e3a1\n     * \u4f8b\u5982\u8bbe\u7f6e\u4e3a0.5\uff0c\u5b83\u5c06\u5728\u5f53\u524d\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u589e\u52a050%\u5230100%\u7684\u968f\u673a\u65f6\u95f4\n     * \u5982\u679cendQuiver\u6709\u503c\uff0c\u5219\u5ef6\u8fdf\u65f6\u95f4\u5c06\u589e\u52a0startQuiver\u548cendQuiver\u8303\u56f4\u7684\u968f\u673a\u503c\n     */\n    startQuiver: 0.5,\n\n    /**\n     * \u5ef6\u8fdf\u8bf7\u6c42\u7684\u6296\u52a8\u7ed3\u675f\u767e\u5206\u6bd4\u503c\uff0c\u8303\u56f4\u4e3a0-1\n     * \u5f53\u53ea\u8bbe\u7f6e\u4e86endQuiver\u65f6\uff0cstartQuiver\u9ed8\u8ba4\u4e3a0\n     * \u4f8b\u5982\u8bbe\u7f6e\u4e3a0.8\uff0c\u5b83\u5c06\u5728\u5f53\u524d\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u589e\u52a00%\u523080%\u7684\u968f\u673a\u65f6\u95f4\n     * \u5982\u679cstartQuiver\u6709\u503c\uff0c\u5219\u5ef6\u8fdf\u65f6\u95f4\u5c06\u589e\u52a0startQuiver\u548cendQuiver\u8303\u56f4\u7684\u968f\u673a\u503c\n     */\n    endQuiver: 0.8;\n    // highlight-end\n  }\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var t=r(67294);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);