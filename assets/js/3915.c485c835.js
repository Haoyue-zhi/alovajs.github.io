"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=l,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1310:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),l=n(7294),r=n(6010),o=n(5281),i=n(3438),c=n(8596),s=n(9960),d=n(5999),m=n(4996);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function f(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(s.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:p.breadcrumbHomeIcon})))}const h={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(s.Z,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function b(e){let{children:t,active:n,index:o,addMicrodata:i}=e;return l.createElement("li",(0,a.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(o+1)}))}function E(){const e=(0,i.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(o.k.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(f,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(b,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(v,{href:t.href,isLast:a},t.label))})))):null}},7121:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(7294),l=n(833),r=n(902);const o=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function s(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(6010),m=n(7524),u=n(4966);function p(){const{metadata:e}=c();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var f=n(3120),h=n(4364),v=n(5281),b=n(5999);function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){let{lastUpdatedBy:t}=e;return a.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:v.k.common.lastUpdated},a.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(g,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var C=n(7462);const y={iconEdit:"iconEdit_Z9Sw"};function Z(e){let{className:t,...n}=e;return a.createElement("svg",(0,C.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(y.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function L(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:v.k.common.editThisPage},a.createElement(Z,null),a.createElement(b.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var k=n(9960);const _={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(e){let{permalink:t,label:n,count:l}=e;return a.createElement(k.Z,{href:t,className:(0,d.Z)(_.tag,l?_.tagWithCount:_.tagRegular)},n,l&&a.createElement("span",null,l))}const x={tags:"tags_jXut",tag:"tag_QGVx"};function w(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(b.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(x.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:x.tag},a.createElement(T,{label:t,permalink:n}))}))))}const H={lastUpdated:"lastUpdated_vwxv"};function O(e){return a.createElement("div",{className:(0,d.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(w,e)))}function A(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(v.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(L,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",H.lastUpdated)},(n||l)&&a.createElement(N,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function M(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,i=o.length>0,s=!!(t||n||r);return i||s?a.createElement("footer",{className:(0,d.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(O,{tags:o}),s&&a.createElement(A,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var U=n(6043),B=n(3743);const I={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function S(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,C.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",I.tocCollapsibleButton,!t&&I.tocCollapsibleButtonExpanded,n.className)}),a.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const P={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function z(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:i}=(0,U.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(P.tocCollapsible,!o&&P.tocCollapsibleExpanded,n)},a.createElement(S,{collapsed:o,onClick:i}),a.createElement(U.z,{lazy:!0,className:P.tocCollapsibleContent,collapsed:o},a.createElement(B.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const V={tocMobile:"tocMobile_ITEo"};function j(){const{toc:e,frontMatter:t}=c();return a.createElement(z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(v.k.docs.docTocMobile,V.tocMobile)})}var D=n(9593);function R(){const{toc:e,frontMatter:t}=c();return a.createElement(D.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var F=n(2503),W=n(3905),q=n(5742);var $=n(614);var G=n(2389);const Y={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function Q(e,t){return!!e&&(e===t||Q(e.parentElement,t))}function X(e){let{summary:t,children:n,...l}=e;const r=(0,G.Z)(),o=(0,a.useRef)(null),{collapsed:i,setCollapsed:c}=(0,U.u)({initialState:!l.open}),[s,m]=(0,a.useState)(l.open),u=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,C.Z)({},l,{ref:o,open:s,"data-collapsed":i,className:(0,d.Z)(Y.details,r&&Y.isBrowser,l.className),onMouseDown:e=>{J(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;J(t)&&Q(t,o.current)&&(e.preventDefault(),i?(c(!1),m(!0)):c(!0))}}),u,a.createElement(U.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)}},a.createElement("div",{className:Y.collapsibleContent},n)))}const K={details:"details_b_Ee"},ee="alert alert--info";function te(e){let{...t}=e;return a.createElement(X,(0,C.Z)({},t,{className:(0,d.Z)(ee,K.details,t.className)}))}function ne(e){return a.createElement(F.Z,e)}const ae={containsTaskList:"containsTaskList_mC6p"};function le(e){if(void 0!==e)return(0,d.Z)(e,e?.includes("contains-task-list")&&ae.containsTaskList)}const re={img:"img_ev3q"};const oe="admonition_LlT9",ie="admonitionHeading_tbUL",ce="admonitionIcon_kALy",se="admonitionContent_S0QG";const de={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(b.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(b.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(b.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(b.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(b.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},me={secondary:"note",important:"info",success:"tip",warning:"danger"};function ue(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:e.title??t,children:n}}const pe={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(q.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement($.Z,e)},a:function(e){return a.createElement(k.Z,e)},pre:function(e){return a.createElement($.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(te,(0,C.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,C.Z)({},e,{className:le(e.className)}))},img:function(e){return a.createElement("img",(0,C.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,re.img))}));var t},h1:e=>a.createElement(ne,(0,C.Z)({as:"h1"},e)),h2:e=>a.createElement(ne,(0,C.Z)({as:"h2"},e)),h3:e=>a.createElement(ne,(0,C.Z)({as:"h3"},e)),h4:e=>a.createElement(ne,(0,C.Z)({as:"h4"},e)),h5:e=>a.createElement(ne,(0,C.Z)({as:"h5"},e)),h6:e=>a.createElement(ne,(0,C.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:l,icon:r}=ue(e),o=function(e){const t=me[e]??e,n=de[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),de.info)}(n),i=l??o.label,{iconComponent:c}=o,s=r??a.createElement(c,null);return a.createElement("div",{className:(0,d.Z)(v.k.common.admonition,v.k.common.admonitionType(e.type),"alert",`alert--${o.infimaClassName}`,oe)},a.createElement("div",{className:ie},a.createElement("span",{className:ce},s),i),a.createElement("div",{className:se},t))},mermaid:()=>null};function fe(e){let{children:t}=e;return a.createElement(W.Zo,{components:pe},t)}function he(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(v.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(F.Z,{as:"h1"},n)),a.createElement(fe,null,t))}var ve=n(1310);const be={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Ee(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(j,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(R,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&be.docItemCol)},a.createElement(f.Z,null),a.createElement("div",{className:be.docItemContainer},a.createElement("article",null,a.createElement(ve.Z,null),a.createElement(h.Z,null),n.mobile,a.createElement(he,null,t),a.createElement(M,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ge(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(s,null),a.createElement(Ee,null,a.createElement(n,null))))}},4966:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),l=n(7294),r=n(5999),o=n(6010),i=n(9960);function c(e){const{permalink:t,title:n,subLabel:a,isNext:r}=e;return l.createElement(i.Z,{className:(0,o.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function s(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(c,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(6010),r=n(5999),o=n(5281),i=n(4477);function c(e){let{className:t}=e;const n=(0,i.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7294),l=n(6010),r=n(2263),o=n(9960),i=n(5999),c=n(143),s=n(5281),d=n(373),m=n(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:l},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,r.Z)(),{pluginId:i}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(i),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,c.Jo)(i),v=u??(b=h).docs.find((e=>e.id===b.mainDocId));var b;return a.createElement("div",{className:(0,l.Z)(t,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:h.label,to:v.path,onClick:()=>m(h.name)})))}function v(e){let{className:t}=e;const n=(0,m.E)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}},2503:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),o=n(5999),i=n(6668),c=n(9960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,i.L)();if("h1"===t||!n)return l.createElement(t,(0,a.Z)({},d,{id:void 0}));const u=(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return l.createElement(t,(0,a.Z)({},d,{className:(0,r.Z)("anchor",m?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,d.className),id:n}),d.children,l.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},3233:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),o=n(3743),i=n(8138);const c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i.Z.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:s})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const h=(0,r.L)(),v=d??h.tableOfContents.minHeadingLevel,b=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:b});return m((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:b}}),[c,s,v,b])),l.createElement(p,(0,a.Z)({toc:E,className:n,linkClassName:c},f))}},8138:(e,t,n)=>{n.d(t,{Z:()=>a});const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"}}}]);