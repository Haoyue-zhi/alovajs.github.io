"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3158],{10380:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var r=a(85893),l=a(11151);a(22778),a(24243),a(20718);const s={title:"\u7f13\u5b58\u6a21\u5f0f"},c=void 0,t={id:"tutorial/cache/mode",title:"\u7f13\u5b58\u6a21\u5f0f",description:"\u7f13\u5b58\u6a21\u5f0f\u53ef\u5728\u5168\u5c40\u6216\u8bf7\u6c42\u7ea7\u7b49\u4e0d\u540c\u7c92\u5ea6\u4e0b\u8bbe\u7f6e\u3002\u5168\u5c40\u8bbe\u7f6e\u65f6\uff0c\u6240\u6709\u7531\u76f8\u540c alova \u5b9e\u4f8b\u521b\u5efa\u7684 method \u5b9e\u4f8b\u90fd\u4f1a\u7ee7\u627f\u8be5\u8bbe\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/05-cache/01-mode.md",sourceDirName:"tutorial/05-cache",slug:"/tutorial/cache/mode",permalink:"/zh-CN/tutorial/cache/mode",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-cache/01-mode.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7f13\u5b58\u6a21\u5f0f"},sidebar:"tutorial",previous:{title:"\u54cd\u5e94\u7f13\u5b58\u8be6\u89e3",permalink:"/zh-CN/tutorial/cache/"},next:{title:"\u81ea\u52a8\u5931\u6548",permalink:"/zh-CN/tutorial/cache/auto-invalidate"}},i={},o=[{value:"\u5185\u5b58\u6a21\u5f0f\uff08\u9ed8\u8ba4\uff09",id:"\u5185\u5b58\u6a21\u5f0f\u9ed8\u8ba4",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u6062\u590d\u6a21\u5f0f",id:"\u6062\u590d\u6a21\u5f0f",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef-1",level:3},{value:"\u6570\u636e\u6709\u53d8\u600e\u4e48\u529e\uff1f",id:"\u6570\u636e\u6709\u53d8\u600e\u4e48\u529e",level:4},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef-1",level:3},{value:"\u8bbe\u7f6e alova id",id:"\u8bbe\u7f6e-alova-id",level:2},{value:"\u5168\u5c40\u8bbe\u7f6e\u7f13\u5b58\u6a21\u5f0f",id:"\u5168\u5c40\u8bbe\u7f6e\u7f13\u5b58\u6a21\u5f0f",level:2},{value:"\u5168\u5c40\u5173\u95ed\u7f13\u5b58\u6a21\u5f0f",id:"\u5168\u5c40\u5173\u95ed\u7f13\u5b58\u6a21\u5f0f",level:2},{value:"\u8bbe\u7f6e\u4e0d\u540c\u7684\u8fc7\u671f\u65f6\u95f4",id:"\u8bbe\u7f6e\u4e0d\u540c\u7684\u8fc7\u671f\u65f6\u95f4",level:2},{value:"\u8fc7\u671f\u65f6\u95f4\u7c7b\u578b",id:"\u8fc7\u671f\u65f6\u95f4\u7c7b\u578b",level:2},{value:"\u76f8\u5bf9\u65f6\u95f4",id:"\u76f8\u5bf9\u65f6\u95f4",level:3},{value:"\u7edd\u5bf9\u65f6\u95f4",id:"\u7edd\u5bf9\u65f6\u95f4",level:3},{value:"\u54cd\u5e94\u81ea\u52a8\u7ef4\u62a4\u8bf4\u660e",id:"\u54cd\u5e94\u81ea\u52a8\u7ef4\u62a4\u8bf4\u660e",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u7f13\u5b58\u6a21\u5f0f\u53ef\u5728\u5168\u5c40\u6216\u8bf7\u6c42\u7ea7\u7b49\u4e0d\u540c\u7c92\u5ea6\u4e0b\u8bbe\u7f6e\u3002\u5168\u5c40\u8bbe\u7f6e\u65f6\uff0c\u6240\u6709\u7531\u76f8\u540c alova \u5b9e\u4f8b\u521b\u5efa\u7684 method \u5b9e\u4f8b\u90fd\u4f1a\u7ee7\u627f\u8be5\u8bbe\u7f6e\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,r.jsx)(n.p,{children:"\u662f\u5426\u4f7f\u7528\u7f13\u5b58\u6a21\u5f0f\uff0c\u4ee5\u53ca\u4f7f\u7528\u54ea\u79cd\u7f13\u5b58\u6a21\u5f0f\u9700\u8981\u6839\u636e\u573a\u666f\u800c\u5b9a\uff0c\u4e0b\u9762\u5728\u5355\u72ec\u4ecb\u7ecd\u4e0d\u540c\u7f13\u5b58\u6a21\u5f0f\u65f6\u5c06\u4f1a\u63d0\u53ca\u5b83\u4eec\u7684\u4f7f\u7528\u573a\u666f\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5185\u5b58\u6a21\u5f0f\u9ed8\u8ba4",children:"\u5185\u5b58\u6a21\u5f0f\uff08\u9ed8\u8ba4\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u5185\u5b58\u6a21\u5f0f\u5c5e\u4e8e\u5355\u7ea7\u7f13\u5b58(L1 \u7f13\u5b58)\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u5c06\u7f13\u5b58\u653e\u5728\u5185\u5b58\u4e2d\uff0c\u662f\u6700\u5e38\u7528\u7684\u7f13\u5b58\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n  A[\u7528\u6237\u8bf7\u6c42] --\x3e B{\u68c0\u67e5L1\u7f13\u5b58}\n  B --\x3e|\u547d\u4e2d| C[\u8fd4\u56de\u6570\u636e]\n  B --\x3e|\u672a\u547d\u4e2d| F[\u8bf7\u6c42API\u63a5\u53e3]\n  F --\x3e G[\u66f4\u65b0L1\u7f13\u5b58]\n  G --\x3e C\n  C --\x3e H[\u7ed3\u675f]\n\n  style F stroke-width:8px"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cGET \u8bf7\u6c42\u6709 300000ms(5 \u5206\u949f)\u7684\u5185\u5b58\u7f13\u5b58\u65f6\u95f4\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u7f13\u5b58\uff0c\u8bf7\u7ee7\u7eed\u5f80\u4e0b\u770b\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5ba2\u6237\u7aef\u4e2d\uff0c\u5237\u65b0\u9875\u9762\u7f13\u5b58\u5373\u5931\u6548\uff0c\u5185\u5b58\u6a21\u5f0f\u4e00\u822c\u7528\u4e8e\u89e3\u51b3\u77ed\u65f6\u95f4\u5185\uff08\u51e0\u5206\u949f\u6216\u51e0\u79d2\u949f\uff09\u9891\u7e41\u8bf7\u6c42\u76f8\u540c\u6570\u636e\u5e26\u6765\u7684\u6027\u80fd\u6d88\u8017\uff0c\u4f8b\u5982\u5f53\u4f60\u5728\u5199 todo \u8be6\u60c5\u9875\u7684\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u4f1a\u60f3\u5230\u7528\u6237\u4f1a\u9891\u7e41\u5728 todo \u5217\u8868\u4e2d\u70b9\u51fb\u67e5\u770b\u8be6\u60c5\uff0c\u5982\u679c\u7528\u6237\u91cd\u590d\u67e5\u770b\u67d0\u6761\u8be6\u60c5\u65f6\u4e0d\u518d\u91cd\u590d\u8bf7\u6c42\u63a5\u53e3\uff0c\u5e76\u4e14\u80fd\u7acb\u5373\u8fd4\u56de\u6570\u636e\uff0c\u63d0\u5347\u4e86\u54cd\u5e94\u901f\u5ea6\u7684\u540c\u65f6\u4e5f\u51cf\u5c0f\u4e86\u670d\u52a1\u5668\u538b\u529b\u3002\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u4e3a\u67d0\u4e2a todo \u8be6\u60c5 method \u5b9e\u4f8b\u8bbe\u7f6e\u54cd\u5e94\u6570\u636e\u7f13\u5b58\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"alovaInstance.GET('/todo/list', {\n  // ...\n  // highlight-start\n  cacheFor: {\n    // \u8bbe\u7f6e\u7f13\u5b58\u6a21\u5f0f\u4e3a\u5185\u5b58\u6a21\u5f0f\n    mode: 'memory',\n\n    // \u5355\u4f4d\u4e3a\u6beb\u79d2\n    // \u5f53\u8bbe\u7f6e\u4e3a`Infinity`\uff0c\u8868\u793a\u6570\u636e\u6c38\u4e0d\u8fc7\u671f\uff0c\u8bbe\u7f6e\u4e3a0\u6216\u8d1f\u6570\u65f6\u8868\u793a\u4e0d\u7f13\u5b58\n    expire: 60 * 10 * 1000\n  }\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5185\u5b58\u6a21\u5f0f\u4e3a\u9ed8\u8ba4\u6a21\u5f0f\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u7b80\u5199"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"alovaInstance.GET('/todo/list', {\n  // ...\n  // highlight-start\n  cacheFor: 60 * 10 * 1000\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u670d\u52a1\u4e2d\u901a\u5e38\u5728\u63a5\u53e3\u9700\u8981\u9ad8\u8bbf\u95ee\u9891\u7387\u548c\u4f4e\u5ef6\u8fdf\u573a\u666f\u4e2d\u4f7f\u7528\uff0c\u51cf\u8f7b\u4e0b\u6e38\u670d\u52a1\u5668\u538b\u529b\uff0c\u4f7f\u7528\u65b9\u6cd5\u4e0e\u5ba2\u6237\u7aef\u76f8\u540c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u670d\u52a1\u7aef\u4e2d\u4f7f\u7528\u65f6\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8fc7\u591a\u7684\u7f13\u5b58\u4f1a\u4e00\u76f4\u6d88\u8017\u670d\u52a1\u5668\u5185\u5b58\uff0c\u4f60\u53ef\u4ee5\u6539\u7528",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/lru-cache",children:"lru-cache"}),"\u63a7\u5236\u5185\u5b58\u6d88\u8017\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u5728\u5355\u673a\u7684 nodejs \u96c6\u7fa4\u73af\u5883\u4e2d\u5171\u4eab\u7f13\u5b58\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@alova/psc",children:"@alova/psc"}),"\u521b\u5efa\u8fdb\u7a0b\u95f4\u5171\u4eab\u5185\u5b58\u7684\u7f13\u5b58\u65b9\u6848\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { createPSCAdapter, NodeSyncAdapter } = require('@alova/psc');\nconst { LRUCache } = require('lru-cache');\n\nfunction lRUCache(options = {}) {\n  const cache = new LRUCache(options);\n  return {\n    set(key, value) {\n      return cache.set(key, value);\n    },\n\n    get(key) {\n      return cache.get(key);\n    },\n\n    remove(key) {\n      return cache.delete(key);\n    },\n\n    clear() {\n      return cache.clear();\n    }\n  };\n}\n\nconst alovaInstance = createAlova({\n  baseURL: 'https://api.alovajs.dev',\n\n  // \u8fdb\u7a0b\u95f4\u5171\u4eab\u7f13\u5b58\u9002\u914d\u5668\n  l1Cache: createPSCAdapter(\n    NodeSyncAdapter(),\n    lRUCache({\n      max: 1000,\n      ttl: 1000 * 60 * 10\n    })\n  )\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5185\u5b58\u7f13\u5b58\u6a21\u5f0f\u5bf9\u5e94 l1 cache\uff0c\u5728\u6b64\u6211\u4eec\u66f4\u6362\u4e86\u7f13\u5b58\u9002\u914d\u5668\u4e3a\u8fdb\u7a0b\u95f4\u5171\u4eab\u7684 lru-cache\uff0c\u4f60\u4e5f\u53ef\u4ee5",(0,r.jsx)(n.a,{href:"/tutorial/advanced/custom/storage-adapter",children:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668"}),"\uff0c\u4f8b\u5982\u5f53\u4f60\u53ea\u9700\u8981\u5355\u7ea7\u7f13\u5b58\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06 l1 cache \u8bbe\u7f6e\u4e3a redis \u9002\u914d\u5668\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6062\u590d\u6a21\u5f0f",children:"\u6062\u590d\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u6062\u590d\u6a21\u5f0f\u5bf9\u5e94\u591a\u7ea7\u7f13\u5b58\uff0c\u5206\u522b\u4e3a L1 \u548c L2 \u7f13\u5b58\u3002\u5f00\u542f\u6062\u590d\u6a21\u5f0f\u540e\uff0c\u54cd\u5e94\u6570\u636e\u4f1a\u540c\u65f6\u5b58\u50a8\u5728 L1 \u548c L2 \u7f13\u5b58\u4e2d\uff0c\u5f53 L1 \u7f13\u5b58\u5931\u6548\u65f6\uff0c\u4f1a\u4ece L2 \u7f13\u5b58\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u7136\u540e\u66f4\u65b0 L1 \u7f13\u5b58\uff0c\u5f53 L2 \u7f13\u5b58\u4e5f\u5931\u6548\u65f6\u624d\u4f1a\u518d\u6b21\u8bf7\u6c42\u63a5\u53e3\u3002"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n  A[\u7528\u6237\u8bf7\u6c42] --\x3e B{\u68c0\u67e5L1\u7f13\u5b58}\n  B --\x3e|\u547d\u4e2d| C[\u8fd4\u56de\u6570\u636e]\n  B --\x3e|\u672a\u547d\u4e2d| D{\u68c0\u67e5L2\u7f13\u5b58}\n  D --\x3e|\u547d\u4e2d| E[\u66f4\u65b0L1\u7f13\u5b58]\n  E --\x3e C\n  D --\x3e|\u672a\u547d\u4e2d| F[\u8bf7\u6c42API\u63a5\u53e3]\n  F --\x3e G[\u66f4\u65b0L2\u7f13\u5b58]\n  G --\x3e E\n  C --\x3e H[\u7ed3\u675f]\n\n  style F stroke-width:8px"}),"\n",(0,r.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef-1",children:"\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5ba2\u6237\u7aef\u4e2d\uff0c\u5f53\u8fd8\u672a\u8fc7\u671f\u7684\u7f13\u5b58\u5373\u4f7f\u5237\u65b0\u9875\u9762\u7f13\u5b58\u4e5f\u4e0d\u4f1a\u5931\u6548\uff0c\u5b83\u4e00\u822c\u7528\u4e8e\u4e00\u4e9b\u9700\u8981\u670d\u52a1\u7aef\u7ba1\u7406\uff0c\u4f46\u57fa\u672c\u4e0d\u53d8\u7684\u6570\u636e\uff0c\u5982\u6bcf\u5e74\u7684\u8282\u5047\u65e5\u5177\u4f53\u65e5\u671f\u6709\u6240\u4e0d\u540c\uff0c\u4f46\u4e0d\u4f1a\u518d\u53d8\u52a8\uff0c\u8fd9\u79cd\u573a\u666f\u4e0b\u6211\u4eec\u53ea\u9700\u8bbe\u7f6e\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\u4e3a\u4eca\u5e74\u7684\u6700\u540e\u4e00\u523b\u5373\u53ef\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u4e2d\u4f7f\u7528 alova \u65f6\u9ed8\u8ba4\u4f7f\u7528",(0,r.jsx)(n.code,{children:"localStorage"}),"\u4f5c\u4e3a L2 \u5b58\u50a8\u9002\u914d\u5668\uff0c\u4f60\u4e5f\u53ef\u4ee5",(0,r.jsx)(n.a,{href:"/tutorial/advanced/custom/storage-adapter",children:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 method \u5b9e\u4f8b\u4e0a\u8bbe\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\n  // ...\n  // highlight-start\n  cacheFor: {\n    // \u8bbe\u7f6e\u7f13\u5b58\u6a21\u5f0f\u4e3a\u6301\u4e45\u5316\u6a21\u5f0f\n    mode: 'restore',\n    // \u7f13\u5b58\u65f6\u95f4\n    expire: 60 * 10 * 1000\n  }\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u6570\u636e\u6709\u53d8\u600e\u4e48\u529e",children:"\u6570\u636e\u6709\u53d8\u600e\u4e48\u529e\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u8bbe\u7f6e\u4e86\u6062\u590d\u6a21\u5f0f\u7684 method \u5b9e\u4f8b\uff0c\u53ef\u80fd\u7531\u4e8e\u63a5\u53e3\u6570\u636e\u53d8\u52a8\uff0c\u6216\u524d\u7aef\u5904\u7406\u54cd\u5e94\u6570\u636e\u7684\u903b\u8f91\u53d8\u52a8\uff0c\u6b64\u65f6\u9700\u8981\u5728\u53d1\u5e03\u5e94\u7528\u540e\u8ba9\u7528\u6237\u91cd\u65b0\u7f13\u5b58\u53d8\u52a8\u540e\u7684\u6570\u636e\uff0c\u6b64\u65f6\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"tag"}),"\u5c5e\u6027\u8bbe\u7f6e\u7f13\u5b58\u6807\u7b7e\uff0c\u6bcf\u4e00\u4efd\u6301\u4e45\u5316\u6570\u636e\u90fd\u5305\u542b\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"tag"}),"\u6807\u8bc6\uff0c\u5f53",(0,r.jsx)(n.code,{children:"tag"}),"\u6539\u53d8\u540e\u539f\u6709\u7684\u6301\u4e45\u5316\u6570\u636e\u5c06\u4f1a\u5931\u6548\uff0c\u5e76\u91cd\u65b0\u83b7\u53d6\u65b0\u7684\u6570\u636e\uff0c\u5e76\u7528\u65b0\u7684",(0,r.jsx)(n.code,{children:"tag"}),"\u8fdb\u884c\u6807\u8bc6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\n  // ...\n  cacheFor: {\n    mode: 'restore',\n    expire: 60 * 10 * 1000,\n\n    // highlight-start\n    // \u65b0\u589e\u6216\u4fee\u6539tag\u53c2\u6570\uff0c\u5df2\u7f13\u5b58\u7684\u6570\u636e\u5c06\u5931\u6548\n    // \u5efa\u8bae\u4f7f\u7528\u7248\u672c\u53f7\u7684\u5f62\u5f0f\u7ba1\u7406\n    tag: 'v1'\n    // highlight-end\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u670d\u52a1\u7aef-1",children:"\u670d\u52a1\u7aef"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u822c\u7528\u4e8e\u591a\u7ea7\u7f13\u5b58\uff0c\u4f7f\u7528 L1 \u4f5c\u4e3a\u5185\u5b58\u7f13\u5b58\uff0cL2 \u4f5c\u4e3a\u6301\u4e45\u5316\u7f13\u5b58\uff0c\u4f8b\u5982 redis\u3001memcached\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u90e8\u5206\u5e94\u7528\u573a\u666f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u9ad8\u8bbf\u95ee\u9891\u7387\u548c\u4f4e\u5ef6\u8fdf\u9700\u6c42\uff1a\u4f8b\u5982\u70ed\u95e8\u65b0\u95fb\u3001\u5546\u54c1\u8be6\u60c5\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u51cf\u5c11\u7f51\u7edc\u5f00\u9500\uff0c\u5728\u7f51\u7edc\u4e0d\u7a33\u5b9a\u65f6\u4e5f\u4fdd\u6301\u66f4\u5feb\u7684\u54cd\u5e94\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u51cf\u8f7b\u4e0b\u6e38\u670d\u52a1\u5668\u538b\u529b\uff0c\u4f8b\u5982\u6709\u8bbf\u95ee\u9ad8\u5cf0\u671f\u7684\u670d\u52a1\uff0c\u4e0a\u5c42\u7f13\u5b58\u53ef\u4ee5\u6709\u6548\u51cf\u5c11\u5bf9\u540e\u7aef\u6570\u636e\u5e93\u548c\u5fae\u670d\u52a1\u7684\u538b\u529b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6574\u5408\u591a\u4e2a\u4e0b\u6e38\u670d\u52a1\u5668\u7684\u6570\u636e\u5408\u5e76\u548c\u5904\u7406\uff0c\u591a\u4e2a\u4e32\u884c\u8bf7\u6c42\u53ef\u80fd\u5bfc\u81f4\u66f4\u957f\u7684\u54cd\u5e94\u65f6\u95f4\uff0c\u4e5f\u53ef\u80fd\u56e0\u590d\u6742\u7684\u6570\u636e\u8f6c\u6362\u6d88\u8017\u6027\u80fd\uff0c\u53ef\u5c06\u8f6c\u6362\u540e\u7684\u6570\u636e\u8fdb\u884c\u7f13\u5b58\u3002"}),"\n",(0,r.jsx)(n.li,{children:"API \u901f\u7387\u9650\u5236\u548c\u8ba1\u8d39\uff0c\u5929\u6c14\u9884\u62a5\u670d\u52a1 API \u6bcf\u5c0f\u65f6\u66f4\u65b0\u4e00\u6b21\u5929\u6c14\u4fe1\u606f\uff0c\u5730\u7406\u4f4d\u7f6e\u6570\u636e API \u7b49\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u670d\u52a1\u7aef\u4f7f\u7528 alova \u65f6\u9ed8\u8ba4\u6ca1\u6709 L2 \u5b58\u50a8\u9002\u914d\u5668\uff0c\u5728",(0,r.jsx)(n.a,{href:"/tutorial/project/best-practice/l2-storage",children:"\u670d\u52a1\u7aef L2 \u5b58\u50a8\u5b9e\u8df5"}),"\u4e2d\u5206\u522b\u63d0\u4f9b\u4e86\u6587\u4ef6\u5b58\u50a8\u9002\u914d\u5668\u548c redis \u9002\u914d\u5668\u7684\u5b9e\u73b0\u3002\u4f60\u4e5f\u53ef\u4ee5",(0,r.jsx)(n.a,{href:"/tutorial/advanced/custom/storage-adapter",children:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668"}),"\uff0c\u4f8b\u5982\u5c06 MongoDB\u3001mysql \u7b49\u6570\u636e\u5e93\u4f5c\u4e3a\u54cd\u5e94\u6570\u636e\u7684\u5b58\u50a8\u9002\u914d\u5668\u3002"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u5f53 request body \u662f",(0,r.jsx)(n.strong,{children:"FormData"}),"\u3001",(0,r.jsx)(n.strong,{children:"Blob"}),"\u3001",(0,r.jsx)(n.strong,{children:"ArrayBuffer"}),"\u3001",(0,r.jsx)(n.strong,{children:"URLSearchParams"}),"\u3001",(0,r.jsx)(n.strong,{children:"ReadableStream"}),"\u7b49\u7279\u6b8a\u6570\u636e\u65f6\uff0c\u5c06\u4f1a\u88ab\u8ba4\u4e3a\u4f60\u662f\u6709\u610f\u56fe\u548c\u670d\u52a1\u7aef\u901a\u4fe1\u7684\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u8fdb\u884c\u7f13\u5b58\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e-alova-id",children:"\u8bbe\u7f6e alova id"}),"\n",(0,r.jsx)(n.p,{children:"\u6bcf\u4e2a\u7f13\u5b58 key \u4e2d\u90fd\u5e26\u6709 alova \u5b9e\u4f8b\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cacheKey = [prefix][alova-id][method-json-string]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b[alova-id]\u6309 alova \u521b\u5efa\u987a\u5e8f\u9012\u589e\uff0c\u5728\u670d\u52a1\u7aef\u73af\u5883\u4e0b\u4f7f\u7528\u4e86\u6301\u4e45\u5316\u7f13\u5b58\u65f6\uff0c\u5f3a\u70c8\u5efa\u8bae\u8bbe\u7f6e alova id \u56fa\u5b9a\u7f13\u5b58 key \u7684\u547d\u540d\u7a7a\u95f4\uff0c",(0,r.jsx)(n.strong,{children:"\u8fd9\u4e2a\u5c24\u4e3a\u91cd\u8981"}),"\uff0c\u5426\u5219\u53ef\u80fd\u56e0\u4e3a\u591a\u4e2a alova \u5b9e\u4f8b\u521b\u5efa\u7684\u987a\u5e8f\u53d8\u52a8\uff0c\u800c\u5bfc\u81f4\u800c\u65e0\u6cd5\u5339\u914d\u5bf9\u5e94\u7684\u7f13\u5b58\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const userAlova = createAlova({\n  // ...\n  id: 'user'\n});\n\nconst orderAlova = createAlova({\n  // ...\n  id: 'order'\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5168\u5c40\u8bbe\u7f6e\u7f13\u5b58\u6a21\u5f0f",children:"\u5168\u5c40\u8bbe\u7f6e\u7f13\u5b58\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u9700\u8981\u5168\u5c40\u8bbe\u7f6e\u7f13\u5b58\u6a21\u5f0f\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u65b9\u5f0f\u505a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  cacheFor: {\n    // \u7edf\u4e00\u8bbe\u7f6ePOST\u7684\u7f13\u5b58\u6a21\u5f0f\n    POST: {\n      mode: 'restore',\n      expire: 60 * 10 * 1000\n    },\n    // \u7edf\u4e00\u8bbe\u7f6eHEAD\u8bf7\u6c42\u7684\u7f13\u5b58\u6a21\u5f0f\n    HEAD: 60 * 10 * 1000\n  }\n  // highlight-end\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u540e\uff0c\u901a\u8fc7",(0,r.jsx)(n.code,{children:"alovaInstance"}),"\u5b9e\u4f8b\u521b\u5efa\u7684 method \u5b9e\u4f8b\uff0c\u90fd\u5c06\u9ed8\u8ba4\u4f7f\u7528\u8fd9\u4efd\u7f13\u5b58\u8bbe\u7f6e\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u5728 method \u5b9e\u4f8b\u4e2d\u8986\u76d6\u5b83\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5168\u5c40\u5173\u95ed\u7f13\u5b58\u6a21\u5f0f",children:"\u5168\u5c40\u5173\u95ed\u7f13\u5b58\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4e0d\u5e0c\u671b\u4f7f\u7528\u4efb\u4f55\u8bf7\u6c42\u7f13\u5b58\uff0c\u53ef\u4ee5\u5728\u5168\u5c40\u5c06\u5b83\u5173\u95ed\uff0c\u5982\u679c\u5e0c\u671b\u53ea\u5728\u7279\u5b9a\u7684\u51e0\u4e2a\u8bf7\u6c42\u4e2d\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5168\u5c40\u5173\u95ed\u5b83\uff0c\u5e76\u5728\u6307\u5b9a\u7684 method \u5b9e\u4f8b\u4e2d\u8bbe\u7f6e\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  // \u8bbe\u7f6e\u4e3anull\u5373\u53ef\u5168\u5c40\u5173\u95ed\u5168\u90e8\u8bf7\u6c42\u7f13\u5b58\n  cacheFor: null\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e\u4e0d\u540c\u7684\u8fc7\u671f\u65f6\u95f4",children:"\u8bbe\u7f6e\u4e0d\u540c\u7684\u8fc7\u671f\u65f6\u95f4"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6062\u590d\u6a21\u5f0f\u4e0b\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5bf9 L1 \u548c L2 \u7f13\u5b58\u8bbe\u7f6e\u4e0d\u540c\u7684\u8fc7\u671f\u65f6\u95f4\u3002\u5c06",(0,r.jsx)(n.code,{children:"expire"}),"\u8bbe\u7f6e\u4e3a\u51fd\u6570\uff0c\u5b83\u5c06\u4f1a\u5728\u8bbe\u7f6e L1 \u548c L2 \u7f13\u5b58\u65f6\u5206\u522b\u88ab\u8c03\u7528\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u8bbe\u7f6e\u5355\u4e2a\u8bf7\u6c42\u7684\u4e0d\u540c\u8fc7\u671f\u65f6\u95f4\u7684\u793a\u4f8b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"alovaInst.Get('/user/profile', {\n  // ...\n  cacheFor: {\n    mode: 'restore',\n    expire: ({ method, mode }) => {\n      // \u5728l1\u7f13\u5b58\u8bbe\u7f6e5\u5206\u949f\u7f13\u5b58\uff0c\u5728l2\u7f13\u5b58\u8bbe\u7f6e1\u5929\u7f13\u5b58\n      return mode === 'memory' ? 5 * 60 : 24 * 60 * 60;\n    }\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u5168\u5c40\u8bbe\u7f6e GET \u8bf7\u6c42\u7684\u4e0d\u540c\u8fc7\u671f\u65f6\u95f4\u7684\u793a\u4f8b\uff0c\u5f53 method \u7684\u5143\u6570\u636e\u5e26\u6709",(0,r.jsx)(n.code,{children:"setDiffExpire"}),"\u6807\u8bc6\u65f6\u8bbe\u7f6e\u4e0d\u540c\u7684\u8fc7\u671f\u65f6\u95f4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const alovaInst = createAlova({\n  // ...\n  cacheFor: {\n    GET: {\n      mode: 'restore',\n      expire: ({ method, mode }) => {\n        if (method.meta.setDiffExpire) {\n          // \u5728l1\u7f13\u5b58\u8bbe\u7f6e5\u5206\u949f\u7f13\u5b58\uff0c\u5728l2\u7f13\u5b58\u8bbe\u7f6e1\u5929\u7f13\u5b58\n          return mode === 'memory' ? 5 * 60 : 24 * 60 * 60;\n        }\n        return 5 * 60;\n      }\n    }\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8fc7\u671f\u65f6\u95f4\u7c7b\u578b",children:"\u8fc7\u671f\u65f6\u95f4\u7c7b\u578b"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fc7\u671f\u65f6\u95f4\u6709\u4e24\u79cd\u7c7b\u578b\u53ef\u4f9b\u9009\u62e9\uff0c\u5206\u522b\u4e3a ",(0,r.jsx)(n.strong,{children:"\u76f8\u5bf9\u65f6\u95f4"})," \u548c ",(0,r.jsx)(n.strong,{children:"\u7edd\u5bf9\u65f6\u95f4"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u76f8\u5bf9\u65f6\u95f4",children:"\u76f8\u5bf9\u65f6\u95f4"}),"\n",(0,r.jsxs)(n.p,{children:["\u5373\u5728\u4fdd\u5b58\u7f13\u5b58\u6570\u636e\u65f6\u5f00\u59cb\uff0c\u8fc7\u671f\u7684\u65f6\u957f\uff0c\u4ee5 ",(0,r.jsx)(n.strong,{children:"\u6beb\u79d2"})," \u4e3a\u5355\u4f4d\uff0c\u4ee5\u4e0a\u793a\u4f8b\u5747\u4e3a\u6b64\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cacheFor: 60 * 10 * 1000;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cacheFor: {\n  expire: 60 * 10 * 1000,\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7edd\u5bf9\u65f6\u95f4",children:"\u7edd\u5bf9\u65f6\u95f4"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e00\u4e2a\u5177\u4f53\u65f6\u95f4\u70b9\u4e3a\u8fc7\u671f\u65f6\u95f4\uff0c\u7f13\u5b58\u5c06\u5728\u8bbe\u5b9a\u7684\u65f6\u95f4\u70b9\u8fc7\u671f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cacheFor: new Date('2030-01-01');\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"cacheFor: {\n  expire: new Date('2030-01-01');\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u54cd\u5e94\u81ea\u52a8\u7ef4\u62a4\u8bf4\u660e",children:"\u54cd\u5e94\u81ea\u52a8\u7ef4\u62a4\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u54cd\u5e94\u6570\u636e\u7f13\u5b58\u7684 key \u662f\u7531 method \u5b9e\u4f8b\u7684\u8bf7\u6c42\u65b9\u6cd5(method)\u3001\u8bf7\u6c42\u5730\u5740(url)\u3001\u8bf7\u6c42\u5934\u53c2\u6570(headers)\u3001url \u53c2\u6570(params)\u3001\u8bf7\u6c42\u4f53\u53c2\u6570(requestBody)\u7ec4\u5408\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\uff0c\u4efb\u610f\u4e00\u4e2a\u4fe1\u606f\u6216\u4f4d\u7f6e\u4e0d\u540c\u90fd\u5c06\u88ab\u5f53\u505a\u4e0d\u540c\u7684 key\uff0c\u5982\u679c\u8981\u81ea\u5b9a\u4e49\u7f13\u5b58 key\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.jsx)(n.a,{href:"/tutorial/advanced/in-depth/custom-method-key",children:"\u81ea\u5b9a\u4e49 method key"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},22778:(e,n,a)=>{a.d(n,{Z:()=>s});var r=a(93894),l=(a(67294),a(85893));const s=()=>(0,l.jsx)(r.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/memory-cache?embed=1&file=%2Fsrc%2FApp.vue"})},24243:(e,n,a)=>{a.d(n,{Z:()=>s});var r=a(93894),l=(a(67294),a(85893));const s=()=>(0,l.jsx)(r.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/storage-placeholder?embed=1&file=%2Fsrc%2FApp.vue"})},20718:(e,n,a)=>{a.d(n,{Z:()=>s});var r=a(93894),l=(a(67294),a(85893));const s=()=>(0,l.jsx)(r.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/storage-restore?embed=1&file=%2Fsrc%2FApp.vue"})},93894:(e,n,a)=>{a.d(n,{Z:()=>c});var r=a(33692),l=a(95999),s=a(85893);const c=e=>{let{src:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)("iframe",{src:n,style:{width:"100%",height:"1000px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.jsx)(r.Z,{to:n,children:(0,s.jsx)(l.Z,{id:"example.open in new tab",children:"Encounter troubles? Click to open this in new page."})})]})}},11151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>c});var r=a(67294);const l={},s=r.createContext(l);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);