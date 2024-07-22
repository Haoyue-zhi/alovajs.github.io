"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3631],{4700:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(85893),r=t(11151);const i={title:"\u865a\u62df\u6570\u636e"},l=void 0,s={id:"tutorial/client/strategy/sensorless-data-interaction/virtual-data",title:"\u865a\u62df\u6570\u636e",description:"\u5b9e\u9645\u4e0a\uff0c\u865a\u62df\u6570\u636e\u662f\u4e00\u4e2a\u62e5\u6709\u552f\u4e00 id \u7684\u5f15\u7528\u5bf9\u8c61\uff0c\u5176\u8ffd\u67e5\u673a\u5236\u5c31\u662f\u901a\u8fc7\u5148\u751f\u6210\u865a\u62df\u6570\u636e id \u548c\u54cd\u5e94\u6570\u636e\u4e4b\u95f4\u7684\u6620\u5c04\uff0c\u518d\u901a\u8fc7\u865a\u62df\u6570\u636e id \u67e5\u627e\u5e76\u66ff\u6362\u4e3a\u5b9e\u9645\u503c\u6765\u5b9e\u73b0\u7684\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/03-client/01-strategy/09-sensorless-data-interaction/02-virtual-data.md",sourceDirName:"tutorial/03-client/01-strategy/09-sensorless-data-interaction",slug:"/tutorial/client/strategy/sensorless-data-interaction/virtual-data",permalink:"/zh-CN/tutorial/client/strategy/sensorless-data-interaction/virtual-data",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/09-sensorless-data-interaction/02-virtual-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u865a\u62df\u6570\u636e"},sidebar:"tutorial",previous:{title:"\u65e0\u611f\u6570\u636e\u4ea4\u4e92 - \u6982\u89c8",permalink:"/zh-CN/tutorial/client/strategy/sensorless-data-interaction/"},next:{title:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",permalink:"/zh-CN/tutorial/client/strategy/sensorless-data-interaction/start-silent-factory"}},d={},c=[{value:"\u5b57\u7b26\u4e32\u62fc\u63a5",id:"\u5b57\u7b26\u4e32\u62fc\u63a5",level:2},{value:"\u6570\u636e\u6bd4\u8f83",id:"\u6570\u636e\u6bd4\u8f83",level:2},{value:"\u53c2\u4e0e\u8fd0\u7b97",id:"\u53c2\u4e0e\u8fd0\u7b97",level:2},{value:"\u7c7b\u578b\u64cd\u4f5c\u7b26",id:"\u7c7b\u578b\u64cd\u4f5c\u7b26",level:2},{value:"\u89c6\u56fe\u5c55\u793a",id:"\u89c6\u56fe\u5c55\u793a",level:2},{value:"\u865a\u62df\u6570\u636e\u8f85\u52a9\u51fd\u6570",id:"\u865a\u62df\u6570\u636e\u8f85\u52a9\u51fd\u6570",level:2},{value:"dehydrateVData",id:"dehydratevdata",level:3},{value:"stringifyVData",id:"stringifyvdata",level:3},{value:"equals",id:"equals",level:3},{value:"isVData",id:"isvdata",level:3},{value:"\u865a\u62df\u6570\u636e\u7684\u66ff\u6362\u9650\u5236",id:"\u865a\u62df\u6570\u636e\u7684\u66ff\u6362\u9650\u5236",level:2},{value:"\u63a5\u4e0b\u6765",id:"\u63a5\u4e0b\u6765",level:2}];function o(e){const a={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u865a\u62df\u6570\u636e\u662f\u4e00\u4e2a\u62e5\u6709\u552f\u4e00 id \u7684\u5f15\u7528\u5bf9\u8c61\uff0c\u5176\u8ffd\u67e5\u673a\u5236\u5c31\u662f\u901a\u8fc7\u5148\u751f\u6210\u865a\u62df\u6570\u636e id \u548c\u54cd\u5e94\u6570\u636e\u4e4b\u95f4\u7684\u6620\u5c04\uff0c\u518d\u901a\u8fc7\u865a\u62df\u6570\u636e id \u67e5\u627e\u5e76\u66ff\u6362\u4e3a\u5b9e\u9645\u503c\u6765\u5b9e\u73b0\u7684\u3002"}),"\n",(0,n.jsxs)(a.p,{children:["\u5f53\u539f\u59cb\u503c\u4e3a\u5f15\u7528\u7c7b\u578b\u65f6\uff0c\u8868\u73b0\u548c\u539f\u59cb\u503c\u76f8\u540c\uff0c\u4f46\u57fa\u672c\u7c7b\u578b\u7684\u865a\u62df\u6570\u636e\u4f7f\u7528\u7684\u662f",(0,n.jsx)(a.code,{children:"Number, String, Boolean"}),"\u5c01\u88c5\u7c7b\uff0c\u4ee5\u53ca\u81ea\u5b9a\u4e49\u7684",(0,n.jsx)(a.code,{children:"Undefined, Null"}),"\u5c01\u88c5\u7c7b\uff0c\u5b83\u4eec\u7684\u8868\u73b0\u5f62\u5f0f\u4e0e\u539f\u59cb\u503c\u6709\u4e00\u4e9b\u504f\u5dee\uff0c\u4ee5\u4e0b\u5217\u51fa\u4e86\u865a\u62df\u6570\u636e\u7684\u7279\u6027\uff0c\u4ee5\u53ca\u865a\u62df\u6570\u636e\u7684\u8f85\u52a9\u51fd\u6570\u7684\u4f7f\u7528\uff0c\u8f85\u52a9\u51fd\u6570\u8be6\u60c5\u5c06\u5728\u7ae0\u8282\u672b\u5c3e\u4ecb\u7ecd\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u5b57\u7b26\u4e32\u62fc\u63a5",children:"\u5b57\u7b26\u4e32\u62fc\u63a5"}),"\n",(0,n.jsx)(a.p,{children:"\u5f53\u865a\u62df\u6570\u636e\u8fdb\u884c\u5b57\u7b26\u4e32\u62fc\u63a5\u65f6\uff0c\u5c06\u88ab\u8f6c\u6362\u4e3a\u865a\u62df\u6570\u636e id \u8fdb\u884c\u62fc\u63a5\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const virtualData = createVirtualData(1);\n'a' + virtualData; // a[vd:xxxxxx]\n1 + virtualData; // 1[vd:xxxxxx]\n"})}),"\n",(0,n.jsx)(a.h2,{id:"\u6570\u636e\u6bd4\u8f83",children:"\u6570\u636e\u6bd4\u8f83"}),"\n",(0,n.jsxs)(a.p,{children:["\u865a\u62df\u6570\u636e\u65e0\u6cd5\u76f4\u63a5\u7528\u4e8e\u6bd4\u8f83\uff0c\u4f46\u5b9e\u9645\u573a\u666f\u4e2d\u7ecf\u5e38\u4f7f\u7528\u865a\u62df\u6570\u636e\u548c\u5b9e\u9645\u6570\u636e\u6df7\u5408\u6bd4\u8f83\uff0c\u6b64\u65f6\u53ef\u4f7f\u7528",(0,n.jsx)(a.code,{children:"equals"}),"\u6bd4\u8f83\u3002"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { equals } from 'alova/client';\n\nequals('a', 'a'); // true\n\nconst virtualData1 = createVirtualData(1);\nconst virtualData2 = virtualData1.clone(); // \u514b\u9686\u865a\u62df\u6570\u636e\nequals(virtualData1, virtualData2); // virtualData1\u548cvirtualData2\u7684id\u76f8\u540c\u65f6\u4e3atrue\nequals(virtualData1, '[vd:xxxxxx]'); // virtualData1\u7684id\u4e5f\u4e3a[vd:xxxxxx]\u65f6\u4e3atrue\n"})}),"\n",(0,n.jsx)(a.h2,{id:"\u53c2\u4e0e\u8fd0\u7b97",children:"\u53c2\u4e0e\u8fd0\u7b97"}),"\n",(0,n.jsxs)(a.p,{children:["\u53c2\u4e0e\u8fd0\u7b97\u5982",(0,n.jsx)(a.code,{children:"+-*/%"}),"\uff0c\u6570\u503c\u6bd4\u8f83\u3001\u4ee5\u53ca\u4f4d\u8fd0\u7b97\u65f6\uff0c\u65e0\u6cd5\u81ea\u52a8\u8f6c\u6362\u4e3a\u539f\u59cb\u503c\uff0c\u53ef\u901a\u8fc7",(0,n.jsx)(a.code,{children:"dehydrateVData"}),"\u8f6c\u6362\u4e3a\u539f\u59cb\u503c\u518d\u8fdb\u884c\u8ba1\u7b97\u3002"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { dehydrateVData } from 'alova/client';\n\nconst virtualData = createVirtualData(1);\ndehydrateVData(virtualData) + 1; // 2\ndehydrateVData(virtualData) > 0; // true\n"})}),"\n",(0,n.jsx)(a.h2,{id:"\u7c7b\u578b\u64cd\u4f5c\u7b26",children:"\u7c7b\u578b\u64cd\u4f5c\u7b26"}),"\n",(0,n.jsxs)(a.p,{children:["\u56e0\u4e3a\u865a\u62df\u6570\u636e\u5728\u57fa\u672c\u6570\u636e\u7c7b\u578b\u4e0a\u4f7f\u7528\u5c01\u88c5\u7c7b\u5b9e\u73b0\uff0c\u4f7f\u7528",(0,n.jsx)(a.code,{children:"typeof"}),"\u83b7\u53d6\u7c7b\u578b\u65f6\u5c06\u59cb\u7ec8\u4f1a\u8fd4\u56de",(0,n.jsx)(a.code,{children:"object"}),"\uff0c\u4e5f\u53ef\u901a\u8fc7",(0,n.jsx)(a.code,{children:"dehydrateVData"}),"\u8f6c\u6362\u4e3a\u539f\u59cb\u503c\u518d\u83b7\u53d6\u7c7b\u578b"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const vNum = createVirtualResponse(1);\ntypeof vNum === 'object'; // true\nconst vUndef = createVirtualResponse(undefined);\ntypeof vUndef === 'object'; // true\n\ntypeof dehydrateVData(vNum) === 'number'; // true\ntypeof dehydrateVData(vUndef) === 'undefined'; // true\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u865a\u62df\u6570\u636e\u8f85\u52a9\u51fd\u6570",(0,n.jsx)(a.strong,{children:"dehydrateVData"}),"\uff0c\u5b83\u53ef\u4ee5\u83b7\u53d6\u4e00\u4e2a\u865a\u62df\u6570\u636e\u7684\u539f\u59cb\u503c\uff0c\u5f53\u9047\u5230\u975e\u865a\u62df\u6570\u636e\u65f6\u5c06\u539f\u6837\u8fd4\u56de"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const vNum = createVirtualResponse(1);\ntypeof dehydrateVData(vNum) === 'number'; // true\ndehydrateVData(vNum) === 1; // true\ndehydrateVData('string') === 'string'; // true\n"})}),"\n",(0,n.jsx)(a.h2,{id:"\u89c6\u56fe\u5c55\u793a",children:"\u89c6\u56fe\u5c55\u793a"}),"\n",(0,n.jsxs)(a.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u865a\u62df\u6570\u636e\u5c55\u793a\u5230\u89c6\u56fe\u4e2d\u65f6\u5c06\u9690\u5f0f\u8c03\u7528",(0,n.jsx)(a.code,{children:"toString"}),"\uff0c\u4f46\u6709\u65f6\u5019\u4e5f\u4f1a\u9047\u5230\u663e\u793a\u9519\u4e71\u7684\u95ee\u9898\uff0c\u4ee5\u53ca\u5728",(0,n.jsx)(a.strong,{children:"react"}),"\u4e2d\u6e32\u67d3\u4e00\u4e2a\u5bf9\u8c61\u5c06\u4f1a\u62a5\u4ee5\u4e0b\u9519\u8bef\uff1a"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Uncaught Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u56e0\u6b64\u5efa\u8bae\u5728\u663e\u793a\u65f6\u4f7f\u7528",(0,n.jsx)(a.code,{children:"dehydrateVData"}),"\u8f6c\u6362\u4e3a\u539f\u59cb\u6570\u636e\u8fdb\u884c\u5c55\u793a\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u865a\u62df\u6570\u636e\u8f85\u52a9\u51fd\u6570",children:"\u865a\u62df\u6570\u636e\u8f85\u52a9\u51fd\u6570"}),"\n",(0,n.jsx)(a.h3,{id:"dehydratevdata",children:"dehydrateVData"}),"\n",(0,n.jsx)(a.p,{children:"\u5c06\u865a\u62df\u6570\u636e\u8131\u6c34\uff0c\u8fd4\u56de\u5b83\u7684\u539f\u59cb\u503c\uff0c\u5982 target \u4e3a\u975e\u865a\u62df\u6570\u636e\u5219\u539f\u6837\u8fd4\u56de\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"// type\nfunction dehydrateVData(target: any): any;\n\n// example\ndehydrateVData(1); // 1\nconst virtualData = createVirtualData(1);\ndehydrateVData(virtualData); // 1\n"})}),"\n",(0,n.jsx)(a.h3,{id:"stringifyvdata",children:"stringifyVData"}),"\n",(0,n.jsx)(a.p,{children:"\u865a\u62df\u6570\u636e\u5b57\u7b26\u4e32\u5316\uff0c\u8fd4\u56de\u865a\u62df\u6570\u636e id\uff0c\u5f53 returnOriginalIfNotVData \u8bbe\u7f6e\u4e3a false \u65f6\uff0c\u975e\u865a\u62df\u6570\u636e\u5c06\u539f\u6837\u8fd4\u56de\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"// type\nfunction stringifyVData(target: any, returnOriginalIfNotVData?: boolean): any;\n\n// example\nstringifyVData(1); // 1\nstringifyVData(1, false); // undefined\n\nconst virtualData = createVirtualData(1);\nstringifyVData(virtualData); // [vd:xxxxxx]\n"})}),"\n",(0,n.jsx)(a.h3,{id:"equals",children:"equals"}),"\n",(0,n.jsx)(a.p,{children:"\u4ee5\u517c\u5bb9\u865a\u62df\u6570\u636e\u7684\u65b9\u5f0f\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u76f8\u7b49\uff0c\u5f53\u6ca1\u6709\u865a\u62df\u6570\u636e\u53c2\u4e0e\u6bd4\u8f83\u65f6\u5c06\u4e25\u683c\u5bf9\u6bd4\uff0c\u5426\u5219\u5c06\u5bf9\u6bd4\u865a\u62df\u6570\u636e id \u662f\u5426\u76f8\u540c\uff0c\u5982\u679c\u6bd4\u8f83\u6570\u636e\u53ef\u80fd\u5b58\u5728\u865a\u62df\u6570\u636e\u53c2\u4e0e\uff0c\u5219\u5efa\u8bae\u4f7f\u7528\u6b64\u51fd\u6570\u6bd4\u8f83\u3002"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"// type\nfunction equals(prevValue: any, nextValue: any): boolean;\n\n// example\nequals('a', 'a'); // true\nconst virtualData1 = createVirtualData(1);\nconst virtualData2 = virtualData1.clone(); // \u514b\u9686\u865a\u62df\u6570\u636e\nequals(virtualData1, virtualData2); // virtualData1\u548cvirtualData2\u7684id\u76f8\u540c\u65f6\u4e3atrue\nequals(virtualData1, '[vd:xxxxxx]'); // virtualData1\u7684id\u4e5f\u4e3a[vd:xxxxxx]\u65f6\u4e3atrue\n"})}),"\n",(0,n.jsx)(a.h3,{id:"isvdata",children:"isVData"}),"\n",(0,n.jsx)(a.p,{children:"\u5224\u65ad\u76ee\u6807\u6570\u636e\u662f\u5426\u4e3a\u865a\u62df\u6570\u636e"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"// type\nfunction isVData(target: any): boolean;\n\n// example\nisVData(1); // false\nconst virtualData = createVirtualData(1);\nisVData(virtualData); // true\nisVData('[vd:xxxxxx]'); //true\n"})}),"\n",(0,n.jsx)(a.h2,{id:"\u865a\u62df\u6570\u636e\u7684\u66ff\u6362\u9650\u5236",children:"\u865a\u62df\u6570\u636e\u7684\u66ff\u6362\u9650\u5236"}),"\n",(0,n.jsx)(a.p,{children:"\u865a\u62df\u6570\u636e\u7684\u8ffd\u67e5\u673a\u5236\u53ea\u80fd\u6df1\u5ea6\u904d\u5386\u76f8\u5173\u6570\u636e\uff0c\u7136\u540e\u5c06\u5177\u6709\u865a\u62df\u6570\u636e\u6807\u8bc6\u7684\u6570\u636e\u66ff\u6362\u4e3a\u5b9e\u9645\uff0c\u5982\u679c\u4e00\u4e9b\u6570\u636e\u4f9d\u8d56\u865a\u62df\u6570\u636e\u751f\u6210\u7684\uff0c\u5728\u865a\u62df\u6570\u636e\u66ff\u6362\u4e3a\u5b9e\u9645\u6570\u636e\u540e\u4e0d\u4f1a\u91cd\u65b0\u8ba1\u7b97\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u4ee5\u4e0b\u60c5\u51b5\uff0c\u5373\u4f7f virtualId \u66ff\u6362\u4e3a\u5b9e\u9645\u6570\u636e\u4e86\uff0c\u8fd9\u4e2a\u8bf7\u6c42\u7684 id \u4e5f\u4e0d\u4f1a\u91cd\u65b0\u518d\u8ba1\u7b97\uff0c\u56e0\u6b64\u5982\u679c\u9700\u8981\u66ff\u6362\uff0c\u9700\u8981\u76f4\u63a5\u5c06 virtualId \u4f5c\u4e3a\u8bf7\u6c42\u53c2\u6570\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const deleteTodo = virtualId => {\n  return alova.Delete('/deleteTodo', {\n    id: dehydrateVData(virtualId) === null ? 1 : 2\n  });\n};\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u4f46\u5982\u679c\u5c06\u865a\u62df\u6570\u636e\u4f5c\u4e3a\u5b57\u7b26\u4e32\u62fc\u63a5\u65f6\uff0c\u5b83\u5c06\u81ea\u52a8\u8f6c\u6362\u4e3a\u865a\u62df\u6570\u636e id \u53c2\u4e0e\u5b57\u7b26\u4e32\u62fc\u63a5\uff0c\u8fd9\u79cd\u60c5\u51b5\u5c06\u4f1a\u6709\u6548\u3002\u4ee5\u4e0b\u60c5\u51b5\uff0c\u8bf7\u6c42 id \u5728\u5f00\u59cb\u65f6\u7684\u503c\u4e3a",(0,n.jsx)(a.code,{children:"id_[vd:xxxxxx]"}),"\uff0c\u5f53 virtualId \u88ab\u66ff\u6362\u4e3a\u54cd\u5e94\u503c\u540e\uff08\u5047\u8bbe\u66ff\u6362\u4e3a 1\uff09\uff0c\u5b83\u5c06\u81ea\u52a8\u66f4\u65b0\u4e3a",(0,n.jsx)(a.code,{children:"id_1"}),"\u3002"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const deleteTodo = virtualId => {\n  return alova.Delete('/deleteTodo', {\n    id: 'id'_virtualId\n  });\n};\n"})}),"\n",(0,n.jsx)(a.h2,{id:"\u63a5\u4e0b\u6765",children:"\u63a5\u4e0b\u6765"}),"\n",(0,n.jsx)(a.p,{children:"\u867d\u7136\u5b9e\u73b0\u65e0\u611f\u4ea4\u4e92\u5df2\u7ecf\u8db3\u591f\u7b80\u5355\u4e86\uff0c\u4f46\u76f8\u6bd4\u4fdd\u5b88\u8bf7\u6c42\u8fd8\u662f\u6709\u4e00\u4e9b\u989d\u5916\u7684\u5904\u7406\uff0c\u5177\u4f53\u5b9e\u73b0\u5927\u81f4\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\u3002"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"\u4ee5\u4fdd\u5b88\u8bf7\u6c42\u65b9\u5f0f\u5b9e\u73b0\u529f\u80fd\uff1b"}),"\n",(0,n.jsx)(a.li,{children:"\u624b\u52a8\u66f4\u65b0\u5217\u8868\u6570\u636e\uff0c\u5b9e\u73b0\u672c\u5730\u5316\u6570\u636e\u8865\u507f\uff1b"}),"\n",(0,n.jsx)(a.li,{children:"\u8bb0\u5f55\u6570\u636e\u64cd\u4f5c\uff0c\u4ee5\u4fbf\u5728\u8fd8\u6709\u672a\u63d0\u4ea4\u4fee\u6539\u65f6\u624b\u52a8\u8865\u5145\u5230\u6700\u65b0\u8bb0\u5f55\uff1b"}),"\n",(0,n.jsx)(a.li,{children:"\u5c06\u672a\u63d0\u4ea4\u7684\u6570\u636e\u624b\u52a8\u8865\u507f\u5230\u5217\u8868\uff0c\u4ee5\u4fbf\u5373\u4f7f\u6570\u636e\u672a\u63d0\u4ea4\u4e5f\u80fd\u5c55\u793a\u6700\u65b0\u72b6\u6001\uff1b"}),"\n",(0,n.jsx)(a.li,{children:"\u4fee\u6539\u672a\u63d0\u4ea4\u6570\u636e\u65f6\uff0c\u62e6\u622a\u5e26\u865a\u62df\u6570\u636e\u7684\u8bf7\u6c42\uff1b"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u8fdb\u884c\u6f14\u793a\u3002"})]})}function u(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>l});var n=t(67294);const r={},i=n.createContext(r);function l(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);