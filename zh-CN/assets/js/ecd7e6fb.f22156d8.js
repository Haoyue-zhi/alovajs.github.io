"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7037],{82263:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var l=i(85893),s=i(11151);const t={title:"\u901a\u7528\u7684\u4e0a\u4f20\u7b56\u7565"},r=void 0,a={id:"tutorial/strategy/useUploader",title:"\u901a\u7528\u7684\u4e0a\u4f20\u7b56\u7565",description:"\u6b64\u7b56\u7565\u6682\u672a\u5b9e\u73b0\uff0c\u4ee5\u4e0b\u4e3a\u8bbe\u8ba1\u6587\u6863",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-v2/tutorial/05-strategy/05-useUploader.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/useUploader",permalink:"/zh-CN/v2/tutorial/strategy/useUploader",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/05-strategy/05-useUploader.md",tags:[],version:"v2",sidebarPosition:5,frontMatter:{title:"\u901a\u7528\u7684\u4e0a\u4f20\u7b56\u7565"},sidebar:"tutorial",previous:{title:"Token\u8ba4\u8bc1\u62e6\u622a\u5668",permalink:"/zh-CN/v2/tutorial/strategy/tokenAuthentication"},next:{title:"\u81ea\u52a8\u62c9\u53d6\u6570\u636e",permalink:"/zh-CN/v2/tutorial/strategy/useAutoRequest"}},o={},d=[{value:"\u529f\u80fd\u9700\u6c42",id:"\u529f\u80fd\u9700\u6c42",level:2},{value:"useUploader \u7684\u5168\u90e8\u53c2\u6570\u4e00\u89c8",id:"useuploader-\u7684\u5168\u90e8\u53c2\u6570\u4e00\u89c8",level:2},{value:"useUploader \u53c2\u6570\u7684\u8be6\u7ec6\u683c\u5f0f\u53ca\u89e3\u91ca",id:"useuploader-\u53c2\u6570\u7684\u8be6\u7ec6\u683c\u5f0f\u53ca\u89e3\u91ca",level:2},{value:"\u8fd4\u56de\u7684\u54cd\u5e94\u5f0f\u72b6\u6001",id:"\u8fd4\u56de\u7684\u54cd\u5e94\u5f0f\u72b6\u6001",level:3},{value:"\u8fd4\u56de\u7684\u64cd\u4f5c\u51fd\u6570",id:"\u8fd4\u56de\u7684\u64cd\u4f5c\u51fd\u6570",level:3},{value:"\u4e8b\u4ef6\u7ed1\u5b9a\u51fd\u6570",id:"\u4e8b\u4ef6\u7ed1\u5b9a\u51fd\u6570",level:3},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"\u6b64\u7b56\u7565\u6682\u672a\u5b9e\u73b0\uff0c\u4ee5\u4e0b\u4e3a\u8bbe\u8ba1\u6587\u6863"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u7b80\u4fbf\u7684\u6587\u4ef6\u4e0a\u4f20\uff0c\u4f20\u5165 base64\u3001file \u5bf9\u8c61\u3001blob \u5bf9\u8c61\u3001arraybuffer \u5bf9\u8c61\u3001Canvas \u90fd\u53ef\u4ee5\u76f4\u63a5\u4e0a\u4f20\uff0c\u5185\u90e8\u5b9e\u73b0\u81ea\u52a8\u8f6c\u6362\uff0c\u4f7f\u7528\u573a\u666f\u6709\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0a\u4f20\u7ec4\u4ef6\u7684\u6837\u5f0f\u4e0d\u7b26\u5408\u65f6"}),"\n",(0,l.jsx)(n.li,{children:"\u4e0a\u4f20\u6570\u636e\u683c\u5f0f\u591a\u6837\u65f6"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd\u9700\u6c42",children:"\u529f\u80fd\u9700\u6c42"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u652f\u6301\u5355\u4e2a\u3001\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20\uff0c\u591a\u4e2a\u6587\u4ef6\u540c\u65f6\u4e0a\u4f20\u65f6\u53ef\u4ee5\u540c\u65f6\u4e0a\u4f20"}),"\n",(0,l.jsx)(n.li,{children:"\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20\u8fdb\u5ea6\u3001\u603b\u8fdb\u5ea6"}),"\n",(0,l.jsx)(n.li,{children:"\u81ea\u52a8\u8f6c\u6362\u6570\u636e\u683c\u5f0f\u4e3a File"}),"\n",(0,l.jsx)(n.li,{children:"\u5931\u8d25\u53ef\u624b\u52a8\u89e6\u53d1\u91cd\u65b0\u4e0a\u4f20"}),"\n",(0,l.jsx)(n.li,{children:"\u9650\u5236\u6587\u4ef6\u683c\u5f0f\u548c\u5927\u5c0f"}),"\n",(0,l.jsx)(n.li,{children:"\u6587\u4ef6\u6570\u636e\u56de\u663e"}),"\n",(0,l.jsx)(n.li,{children:"\u81ea\u52a8\u7684\u7f29\u7565\u56fe\uff08\u9002\u7528\u4e8e\u56fe\u7247\uff09"}),"\n",(0,l.jsx)(n.li,{children:"\u6587\u4ef6\u4e0a\u4f20\u603b\u8fdb\u5ea6"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"useuploader-\u7684\u5168\u90e8\u53c2\u6570\u4e00\u89c8",children:"useUploader \u7684\u5168\u90e8\u53c2\u6570\u4e00\u89c8"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"const {\n  fileList, // \u6587\u4ef6\u6570\u636e\u5217\u8868\uff0c\u6bcf\u9879\u5305\u542b\u6587\u4ef6\u540d\u3001\u6587\u4ef6\u8def\u5f84\u3001\u4e0a\u4f20\u72b6\u6001\u3001\u4e0a\u4f20\u8fdb\u5ea6\uff0c\u5177\u4f53\u683c\u5f0f\u89c1\u4e0b\u9762\n  file, // \u7b2c\u4e00\u4e2a\u6587\u4ef6\u6570\u636e\u9879\uff0c\u53ef\u4ee5\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\uff0c\u4e00\u822c\u7528\u4e8e\u4e0a\u4f20\u5355\u4e2a\u6587\u4ef6\u4f7f\u7528\n  loading, // \u662f\u5426\u6b63\u5728\u4e0a\u4f20\uff0cboolean \u503c\n  progress, // \u4e0a\u4f20\u603b\u8fdb\u5ea6\uff0c\u5177\u4f53\u683c\u5f0f\u89c1\u4e0b\u9762\n  appendFiles, // \u6dfb\u52a0\u6587\u4ef6\u6570\u636e\u9879\uff08\u6dfb\u52a0\u540e\u81ea\u52a8\u8f6c\u6362\u4e3a File \u5bf9\u8c61\uff09\n  upload, // \u4e0a\u4f20\u64cd\u4f5c\uff0c\u4f20\u5165\u4e0b\u6807\u6307\u5b9a\u54ea\u4e2a\u9879\u4e0a\u4f20\uff08\u7528\u4e8e\u9519\u8bef\u91cd\u8bd5\uff09\uff0c\u672a\u4f20\u5165\u4e0a\u4f20\u5168\u90e8\u672a\u6210\u529f\u7684\u9879\n  onFilesAppend, // \u6dfb\u52a0\u6587\u4ef6\u4e8b\u4ef6\n  onExceed, // \u6587\u4ef6\u6570\u91cf\u88ab\u9650\u5236\u4e8b\u4ef6\n  onFormatMismatch, // \u6587\u4ef6\u683c\u5f0f\u4e0d\u5339\u914d\u4e8b\u4ef6\n  onSuccess, // \u6bcf\u4e2a\u6587\u4ef6\u4e0a\u4f20\u6210\u529f\u4e8b\u4ef6\n  onError, // \u6bcf\u4e2a\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25\u4e8b\u4ef6\n  onComplete // \u6bcf\u4e2a\u6587\u4ef6\u4e0a\u4f20\u5b8c\u6210\u4e8b\u4ef6\n} = useUploader(({ file, name }) => uploadFile(file, name), {\n  limit: 3, // \u9650\u5236\u4e0a\u4f20\u6587\u4ef6\n  accept: ['png', 'jpg', 'pdf'], // \u63a5\u53d7\u7684\u81ea\u52a8\u8f6c\u6362\u540e\u7684\u6587\u4ef6\u683c\u5f0f\n  imageTempLink: true, // \u662f\u5426\u751f\u6210\u4e34\u65f6\u56fe\u7247\u8def\u5f84\uff0c\u7528\u4e8e\u5728\u56fe\u7247\u4e0a\u4f20\u5b8c\u6210\u524d\u4e5f\u53ef\u4ee5\u5c55\u793a\u56fe\u7247\u5185\u5bb9\uff0c\u9ed8\u8ba4\u4e3a false\n\n  // \u8bbe\u7f6e\u4e00\u4e2a\u51fd\u6570\uff0c\u5f53\u4e0a\u4f20\u6210\u529f\u65f6\uff0c\u53ef\u4ee5\u81ea\u52a8\u5c06 fileList \u9879\u4e2d\u7684 src \u5b57\u6bb5\u66ff\u6362\u4e3a\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u5730\u5740\uff0c\u5728\u4e0a\u4f20\u56fe\u7247\u65f6\u5e38\u7528\n  // data \u4e3a\u54cd\u5e94\u6570\u636e\uff0c\u6b64\u51fd\u6570\u8fd4\u56de\u670d\u52a1\u7aef\u7684\u6587\u4ef6\u5730\u5740\n  // \u5982\u679c\u672a\u6307\u5b9a\u6b64\u51fd\u6570\u5219\u4e0d\u4f1a\u6709\u66ff\u6362\u884c\u4e3a\n  replaceSrcFromResponse: data => data.imgPath\n});\n"})}),"\n",(0,l.jsx)(n.h2,{id:"useuploader-\u53c2\u6570\u7684\u8be6\u7ec6\u683c\u5f0f\u53ca\u89e3\u91ca",children:"useUploader \u53c2\u6570\u7684\u8be6\u7ec6\u683c\u5f0f\u53ca\u89e3\u91ca"}),"\n",(0,l.jsx)(n.p,{children:"\u53c2\u6570\u683c\u5f0f\u4f7f\u7528 typescript \u8868\u793a\uff0c\u4fbf\u4e8e\u7406\u89e3"}),"\n",(0,l.jsx)(n.h3,{id:"\u8fd4\u56de\u7684\u54cd\u5e94\u5f0f\u72b6\u6001",children:"\u8fd4\u56de\u7684\u54cd\u5e94\u5f0f\u72b6\u6001"}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u90fd\u662f\u54cd\u5e94\u5f0f\u7684\u503c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// file\u503c\u7684\u683c\u5f0f\ninterface file {\n  src?: string; // \u4e34\u65f6\u8def\u5f84\u6216\u4e0a\u4f20\u6210\u529f\u540e\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u975e\u56fe\u7247\n  file: File; // File \u5bf9\u8c61\n  status: 0 | 1 | 2 | 3; // 0 \u8868\u793a\u672a\u4e0a\u4f20\uff0c1 \u8868\u793a\u4e0a\u4f20\u4e2d\uff0c2 \u8868\u793a\u5df2\u5b8c\u6210\uff0c 3 \u8868\u793a\u4e0a\u4f20\u9519\u8bef\n  error?: Error; // \u9519\u8bef\u5bf9\u8c61\uff0c\u5f53\u4e0a\u4f20\u9519\u8bef\u65f6\u9700\u8981\u5c06\u9519\u8bef\u5bf9\u8c61\u8d4b\u503c\u4e0a\u53bb\n  progress: {\n    loaded: number; // \u5df2\u4e0a\u4f20\u5927\u5c0f\n    total: number; // \u6587\u4ef6\u603b\u5927\u5c0f\n  };\n}\n// fileList\u503c\u7684\u683c\u5f0f\ntype fileList = file[];\n\n// loading\u503c\u7684\u683c\u5f0f\ntype loading = boolean; // \u662f\u5426\u6b63\u5728\u4e0a\u4f20\n\n// \u4e0a\u4f20\u603b\u8fdb\u5ea6\u4fe1\u606f\ninterface progress {\n  loaded: number; // \u5df2\u4e0a\u4f20\u7684\u5927\u5c0f\uff0c\u591a\u4e2a\u6587\u4ef6\u53e0\u52a0\n  total: number; // \u6587\u4ef6\u603b\u5927\u5c0f\uff0c\u591a\u4e2a\u6587\u4ef6\u53e0\u52a0\n  count: number; // \u6b63\u5728\u4e0a\u4f20\u7684\u6587\u4ef6\u603b\u6570\n  successCount: number; // \u5df2\u6210\u529f\u4e0a\u4f20\u7684\u6587\u4ef6\u6570\n  failCount: number; // \u4e0a\u4f20\u5931\u8d25\u7684\u6587\u4ef6\u6570\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8fd4\u56de\u7684\u64cd\u4f5c\u51fd\u6570",children:"\u8fd4\u56de\u7684\u64cd\u4f5c\u51fd\u6570"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"interface RawFile {\n  file?: File | string | Blob | ArrayBuffer | HTMLCanvasElement; // \u53ef\u4ee5\u4f20\u5165 base64\u3001file \u5bf9\u8c61\u3001blob \u5bf9\u8c61\u3001arraybuffer\uff0ccanvas \u5143\u7d20\uff0c\u56de\u663e\u65f6\u53ef\u4e0d\u4f20\n  src?: string; // \u6587\u4ef6\u9884\u89c8\u5730\u5740\uff0c\u5982\u679c\u4f20\u4e86\u5373\u4f7f imageTempLink \u4e3a true \u4e5f\u4e0d\u4f1a\u8986\u76d6\u5b83\n  name?: string; // \u6587\u4ef6\u540d\uff0cfile \u4e3a\u975e File \u5bf9\u8c61\u65f6\u5fc5\u586b\uff0c\u5728 new File \u65f6\u7528\u5230\n  mimeType?: string; // \u5185\u90e8\u8f6c\u6362\u4e3a File \u5bf9\u8c61\u65f6\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u5728 new File \u65f6\u7528\u5230\uff0c\u5efa\u8bae file \u4e3a\u975e File \u5bf9\u8c61\u65f6\u4f20\u5165\n  status?: 0 | 1 | 2 | 3; // 0 \u8868\u793a\u672a\u4e0a\u4f20\uff0c1 \u8868\u793a\u4e0a\u4f20\u4e2d\uff0c2 \u8868\u793a\u5df2\u5b8c\u6210\uff0c3 \u8868\u793a\u4e0a\u4f20\u5931\u8d25\uff0c\u4e0d\u4f20\u9ed8\u8ba4\u4e3a 0\n}\n\n/**\n * \u8ffd\u52a0\u4e0a\u4f20\u7684\u6587\u4ef6\u8fdb\u53bb\uff0c\u8ffd\u52a0\u540e\u4f1a\u81ea\u52a8\u5c06\u5217\u8868\u7684 file \u9879\u8f6c\u6362\u4e3a File \u5bf9\u8c61\uff0c\u6b64\u65f6 name \u5fc5\u987b\u6709\u503c\n */\ntype appendFiles = (\n  files: RawFile | RawFile[], // \u5355\u4e2a\u6587\u4ef6\u65f6\u4f20\u5bf9\u8c61\u3001\u591a\u4e2a\u6587\u4ef6\u65f6\u4f20\u6570\u7ec4\n  start?: number // \u4ece fileList \u54ea\u4e2a\u4f4d\u7f6e\u5f00\u59cb\u8ffd\u52a0\n) => number; // \u8ffd\u52a0\u6210\u529f\u7684\u4e2a\u6570\uff0c\u53ef\u80fd\u56e0\u4e3a\u6570\u91cf\u9650\u5236\u3001\u683c\u5f0f\u9650\u5236\u800c\u8ffd\u52a0\u5931\u8d25\n\n/**\n * \u6267\u884c\u4e0a\u4f20\u64cd\u4f5c\n * \u5982\u679c\u672a\u4f20\u5165\u53c2\u6570\u5219\u4f1a\u81ea\u52a8\u5c06 fileList \u5185\u6240\u6709 file \u5c5e\u6027\u6709\u503c\u7684\u3001status \u4e3a 0 \u548c 3\uff08\u672a\u4e0a\u4f20\u548c\u4e0a\u4f20\u5931\u8d25\uff09\u7684\u91cd\u65b0\u53d1\u8d77\u4e0a\u4f20\u8bf7\u6c42\n * \u5982\u679c\u4f20\u5165\u4e86\u53c2\u6570\u4e0b\u6807\uff0c\u5219\u5c06 fileList \u5bf9\u5e94\u4e0b\u6807\u7684\u9879\u91cd\u65b0\u7ec4\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u4e5f\u901a\u8fc7\u4e0a\u9762\u7684\u6761\u4ef6\u8fc7\u6ee4\u51fa\u53ef\u4e0a\u4f20\u7684\u8fdb\u884c\u4e0a\u4f20\u8bf7\u6c42\uff0c\u4f46\u6b64\u65f6\u5982\u679c\u6709\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u9700\u8981\u62a5\u9519\uff0c\u800c\u4e0d\u662f\u5ffd\u7565\n *\n * \u53d1\u8d77\u4e0a\u4f20\u64cd\u4f5c\u540e\uff1a\n * \u591a\u4e2a\u6587\u4ef6\u7684\u4e0a\u4f20\u5c06\u4f1a\u5e76\u884c\u53d1\u8d77\u4e0a\u4f20\u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f\u5c06\u7b26\u5408\u4e0a\u4f20\u6761\u4ef6\u7684\u6587\u4ef6\u6570\u7ec4\u904d\u5386\uff0c\u4f9d\u6b21\u8c03\u7528 useUploader \u7684\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u83b7\u53d6 Method \u5bf9\u8c61\u53d1\u9001\u8bf7\u6c42\uff0c\u5185\u90e8\u53ef\u4ee5\u4f7f\u7528 useRequst \u5b9e\u73b0\uff0c\u56e0\u4e3a fileList \u4e2d\u6709\u5f88\u591a\u5c5e\u6027\u662f\u5728 useRequest \u90fd\u53ef\u4ee5\u63d0\u4f9b\n */\ntype upload = (...indexes: number[]) => void;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u4e8b\u4ef6\u7ed1\u5b9a\u51fd\u6570",children:"\u4e8b\u4ef6\u7ed1\u5b9a\u51fd\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u6bcf\u4e2a\u4e8b\u4ef6\u7ed1\u5b9a\u7684\u56de\u8c03\u51fd\u6570\u90fd\u4f1a\u63a5\u6536\u4e00\u4e2a\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u683c\u5f0f\u5982\u4e0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// \u89e6\u53d1\u65f6\u673a\uff1a\u8c03\u7528appendFiles\u6dfb\u52a0\u6587\u4ef6\u65f6\u89e6\u53d1\ntype onFilesAppend = (handler: (event: AlovaFileEvent) => void) => void;\ninterface AlovaFileEvent {\n  files: file[]; // \u7b26\u5408\u6761\u4ef6\u7684\uff0c\u5e76\u4e14\u8f6c\u6362\u8fc7\u540e\u7684\u6587\u4ef6\u6570\u7ec4\n  rawFiles: RawFile[]; // \u5728 appendFiles \u4e2d\u4f20\u5165\u7684\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\u6570\u7ec4\uff0c\u662f\u8fd8\u672a\u8f6c\u6362\u8fc7\u540e\u7684\u6587\u4ef6\u6570\u7ec4\n  allRawFiles: RawFile[]; // \u5728 appendFiles \u4e2d\u4f20\u5165\u7684\u539f\u6570\u636e\u6570\u7ec4\n}\n\n// \u89e6\u53d1\u65f6\u673a\uff1a\u5f53\u8c03\u7528appendFiles\u65f6\uff0c\u6587\u4ef6\u6570\u91cf\u88ab\u9650\u5236\u65f6\u89e6\u53d1\ntype onExceed = (handler: (event: AlovaFileExceededEvent) => void) => void;\ninterface AlovaFileExceededEvent extends AlovaFileEvent {\n  exceeded: number; // \u8d85\u8fc7\u7684\u6570\u91cf\n  limit: number; // \u603b\u9650\u5236\u6570\u91cf\n}\n\n// \u89e6\u53d1\u65f6\u673a\uff1a\u5f53\u8c03\u7528appendFiles\u65f6\uff0c\u6709\u6587\u4ef6\u683c\u5f0f\u4e0d\u5339\u914d\u65f6\u89e6\u53d1\ntype onFormatMismatch = (handler: (event: AlovaFileMismatchEvent) => void) => void;\ninterface AlovaFileMismatchEvent extends AlovaFileEvent {\n  mismatchFiles: RawFile[]; // \u683c\u5f0f\u4e0d\u5339\u914d\u7684\u6587\u4ef6\u6570\u7ec4\n}\n\n// \u89e6\u53d1\u65f6\u673a\uff1a\u6bcf\u4e2a\u6587\u4ef6\u4e0a\u4f20\u6210\u529f\u65f6\u89e6\u53d1\uff0c\u5185\u90e8\u53ef\u590d\u7528useRequest\u7684onSuccess\u4e8b\u4ef6\ntype onSuccess = (handler: (event: AlovaFileSuccessEvent) => void) => void;\ninterface AlovaFileSuccessEvent extends AlovaSuccessEvent {\n  file: file; // \u4e0a\u4f20\u6210\u529f\u7684\u6587\u4ef6\u9879\n}\n\n// \u89e6\u53d1\u65f6\u673a\uff1a\u6bcf\u4e2a\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25\u65f6\u89e6\u53d1\uff0c\u5185\u90e8\u53ef\u590d\u7528useRequest\u7684onError\u4e8b\u4ef6\ntype onError = (handler: (event: AlovaFileErrorEvent) => void) => void;\ninterface AlovaFileErrorEvent extends AlovaErrorEvent {\n  file: file; // \u4e0a\u4f20\u5931\u8d25\u7684\u6587\u4ef6\u9879\n}\n\n// \u89e6\u53d1\u65f6\u673a\uff1a\u6bcf\u4e2a\u6587\u4ef6\u4e0a\u4f20\u5b8c\u6210\u65f6\u89e6\u53d1\uff0c\u5185\u90e8\u53ef\u590d\u7528useRequest\u7684onComplete\u4e8b\u4ef6\ntype onComplete = (handler: (event: AlovaFileCompleteEvent) => void) => void;\ninterface AlovaFileCompleteEvent extends AlovaCompleteEvent {\n  file: file; // \u4e0a\u4f20\u6210\u529f\u7684\u6587\u4ef6\u9879\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5f00\u53d1\u6307\u5357",children:"\u5f00\u53d1\u6307\u5357"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f00\u53d1\u524d\u8bf7\u4ed4\u7ec6\u9605\u8bfb",(0,l.jsx)(n.a,{href:"/contributing/developing-guidelines",children:"\u5f00\u53d1\u6307\u5357"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5f00\u53d1\u6b64 use hook \u9700\u8981\u5f00\u53d1\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728 src/hooks \u4e0b\u7f16\u5199 useUploader \u529f\u80fd\u4ee3\u7801"}),"\n",(0,l.jsx)(n.li,{children:"useUploader \u529f\u80fd\u7684\u5b8c\u6574\u5355\u5143\u6d4b\u8bd5\uff0c\u5efa\u8bae\u5728 vue \u548c react \u4e0b\u6d4b\u8bd5"}),"\n",(0,l.jsxs)(n.li,{children:["useUploader \u7684 typescript \u7c7b\u578b\u58f0\u660e\uff0c\u9700\u8981\u5206\u522b\u5728",(0,l.jsx)(n.code,{children:"packages/scene-react/typings/index.d.ts"}),"\u3001",(0,l.jsx)(n.code,{children:"packages/scene-vue/typings/index.d.ts"}),"\u3001",(0,l.jsx)(n.code,{children:"packages/scene-svelte/typings/index.d.ts"}),"\u4e0b\u6dfb\u52a0\u3002\u516c\u5171\u7684\u7c7b\u578b\u58f0\u660e\u53ef\u4ee5\u653e\u5728",(0,l.jsx)(n.code,{children:"typings/general.d.ts"}),"\u4e2d\uff0c\u6253\u5305\u65f6\u4f1a\u5c06\u6b64\u6587\u4ef6\u5206\u522b\u590d\u5236\u5230\u5b50\u5305\u7684",(0,l.jsx)(n.code,{children:"typings"}),"\u6587\u4ef6\u5939\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u8fd0\u884c",(0,l.jsx)(n.code,{children:"npm run cp:files"}),"\u590d\u5236\u6587\u4ef6\u5939\u3002"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var l=i(67294);const s={},t=l.createContext(s);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);