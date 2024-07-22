"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6945],{925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(85893),a=t(11151);const s={title:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528"},o=void 0,c={id:"tutorial/getting-started/basic/server",title:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528",description:"\u5728\u524d\u9762\u7684\u5feb\u901f\u5f00\u59cb\u4e2d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\uff0calova \u53ef\u4ee5\u5728nodejs/deno/bun\u7b49\u670d\u52a1\u7aef\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u4f7f\u7528\u9664\u5ba2\u6237\u7aef\u8bf7\u6c42\u7b56\u7565\u5916\u7684\u6240\u6709\u529f\u80fd\uff0c\u6b64\u5916\uff0calova \u8fd8\u9488\u5bf9\u670d\u52a1\u7aef\u73af\u5883\u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u652f\u6301\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-getting-started/03-basic/08-server.md",sourceDirName:"tutorial/02-getting-started/03-basic",slug:"/tutorial/getting-started/basic/server",permalink:"/zh-CN/tutorial/getting-started/basic/server",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/03-basic/08-server.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528"},sidebar:"tutorial",previous:{title:"\u7ed3\u5408UI\u6846\u67b6",permalink:"/zh-CN/tutorial/getting-started/basic/combine-framework"},next:{title:"\u7f16\u8f91\u5668\u6269\u5c55\u96c6\u6210",permalink:"/zh-CN/tutorial/getting-started/extension-integration"}},i={},l=[{value:"Server hooks",id:"server-hooks",level:2},{value:"\u591a\u7ea7\u7f13\u5b58",id:"\u591a\u7ea7\u7f13\u5b58",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5728\u524d\u9762\u7684",(0,r.jsx)(n.a,{href:"/tutorial/getting-started/quick-start",children:"\u5feb\u901f\u5f00\u59cb"}),"\u4e2d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\uff0calova \u53ef\u4ee5\u5728",(0,r.jsx)(n.code,{children:"nodejs/deno/bun"}),"\u7b49\u670d\u52a1\u7aef\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u4f7f\u7528\u9664\u5ba2\u6237\u7aef\u8bf7\u6c42\u7b56\u7565\u5916\u7684\u6240\u6709\u529f\u80fd\uff0c\u6b64\u5916\uff0calova \u8fd8\u9488\u5bf9\u670d\u52a1\u7aef\u73af\u5883\u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u652f\u6301\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { createAlova } from 'alova';\nimport fetchAdapter from 'alova/fetch';\n\nconst alovaInstance = createAlova({\n  requestAdapter: fetchAdapter()\n});\n\nalovaInstance.Get(...);\nalovaInstance.Post(...);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"server-hooks",children:"Server hooks"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u670d\u52a1\u7aef\u4e2d\uff0c\u6211\u4eec\u4e5f\u6709\u4e0d\u540c\u7684\u8bf7\u6c42\u573a\u666f\uff0c\u4f8b\u5982\u8bf7\u6c42\u91cd\u8bd5\u3001\u8c03\u7528 API \u53d1\u9001\u9a8c\u8bc1\u7801\u7b49\uff0c\u6211\u4eec\u79f0\u4e3a",(0,r.jsx)(n.code,{children:"Server hooks"}),"\uff0c\u5b83\u4eec\u662f method \u5b9e\u4f8b\u7684\u88c5\u9970\u51fd\u6570\uff0c\u5e76\u4e14\u53ef\u4ee5\u591a\u4e2a",(0,r.jsx)(n.code,{children:"Server hooks"}),"\u7ec4\u5408\u4f7f\u7528\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u7ec4\u5408\u4e86",(0,r.jsx)(n.code,{children:"retry"}),"\u548c",(0,r.jsx)(n.code,{children:"sendCaptcha"}),"\u7684\u793a\u4f8b\uff0c\u5b83\u5b9e\u73b0\u4e86\u4ee5\u5931\u8d25\u91cd\u8bd5\u7684\u65b9\u5f0f\u53d1\u9001\u9a8c\u8bc1\u7801\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { retry, sendCaptcha } = require('alova/server');\n\nconst email = 'xxx@xxx.com';\n// \u521b\u5efa\u4e00\u4e2a\u53d1\u9001\u9a8c\u8bc1\u7801\u7684method\u5b9e\u4f8b\nconst captchaMethod = alovaInstance.Post('/api/captcha', {\n  email,\n  content: 'captcha content'\n});\n\n// \u4f7f\u7528retry hook\u5305\u88c5captchaMethod\nconst retringMethod = retry(captchaMethod, {\n  retry: 3,\n  backoff: {\n    delay: 2000\n  }\n});\n// \u518d\u4f7f\u7528sendCaptcha hook\u5305\u88c5retringMethod\uff0c\u5e76\u901a\u8fc7await\u53d1\u9001\u8bf7\u6c42\u5e76\u83b7\u53d6\u54cd\u5e94\u7ed3\u679c\nconst result = await sendCaptcha(retringMethod, {\n  key: email\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u591a\u4e2a",(0,r.jsx)(n.code,{children:"server hooks"}),"\u5305\u88c5 method \u5b9e\u4f8b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const result = await sendCaptcha(\n  retry(\n    alovaInstance.Post('/api/captcha', {\n      email,\n      content: 'captcha content'\n    }),\n    {\n      retry: 3,\n      backoff: {\n        delay: 2000\n      }\n    }\n  ),\n  {\n    key: email\n  }\n);\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a",(0,r.jsx)(n.code,{children:"Server hooks"}),"\u8bf7\u79fb\u6b65",(0,r.jsx)(n.a,{href:"/tutorial/server/strategy",children:"\u670d\u52a1\u7aef\u7b56\u7565"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u591a\u7ea7\u7f13\u5b58",children:"\u591a\u7ea7\u7f13\u5b58"}),"\n",(0,r.jsx)(n.p,{children:"alova \u63d0\u4f9b\u4e86\u5b8c\u6574\u800c\u7b80\u5355\u7684\u7f13\u5b58\u529f\u80fd\uff0c\u4e0d\u4ec5\u5982\u6b64\uff0c\u5b83\u8fd8\u652f\u6301\u591a\u7ea7\u7f13\u5b58\u6765\u4e3a\u4f60\u7684\u670d\u52a1\u7aef\u5e94\u7528\u63d0\u4f9b\u6700\u5feb\u7684\u8bf7\u6c42\u4f53\u9a8c\u3002\u4f60\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u5355\u7ea7\u7f13\u5b58\u8fd8\u662f\u591a\u7ea7\u7f13\u5b58\u4f7f\u7528\uff0c\u5b83\u4eec\u8fd0\u884c\u673a\u5236\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n  A[\u7528\u6237\u8bf7\u6c42] --\x3e B{\u68c0\u67e5L1\u7f13\u5b58}\n  B --\x3e|\u547d\u4e2d| C[\u8fd4\u56de\u6570\u636e]\n  B --\x3e|\u672a\u547d\u4e2d| D{\u68c0\u67e5L2\u7f13\u5b58}\n  D --\x3e|\u547d\u4e2d| E[\u66f4\u65b0L1\u7f13\u5b58]\n  E --\x3e C\n  D --\x3e|\u672a\u547d\u4e2d| F[\u8bf7\u6c42API\u63a5\u53e3]\n  F --\x3e G[\u66f4\u65b0L2\u7f13\u5b58]\n  G --\x3e E\n  C --\x3e H[\u7ed3\u675f]\n\n  style F stroke-width:8px"}),"\n",(0,r.jsx)(n.p,{children:"\u90e8\u5206\u5e94\u7528\u573a\u666f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u9ad8\u8bbf\u95ee\u9891\u7387\u548c\u4f4e\u5ef6\u8fdf\u9700\u6c42\uff1a\u4f8b\u5982\u70ed\u95e8\u65b0\u95fb\u3001\u5546\u54c1\u8be6\u60c5\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u51cf\u5c11\u7f51\u7edc\u5f00\u9500\uff0c\u5728\u7f51\u7edc\u4e0d\u7a33\u5b9a\u65f6\u4e5f\u4fdd\u6301\u66f4\u5feb\u7684\u54cd\u5e94\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u51cf\u8f7b\u4e0b\u6e38\u670d\u52a1\u5668\u538b\u529b\uff0c\u4f8b\u5982\u6709\u8bbf\u95ee\u9ad8\u5cf0\u671f\u7684\u670d\u52a1\uff0c\u4e0a\u5c42\u7f13\u5b58\u53ef\u4ee5\u6709\u6548\u51cf\u5c11\u5bf9\u540e\u7aef\u6570\u636e\u5e93\u548c\u5fae\u670d\u52a1\u7684\u538b\u529b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6574\u5408\u591a\u4e2a\u4e0b\u6e38\u670d\u52a1\u5668\u7684\u6570\u636e\u5408\u5e76\u548c\u5904\u7406\uff0c\u591a\u4e2a\u4e32\u884c\u8bf7\u6c42\u53ef\u80fd\u5bfc\u81f4\u66f4\u957f\u7684\u54cd\u5e94\u65f6\u95f4\uff0c\u4e5f\u53ef\u80fd\u56e0\u590d\u6742\u7684\u6570\u636e\u8f6c\u6362\u6d88\u8017\u6027\u80fd\uff0c\u53ef\u5c06\u8f6c\u6362\u540e\u7684\u6570\u636e\u8fdb\u884c\u7f13\u5b58\u3002"}),"\n",(0,r.jsx)(n.li,{children:"API \u901f\u7387\u9650\u5236\u548c\u8ba1\u8d39\uff0c\u5929\u6c14\u9884\u62a5\u670d\u52a1 API \u6bcf\u5c0f\u65f6\u66f4\u65b0\u4e00\u6b21\u5929\u6c14\u4fe1\u606f\uff0c\u5730\u7406\u4f4d\u7f6e\u6570\u636e API \u7b49\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0calova \u7684\u4e00\u7ea7\u7f13\u5b58\u662f\u7b80\u5355\u7684 object \u4ee5 key-value \u7684\u65b9\u5f0f\u7f13\u5b58\uff0c\u6ca1\u6709\u4e8c\u7ea7\u7f13\u5b58\uff0c\u4f60\u53ef\u4ee5\u81ea\u884c\u4e3a\u5b83\u914d\u7f6e\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528\u4f7f\u7528\u8fdb\u7a0b\u95f4\u5185\u5b58\u5171\u4eab\u9002\u914d\u5668\u52a0 lru cache \u4f5c\u4e3a\u4e00\u7ea7\u7f13\u5b58\uff0credis \u4f5c\u4e3a\u4e8c\u7ea7\u7f13\u5b58\u7684\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { createPSCAdapter, NodeSyncAdapter } = require('@alova/psc');\nconst { LRUCache } = require('lru-cache');\nconst RedisStorageAdapter = require('./adapter-redis');\n\nfunction lRUCache(options = {}) {\n  const cache = new LRUCache(options);\n  return {\n    set(key, value) {\n      return cache.set(key, value);\n    },\n\n    get(key) {\n      return cache.get(key);\n    },\n\n    remove(key) {\n      return cache.delete(key);\n    },\n\n    clear() {\n      return cache.clear();\n    }\n  };\n}\n\nconst alovaInstance = createAlova({\n  baseURL: 'https://api.alovajs.dev',\n\n  // \u8fdb\u7a0b\u95f4\u5171\u4eab\u7f13\u5b58\u9002\u914d\u5668\n  l1Cache: createPSCAdapter(\n    NodeSyncAdapter(),\n    lRUCache({\n      max: 1000,\n      ttl: 1000 * 60 * 10\n    })\n  ),\n\n  // redis\u7f13\u5b58\u9002\u914d\u5668\n  l2Cache: new RedisStorageAdapter({\n    host: 'localhost',\n    port: 6379,\n    username: 'default',\n    password: 'my-top-secret',\n    db: 0\n  })\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u6587\u63d0\u5230\u7684 redis \u9002\u914d\u5668\u7684\u6e90\u7801\u53c2\u8003",(0,r.jsx)(n.a,{href:"/tutorial/project/best-practice/l2-storage",children:"\u6700\u4f73\u5b9e\u8df5 - l2 \u7f13\u5b58\u9002\u914d\u5668"}),"\uff0c\u8fdb\u7a0b\u95f4\u5171\u4eab\u5185\u5b58\u7684\u9002\u914d\u5668\u53c2\u8003",(0,r.jsx)(n.a,{href:"/resource/storage-adapter/psc",children:"\u8fd9\u91cc"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\u54cd\u5e94\u7f13\u5b58\u8bf7\u53c2\u8003",(0,r.jsx)(n.a,{href:"/tutorial/cache/mode",children:"\u7f13\u5b58\u8be6\u89e3"}),"\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(67294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);