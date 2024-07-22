"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1233],{38392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=t(85893),r=t(11151),s=t(74866),a=t(85162);const o={title:"Form submit strategy"},l=void 0,d={id:"tutorial/strategy/useForm",title:"Form submit strategy",description:"use hook",source:"@site/versioned_docs/version-v2/tutorial/05-strategy/03-useForm.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/useForm",permalink:"/v2/tutorial/strategy/useForm",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/05-strategy/03-useForm.md",tags:[],version:"v2",sidebarPosition:3,frontMatter:{title:"Form submit strategy"},sidebar:"tutorial",previous:{title:"Pagination request strategy",permalink:"/v2/tutorial/strategy/usePagination"},next:{title:"Token authentication interceptor",permalink:"/v2/tutorial/strategy/tokenAuthentication"}},c={},u=[{value:"Example",id:"example",level:2},{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Submit auto reset form",id:"submit-auto-reset-form",level:3},{value:"Update form data",id:"update-form-data",level:3},{value:"Form draft",id:"form-draft",level:3},{value:"Multi-page/multi-step forms",id:"multi-pagemulti-step-forms",level:3},{value:"Conditional filter",id:"conditional-filter",level:3},{value:"API",id:"api",level:2},{value:"Hook configuration",id:"hook-configuration",level:3},{value:"Responsive data",id:"responsive-data",level:3},{value:"StoreDetailConfig",id:"storedetailconfig",level:4},{value:"DataSerializer",id:"dataserializer",level:4},{value:"Action function",id:"action-function",level:3},{value:"Event",id:"event",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"strategy type",type:"info",children:(0,i.jsx)(n.p,{children:"use hook"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Before using extension hooks, make sure you are familiar with the basic usage of alova."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A hook designed for form submission. Through this hook, you can easily implement form drafts and multi-page (multi-step) forms. In addition, it also provides common functions such as form reset."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/v2/tutorial/example/form-hook",children:"Form Submission Demo"})}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"draft form;"}),"\n",(0,i.jsx)(n.li,{children:"Multi-page (multi-step) forms;"}),"\n",(0,i.jsx)(n.li,{children:"Form submission automatically resets data;"}),"\n",(0,i.jsx)(n.li,{children:"Reset form data manually;"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(s.Z,{groupId:"framework",children:[(0,i.jsx)(a.Z,{value:"1",label:"vue",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-vue --save\n#yarn\nyarn add @alova/scene-vue\n\n"})})}),(0,i.jsx)(a.Z,{value:"2",label:"react",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-react --save\n#yarn\nyarn add @alova/scene-react\n\n"})})}),(0,i.jsx)(a.Z,{value:"3",label:"svelte",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-svelte --save\n#yarn\nyarn add @alova/scene-svelte\n\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,i.jsx)(n.p,{children:"Demonstrates basic use of form hooks."}),"\n",(0,i.jsxs)(s.Z,{groupId:"framework",children:[(0,i.jsx)(a.Z,{value:"1",label:"vue",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<template>\n  <input v-model="form.name" />\n  <select v-model="form.cls">\n    <option value="1">class 1</option>\n    <option value="2">class 2</option>\n    <option value="3">class 3</option>\n  </select>\n  <button\n    @click="handleSubmit"\n    :loading="submitting">\n    submit\n  </button>\n</template>\n\n<script setup>\n  import { formSubmit } from \'./api.js\';\n  import { useForm } from \'@alova/scene-vue\';\n\n  const {\n    // submit status\n    loading: submitting,\n\n    // Responsive form data, the content is determined by initialForm\n    form,\n\n    // submit data function\n    send: submit,\n\n    // Submit successful callback binding\n    onSuccess,\n\n    // Submit failure callback binding\n    onError,\n\n    // Submit completed callback binding\n    onComplete\n  } = useForm(\n    formData => {\n      // Form data can be converted and submitted here\n      return formSubmit(formData);\n    },\n    {\n      // Initialize form data\n      initialForm: {\n        name: \'\',\n        cls: \'1\'\n      }\n    }\n  );\n\n  // submit form data\n  const handleSubmit = () => {\n    // Validate form data...\n    submit();\n  };\n<\/script>\n'})})}),(0,i.jsx)(a.Z,{value:"2",label:"react",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { formSubmit } from './api.js';\nimport { useForm } from '@alova/scene-react';\n\nconst App = () => {\n  const {\n    // submit status\n    loading: submitting,\n\n    // Responsive form data, the content is determined by initialForm\n    form,\n\n    // submit data function\n    send: submit,\n\n    // update form item\n    updateForm,\n\n    // Submit successful callback binding\n    onSuccess,\n\n    // Submit failure callback binding\n    onError,\n\n    // Submit completed callback binding\n    onComplete\n  } = useForm(\n    formData => {\n      // Form data can be converted and submitted here\n      return formSubmit(formData);\n    },\n    {\n      // Initialize form data\n      initialForm: {\n        name: '',\n        cls: '1'\n      }\n    }\n  );\n\n  // submit form data\n  const handleSubmit = () => {\n    // Validate form data...\n    submit();\n  };\n\n  return (\n    <div>\n      <input\n        value={form.name}\n        onChange={({ target }) => updateForm({ name: target.value })}\n      />\n      <select\n        value={form.cls}\n        onChange={({ target }) => updateForm({ cls: target.value })}>\n        <option value=\"1\">class 1</option>\n        <option value=\"2\">class 2</option>\n        <option value=\"3\">class 3</option>\n      </select>\n      <button\n        onClick={handleSubmit}\n        loading={submitting}>\n        submit\n      </button>\n    </div>\n  );\n};\n"})})}),(0,i.jsx)(a.Z,{value:"3",label:"svelte",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script>\n  import { formSubmit } from \'./api.js\';\n  import { useForm } from \'@alova/scene-svelte\';\n\n  const {\n    // submit status\n    loading: submitting,\n\n    // Responsive form data, the content is determined by initialForm\n    form,\n\n    // submit data function\n    send: submit,\n\n    // Submit successful callback binding\n    onSuccess,\n\n    // Submit failure callback binding\n    onError,\n\n    // Submit completed callback binding\n    onComplete\n  } = useForm(\n    formData => {\n      // Form data can be converted and submitted here\n      return formSubmit(formData);\n    },\n    {\n      // Initialize form data\n      initialForm: {\n        name: \'\',\n        cls: \'1\'\n      }\n    }\n  );\n\n  // submit form data\n  const handleSubmit = () => {\n    // Validate form data...\n    submit();\n  };\n<\/script>\n\n<input bind:value="{$form.name}" />\n<select bind:value="{$form.cls}">\n  <option value="1">class 1</option>\n  <option value="2">class 2</option>\n  <option value="3">class 3</option>\n</select>\n<button\n  on:click="{handleSubmit}"\n  loading="{$submitting}">\n  submit\n</button>\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useForm"})," will not request by default, and the request will be sent after calling ",(0,i.jsx)(n.code,{children:"send"}),". At the same time, the callback function of ",(0,i.jsx)(n.code,{children:"useForm"})," will pass in the latest form data. If you need to convert the data before submitting, you can convert it here, or Can be converted in the ",(0,i.jsx)(n.code,{children:"formSubmit"})," function."]}),"\n",(0,i.jsx)(n.admonition,{title:"Caution",type:"warning",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"initialForm"})," is to set the initial form data, ",(0,i.jsx)(n.code,{children:"initialData"})," is to set the initial response data, pay attention to the distinction;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateForm"})," is to update the form data, and ",(0,i.jsx)(n.code,{children:"update"})," is to update the response data, pay attention to the distinction;"]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["The above example only shows a simple form submission function, there is no difference between ordinary form submissions, but ",(0,i.jsx)(n.code,{children:"useForm"})," also implements more practical functions, let us continue to look down."]}),"\n",(0,i.jsx)(n.h3,{id:"submit-auto-reset-form",children:"Submit auto reset form"}),"\n",(0,i.jsxs)(n.p,{children:["Many times, we need to reset the form data after the form is submitted. We always need to manually reassign values one by one when implementing it ourselves, and ",(0,i.jsx)(n.code,{children:"useForm"})," can help us do it automatically."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"useForm(submitData, {\n  //...\n  // highlight-start\n  // Set this parameter to true to automatically reset the form data after submission\n  resetAfterSubmitting: true\n  // highlight-end\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to manually reset the form data, you can also do it by calling the ",(0,i.jsx)(n.code,{children:"reset"})," function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const {\n  // highlight-start\n  // form reset function\n  reset\n  // highlight-end\n} = useForm(submitData, {\n  //...\n});\n\n// highlight-start\nconst handleReset = () => {\n  reset();\n};\n// highlight-end\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-form-data",children:"Update form data"}),"\n",(0,i.jsxs)(n.p,{children:["When editing a form, we need to display the data of the original form. At this time, we can use ",(0,i.jsx)(n.code,{children:"updateForm"})," to asynchronously update the form data."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const {\n   // ...\n   updateForm\n} = useForm(submitData, {\n   // ...\n   {\n     //Initialize form data\n     initialForm: {\n       name: '',\n       cls: '1'\n     }\n   }\n});\n\n// Request form data and update it to the form\nconst { onSuccess } = useRequest(getData);\nonSuccess(({ data }) => {\n   updateForm({\n     name: data.name,\n     cls: data.cls\n   });\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"form-draft",children:"Form draft"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useForm"})," also provides a form draft function, even if the page is refreshed before the data is reset, the form data can be restored. The principle is to use the storage adapter on the alova instance to persist the form data. You only need to set ",(0,i.jsx)(n.code,{children:"store"})," to true when using it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"useForm(submitData, {\n  //...\n  // highlight-start\n  // Turn on persistence to save data. After setting to true, uncommitted data will be persisted in real time\n  store: true\n  // highlight-end\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Before the data is persisted, ",(0,i.jsx)(n.code,{children:"JSON.stringify"})," will be called to convert it into a JSON string. By default, the form data will be serialized when it is persisted. ",(0,i.jsx)(n.code,{children:"useForm"})," has built-in ",(0,i.jsx)(n.code,{children:"Date"})," and ",(0,i.jsx)(n.code,{children:"RegExp"})," instances , which will be useful when using timepickers."]}),"\n",(0,i.jsxs)(n.p,{children:["In the form data only involves ",(0,i.jsx)(n.code,{children:"Date"})," and ",(0,i.jsx)(n.code,{children:"RegEYou don\u2019t need to do more for xp"})," instances, but if there are other non-JSON data, such as ",(0,i.jsx)(n.code,{children:"moment"})," instances, we need to customize the serializer, but don\u2019t worry, the custom serializer is very simple, the following will show the settings A ",(0,i.jsx)(n.code,{children:"moment"})," serializer."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import moment from 'moment';\nconst momentSerializer = {\n   // forward is called when serializing\n   // Need to judge whether it is a moment instance, if it is not the target value, return undefined, indicating that it will not be processed\n   forward: data => moment.isMoment(data) ? data.valueOf() : undefined,\n\n   // backward is called during deserialization, data is the value returned in forward\n   backward: timestamp => moment(timestamp);\n};\n\nuseForm(\n   submitData,\n   {\n     store: {\n       enable: true,\n       serializers: {\n         moment: momentSerializer\n       }\n     }\n   }\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"multi-pagemulti-step-forms",children:"Multi-page/multi-step forms"}),"\n",(0,i.jsxs)(n.p,{children:["Many times we encounter situations where form items are divided into multiple pages, or filled in multiple steps, and submitted in a unified manner at the end, such as multi-step user registration, questionnaire filling, etc., and forms with multiple steps may have interdependence Relationship, if realized by itself will bring some trouble. And ",(0,i.jsx)(n.code,{children:"useForm"})," realizes form data sharing, you can get the same form data in different pages or components, which solves the problem of multi-step form data dependence, and does not need to summarize form data when submitting, and can submit directly."]}),"\n",(0,i.jsxs)(n.p,{children:["When using, you need to set the id through ",(0,i.jsx)(n.code,{children:"useForm"}),", and you can share the same form data between different pages with the same id. For example, we have a form that needs to go through 3 steps to fill out the form, and they will go through component A, component B, and component C respectively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Component A -> Component B -> Component C\n"})}),"\n",(0,i.jsx)(n.p,{children:"At this point, we can initialize the form data inside component A:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title=Component A",children:"const returnStates = useForm(submitData, {\n  initialForm: {\n    step1Input: '',\n    step2Input: '',\n    step3Input: ''\n  },\n  // highlight-start\n  id: 'testForm'\n  // highlight-end\n});\nconst { form, send } = returnStates;\n"})}),"\n",(0,i.jsx)(n.p,{children:"In component B and component C, you can directly pass in the id in the first parameter to get the shared data in component A."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title=Component B, Component C",children:"const returnStates = useForm('testForm');\nconst { form, send } = returnStates;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"returnStates"})," returned by id in components B and C are the same reference as the ",(0,i.jsx)(n.code,{children:"returnStates"})," in component A. You can use the same ",(0,i.jsx)(n.code,{children:"form"}),", or you can call ",(0,i.jsx)(n.code,{children:"send"})," in any component to submit the form data uniformly."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"additional"})}),"\n",(0,i.jsxs)(n.p,{children:["When obtaining shared data by directly specifying the id in components B and C, the id must first initialize the form data, just like in component A, otherwise ",(0,i.jsx)(n.code,{children:"the form data of id {1} is not initial"})," will be thrown mistake. If your multi-step form is not in a certain order, but in random order according to certain conditions, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# possible order 1\nComponent B -> Component A -> Component C\n\n# possible order 2\nComponent A -> Component C -> Component B\n\n# possible order 3\nComponent C -> Component A -> Component B\n\n#...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this case, you can use ",(0,i.jsx)(n.code,{children:"useForm"})," in component B, C like component A."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"title=Component B, Component C",children:"const returnStates = useForm(submitData, {\n  initialForm: {\n    step1Input: '',\n    step2Input: '',\n    step3Input: ''\n  },\n  id: 'testForm'\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this way, no matter which component is rendered first, the form with the id of testForm can be initialized, and the subsequent components will first use the initialized form data when encountering the id of testForm, and will not initialize again. This way you can initialize form data inside any component."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["More detailed multi-step forms can also be experienced and viewed in ",(0,i.jsx)(n.a,{href:"/v2/tutorial/example/form-hook",children:"Form Submission Demo"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conditional-filter",children:"Conditional filter"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useForm"})," can also be used in the filtering form used in data filtering scenarios, for example, if you want to search city information by city name, you can set ",(0,i.jsx)(n.code,{children:"immediate=true"}),", it will start querying data at initialization, and then In the operation, call ",(0,i.jsx)(n.code,{children:"send"})," to repeatedly query the data."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const { send: searchData } = useForm(queryCity, {\n  initialForm: {\n    cityName: ''\n  },\n  immediate: true\n});\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Conditional Restrictions",type:"warning",children:(0,i.jsxs)(n.p,{children:["In conditional filtering scenarios, ",(0,i.jsx)(n.code,{children:"useForm"})," is more suitable for non-paginated list conditional queries. If you need to perform conditional queries in paginated lists, it is recommended to use ",(0,i.jsx)(n.a,{href:"/v2/tutorial/strategy/usePagination",children:"Pagination Request Strategy (usePagination)"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"hook-configuration",children:"Hook configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Inherit all configurations from ",(0,i.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,i.jsx)(n.strong,{children:"useRequest"})}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"initialForm"}),(0,i.jsx)(n.td,{children:"initial form data"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"form id, the data data of the same id is the same reference, which can be used to share the same form data in multi-page forms. Single page form does not need to specify id"}),(0,i.jsx)(n.td,{children:"string | number"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"store"}),(0,i.jsx)(n.td,{children:"Whether to save data persistently, after setting to true, uncommitted data will be persisted in real time"}),(0,i.jsxs)(n.td,{children:["boolean | ",(0,i.jsx)(n.a,{href:"#storedetailconfig",children:"StoreDetailConfig"})," | false"]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"resetAfterSubmiting"}),(0,i.jsx)(n.td,{children:"reset data after submission"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"responsive-data",children:"Responsive data"}),"\n",(0,i.jsxs)(n.p,{children:["Inherit all responsive data from ",(0,i.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,i.jsx)(n.strong,{children:"useRequest"})}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Version"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"form"}),(0,i.jsx)(n.td,{children:"form data,determined by initialForm"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"storedetailconfig",children:"StoreDetailConfig"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enable"}),(0,i.jsx)(n.td,{children:"Whether to enable persistent data"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"required"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"serializers"}),(0,i.jsxs)(n.td,{children:["A collection of custom serializers, built-in serializers:",(0,i.jsx)("br",{}),"1. The date serializer is used to convert dates",(0,i.jsx)("br",{}),"2. The regexp serializer is used to convert regular expressions",(0,i.jsx)("br",{}),"Yes Override the built-in serializer by setting the serializer with the same name"]}),(0,i.jsxs)(n.td,{children:["Record<string | number, ",(0,i.jsx)(n.a,{href:"#dataserializer",children:"DataSerializer"}),">"]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"dataserializer",children:"DataSerializer"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Versionthis"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"forward"}),(0,i.jsx)(n.td,{children:"Serialization function, when serializing in forward, it needs to judge whether it is the specified data, and return the converted data, otherwise return undefined or not return"}),(0,i.jsx)(n.td,{children:"(data: any) => any | undefined | void"}),(0,i.jsx)(n.td,{children:"required"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"backward"}),(0,i.jsx)(n.td,{children:"deserialization function, deserialization data directly"}),(0,i.jsx)(n.td,{children:"(data: any) => any | undefined | void"}),(0,i.jsx)(n.td,{children:"required"}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"action-function",children:"Action function"}),"\n",(0,i.jsxs)(n.p,{children:["Inherit all action functions of ",(0,i.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,i.jsx)(n.strong,{children:"useRequest"})}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"name"}),(0,i.jsx)(n.th,{children:"description"}),(0,i.jsx)(n.th,{children:"function parameters"}),(0,i.jsx)(n.th,{children:"return value"}),(0,i.jsx)(n.th,{children:"version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"updateForm"}),(0,i.jsx)(n.td,{children:"Update one or more form data"}),(0,i.jsxs)(n.td,{children:["newForm: Partial<F> | (oldForm: F) => F)",(0,i.jsx)("br",{})," F is ",(0,i.jsx)(n.code,{children:"initialForm"})," type"]}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reset"}),(0,i.jsx)(n.td,{children:"Reset to initialized data, if there is persistent data, it will also be cleared"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"event",children:"Event"}),"\n",(0,i.jsxs)(n.p,{children:["Inherit all events from ",(0,i.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,i.jsx)(n.strong,{children:"useRequest"})}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Callback Parameters"}),(0,i.jsx)(n.th,{children:"Version"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onRestore"}),(0,i.jsx)(n.td,{children:"Triggered after the persistent data is restored"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"})]})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var i=t(90512);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(67294),r=t(90512),s=t(12466),a=t(16550),o=t(20469),l=t(91980),d=t(67392),c=t(20812);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[d,u]=p({queryString:t,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=d??f;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function g(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(d(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);