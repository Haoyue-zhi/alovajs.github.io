"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2677],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||n;return a?o.createElement(m,r(r({ref:t},p),{},{components:a})):o.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<n;u++)r[u]=a[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=a(7462),i=(a(7294),a(3905));const n={title:"Contribution Guidelines",sidebar_position:10},r="alova Contribution Guidelines",l={unversionedId:"contributing/overview",id:"contributing/overview",title:"Contribution Guidelines",description:"Hello, I'm glad to meet you here. This is a detailed alova contribution guidelines, which includes detailed guidance on contributing to all aspects of alova. Please continue reading.",source:"@site/docs/contributing/01-overview.md",sourceDirName:"contributing",slug:"/contributing/overview",permalink:"/contributing/overview",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/contributing/01-overview.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Contribution Guidelines",sidebar_position:10},sidebar:"contributingSidebar",next:{title:"Become a core team member",permalink:"/contributing/become-core-member"}},s={},u=[{value:"Preface",id:"preface",level:2},{value:"Contribution directory",id:"contribution-directory",level:2},{value:"alova mission and design principles",id:"alova-mission-and-design-principles",level:2},{value:"alova Mission",id:"alova-mission",level:3},{value:"alova design principles",id:"alova-design-principles",level:3},{value:"Select the contribution point you are interested in",id:"select-the-contribution-point-you-are-interested-in",level:2},{value:"Use alova in your project",id:"use-alova-in-your-project",level:3},{value:"Star alova",id:"star-alova",level:3},{value:"Report bug",id:"report-bug",level:3},{value:"Propose new feature ideas",id:"propose-new-feature-ideas",level:3},{value:"Pull Request",id:"pull-request",level:3},{value:"Bug fix",id:"bug-fix",level:4},{value:"New feature development",id:"new-feature-development",level:4},{value:"Project configuration",id:"project-configuration",level:4},{value:"Create an adapter or strategy library based on alova",id:"create-an-adapter-or-strategy-library-based-on-alova",level:3},{value:"Custom Adapter",id:"custom-adapter",level:4},{value:"Custom request strategy",id:"custom-request-strategy",level:4},{value:"Participate in community/PR review",id:"participate-in-communitypr-review",level:3},{value:"Publish and disseminate information about alova",id:"publish-and-disseminate-information-about-alova",level:3},{value:"Share experience",id:"share-experience",level:3},{value:"Collaboration",id:"collaboration",level:3},{value:"Donation",id:"donation",level:3},{value:"Correct or add docs",id:"correct-or-add-docs",level:3},{value:"Translate Documentation",id:"translate-documentation",level:3},{value:"Become a core team member",id:"become-a-core-team-member",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alova-contribution-guidelines"},"alova Contribution Guidelines"),(0,i.kt)("p",null,"Hello, I'm glad to meet you here. This is a detailed alova contribution guidelines, which includes detailed guidance on contributing to all aspects of alova. Please continue reading."),(0,i.kt)("h2",{id:"preface"},"Preface"),(0,i.kt)("p",null,"In the past period of time, we have received active participation information from developers from all over the world in Github issues and Github Discussion, which means that alova is being loved by more and more developers. Even so, alova is still a rookie, and it still has a long way to go."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We expect to make alova a common project for everyone who is willing to participate, and we encourage everyone to become a contributor to the alova community with an open and inclusive attitude. Moreover, we believe that contributing to alova is not limited to code contributions, but participating in any activities that are beneficial to the development of alova is considered to contribute to alova.")," Participating in contributions now can win you more effective contribution opportunities, and it allows you to contribute to the world Even if you are a junior developer, as long as the idea is in line with ",(0,i.kt)("a",{parentName:"p",href:"#alova-mission-and-design-principles"},"alova's mission and design principles"),", please generously participate!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There is a ",(0,i.kt)("a",{parentName:"p",href:"./code-of-conduct"},"Code of conduct")," here, please refer to it.")),(0,i.kt)("h2",{id:"contribution-directory"},"Contribution directory"),(0,i.kt)("p",null,"Here are 13 places where you can contribute, but not limited to these, you can choose the part you want to participate in, and link to the corresponding location for detailed reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-alova-in-your-project"},"use alova in your project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#star-alova"},"star alova")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#report-bug"},"report bug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#propose-new-feature-ideas"},"Propose new feature ideas")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pull-request"},"Pull Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-an-adapter-or-strategy-library-based-on-alova"},"Create an adapter or strategy library based on alova")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#participate-in-community-pr-review"},"Participate in community/PR review")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#publish-and-disseminate-information-about-alova"},"Publish and disseminate information about alova")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#share-experience"},"Share experience")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#collaboration"},"Collaboration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#donation"},"Donation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#correct-or-add-docs"},"Correct or add docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Translate-docs"},"Translate docs"))),(0,i.kt)("h2",{id:"alova-mission-and-design-principles"},"alova mission and design principles"),(0,i.kt)("h3",{id:"alova-mission"},"alova Mission"),(0,i.kt)("p",null,"alova's mission gives it a clear development direction, which clearly defines what alova should do."),(0,i.kt)("p",null,"alova is a lightweight request strategy library, ",(0,i.kt)("strong",{parentName:"p"},"Its mission is to enable developers to achieve more efficient Client-Server data interaction by less codes"),"."),(0,i.kt)("p",null,"For developers, alova provides them with a simple API and out-of-the-box advanced request functions, as well as various simple and high-performance request strategy modules. For application users, they can enjoy the benefits of alova The smooth experience brought by high-performance data interaction, therefore, alova has the following features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The api design is similar to axios, allowing users to learn at a lower cost;"),(0,i.kt)("li",{parentName:"ol"},"Deep binding of the UI framework, greatly improving the benefits of developers;"),(0,i.kt)("li",{parentName:"ol"},"Out-of-the-box advanced functions to avoid repeated packaging, such as request sharing, request caching, etc., to reduce developers' repeated packaging;"),(0,i.kt)("li",{parentName:"ol"},"The platform-independent coding way, and it can perfectly migrate in different platform;"),(0,i.kt)("li",{parentName:"ol"},"High scalability design, which can encapsulate high-reusability and high-performance business-related request strategies;"),(0,i.kt)("li",{parentName:"ol"},"Highly aggregated and low-coupling method design improves API code maintainability;")),(0,i.kt)("h3",{id:"alova-design-principles"},"alova design principles"),(0,i.kt)("p",null,"The design principles points out how it should be designed, the following is the core design concept of alova."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Method")," proxy design, high aggregation, platform-independent design, throughout the request, you should be able to access it in any request function, from another perspective, the information related to the request should also be placed in the method instance ;"),(0,i.kt)("li",{parentName:"ol"},"Lightweight, try to keep the source code concise in coding, such as avoiding repeated code, merging variable declarations, prototype chain function encapsulation, no similar API, tree shaking, but long variable names are allowed, because it will be used when compiling will be replaced by a single letter;"),(0,i.kt)("li",{parentName:"ol"},"Highly scalable design. First, the design of alova uses a large number of adapter patterns and hook functions. For example, adapters include ",(0,i.kt)("inlineCode",{parentName:"li"},"requestAdapter"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"storageAdapter"),", etc., and hook functions include ",(0,i.kt)("inlineCode",{parentName:"li"},"beforeRequest"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"responded"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"transformData"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"localCache"),", etc., and most of them have default behaviors, which are designed to be easy to use while retaining high scalability; second, global request parameters can be overwritten, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"shareRequest"),", etc., for These parameters can be set individually for special requests."),(0,i.kt)("li",{parentName:"ol"},"The api design is universal. First, it means that the function of this api has a high level of abstraction, rather than a specific business. Second, the api design is scalable to adapt to the needs of the api iteration")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The api universal design is only applicable to the alova library. If you are conceiving a request strategy, you can design it according to the specific business.")),(0,i.kt)("h2",{id:"select-the-contribution-point-you-are-interested-in"},"Select the contribution point you are interested in"),(0,i.kt)("h3",{id:"use-alova-in-your-project"},"Use alova in your project"),(0,i.kt)("p",null,"We believe that your use of alova in the project is also a contributor to alova, which is also telling people that alova is a trustworthy open source project, please open ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/issues/165"},"this issue"),", which may give you the opportunity to display your project on the alova official website."),(0,i.kt)("h3",{id:"star-alova"},"Star alova"),(0,i.kt)("p",null,"Although this may be considered insignificant, it represents your recognition of alova, and every star is very important to alova. star alova in the right top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova"},"alova's Github repository"),", which is important to us."),(0,i.kt)("h3",{id:"report-bug"},"Report bug"),(0,i.kt)("p",null,"Please move to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/issues/new/choose"},"Github new issue")," and select the corresponding template to submit. Detailed instructions will be displayed in the submitted issue."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PLEASE NOTE:")," If you want to ask questions about alova, please go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/discussions"},"Github Discussion")," to create a question. That would be closed immediately when ask a question in issues."),(0,i.kt)("h3",{id:"propose-new-feature-ideas"},"Propose new feature ideas"),(0,i.kt)("p",null,"In order for alova to achieve its value and goals, before submitting a new feature idea, please carefully read ",(0,i.kt)("a",{parentName:"p",href:"#alova-mission-and-design-principles"},"alova mission and design principles"),", and ensure that your new idea is in line with alova's mission and design philosophy design concept."),(0,i.kt)("p",null,"Then, please submit it in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/issues/new?assignees=&labels=feature-request&projects=&template=FEATURE_REQUEST_en.yml"},"\ud83d\ude80 New Feature Proposal"),", the detailed description will be Displayed when submitting an issue."),(0,i.kt)("h3",{id:"pull-request"},"Pull Request"),(0,i.kt)("p",null,"You can contribute the following 3 aspects of code through pull request. If you are a new partner who is interested in participating, all ",(0,i.kt)("inlineCode",{parentName:"p"},"good first issue")," issues are listed in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/contribute"},"Github contribution list"),", it is used to Tell new partners who are interested in contributing that this is a good start."),(0,i.kt)("h4",{id:"bug-fix"},"Bug fix"),(0,i.kt)("p",null,"Issues marked as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/labels/bug%3Aconfirmed"},(0,i.kt)("inlineCode",{parentName:"a"},"bug:confirmed"))," in Github issues are all confirmed bugs, you can choose freely."),(0,i.kt)("p",null,"If you encounter a bug yourself, please also ",(0,i.kt)("a",{parentName:"p",href:"#report-bug"},"report a bug")," first to ensure that the bug is confirmed to avoid invalid pull requests."),(0,i.kt)("h4",{id:"new-feature-development"},"New feature development"),(0,i.kt)("p",null,"Issues marked as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/labels/feature-request%3Aconfirmed"},(0,i.kt)("inlineCode",{parentName:"a"},"feature-request:confirmed"))," in Github issues are new features that have been confirmed, you You can choose freely."),(0,i.kt)("p",null,"If you have an idea for adding a new feature, please also ",(0,i.kt)("a",{parentName:"p",href:"#propose-new-feature-ideas"},"submit an issue of a new feature idea")," to ensure that the idea is confirmed to avoid invalid pull requests."),(0,i.kt)("h4",{id:"project-configuration"},"Project configuration"),(0,i.kt)("p",null,"If you are very good at project configuration and find deficiencies in the alova project, such as incomplete configuration, too old configuration version, insufficient automation (including project development automation and Github warehouse management automation), you can also press ",(0,i.kt)("a",{parentName:"p",href:"#new-feature-development"},"New Feature development")," process to contribute."),(0,i.kt)("admonition",{title:"IMPORTANT",type:"caution"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Please read the ",(0,i.kt)("a",{parentName:"li",href:"./developing-guidelines"},"Developing Guidelines")," carefully before developing, it can guide you step by step on how to contribute code."),(0,i.kt)("li",{parentName:"ol"},"When you identify an issue that needs to be resolved, please make sure that it has not been flagged by someone else's pull request, which means that it has been pre-occupied."))),(0,i.kt)("h3",{id:"create-an-adapter-or-strategy-library-based-on-alova"},"Create an adapter or strategy library based on alova"),(0,i.kt)("p",null,"alova provides high-extensibility features, and you can write your own js library based on it."),(0,i.kt)("h4",{id:"custom-adapter"},"Custom Adapter"),(0,i.kt)("p",null,"Customize various adapters to meet the operating requirements in different environments. The following directions are available for reference:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Customize statesHook, which can be executed under different UI frameworks, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"solid/qwik"),", currently supports ",(0,i.kt)("inlineCode",{parentName:"li"},"react/vue/svelte"),", please read ",(0,i.kt)("a",{parentName:"li",href:"../tutorial/advanced/custom-stateshook"},"Custom statesHook"),";"),(0,i.kt)("li",{parentName:"ol"},"Customize the request adapter, so that alova can cooperate with more request schemes, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"GraphQL/SSE"),", etc.;"),(0,i.kt)("li",{parentName:"ol"},"Customize the storage adapter to meet the storage requirements of different environments, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"react-native"),";"),(0,i.kt)("li",{parentName:"ol"},"Any combination of the above, such as the official ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/alovajs/adapter-uniapp"},"uniapp adapter"),", which includes request adapters and storage adapters.")),(0,i.kt)("h4",{id:"custom-request-strategy"},"Custom request strategy"),(0,i.kt)("p",null,"Request strategies can help developers write high-performance functions more efficiently. Although the official ",(0,i.kt)("a",{parentName:"p",href:"../category/strategy"},"alova/scene")," provides some common request strategies, it is not enough It is a good choice to customize your own reusable request strategy based on alova to meet the business scenarios related to various requests of developers, and you can also publish them on npm for everyone to use."),(0,i.kt)("admonition",{title:"Submit your project",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you have written an alova-based js library, please submit your project in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/issues/165"},"this issue"),", which will allow your project to be displayed on the alova official website Opportunity.")),(0,i.kt)("h3",{id:"participate-in-communitypr-review"},"Participate in community/PR review"),(0,i.kt)("p",null,"If you are interested in technical communication, then it may be more suitable for you to participate in more community communication. You can participate in the discussion of bugs and new features in Github issues, or in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/discussions"},"Github Discussion"),", ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/S47QGJgkVb"},"Discord")," or ",(0,i.kt)("a",{parentName:"p",href:"https://pd.qq.com/s/1cdjx0nnw"},"QQ channel")," to answer questions for others, which allows you to communicate with people from all over the world, which is a very interesting thing."),(0,i.kt)("p",null,"At the same time, you can also participate in PR review in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/pulls"},"pull request"),", which is also a topic of communication."),(0,i.kt)("h3",{id:"publish-and-disseminate-information-about-alova"},"Publish and disseminate information about alova"),(0,i.kt)("p",null,"You can publish or repost any information that is beneficial to the development of alova on any social platform, short video platform, or technology sharing platform, which will help increase the influence of alova. We will filter out relevant articles or videos and display them on the alova official website. Here are some good articles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@huzhen555/its-time-to-replace-your-axios-12c014833b04"},"It\u2019s time to replace your axios")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://uu9924079.medium.com/alova-js-%E7%AD%86%E8%A8%98-%E8%A9%A6%E7%94%A8%E7%9B%B8%E8%BC%83-axios-%E6%9B%B4%E8%BC%95%E9%87%8F-%E6%9B%B4%E9%AB%98%E9%9B%86%E6%88%90%E7%9A%84%E8%AB%8B%E6%B1%82%E5%BA%AB-546ec5424df9"},"Alova.js \u7b46\u8a18\uff0d\u8a66\u7528\u76f8\u8f03 axios \u66f4\u8f15\u91cf\u3001\u66f4\u9ad8\u96c6\u6210\u7684\u8acb\u6c42\u5eab"))),(0,i.kt)("h3",{id:"share-experience"},"Share experience"),(0,i.kt)("p",null,"If you have alova experience worth sharing, or better practice cases, you can share it in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alova/discussions/categories/practices"},"Github Discussion's Practices channel"),", better The sharing of will also be displayed in the official documentation."),(0,i.kt)("h3",{id:"collaboration"},"Collaboration"),(0,i.kt)("p",null,"We welcome project collaboration with any organization or individual, which can help us expand alova's influence and accelerate the development of the project. If you have any suggestions or intentions for cooperation, please contact us via email ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"mailto:hujou555@gmail.com"},"hujou555@gmail.com")),"."),(0,i.kt)("h3",{id:"donation"},"Donation"),(0,i.kt)("p",null,"You can donate to the project through the following 3 ways. Please go to the donation page to view the donation privileges."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sponsors/alovajs"},"Github sponsors")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://opencollective.com/alova"},"OpenCollective")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://afdian.net/a/huzhen555"},"afdian"))),(0,i.kt)("h3",{id:"correct-or-add-docs"},"Correct or add docs"),(0,i.kt)("p",null,"If you need to add new documentation content, or find errors in alova's documentation, such as wrong examples, wrong words, incorrect descriptions, or unmentioned content, you can ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alovajs.github.io/issues/new"},"create a new document repository issue"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alovajs/alovajs.github.io/fork"},"new document warehouse pull request")," directly modify the error, which should be the better option, and we welcome any suggestions or contributions to improve the documentation."),(0,i.kt)("h3",{id:"translate-documentation"},"Translate Documentation"),(0,i.kt)("p",null,"If you are proficient in different languages, you are welcome to translate the alova documentation, which will help expand the use and audience of alova."),(0,i.kt)("h2",{id:"become-a-core-team-member"},"Become a core team member"),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"./become-core-member"},"HERE")," for details"))}d.isMDXComponent=!0}}]);