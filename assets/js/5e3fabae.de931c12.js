"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4944],{66068:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=o(85893),r=o(11151);const s={title:"wormhole API"},t=void 0,l={id:"api/wormhole",title:"wormhole API",description:"@alova/wormhole is a more modern openAPI generation solution for the alova library. It can generate API functions, complete API types, and complete API documents at the same time. Alova's development tools can eliminate the intermediate API documents for you, shortening the collaboration distance between the front-end and back-end like a wormhole. It is also the underlying implementation of the vscode extension.",source:"@site/docs/api/07-wormhole.md",sourceDirName:"api",slug:"/api/wormhole",permalink:"/api/wormhole",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/api/07-wormhole.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"wormhole API"},sidebar:"api",previous:{title:"Global Configuration",permalink:"/api/global-config"}},a={},c=[{value:"Installation",id:"installation",level:2},{value:"Commands",id:"commands",level:2},{value:"gen",id:"gen",level:3},{value:"init",id:"init",level:3},{value:"Node API",id:"node-api",level:2},{value:"createConfig()",id:"createconfig",level:3},{value:"resolveWorkspaces()",id:"resolveworkspaces",level:3},{value:"readConfig()",id:"readconfig",level:3},{value:"generate()",id:"generate",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@alova/wormhole"})," is a more modern openAPI generation solution for the alova library. It can generate API functions, complete API types, and complete API documents at the same time. Alova's development tools can eliminate the intermediate API documents for you, shortening the collaboration distance between the front-end and back-end like a wormhole. It is also the underlying implementation of the vscode extension."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm i @alova/wormhole -D\n# yarn\nyarn add @alova/wormhole -D\n# pnpm\npnpm add @alova/wormhole -D\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"extension installation tips",type:"info",children:[(0,i.jsxs)(n.p,{children:["If you are using vscode, it is strongly recommended that you use ",(0,i.jsx)(n.code,{children:"@alova/wormhole"})," with alova's vscode extension. Please refer to ",(0,i.jsx)(n.a,{href:"/tutorial/getting-started/extension-integration",children:"Editor Extension Integration"})," to install vscode extension\n."]}),(0,i.jsxs)(n.p,{children:["If you are using other editors, you can also use the ",(0,i.jsx)(n.code,{children:"@alova/wormhole"})," command to generate complete API information."]})]}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(n.h3,{id:"gen",children:"gen"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"alova gen [-f, --force] [-c --cwd <path>] [-w --workspace]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["gen will look for the ",(0,i.jsx)(n.code,{children:"alova.config.{cjs,js,mjs,ts}"})," configuration file and use it to automatically generate API related information."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"-f, --force"}),": By default, the latest openAPI file will be checked for updates. If this parameter is specified, the check will be ignored and regeneration will be forced."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"-c, --cwd <path>"}),": Specify the working directory of the configuration file to be generated. The default is the current directory."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"-w, --workspace"}),": Specifies whether to generate in workspace mode. It will search for configuration files based on ",(0,i.jsx)(n.code,{children:"workspaces"})," in ",(0,i.jsx)(n.code,{children:"package.json"})," or subpackages defined in ",(0,i.jsx)(n.code,{children:"pnpm-workspace.yaml"}),", and generate API-related information for all subpackages."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"init",children:"init"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"alova init [-t, --type <type>] [-c --cwd <path>]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Generate alova.config configuration file in the current directory. It will automatically generate configuration files with different suffixes according to the project type."}),"\n",(0,i.jsx)(n.p,{children:"**Parameters: **"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"-t, --type"}),": Specifies the type of configuration file to be generated. The optional values \u200b\u200bare: ",(0,i.jsx)(n.code,{children:"auto/ts/typescript/module/commonjs"}),". The default is ",(0,i.jsx)(n.code,{children:"auto"}),". It will automatically generate configuration files with different suffixes according to the project type."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"-c, --cwd <path>"}),": Specifies the working directory of the configuration file to be generated. The default is the current directory."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"node-api",children:"Node API"}),"\n",(0,i.jsx)(n.h3,{id:"createconfig",children:"createConfig()"}),"\n",(0,i.jsx)(n.p,{children:"Create a configuration file."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type TemplateType = 'typescript' | 'module' | 'commonjs';\ninterface ConfigCreationOptions {\n  projectPath?: string;\n  type?: TemplateType;\n}\ndeclare function createConfig(options?: ConfigCreationOptions): Promise<void>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"projectPath"}),": project path, default is ",(0,i.jsx)(n.code,{children:"process.cwd()"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),": configuration file type, optional values \u200b\u200bare ",(0,i.jsx)(n.code,{children:"typescript"}),", ",(0,i.jsx)(n.code,{children:"module"}),", ",(0,i.jsx)(n.code,{children:"commonjs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createConfig } from '@alova/wormhole';\n\nawait createConfig();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"resolveworkspaces",children:"resolveWorkspaces()"}),"\n",(0,i.jsxs)(n.p,{children:["Search for all directories containing alova.config configuration files under the monorepo project. It will search for configuration files based on ",(0,i.jsx)(n.code,{children:"workspaces"})," in ",(0,i.jsx)(n.code,{children:"package.json"})," or subpackages defined in ",(0,i.jsx)(n.code,{children:"pnpm-workspace.yaml"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare function resolveWorkspaces(projectPath?: string): Promise<string[]>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"projectPath"}),": The project path to search, defaults to ",(0,i.jsx)(n.code,{children:"process.cwd()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Return value"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An array of relative paths to directories containing alova.config configuration files."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { resolveWorkspaces } from '@alova/wormhole';\nconst workspaces = await resolveWorkspaces();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"readconfig",children:"readConfig()"}),"\n",(0,i.jsx)(n.p,{children:"Read the alova.config configuration file and return the parsed configuration object."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare function readConfig(projectPath?: string): Promise<Config>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"projectPath"}),": The project path where the configuration file is located. The default value is ",(0,i.jsx)(n.code,{children:"process.cwd()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Return value"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configuration object."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { generate } from '@alova/wormhole';\nconst config = await readConfig();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"generate",children:"generate()"}),"\n",(0,i.jsxs)(n.p,{children:["Generate relevant API information based on the configuration object. Generally, it needs to be used with ",(0,i.jsx)(n.code,{children:"readConfig()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type GenerateApiOptions = {\n  force?: boolean;\n  projectPath?: string;\n};\ndeclare function generate(config: Config, rules?: GenerateApiOptions): Promise<boolean[]>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config"}),": configuration object, which is usually read by ",(0,i.jsx)(n.code,{children:"readConfig"})," function."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rules"}),": generation rules, optional parameters are:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"force"}),": whether to force regeneration, the default is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"projectPath"}),": project path, the default is ",(0,i.jsx)(n.code,{children:"process.cwd()"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Return value"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["An array that contains the result of ",(0,i.jsx)(n.code,{children:"generator"})," items in configuration whether generation is successful."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example 1"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configuration files only exist in the root directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { readConfig, generate } from '@alova/wormhole';\n\nconst config = await readConfig();\nconst results = await generate(config);\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example 2"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configuration files exist in multiple subpackages (monorepo)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { readConfig, generate, resolveWorkspaces } from '@alova/wormhole';\nconst workspaces = await resolveWorkspaces();\nfor (const workspace of workspaces) {\n  const config = await readConfig(workspace);\n  await generate(config);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>t});var i=o(67294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);