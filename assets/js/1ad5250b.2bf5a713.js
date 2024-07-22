"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8930],{9808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(85893),o=n(11151),a=n(52991);const s={title:"Advanced"},c=void 0,i={id:"tutorial/advanced/in-depth/README",title:"Advanced",description:"The advanced tutorial allows you to have a deeper understanding of some features of alova. They may not be commonly used functions, but can help you quickly solve more special request problems.",source:"@site/docs/tutorial/06-advanced/01-in-depth/README.md",sourceDirName:"tutorial/06-advanced/01-in-depth",slug:"/tutorial/advanced/in-depth/",permalink:"/tutorial/advanced/in-depth/",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-advanced/01-in-depth/README.md",tags:[],version:"current",frontMatter:{title:"Advanced"},sidebar:"tutorial",previous:{title:"Controlled Cache",permalink:"/tutorial/cache/controlled-cache"},next:{title:"Custom Method Key",permalink:"/tutorial/advanced/in-depth/custom-method-key"}},l={},u=[];function d(e){const t={p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The advanced tutorial allows you to have a deeper understanding of some features of alova. They may not be commonly used functions, but can help you quickly solve more special request problems."}),"\n",(0,r.jsx)(a.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>x});n(67294);var r=n(90512),o=n(53438),a=n(33692),s=n(88824),c=n(13919),i=n(95999),l=n(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(a.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:o,description:a}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),a&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e;const n=(0,o.LM)(t),r=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,i.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const a=(0,o.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(v,{item:e})},t)))})}},88824:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(67294),o=n(52263);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}(n,t,e)}}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(67294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);