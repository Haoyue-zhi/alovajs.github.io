"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8036],{9724:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=r(5893),o=r(1151),s=r(4866),a=r(5162);const l={title:"Token\u8ba4\u8bc1\u62e6\u622a\u5668",sidebar_position:40},i=void 0,c={id:"tutorial/strategy/tokenAuthentication",title:"Token\u8ba4\u8bc1\u62e6\u622a\u5668",description:"\u7b56\u7565\u7c7b\u578b\uff1a\u62e6\u622a\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/05-strategy/04-tokenAuthentication.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/tokenAuthentication",permalink:"/zh-CN/tutorial/strategy/tokenAuthentication",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-strategy/04-tokenAuthentication.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Token\u8ba4\u8bc1\u62e6\u622a\u5668",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\u8868\u5355\u63d0\u4ea4\u7b56\u7565",permalink:"/zh-CN/tutorial/strategy/useForm"},next:{title:"\u901a\u7528\u7684\u4e0a\u4f20\u7b56\u7565",permalink:"/zh-CN/tutorial/strategy/useUploader"}},h={},d=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7ed1\u5b9a Token \u8ba4\u8bc1\u62e6\u622a\u5668",id:"\u7ed1\u5b9a-token-\u8ba4\u8bc1\u62e6\u622a\u5668",level:2},{value:"\u7ed1\u5b9a\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u7684\u62e6\u622a\u5668",id:"\u7ed1\u5b9a\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u7684\u62e6\u622a\u5668",level:3},{value:"\u7ed1\u5b9a\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668",id:"\u7ed1\u5b9a\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668",level:3},{value:"\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0 Token",id:"\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0-token",level:2},{value:"\u5728\u670d\u52a1\u7aef\u65e0\u611f\u5237\u65b0 Token",id:"\u5728\u670d\u52a1\u7aef\u65e0\u611f\u5237\u65b0-token",level:2},{value:"\u5728\u8bf7\u6c42\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406",id:"\u5728\u8bf7\u6c42\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406",level:3},{value:"\u5728\u8bf7\u6c42\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406",id:"\u5728\u8bf7\u6c42\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406",level:3},{value:"\u653e\u884c\u8bbf\u5ba2\u8bf7\u6c42",id:"\u653e\u884c\u8bbf\u5ba2\u8bf7\u6c42",level:2},{value:"\u767b\u5f55\u62e6\u622a",id:"\u767b\u5f55\u62e6\u622a",level:2},{value:"\u9644\u52a0 token",id:"\u9644\u52a0-token",level:2},{value:"\u767b\u51fa\u62e6\u622a",id:"\u767b\u51fa\u62e6\u622a",level:2},{value:"\u81ea\u5b9a\u4e49\u6807\u8bc6\u8eab\u4efd",id:"\u81ea\u5b9a\u4e49\u6807\u8bc6\u8eab\u4efd",level:2},{value:"token \u5237\u65b0\u8eab\u4efd\u6807\u8bc6",id:"token-\u5237\u65b0\u8eab\u4efd\u6807\u8bc6",level:3},{value:"\u8bbf\u5ba2\u8eab\u4efd\u6807\u8bc6",id:"\u8bbf\u5ba2\u8eab\u4efd\u6807\u8bc6",level:3},{value:"\u767b\u5f55\u8eab\u4efd\u6807\u8bc6",id:"\u767b\u5f55\u8eab\u4efd\u6807\u8bc6",level:3},{value:"\u767b\u51fa\u8eab\u4efd\u6807\u8bc6",id:"\u767b\u51fa\u8eab\u4efd\u6807\u8bc6",level:3},{value:"Typescript",id:"typescript",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"\u7b56\u7565\u7c7b\u578b\uff1a\u62e6\u622a\u5668"}),(0,t.jsx)(n.p,{children:"\u7248\u672c\u8981\u6c42\uff1av1.3.0+"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Token \u8ba4\u8bc1\u62e6\u622a\u5668\uff0c\u5bf9\u57fa\u4e8e token \u7684\u767b\u5f55\u3001\u767b\u51fa\u3001token \u9644\u5e26\u3001token \u5237\u65b0\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u5e76\u652f\u6301\u65e0\u611f\u5237\u65b0 token\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u2728 \u7edf\u4e00\u7ef4\u62a4 Token \u8eab\u4efd\u8ba4\u8bc1\u7684\u6240\u6709\u4ee3\u7801\uff0c\u5305\u62ec\u767b\u5f55\u3001\u767b\u51fa\u3001token \u9644\u5e26\u3001token \u5237\u65b0\u7b49\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u2728 \u652f\u6301\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u9a8c\u8bc1 token \u8fc7\u671f\uff0c\u5e76\u65e0\u611f\u5237\u65b0 token\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u2728 \u4f9d\u8d56 token \u7684\u8bf7\u6c42\u81ea\u52a8\u7b49\u5f85 token \u5237\u65b0\u5b8c\u6210\u518d\u8bf7\u6c42\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u2728 \u4f7f\u7528\u5143\u6570\u636e\u8bbe\u7f6e\u8bf7\u6c42\u8eab\u4efd\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u2728 \u81ea\u52a8\u653e\u884c\u4e0d\u4f9d\u8d56 token \u7684\u8bbf\u5ba2\u8bf7\u6c42\uff1b"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(s.Z,{groupId:"framework",children:[(0,t.jsx)(a.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-vue --save\r\n# yarn\r\nyarn add @alova/scene-vue\r\n\n"})})}),(0,t.jsx)(a.Z,{value:"2",label:"react",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-react --save\r\n# yarn\r\nyarn add @alova/scene-react\r\n\n"})})}),(0,t.jsx)(a.Z,{value:"3",label:"svelte",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-svelte --save\r\n# yarn\r\nyarn add @alova/scene-svelte\r\n\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u6240\u6709\u62e6\u622a\u5668\u90fd\u662f\u53ef\u9009\u7684\uff0c\u53ea\u9700\u8981\u9009\u62e9\u9700\u8981\u4f7f\u7528\u7684\u5373\u53ef\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7ed1\u5b9a-token-\u8ba4\u8bc1\u62e6\u622a\u5668",children:"\u7ed1\u5b9a Token \u8ba4\u8bc1\u62e6\u622a\u5668"}),"\n",(0,t.jsxs)(n.p,{children:["Token \u8eab\u4efd\u8ba4\u8bc1\u662f\u901a\u8fc7\u5168\u5c40\u7684\u62e6\u622a\u5668\u5b8c\u6210\u7684\uff0c\u5206\u522b\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"createClientTokenAuthentication"}),"\u548c",(0,t.jsx)(n.code,{children:"createServerTokenAuthentication"})," \u7528\u4e8e\u57fa\u4e8e\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\uff1a\u8868\u793a\u4ece\u5ba2\u6237\u7aef\u5224\u65ad token \u662f\u5426\u8fc7\u671f\uff0c\u4f8b\u5982\u5728\u767b\u5f55\u65f6\u83b7\u53d6\u5230\u7684 token \u8fc7\u671f\u65f6\u95f4\uff1b"}),"\n",(0,t.jsxs)(n.li,{children:["\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\uff1a\u8868\u793a\u4ece\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u72b6\u6001\u5224\u65ad token \u662f\u5426\u8fc7\u671f\uff0c\u4f8b\u5982",(0,t.jsx)(n.code,{children:"status"}),"\u4e3a 401 \u65f6\u8868\u793a\u8fc7\u671f\uff1b"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7ed1\u5b9a\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u7684\u62e6\u622a\u5668",children:"\u7ed1\u5b9a\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u7684\u62e6\u622a\u5668"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { createClientTokenAuthentication } from '@alova/scene-*';\r\nimport { createAlova } from 'alova';\r\n\r\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication({\r\n  // ...\r\n});\r\n\r\nconst alovaInstance = createAlova({\r\n  // ...\r\n  beforeRequest: onAuthRequired(method => {\r\n    // ...\u539f\u8bf7\u6c42\u524d\u62e6\u622a\u5668\r\n  }),\r\n  responded: onResponseRefreshToken((response, method) => {\r\n    //...\u539f\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\r\n    return response.json();\r\n  })\r\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"onResponseRefreshToken"}),"\u4e2d\u4e5f\u53ef\u4ee5\u7ed1\u5b9a\u54cd\u5e94\u9519\u8bef\u548c\u5b8c\u6210\u7684\u62e6\u622a\u5668\uff0c\u4e5f\u548c\u539f\u6765\u7684\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createAlova({\r\n  // ...\r\n  // highlight-start\r\n  responded: onResponseRefreshToken({\r\n    onSuccess: (response, method) => {\r\n      //...\u539f\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\r\n    },\r\n    onError: (error, method) => {\r\n      //...\u539f\u54cd\u5e94\u9519\u8bef\u62e6\u622a\u5668\r\n    },\r\n    onComplete: method => {\r\n      //...\u539f\u54cd\u5e94\u5b8c\u6210\u62e6\u622a\u5668\r\n    }\r\n  })\r\n  // highlight-end\r\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u9700\u8981\u8bbe\u7f6e\u62e6\u622a\u5668\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u4f20\u5165\u62e6\u622a\u5668\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createAlova({\r\n  //...\r\n  // highlight-start\r\n  beforeRequest: onAuthRequired(),\r\n  responded: onResponseRefreshToken()\r\n  // highlight-end\r\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u7ed1\u5b9a\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668",children:"\u7ed1\u5b9a\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0e\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u7528\u6cd5\u76f8\u540c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { createServerTokenAuthentication } from '@alova/scene-*';\r\nimport { createAlova } from 'alova';\r\n\r\nconst { onAuthRequired, onResponseRefreshToken } = createServerTokenAuthentication({\r\n  // ...\r\n});\r\n\r\nconst alovaInstance = createAlova({\r\n  // ...\r\n  beforeRequest: onAuthRequired(method => {\r\n    // ...\u539f\u8bf7\u6c42\u524d\u62e6\u622a\u5668\r\n  }),\r\n  responded: onResponseRefreshToken((response, method) => {\r\n    //...\u539f\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\r\n    return response.json();\r\n  })\r\n});\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["\u5f53\u4f60\u4f7f\u7528",(0,t.jsx)(n.code,{children:"GlobalFetch"}),"\u9002\u914d\u5668\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230",(0,t.jsx)(n.code,{children:"TypeError: Failed to execute 'json' on 'Response': body stream already read"}),"\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,t.jsx)(n.code,{children:"Response"}),"\u7684",(0,t.jsx)(n.code,{children:"body stream"}),"\u53ea\u80fd\u8bbf\u95ee\u4e00\u6b21\uff0c\u4f60\u53ef\u4ee5",(0,t.jsx)(n.code,{children:"response.clone().json()"}),"\u6765\u89e3\u51b3\u5b83\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0-token",children:"\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0 Token"}),"\n",(0,t.jsxs)(n.p,{children:["\u8bbe\u7f6e",(0,t.jsx)(n.code,{children:"refreshToken"}),"\u5e76\u6307\u5b9a token \u662f\u5426\u8fc7\u671f\uff0c\u4ee5\u53ca\u8c03\u7528\u5237\u65b0 token \u7684\u51fd\u6570\u5c31\u53ef\u4ee5\u4e86\u3002\u5f53 token \u5237\u65b0\u5b8c\u6210\u524d\uff0c\u6240\u6709\u4f9d\u8d56 token \u7684\u8bf7\u6c42\u90fd\u5c06\u4f1a\u7b49\u5f85 token \u5237\u65b0\u5b8c\u6210\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  refreshToken: {\r\n    // \u5728\u8bf7\u6c42\u524d\u89e6\u53d1\uff0c\u5c06\u63a5\u6536\u5230method\u53c2\u6570\uff0c\u5e76\u8fd4\u56deboolean\u8868\u793atoken\u662f\u5426\u8fc7\u671f\r\n    isExpired: method => {\r\n      return tokenExpireTime < Date.now();\r\n    },\r\n\r\n    // \u5f53token\u8fc7\u671f\u65f6\u89e6\u53d1\uff0c\u5728\u6b64\u51fd\u6570\u4e2d\u89e6\u53d1\u5237\u65b0token\r\n    handler: async method => {\r\n      try {\r\n        const { token, refresh_token } = await refreshToken();\r\n        localStorage.setItem('token', token);\r\n        localStorage.setItem('refresh_token', refresh_token);\r\n      } catch (error) {\r\n        // token\u5237\u65b0\u5931\u8d25\uff0c\u8df3\u8f6c\u56de\u767b\u5f55\u9875\r\n        location.href = '/login';\r\n        // \u5e76\u629b\u51fa\u9519\u8bef\r\n        throw error;\r\n      }\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"warning",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e3a\u4e86\u8ba9",(0,t.jsx)(n.code,{children:"refreshToken"}),"\u8bf7\u6c42\u987a\u5229\u901a\u8fc7\uff0c\u9700\u8981\u901a\u8fc7\u5143\u6570\u636e\u6807\u8bc6",(0,t.jsx)(n.code,{children:"authRole"}),"\u4e3a",(0,t.jsx)(n.code,{children:"refreshToken"}),"\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679ctoken\u5237\u65b0\u5931\u8d25\u5fc5\u987b\u629b\u51fa\u9519\u8bef\uff0c\u963b\u6b62\u5931\u8d25\u63a5\u53e3\u91cd\u8bd5\u548c\u7b49\u5f85\u63a5\u53e3\u7ee7\u7eed\u8bf7\u6c42\u3002"}),"\n"]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\u5143\u6570\u636e\u7684\u4fe1\u606f\uff0c\u8bf7\u524d\u5f80",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/method-metadata",children:"method \u5143\u6570\u636e"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\r\n  const method = alovaInstance.Get('/refresh_token');\r\n  method.meta = {\r\n    authRole: 'refreshToken'\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5728\u670d\u52a1\u7aef\u65e0\u611f\u5237\u65b0-token",children:"\u5728\u670d\u52a1\u7aef\u65e0\u611f\u5237\u65b0 Token"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0e\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0 Token \u76f8\u540c\uff0c\u6307\u5b9a token \u662f\u5426\u8fc7\u671f\uff0c\u4ee5\u53ca\u8c03\u7528\u5237\u65b0 token \u7684\u51fd\u6570\u5c31\u53ef\u4ee5\u4e86\u3002\u5f53 token \u5237\u65b0\u5b8c\u6210\u524d\uff0c\u6240\u6709\u4f9d\u8d56 token \u7684\u8bf7\u6c42\u90fd\u5c06\u4f1a\u7b49\u5f85 token \u5237\u65b0\u5b8c\u6210\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u5728\u8bf7\u6c42\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406",children:"\u5728\u8bf7\u6c42\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528",(0,t.jsx)(n.code,{children:"GlobalFetch"}),"\u65f6\uff0c\u53ea\u8981\u670d\u52a1\u7aef\u8fd4\u56de\u4e86\u54cd\u5e94\u6570\u636e\uff0c\u5c31\u4f1a\u89e6\u53d1\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u5728\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406 token \u7684\u5237\u65b0\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\r\n  refreshTokenOnSuccess: {\r\n    // \u54cd\u5e94\u65f6\u89e6\u53d1\uff0c\u53ef\u83b7\u53d6\u5230response\u548cmethod\uff0c\u5e76\u8fd4\u56deboolean\u8868\u793atoken\u662f\u5426\u8fc7\u671f\r\n    // \u5f53\u670d\u52a1\u7aef\u8fd4\u56de401\u65f6\uff0c\u8868\u793atoken\u8fc7\u671f\r\n    isExpired: (response, method) => {\r\n      return response.status === 401;\r\n    },\r\n\r\n    // \u5f53token\u8fc7\u671f\u65f6\u89e6\u53d1\uff0c\u5728\u6b64\u51fd\u6570\u4e2d\u89e6\u53d1\u5237\u65b0token\r\n    handler: async (response, method) => {\r\n      try {\r\n        const { token, refresh_token } = await refreshToken();\r\n        localStorage.setItem('token', token);\r\n        localStorage.setItem('refresh_token', refresh_token);\r\n      } catch (error) {\r\n        // token\u5237\u65b0\u5931\u8d25\uff0c\u8df3\u8f6c\u56de\u767b\u5f55\u9875\r\n        location.href = '/login';\r\n        // \u5e76\u629b\u51fa\u9519\u8bef\r\n        throw error;\r\n      }\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5728\u8bf7\u6c42\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406",children:"\u5728\u8bf7\u6c42\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528",(0,t.jsx)(n.code,{children:"axios"}),"\u62e6\u622a\u5668\u65f6\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u4e86\u975e",(0,t.jsx)(n.code,{children:"200/300"}),"\u7684\u72b6\u6001\u7801\u5c31\u4f1a\u89e6\u53d1\u54cd\u5e94\u9519\u8bef\u62e6\u622a\u5668\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u5728\u54cd\u5e94\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406 token \u7684\u5237\u65b0\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\r\n  refreshTokenOnError: {\r\n    // \u54cd\u5e94\u65f6\u89e6\u53d1\uff0c\u53ef\u83b7\u53d6\u5230error\u548cmethod\uff0c\u5e76\u8fd4\u56deboolean\u8868\u793atoken\u662f\u5426\u8fc7\u671f\r\n    // \u5f53\u670d\u52a1\u7aef\u8fd4\u56de401\u65f6\uff0c\u8868\u793atoken\u8fc7\u671f\r\n    isExpired: (error, method) => {\r\n      return error.response.status === 401;\r\n    },\r\n\r\n    // \u5f53token\u8fc7\u671f\u65f6\u89e6\u53d1\uff0c\u5728\u6b64\u51fd\u6570\u4e2d\u89e6\u53d1\u5237\u65b0token\r\n    handler: async (error, method) => {\r\n      try {\r\n        const { token, refresh_token } = await refreshToken();\r\n        localStorage.setItem('token', token);\r\n        localStorage.setItem('refresh_token', refresh_token);\r\n      } catch (error) {\r\n        // token\u5237\u65b0\u5931\u8d25\uff0c\u8df3\u8f6c\u56de\u767b\u5f55\u9875\r\n        location.href = '/login';\r\n        // \u5e76\u629b\u51fa\u9519\u8bef\r\n        throw error;\r\n      }\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"warning",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e3a\u4e86\u8ba9",(0,t.jsx)(n.code,{children:"refreshToken"}),"\u8bf7\u6c42\u987a\u5229\u901a\u8fc7\uff0c\u9700\u8981\u901a\u8fc7\u5143\u6570\u636e\u6807\u8bc6",(0,t.jsx)(n.code,{children:"authRole"}),"\u4e3a",(0,t.jsx)(n.code,{children:"refreshToken"}),"\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679ctoken\u5237\u65b0\u5931\u8d25\u5fc5\u987b\u629b\u51fa\u9519\u8bef\uff0c\u963b\u6b62\u5931\u8d25\u63a5\u53e3\u91cd\u8bd5\u548c\u7b49\u5f85\u63a5\u53e3\u7ee7\u7eed\u8bf7\u6c42\u3002"}),"\n"]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\u5143\u6570\u636e\u7684\u4fe1\u606f\uff0c\u8bf7\u524d\u5f80",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/method-metadata",children:"method \u5143\u6570\u636e"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\r\n  const method = alovaInstance.Get('/refresh_token');\r\n  method.meta = {\r\n    authRole: 'refreshToken'\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u653e\u884c\u8bbf\u5ba2\u8bf7\u6c42",children:"\u653e\u884c\u8bbf\u5ba2\u8bf7\u6c42"}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u4e9b\u63a5\u53e3\u4e0d\u9700\u8981\u4f9d\u8d56 token \u8ba4\u8bc1\uff0c\u6211\u4eec\u79f0\u5b83\u4eec\u4e3a\u201c\u8bbf\u5ba2\u8bf7\u6c42\u201d\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5b83\u4eec\u7684\u5143\u6570\u636e\u4e3a",(0,t.jsx)(n.code,{children:"authRole: null"}),"\u6765\u7ed5\u8fc7\u524d\u7aef\u7684\u62e6\u622a\uff0c\u8ba9\u5b83\u4eec\u987a\u5229\u53d1\u51fa\u8bf7\u6c42\u548c\u63a5\u6536\u54cd\u5e94\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const requestTokenNotRequired = () => {\r\n  const method = alovaInstance.Get('/token_not_required');\r\n  method.meta = {\r\n    authRole: null\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u767b\u5f55\u62e6\u622a",children:"\u767b\u5f55\u62e6\u622a"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668\u4e2d\uff0c\u4f60\u8fd8\u53ef\u4ee5\u62e6\u622a\u767b\u5f55\u8bf7\u6c42\uff0c\u5728\u62e6\u622a\u5668\u4e2d\u4fdd\u5b58\u767b\u5f55\u4fe1\u606f\uff0c\u8fbe\u5230\u7edf\u4e00\u7ef4\u62a4\u8eab\u4efd\u8ba4\u8bc1\u4ee3\u7801\u7684\u76ee\u7684\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\u6807\u8bc6\u767b\u5f55\u8bf7\u6c42\u7684\u5143\u6570\u636e\u4e3a",(0,t.jsx)(n.code,{children:"authRole: 'login'"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const login = () => {\r\n  const method = alovaInstance.Get('/login');\r\n  method.meta = {\r\n    authRole: 'login'\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u518d\u5728\u767b\u5f55\u62e6\u622a\u5668\u4e2d\u4fdd\u5b58\u767b\u5f55\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  login(response, method) {\r\n    localStorage.setItem('token', response.token);\r\n    localStorage.setItem('refresh_token', response.refresh_token);\r\n  }\r\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u7684\u767b\u5f55\u62e6\u622a\u5668\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9644\u52a0-token",children:"\u9644\u52a0 token"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u6211\u4eec\u4f1a\u5728",(0,t.jsx)(n.code,{children:"beforeRequest"}),"\u9644\u52a0 token \u5230\u8bf7\u6c42\u4fe1\u606f\u4e2d\u3002\u5728 Token \u8ba4\u8bc1\u62e6\u622a\u5668\u4e2d\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"assignToken"}),"\u56de\u8c03\u51fd\u6570\u7528\u4e8e\u9644\u52a0 token\uff0c\u5b83\u4f1a\u8fc7\u6ee4\u8bbf\u5ba2\u8bf7\u6c42\u548c\u767b\u5f55\u8bf7\u6c42\uff0c\u5e76\u5728\u8bf7\u6c42\u524d\u89e6\u53d1\uff0c\u4e5f\u53ef\u4ee5\u8fbe\u5230\u7edf\u4e00\u7ef4\u62a4\u8eab\u4efd\u8ba4\u8bc1\u4ee3\u7801\u7684\u76ee\u7684\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  assignToken: method => {\r\n    method.config.headers.Authorization = localStorage.getItem('token')};\r\n  }\r\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u7684 assignToken \u56de\u8c03\u51fd\u6570\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u767b\u51fa\u62e6\u622a",children:"\u767b\u51fa\u62e6\u622a"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u4f60\u7684\u767b\u51fa\u4e5f\u9700\u8981\u8c03\u7528\u63a5\u53e3\u65f6\uff0c\u4e5f\u53ef\u4ee5\u62e6\u622a\u767b\u51fa\u8bf7\u6c42\uff0c\u6e05\u9664\u767b\u5f55\u4fe1\u606f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\u6807\u8bc6\u767b\u51fa\u8bf7\u6c42\u7684\u5143\u6570\u636e\u4e3a",(0,t.jsx)(n.code,{children:"authRole: 'logout'"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const logout = () => {\r\n  const method = alovaInstance.Get('/logout');\r\n  method.meta = {\r\n    authRole: 'logout'\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u518d\u5728\u767b\u51fa\u62e6\u622a\u5668\u4e2d\u6e05\u9664\u767b\u5f55\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  logout(response, method) {\r\n    localStorage.removeItem('token');\r\n    localStorage.removeItem('refresh_token');\r\n  }\r\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u7684\u767b\u5f55\u62e6\u622a\u5668\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6807\u8bc6\u8eab\u4efd",children:"\u81ea\u5b9a\u4e49\u6807\u8bc6\u8eab\u4efd"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u5143\u6570\u636e\u8eab\u4efd\u6807\u8bc6\u4e2d\uff0c\u5b9e\u9645\u4e0a\u90fd\u9ed8\u8ba4\u7684\u8eab\u4efd\u6807\u8bc6\uff0c\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u8eab\u4efd\u6807\u8bc6\uff0c\u4f60\u53ef\u4ee5\u6309\u4e0b\u9762\u8fd9\u6837\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"token-\u5237\u65b0\u8eab\u4efd\u6807\u8bc6",children:"token \u5237\u65b0\u8eab\u4efd\u6807\u8bc6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  refreshToken: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      refreshToken: true\r\n    }\r\n    // highlight-end\r\n    // ...\r\n  }\r\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\r\n  refreshTokenOnSuccess: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      refreshToken: true\r\n    }\r\n    // highlight-end\r\n    // ...\r\n  },\r\n  refreshTokenOnError: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      refreshToken: true\r\n    }\r\n    // highlight-end\r\n    // ...\r\n  }\r\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5143\u6570\u636e\u4e2d\u5177\u6709",(0,t.jsx)(n.code,{children:"refreshToken: true"}),"\u7684\u8bf7\u6c42\uff0c\u5c31\u4f1a\u88ab\u8ba4\u5b9a\u4e3a",(0,t.jsx)(n.code,{children:"refreshToken"}),"\u8eab\u4efd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\r\n  const method = alovaInstance.Get('/refresh_token');\r\n  method.meta = {\r\n    refreshToken: true\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbf\u5ba2\u8eab\u4efd\u6807\u8bc6",children:"\u8bbf\u5ba2\u8eab\u4efd\u6807\u8bc6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  visitorMeta: {\r\n    isVisitor: true\r\n  }\r\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5143\u6570\u636e\u4e2d\u5177\u6709",(0,t.jsx)(n.code,{children:"isVisitor: true"}),"\u7684\u8bf7\u6c42\uff0c\u5c31\u4f1a\u88ab\u8ba4\u5b9a\u4e3a\u8bbf\u5ba2\u8eab\u4efd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const requestTokenNotRequired = () => {\r\n  const method = alovaInstance.Get('/token_not_required');\r\n  method.meta = {\r\n    isVisitor: true\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u767b\u5f55\u8eab\u4efd\u6807\u8bc6",children:"\u767b\u5f55\u8eab\u4efd\u6807\u8bc6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  login: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      login: true\r\n    },\r\n    // highlight-end\r\n    handler(response, method) {\r\n      // \u767b\u5f55\u62e6\u622a\u5668\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5143\u6570\u636e\u4e2d\u5177\u6709",(0,t.jsx)(n.code,{children:"login: true"}),"\u7684\u8bf7\u6c42\uff0c\u5c31\u4f1a\u88ab\u8ba4\u5b9a\u4e3a",(0,t.jsx)(n.code,{children:"login"}),"\u8eab\u4efd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const login = () => {\r\n  const method = alovaInstance.Get('/login');\r\n  method.meta = {\r\n    login: true\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u767b\u51fa\u8eab\u4efd\u6807\u8bc6",children:"\u767b\u51fa\u8eab\u4efd\u6807\u8bc6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\r\n  logout: {\r\n    // highlight-start\r\n    metaMatches: {\r\n      logout: true\r\n    },\r\n    // highlight-end\r\n    handler(response, method) {\r\n      // \u767b\u51fa\u62e6\u622a\u5668\r\n    }\r\n  }\r\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5143\u6570\u636e\u4e2d\u5177\u6709",(0,t.jsx)(n.code,{children:"logout: true"}),"\u7684\u8bf7\u6c42\uff0c\u5c31\u4f1a\u88ab\u8ba4\u5b9a\u4e3a",(0,t.jsx)(n.code,{children:"logout"}),"\u8eab\u4efd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export const logout = () => {\r\n  const method = alovaInstance.Get('/logout');\r\n  method.meta = {\r\n    logout: true\r\n  };\r\n  return method;\r\n};\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u7684\u767b\u5f55\u62e6\u622a\u5668\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,t.jsx)(n.code,{children:"createClientServerTokenAuthentication"}),"\u548c",(0,t.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u9002\u914d\u4e86",(0,t.jsx)(n.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4f60\u53ea\u9700\u8981\u6307\u5b9a",(0,t.jsx)(n.code,{children:"statesHook"}),"\u7684\u7c7b\u578b\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// highlight-start\r\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication<typeof VueHook>({\r\n  // highlight-end\r\n  //...\r\n});\r\n\r\nconst alovaInstance = createAlova({\r\n  // ...\r\n  statesHook: VueHook,\r\n  beforeRequest: onAuthRequired(method => {\r\n    // method\u7684\u7c7b\u578b\u4e3a Method<any, any, any, any, RequestInit, Response, Headers>\r\n  }),\r\n  responded: onResponseRefreshToken((response, method) => {\r\n    // response\u7684\u7c7b\u578b\u4e3aResponse\r\n    return response.json();\r\n  })\r\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u4e0d\u662f",(0,t.jsx)(n.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4f60\u8fd8\u9700\u8981\u6307\u5b9a\u8bf7\u6c42\u9002\u914d\u5668\u7684\u7c7b\u578b\uff0c\u8fd9\u4e5f\u5f88\u7b80\u5355\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u4e3a axios \u8bf7\u6c42\u9002\u914d\u5668\u4e3a\u4f8b\uff0c\u5728",(0,t.jsx)(n.code,{children:"createClientTokenAuthentication"}),"\u4e2d\u6307\u5b9a\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { axiosRequestAdapter } from '@alova/adapter-axios';\r\n\r\n// highlight-start\r\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication<\r\n  typeof VueHook,\r\n  typeof axiosRequestAdapter\r\n>({\r\n  // highlight-end\r\n  //...\r\n});\r\nconst alovaInstance = createAlova({\r\n  //...\r\n  statesHook: VueHook,\r\n  // highlight-start\r\n  beforeRequest: onAuthRequired(method => {\r\n    // method\u7684\u7c7b\u578b\u4e3a Method<any, any, any, any, AlovaAxiosRequestConfig, AxiosResponse, AxiosResponseHeaders>\r\n    // highlight-end\r\n  }),\r\n  // highlight-start\r\n  responded: onResponseRefreshToken((response, method) => {\r\n    // response\u7684\u7c7b\u578b\u4e3aAxiosResponse\r\n    // highlight-end\r\n    return response.data;\r\n  })\r\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u670d\u52a1\u7aef\u7684 Token \u8ba4\u8bc1\u62e6\u622a\u5668\u7684\u7528\u6cd5\u76f8\u540c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { axiosRequestAdapter } from '@alova/adapter-axios';\r\n\r\n// highlight-start\r\ncreateServerTokenAuthentication<typeof VueHook, typeof axiosRequestAdapter>({\r\n  // highlight-end\r\n  //...\r\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var t=r(512);const o={tabItem:"tabItem_Ymn6"};var s=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,a),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>T});var t=r(7294),o=r(512),s=r(2466),a=r(6550),l=r(469),i=r(1980),c=r(7392),h=r(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const o=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=u(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=x({queryString:r,groupId:o}),[j,k]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,h.Nk)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),m=(()=>{const e=c??j;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,s]),tabValues:s}}var k=r(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const n=e.currentTarget,r=i.indexOf(n),o=l[r].value;o!==t&&(c(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:h,...s,className:(0,o.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function b(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(f,{...e,...n})]})}function T(e){const n=(0,k.Z)();return(0,g.jsx)(b,{...e,children:d(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var t=r(7294);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);