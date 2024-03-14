"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2229],{5536:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=t(5893),n=t(1151);const r={title:"Virtual data",sidebar_position:20},l=void 0,s={id:"tutorial/strategy/sensorless-data-interaction/virtual-data",title:"Virtual data",description:"In fact, virtual data is a reference object with a unique id, and its tracking mechanism is realized by first generating a mapping between virtual data id and response data, and then finding and replacing it with the actual value through virtual data id.",source:"@site/docs/tutorial/05-strategy/01-sensorless-data-interaction/02-virtual-data.md",sourceDirName:"tutorial/05-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/virtual-data",permalink:"/tutorial/strategy/sensorless-data-interaction/virtual-data",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-strategy/01-sensorless-data-interaction/02-virtual-data.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Virtual data",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Sensorless data interaction - Overview",permalink:"/tutorial/strategy/sensorless-data-interaction/"},next:{title:"Boot silent factory",permalink:"/tutorial/strategy/sensorless-data-interaction/start-silent-factory"}},d={},o=[{value:"string concatenation",id:"string-concatenation",level:2},{value:"Data Comparison",id:"data-comparison",level:2},{value:"Participate in operations",id:"participate-in-operations",level:2},{value:"type operator",id:"type-operator",level:2},{value:"View display",id:"view-display",level:2},{value:"virtual data helper functions",id:"virtual-data-helper-functions",level:2},{value:"dehydrateVData",id:"dehydratevdata",level:3},{value:"stringifyVData",id:"stringifyvdata",level:3},{value:"equals",id:"equals",level:3},{value:"Replacement restrictions for virtual data",id:"replacement-restrictions-for-virtual-data",level:2},{value:"Next",id:"next",level:2}];function c(e){const a={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"In fact, virtual data is a reference object with a unique id, and its tracking mechanism is realized by first generating a mapping between virtual data id and response data, and then finding and replacing it with the actual value through virtual data id."}),"\n",(0,i.jsxs)(a.p,{children:["When the original value is a reference type, the performance is the same as the original value, but the virtual data of the basic type uses ",(0,i.jsx)(a.code,{children:"Number, String, Boolean"})," encapsulation classes, as well as custom ",(0,i.jsx)(a.code,{children:"Undefined, Null"})," encapsulation classes, and their expressions are the same as There are some deviations from the original value. The characteristics of the virtual data and the use of auxiliary functions for the virtual data are listed below. The details of the auxiliary functions will be introduced at the end of the chapter."]}),"\n",(0,i.jsx)(a.h2,{id:"string-concatenation",children:"string concatenation"}),"\n",(0,i.jsx)(a.p,{children:"When virtual data is concatenated, it will be converted to virtual data id for splicing."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"const virtualData = createVirtualData(1);\r\n'a' + virtualData; // a[vd:xxxxxx]\r\n1 + virtualData; // 1[vd:xxxxxx]\n"})}),"\n",(0,i.jsx)(a.h2,{id:"data-comparison",children:"Data Comparison"}),"\n",(0,i.jsxs)(a.p,{children:["Virtual data cannot be directly used for comparison, but virtual data and actual data are often mixed and compared in actual scenarios. In this case, ",(0,i.jsx)(a.code,{children:"equals"})," can be used for comparison."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"import { equals } from '@alova/scene-*';\r\n\r\nequals('a', 'a'); // true\r\n\r\nconst virtualData1 = createVirtualData(1);\r\nconst virtualData2 = virtualData1.clone(); // clone virtual data\r\nequals(virtualData1, virtualData2); // true when the ids of virtualData1 and virtualData2 are the same\r\nequals(virtualData1, '[vd:xxxxxx]'); // true when the id of virtualData1 is also [vd:xxxxxx]\n"})}),"\n",(0,i.jsx)(a.h2,{id:"participate-in-operations",children:"Participate in operations"}),"\n",(0,i.jsxs)(a.p,{children:["When participating in operations such as ",(0,i.jsx)(a.code,{children:"+-*/%"}),", numerical comparison, and bit operations, it cannot be automatically converted to the original value. It can be converted to the original value through ",(0,i.jsx)(a.code,{children:"dehydrateVData"})," and then calculated."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"import { dehydrateVData } from '@alova/scene-*';\r\n\r\nconst virtualData = createVirtualData(1);\r\ndehydrateVData(virtualData) + 1; // 2\r\ndehydrateVData(virtualData) > 0; // true\n"})}),"\n",(0,i.jsx)(a.h2,{id:"type-operator",children:"type operator"}),"\n",(0,i.jsxs)(a.p,{children:["Because the virtual data is implemented using the encapsulation class on the basic data type, ",(0,i.jsx)(a.code,{children:"object"})," will always be returned when using ",(0,i.jsx)(a.code,{children:"typeof"})," to get the type, and it can also be converted to the original value by ",(0,i.jsx)(a.code,{children:"dehydrateVData"})," to get the type"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"const vNum = createVirtualResponse(1);\r\ntypeof vNum === 'object'; // true\r\nconst vUndef = createVirtualResponse(undefined);\r\ntypeof vUndef === 'object'; // true\r\n\r\ntypeof dehydrateVData(vNum) === 'number'; // true\r\ntypeof dehydrateVData(vUndef) === 'undefined'; // true\n"})}),"\n",(0,i.jsxs)(a.p,{children:["To solve this problem, you can use the virtual data helper function ",(0,i.jsx)(a.strong,{children:"dehydrateVData"}),", which can get the original value of a virtual data, and return it unchanged when encountering non-virtual data"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"const vNum = createVirtualResponse(1);\r\ntypeof dehydrateVData(vNum) === 'number'; // true\r\ndehydrateVData(vNum) === 1; // true\r\ndehydrateVData('string') === 'string'; // true\n"})}),"\n",(0,i.jsx)(a.h2,{id:"view-display",children:"View display"}),"\n",(0,i.jsxs)(a.p,{children:["By default, ",(0,i.jsx)(a.code,{children:"toString"})," will be called implicitly when the virtual data is displayed in the view, but sometimes you will encounter problems with display confusion, and rendering an object in ",(0,i.jsx)(a.strong,{children:"react"})," will report the following error:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"Uncaught Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Therefore, it is recommended to use ",(0,i.jsx)(a.code,{children:"dehydrateVData"})," to convert to raw data for display."]}),"\n",(0,i.jsx)(a.h2,{id:"virtual-data-helper-functions",children:"virtual data helper functions"}),"\n",(0,i.jsx)(a.h3,{id:"dehydratevdata",children:"dehydrateVData"}),"\n",(0,i.jsx)(a.p,{children:"Dehydrate virtual data and return its original value, if target is non-virtual data, return it as it is."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-typescript",children:"// type\r\nfunction dehydrateVData(target: any): any;\r\n\r\n// example\r\ndehydrateVData(1); // 1\r\nconst virtualData = createVirtualData(1);\r\ndehydrateVData(virtualData); // 1\n"})}),"\n",(0,i.jsx)(a.h3,{id:"stringifyvdata",children:"stringifyVData"}),"\n",(0,i.jsx)(a.p,{children:"Stringify virtual data, return virtual data id, when returnOriginalIfNotVData is set to false, non-virtual data will be returned as-is."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-typescript",children:"// type\r\nfunction stringifyVData(target: any, returnOriginalIfNotVData?: boolean): any;\r\n\r\n// example\r\nstringifyVData(1); // 1\r\nstringifyVData(1, false); // undefined\r\n\r\nconst virtualData = createVirtualData(1);\r\nstringifyVData(virtualData); // [vd:xxxxxx]\n"})}),"\n",(0,i.jsx)(a.h3,{id:"equals",children:"equals"}),"\n",(0,i.jsx)(a.p,{children:"Judge whether two values are equal in a way that is compatible with virtual data. When there is no virtual data to participate in the comparison, it will be strictly compared. Otherwise, it will be compared whether the virtual data id is the same. If there may be virtual data involved in the comparison data, it is recommended to use this function for comparison."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-typescript",children:"// type\r\nfunction equals(prevValue: any, nextValue: any): boolean;\r\n\r\n// example\r\nequals('a', 'a'); // true\r\nconst virtualData1 = createVirtualData(1);\r\nconst virtualData2 = virtualData1.clone(); // clone virtual data\r\nequals(virtualData1, virtualData2); // true when the ids of virtualData1 and virtualData2 are the same\r\nequals(virtualData1, '[vd:xxxxxx]'); // true when the id of virtualData1 is also [vd:xxxxxx]\n"})}),"\n",(0,i.jsx)(a.p,{children:"###isVData"}),"\n",(0,i.jsx)(a.p,{children:"Determine whether the target data is virtual data"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-typescript",children:"// type\r\nfunction isVData(target: any): boolean;\r\n\r\n// example\r\nisVData(1); // false\r\nconst virtualData = createVirtualData(1);\r\nisVData(virtualData); // true\r\nisVData('[vd:xxxxxx]'); //true\n"})}),"\n",(0,i.jsx)(a.h2,{id:"replacement-restrictions-for-virtual-data",children:"Replacement restrictions for virtual data"}),"\n",(0,i.jsx)(a.p,{children:"The tracing mechanism of virtual data can only deeply traverse relevant data, and then replace the data with virtual data identifiers with actual data. If some data is generated by virtual data, it will not be recalculated after virtual data is replaced with actual data."}),"\n",(0,i.jsx)(a.p,{children:"In the following cases, even if the virtualId is replaced with actual data, the id of the request will not be recalculated. Therefore, if replacement is required, the virtualId must be directly used as a request parameter. The example is as follows:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"const deleteTodo = virtualId => {\r\n  return alova.Delete('/deleteTodo', {\r\n    id: dehydrateVData(virtualId) === null ? 1 : 2\r\n  });\r\n};\n"})}),"\n",(0,i.jsxs)(a.p,{children:["But if virtual data is concatenated as string, it will be automatically converted to virtual data id to participate in string concatenation, which will work. In the following cases, the value of the request id at the beginning is ",(0,i.jsx)(a.code,{children:"id_[vd:xxxxxx]"}),", and when virtualId is replaced with the response value (assuming it is replaced with 1), it will be automatically updated to ",(0,i.jsx)(a.code,{children:"id_1"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"const deleteTodo = virtualId => {\r\n   return alova.Delete('/deleteTodo', {\r\n     id: 'id'_virtualId\r\n   });\r\n};\n"})}),"\n",(0,i.jsx)(a.h2,{id:"next",children:"Next"}),"\n",(0,i.jsx)(a.p,{children:"Although it is simple enough to realize non-inductive interaction, there are still some additional processing compared with conservative requests. The specific implementation is roughly divided into the following steps."}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Implement functions in a conservative request manner;"}),"\n",(0,i.jsx)(a.li,{children:"Manually update the list data to realize localized data compensation;"}),"\n",(0,i.jsx)(a.li,{children:"Record data operations so that you can manually add to the latest records when there are unsubmitted modifications;"}),"\n",(0,i.jsx)(a.li,{children:"Manually compensate the unsubmitted data to the list, so that the latest status can be displayed even if the data is not submitted;"}),"\n",(0,i.jsx)(a.li,{children:"When modifying unsubmitted data, intercept requests with virtual data;"}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Next, we will demonstrate with a simple example."})]})}function u(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>l});var i=t(7294);const n={},r=i.createContext(n);function l(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);