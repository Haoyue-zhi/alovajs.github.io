"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7281],{10382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(85893),s=n(11151),o=n(74866),r=n(85162);const l={title:"\u66f4\u65b0\u4e0e\u67e5\u627e\u7f13\u5b58"},i=void 0,c={id:"tutorial/cache/set-and-query",title:"\u66f4\u65b0\u4e0e\u67e5\u627e\u7f13\u5b58",description:"\u7f13\u5b58\u4e5f\u652f\u6301\u66f4\u65b0\u548c\u67e5\u627e\uff0c\u5728\u7f13\u5b58\u6a21\u5f0f\u4e2d\u6211\u4eec\u63d0\u5230\u8fc7\uff0c\u6bcf\u4efd\u7f13\u5b58\u6570\u636e\u662f\u4ee5\u53d1\u9001\u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u4f5c\u4e3a key \u8fdb\u884c\u4fdd\u5b58\u7684\uff0c\u56e0\u6b64\u5728\u624b\u52a8\u66f4\u65b0\u7f13\u5b58\u65f6\u4e5f\u5c06\u4f7f\u7528 method \u5b9e\u4f8b\u6765\u67e5\u627e\u5bf9\u5e94\u7684\u7f13\u5b58\u6570\u636e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-v2/tutorial/04-cache/05-set-and-query.md",sourceDirName:"tutorial/04-cache",slug:"/tutorial/cache/set-and-query",permalink:"/zh-CN/v2/tutorial/cache/set-and-query",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/04-cache/05-set-and-query.md",tags:[],version:"v2",sidebarPosition:5,frontMatter:{title:"\u66f4\u65b0\u4e0e\u67e5\u627e\u7f13\u5b58"},sidebar:"tutorial",previous:{title:"\u5f3a\u5236\u8bf7\u6c42",permalink:"/zh-CN/v2/tutorial/cache/force-request"},next:{title:"\u53d7\u63a7\u7684\u7f13\u5b58",permalink:"/zh-CN/v2/tutorial/cache/controlled-cache"}},d={},u=[{value:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",id:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",level:2},{value:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e",id:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e",level:2},{value:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",id:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",level:2},{value:"\u67e5\u8be2\u7f13\u5b58",id:"\u67e5\u8be2\u7f13\u5b58",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["\u7f13\u5b58\u4e5f\u652f\u6301\u66f4\u65b0\u548c\u67e5\u627e\uff0c\u5728",(0,a.jsx)(t.a,{href:"/v2/tutorial/cache/mode",children:"\u7f13\u5b58\u6a21\u5f0f"}),"\u4e2d\u6211\u4eec\u63d0\u5230\u8fc7\uff0c\u6bcf\u4efd\u7f13\u5b58\u6570\u636e\u662f\u4ee5\u53d1\u9001\u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u4f5c\u4e3a key \u8fdb\u884c\u4fdd\u5b58\u7684\uff0c\u56e0\u6b64\u5728\u624b\u52a8\u66f4\u65b0\u7f13\u5b58\u65f6\u4e5f\u5c06\u4f7f\u7528 method \u5b9e\u4f8b\u6765\u67e5\u627e\u5bf9\u5e94\u7684\u7f13\u5b58\u6570\u636e\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e",children:"\u66f4\u65b0\u9759\u6001\u7f13\u5b58\u6570\u636e"}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(r.Z,{value:"1",label:"vue",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<template>\n  <button @click=\"handleTodolistToggle\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n</template>\n<script setup>\n  import { setCache } from 'alova';\n  import { ref } from 'vue';\n\n  const getTodoListByDate = dateList =>\n    alovaInstance.Get('/todo/list/dates', {\n      params: { dateList }\n    });\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\n  const dates = ref(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\n  const {\n    // ...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate(dates.value.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(({ data: todoListDates }) => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u76f8\u7ee7\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n    todoListDates.forEach(todoDate => {\n      // setCache\u53c2\u6570\u8bf4\u660e\uff1a\n      // \u53c2\u65701\uff1amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n      // \u53c2\u65702\uff1a\u7f13\u5b58\u6570\u636e\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n    dates.value = ['2022-05-01'];\n  };\n  // highlight-end\n<\/script>\n"})})}),(0,a.jsx)(r.Z,{value:"2",label:"react",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"import { setCache } from 'alova';\nimport { useState } from 'react';\n\nconst getTodoListByDate = dateList =>\n  alovaInstance.Get('/todo/list/dates', {\n    params: { dateList }\n  });\n\nconst App = () => {\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\n  const [dates, setDates] = useState([\n    '2022-05-01',\n    '2022-05-02',\n    '2022-05-03',\n    '2022-05-04',\n    '2022-05-05'\n  ]);\n  const {\n    // ...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate(dates.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(({ data: todoListDates }) => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u4e00\u4e00\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n    // setCache\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f13\u5b58\u6570\u636e\n    todoListDates.forEach(todoDate => {\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n    setDates(['2022-05-01']);\n  };\n  // highlight-end\n\n  return <button onClick={handleTodolistToggle}>\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>;\n};\n"})})}),(0,a.jsx)(r.Z,{value:"3",label:"svelte",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<script>\n  import { setCache } from 'alova';\n  import { writable } from 'svelte/store';\n\n  const getTodoListByDate = dateList =>\n    alovaInstance.Get('/todo/list/dates', {\n      params: { dateList }\n    });\n  // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\n  const dates = writable([\n    '2022-05-01',\n    '2022-05-02',\n    '2022-05-03',\n    '2022-05-04',\n    '2022-05-05'\n  ]);\n  const {\n    // ...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate($dates.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(({ data: todoListDates }) => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n    // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u4e00\u4e00\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n    // setCache\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f13\u5b58\u6570\u636e\n    todoListDates.forEach(todoDate => {\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n    // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n    $dates = ['2022-05-01'];\n  };\n  // highlight-end\n<\/script>\n<button on:click=\"{handleTodolistToggle}\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n"})})}),(0,a.jsx)(r.Z,{value:"4",label:"vue options",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<template>\n  <button @click=\"handleTodolistToggle\">\u5207\u6362\u65e5\u671f\uff0c\u547d\u4e2d\u7f13\u5b58</button>\n</template>\n<script>\n  import { setCache, useWatcher } from 'alova';\n  import { mapAlovaHook } from '@alova/vue-options';\n\n  const getTodoListByDate = dateList =>\n    alovaInstance.Get('/todo/list/dates', {\n      params: { dateList }\n    });\n\n  export default {\n    mixins: mapAlovaHook(function () {\n      return {\n        todo: useWatcher(() => getTodoListByDate(this.dates.join()), ['dates'], {\n          immediate: true\n        })\n      };\n    }),\n    data() {\n      return {\n        // \u521d\u59cb\u5316\u65f6\u6279\u91cf\u83b7\u53d65\u5929\u7684\u6570\u636e\n        dates: ['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']\n      };\n    },\n    mounted() {\n      this.todo$onSuccess(({ data: todoListDates }) => {\n        if (todoListDates.length <= 1) {\n          return;\n        }\n\n        // highlight-start\n        // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd95\u5929\u7684\u6570\u636e\u4f1a\u4e00\u8d77\u7f13\u5b58\u5230\u4e00\u4e2akey\u4e2d\n        // \u4e3a\u4e86\u8ba9\u540e\u7eed\u8bf7\u6c42\u67d0\u4e00\u5929\u7684\u6570\u636e\u65f6\u4e5f\u80fd\u547d\u4e2d\u7f13\u5b58\uff0c\u6211\u4eec\u53ef\u4ee5\u5c065\u5929\u7684\u6570\u636e\u62c6\u89e3\u4e3a\u6309\u5929\uff0c\u5e76\u901a\u8fc7setCache\u76f8\u7ee7\u624b\u52a8\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\n        todoListDates.forEach(todoDate => {\n          // setCache\u53c2\u6570\u8bf4\u660e\uff1a\n          // \u53c2\u65701\uff1amethod\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u7f13\u5b58\u7684key\n          // \u53c2\u65702\uff1a\u7f13\u5b58\u6570\u636e\n          setCache(getTodoListByDate(todoDate.date), [todoDate]);\n        });\n        // highlight-end\n      });\n    },\n    methods: {\n      // highlight-start\n      handleTodolistToggle() {\n        // \u6b64\u65f6\u518d\u5728\u5207\u6362\u65e5\u671f\u4e3a5\u67081\u65e5\u65f6\uff0c\u5b83\u5c06\u4f1a\u547d\u4e2d\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e\u7684\u54cd\u5e94\u7f13\u5b58\u3002\n        // dates\u503c\u6b63\u5728\u88abuseWatcher\u76d1\u542c\uff0c\u56e0\u6b64\u6539\u53d8\u5b83\u5c31\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n        this.dates = ['2022-05-01'];\n      }\n      // highlight-end\n    }\n  };\n<\/script>\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e",children:"\u52a8\u6001\u66f4\u65b0\u7f13\u5b58\u6570\u636e"}),"\n",(0,a.jsxs)(t.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u5728",(0,a.jsx)(t.code,{children:"setCache"}),"\u4e2d\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u52a8\u6001\u8ba1\u7b97\u7f13\u5b58\u6570\u636e\uff0c\u5e76\u8fd4\u56de\u9700\u8981\u66f4\u65b0\u7684\u7f13\u5b58\u6570\u636e\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"setCache(getTodoListByDate('2022-10-01'), oldCache => {\n  // \u8fd4\u56de\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\n  return {\n    ...oldCache,\n    expire: isAfter('2022-10-01', new Date())\n  };\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u540c\u6837\u7684\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.jsx)(t.a,{href:"/v2/tutorial/advanced/method-matcher",children:"method \u5339\u914d\u5668"})," \u52a8\u6001\u67e5\u627e method \u5b9e\u4f8b\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"setCache(\n  {\n    name: 'todoList',\n    filter: (method, index, ary) => {\n      return index < 5;\n    }\n  },\n  'newCache'\n);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0",children:"\u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0"}),"\n",(0,a.jsxs)(t.p,{children:["\u6709\u65f6\u5019\u4f60\u9700\u8981\u52a8\u6001\u5224\u65ad\u662f\u5426\u9700\u8981\u66f4\u65b0\u7f13\u5b58\uff0c\u5982\u679c\u5728",(0,a.jsx)(t.code,{children:"setCache"}),"\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u672a\u8fd4\u56de\u6570\u636e\uff0c\u6216\u8fd4\u56de\u4e86",(0,a.jsx)(t.code,{children:"undefined"}),"\uff0c\u6b64\u65f6\u5c06\u4e0d\u66f4\u65b0\u539f\u7f13\u5b58\u6570\u636e"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"setCache(getTodoListByDate('2022-10-01'), oldCache => {\n  const isExpired = isAfter('2022-10-01', new Date());\n  if (!isExpired) {\n    return; // \u4e2d\u65ad\u7f13\u5b58\u66f4\u65b0\n  }\n  return null; // \u5c06\u7f13\u5b58\u66f4\u65b0\u4e3anull\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u67e5\u8be2\u7f13\u5b58",children:"\u67e5\u8be2\u7f13\u5b58"}),"\n",(0,a.jsx)(t.p,{children:"\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u7f13\u5b58\u67e5\u8be2\u65b9\u6cd5\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { queryCache } from 'alova';\n\nconst cacheData = queryCache(getTodoListByDate('2022-10-01'));\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.jsx)(t.a,{href:"/v2/tutorial/advanced/method-matcher",children:"method \u5339\u914d\u5668"})," \u52a8\u6001\u67e5\u627e method \u5b9e\u4f8b\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const cacheData = queryCache({\n  name: 'todoList',\n  filter: (method, index, ary) => {\n    return index < 5;\n  }\n});\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(90512);const s={tabItem:"tabItem_Ymn6"};var o=n(85893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,r),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(67294),s=n(90512),o=n(12466),r=n(16550),l=n(20469),i=n(91980),c=n(67392),d=n(20812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[r,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=p({queryString:n,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,d.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),v=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==a&&(c(t),r(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function D(e){const t=(0,f.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(67294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);