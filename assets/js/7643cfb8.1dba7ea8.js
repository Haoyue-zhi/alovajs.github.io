"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8576],{3279:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(85893),l=s(11151);const r={title:"method instance"},i=void 0,d={id:"api/method",title:"method instance",description:"A method instance corresponds to a request information description, which has the URL, request headers, request parameters of a request, as well as request behavior parameters such as response data processing and cache data processing. Through method instances, you can feel a unified usage experience in any js environment, and it can run normally with very few changes. In addition, method instances put request parameters and request behavior parameters together, making it easier for APIs management instead of spreading it across multiple code files.",source:"@site/versioned_docs/version-v2/api/02-method.md",sourceDirName:"api",slug:"/api/method",permalink:"/v2/api/method",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/api/02-method.md",tags:[],version:"v2",sidebarPosition:2,frontMatter:{title:"method instance"},sidebar:"api",previous:{title:"alova instance",permalink:"/v2/api/alova"},next:{title:"Core useHooks",permalink:"/v2/api/core-hooks"}},o={},a=[{value:"PromiseLike attribute",id:"promiselike-attribute",level:2},{value:"new Method()",id:"new-method",level:2},{value:"getMethodKey()",id:"getmethodkey",level:2},{value:"matchSnapshotMethod()",id:"matchsnapshotmethod",level:2},{value:"method.headers",id:"methodheaders",level:2},{value:"method.baseURL",id:"methodbaseurl",level:2},{value:"method.url",id:"methodurl",level:2},{value:"method.type",id:"methodtype",level:2},{value:"method.data",id:"methoddata",level:2},{value:"method.context",id:"methodcontext",level:2},{value:"method.hitSource",id:"methodhitsource",level:2},{value:"method.meta",id:"methodmeta",level:2},{value:"method.config",id:"methodconfig",level:2},{value:"method.fromCache",id:"methodfromcache",level:2},{value:"method.send()",id:"methodsend",level:2},{value:"method.abort()",id:"methodabort",level:2},{value:"method.then()",id:"methodthen",level:2},{value:"method.catch()",id:"methodcatch",level:2},{value:"method.finally()",id:"methodfinally",level:2},{value:"method.onDownload()",id:"methodondownload",level:2},{value:"method.onUpload()",id:"methodonupload",level:2},{value:"method.setName()",id:"methodsetname",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A method instance corresponds to a request information description, which has the URL, request headers, request parameters of a request, as well as request behavior parameters such as response data processing and cache data processing. Through method instances, you can feel a unified usage experience in any js environment, and it can run normally with very few changes. In addition, method instances put request parameters and request behavior parameters together, making it easier for APIs management instead of spreading it across multiple code files."}),"\n",(0,t.jsx)(n.h2,{id:"promiselike-attribute",children:"PromiseLike attribute"}),"\n",(0,t.jsxs)(n.p,{children:["After ",(0,t.jsx)(n.code,{children:"[v2.16.0]"}),", the method instance is a PromiseLike instance, which has ",(0,t.jsx)(n.code,{children:"then/catch/finally"})," functions, so you can use it as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Call the then function of method\nmethod.then(res => {\n  console.log(res);\n});\n\n// catch exception\nmethod.catch(e => {\n  console.log(e);\n});\n\n//Request completion call\nmethod.finally(() => {\n  console.log('Request completed');\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In addition, requests can also be sent through the ",(0,t.jsx)(n.code,{children:"await method"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"new-method",children:"new Method()"}),"\n",(0,t.jsx)(n.p,{children:"Create a custom method instance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface MethodConstructor {\n  new (\n    type: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH',\n    context: Alova,\n    url: string,\n    config?: AlovaMethodCreateConfig,\n    data?: Arg | string | FormData | Blob | ArrayBuffer | URLSearchParams | ReadableStream\n  ): Method;\n  readonly prototype: Method;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"}),": request type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"context"}),": alova instance"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"url"}),": request url"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config"}),": Configuration parameters, the type is the same as config parameter type of ",(0,t.jsx)(n.a,{href:"/api/alova#alovaget",children:"alova.Get"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data"}),": request body data"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Method } from 'alova';\nimport { alovaInstance } from './api';\n\nconst method = new Method('GET', alovaInstance, '/api/users', {\n  params: {\n    ID: 1\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"getmethodkey",children:"getMethodKey()"}),"\n",(0,t.jsx)(n.p,{children:"Get the key value of method. This key value is used as alova internal cache key."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function getMethodKey(method: Method): string;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"method"}),": method instance"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The key value of the method instance passed in."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { getMethodKey } from 'alova';\n\nconst method = alova.Get('/api/users');\nconst methodKey = getMethodKey(method);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"matchsnapshotmethod",children:"matchSnapshotMethod()"}),"\n",(0,t.jsxs)(n.p,{children:["Obtain the requested method instance snapshot using the matching method of ",(0,t.jsx)(n.a,{href:"/v2/tutorial/advanced/method-matcher",children:"method instance matcher"})," and return the matching result."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type MethodFilter =\n  | string\n  | RegExp\n  | {\n      name?: string | RegExp;\n      filter?: MethodFilterHandler;\n      alova?: Alova;\n    };\nfunction matchSnapshotMethod(\n  matcher: MethodFilter,\n  matchAll?: boolean\n): Method[] | Method | undefined;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"matcher"}),": method instance matcher"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"matchAll"}),": Whether to match all, the default is true"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Returns an array of method instances when ",(0,t.jsx)(n.code,{children:"matchAll"})," is true, otherwise returns a method instance or undefined"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { matchSnapshotMethod } from 'alova';\n\nawait alova.Get('/api/users');\nconst snapshotMethod = matchSnapshotMethod({\n  name: 'user',\n  filter(method, i, methodArray) {\n    return method.url.includes('users');\n  },\n  alova: alova\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodheaders",children:"method.headers"}),"\n",(0,t.jsx)(n.p,{children:"Request header."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  headers?: any;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodbaseurl",children:"method.baseURL"}),"\n",(0,t.jsxs)(n.p,{children:["The base path of the request, inherited from ",(0,t.jsx)(n.a,{href:"/api/alova",children:"alova instance"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  baseURL: string;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodurl",children:"method.url"}),"\n",(0,t.jsx)(n.p,{children:"Create the url of the method instance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  url: string;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodtype",children:"method.type"}),"\n",(0,t.jsx)(n.p,{children:"Request type."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"type"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  type: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH';\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methoddata",children:"method.data"}),"\n",(0,t.jsx)(n.p,{children:"Request body."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  data?: any;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodcontext",children:"method.context"}),"\n",(0,t.jsx)(n.p,{children:"Create an alova instance of the current method."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  context: Alova;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodhitsource",children:"method.hitSource"}),"\n",(0,t.jsxs)(n.p,{children:["Hitting the source method instance, when the source method instance request succeeds, the cache of the current method instance will be invalidated. As an automatic invalidation function, you only need to set the hit source instead of manually calling ",(0,t.jsx)(n.code,{children:"invalidateCache"})," to invalidate the cache. In addition, this function is more concise and effective than the ",(0,t.jsx)(n.code,{children:"invalidateCache"})," method in complex invalidation relationships. The field value can be set to the name of the method instance, other method instances, name regular matching, or their array."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  hitSource?: Method | string | RegExp | (Method | string | RegExp)[];\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodmeta",children:"method.meta"}),"\n",(0,t.jsxs)(n.p,{children:["The metadata of method is used to record request feature information, ",(0,t.jsx)(n.a,{href:"/v2/tutorial/getting-started/method-metadata",children:"View details"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  meta?: any;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodconfig",children:"method.config"}),"\n",(0,t.jsxs)(n.p,{children:["Configuration information when creating a method through ",(0,t.jsx)(n.code,{children:"alova.Get/alova.Post"})," and other methods, ",(0,t.jsx)(n.a,{href:"/api/alova#alovaget",children:"View details"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  config: AlovaMethodCreateConfig;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodfromcache",children:"method.fromCache"}),"\n",(0,t.jsx)(n.p,{children:"Is the response of current request from cache."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  fromCache: boolean;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodsend",children:"method.send()"}),"\n",(0,t.jsxs)(n.p,{children:["Use this method instance to send the request directly. If you send the request after ",(0,t.jsx)(n.code,{children:"[v2.16.0]"}),", you can omit calling this method."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  send(forceRequest?: boolean): Promise<Response>;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"forceRequest"}),": whether to force the request, the default is false"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A Promise instance with response data."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nconst response = await method.send();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodabort",children:"method.abort()"}),"\n",(0,t.jsx)(n.p,{children:"Abort the current request."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  abort(): void;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nmethod.abort();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodthen",children:"method.then()"}),"\n",(0,t.jsxs)(n.p,{children:["After ",(0,t.jsx)(n.code,{children:"[v2.16.0]"}),", the method instance is a PromiseLike instance. You can directly call this method or ",(0,t.jsx)(n.code,{children:"await method"})," to send a request and obtain the response data."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  then(\n    onFulfilled?: (value: Response) => any,\n    onRejected?: (reason: any) => any\n  ): Promise<Response>;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onFulfilled"}),": callback function when the request is successful"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onRejected"}),": callback function when the request fails"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A Promise instance with response data."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nconst response = await method;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodcatch",children:"method.catch()"}),"\n",(0,t.jsxs)(n.p,{children:["After ",(0,t.jsx)(n.code,{children:"[v2.16.0]"}),", the method instance is a PromiseLike instance. This method can be called directly to send requests and catch errors."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  catch<TResult = never>(\n    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null\n  ): Promise<Response | TResult>;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onrejected"}),": callback function when request error"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Promise instance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nconst response = await method.catch(error => {\n  console.error('Request error');\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodfinally",children:"method.finally()"}),"\n",(0,t.jsxs)(n.p,{children:["After ",(0,t.jsx)(n.code,{children:"[v2.16.0]"}),", the method instance is a PromiseLike instance. This method can be called directly to send the request and handle the response completion."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  finally(onfinally?: (() => void) | undefined | null): Promise<Response>;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Promise instance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nconst response = await method.finally(() => {\n  console.log('Request completed');\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodondownload",children:"method.onDownload()"}),"\n",(0,t.jsx)(n.p,{children:"Bind the download event to obtain download progress information."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  onDownload(handler: ProgressHandler): () => void;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"handler"})," download event callback function"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"unbind function"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/download_file');\nconst offEvent = method.onDownload(event => {\n  console.log('File size:', event.total);\n  console.log('Downloaded:', event.loaded);\n});\n\noffEvent();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodonupload",children:"method.onUpload()"}),"\n",(0,t.jsx)(n.p,{children:"Bind the upload event to obtain upload progress information."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  onUpload(handler: ProgressHandler): () => void;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"handler"})," upload event callback function"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"unbind function"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/upload_file', formData);\nconst offEvent = method.onUpload(event => {\n  console.log('File size:', event.total);\n  console.log('Uploaded:', event.loaded);\n});\n\noffEvent();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methodsetname",children:"method.setName()"}),"\n",(0,t.jsx)(n.p,{children:"Set the name of the method instance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  setName(name: string | number): void;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),": the name of the method instance"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"none"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users', {\n  name: 'user'\n});\nmethod.setName('newUser');\n"})})]})}function c(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var t=s(67294);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);