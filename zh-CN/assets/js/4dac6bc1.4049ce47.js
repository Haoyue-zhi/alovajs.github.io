"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[196],{49058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(85893),r=n(11151);const i={title:"\u670d\u52a1\u7aefL2\u5b58\u50a8\u5b9e\u8df5"},s=void 0,o={id:"tutorial/project/best-practice/l2-storage",title:"\u670d\u52a1\u7aefL2\u5b58\u50a8\u5b9e\u8df5",description:"\u6587\u4ef6\u5b58\u50a8\u9002\u914d\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-project/01-best-practice/08-l2-storage.md",sourceDirName:"tutorial/07-project/01-best-practice",slug:"/tutorial/project/best-practice/l2-storage",permalink:"/zh-CN/tutorial/project/best-practice/l2-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-project/01-best-practice/08-l2-storage.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u670d\u52a1\u7aefL2\u5b58\u50a8\u5b9e\u8df5"},sidebar:"tutorial",previous:{title:"\u4e32\u884c\u8bf7\u6c42",permalink:"/zh-CN/tutorial/project/best-practice/serial-request"},next:{title:"v3 \u5347\u7ea7\u6307\u5357",permalink:"/zh-CN/tutorial/project/migration/v2-to-v3"}},c={},l=[{value:"\u6587\u4ef6\u5b58\u50a8\u9002\u914d\u5668",id:"\u6587\u4ef6\u5b58\u50a8\u9002\u914d\u5668",level:2},{value:"Redis \u9002\u914d\u5668",id:"redis-\u9002\u914d\u5668",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u6587\u4ef6\u5b58\u50a8\u9002\u914d\u5668",children:"\u6587\u4ef6\u5b58\u50a8\u9002\u914d\u5668"}),"\n",(0,a.jsx)(t.p,{children:"\u6bcf\u4e2a\u6587\u4ef6\u4e3a\u4e00\u4e2a\u7f13\u5b58\u9879\uff0c\u6587\u4ef6\u540d\u4e3a\u7f13\u5b58\u7684 key\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { promises as fs } from 'fs';\nimport * as path from 'path';\nimport { AlovaGlobalCacheAdapter } from 'alova';\n\nclass FileStorageAdapter implements AlovaGlobalCacheAdapter {\n  private directory: string;\n\n  constructor(directory: string) {\n    this.directory = directory;\n  }\n\n  private getFilePath(key: string) {\n    return path.join(this.directory, `${key}.json`);\n  }\n\n  async set(key: string, value: any) {\n    const filePath = this.getFilePath(key);\n    const data = JSON.stringify(value);\n    await fs.mkdir(this.directory, { recursive: true });\n    await fs.writeFile(filePath, data, 'utf8');\n  }\n\n  async get<T>(key: string): Promise<T | undefined> {\n    const filePath = this.getFilePath(key);\n    try {\n      const data = await fs.readFile(filePath, 'utf8');\n      return JSON.parse(data) as T;\n    } catch (error: any) {\n      if (error.code === 'ENOENT') {\n        return undefined;\n      }\n      throw error;\n    }\n  }\n\n  async remove(key: string) {\n    const filePath = this.getFilePath(key);\n    try {\n      await fs.unlink(filePath);\n    } catch (error: any) {\n      if (error.code !== 'ENOENT') {\n        throw error;\n      }\n    }\n  }\n\n  async clear() {\n    const files = await fs.readdir(this.directory);\n    const unlinkPromises = files.map(file => fs.unlink(path.join(this.directory, file)));\n    await Promise.all(unlinkPromises);\n  }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7528\u6cd5"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const alovaInstance = createAlova({\n  // ...\n  l2Cache: new FileStorageAdapter('tmp_cache')\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"redis-\u9002\u914d\u5668",children:"Redis \u9002\u914d\u5668"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import Redis from 'ioredis';\nimport { AlovaGlobalCacheAdapter } from 'alova';\n\nclass RedisStorageAdapter implements AlovaGlobalCacheAdapter {\n  private client: Redis;\n  private cachePrefix: string;\n\n  constructor(options: Redis.RedisOptions, cachePrefix = 'alova:') {\n    this.client = new Redis(options);\n    this.cachePrefix = cachePrefix;\n  }\n\n  // Save or update cache\n  async set(key: string, value: [any, number]) {\n    const [data, expireTs] = value;\n    const now = Date.now();\n    const dataToStore = JSON.stringify(data);\n\n    // Calculate the TTL in milliseconds\n    const ttl = expireTs - now;\n    if (ttl > 0) {\n      await this.client.set(this.cachePrefix + key, dataToStore, 'PX', ttl);\n    }\n  }\n\n  // Get value by key\n  async get<T>(key: string): Promise<T | undefined> {\n    const data = await this.client.get(this.cachePrefix + key);\n    if (!data) {\n      return undefined;\n    }\n    return JSON.parse(data);\n  }\n\n  // Remove item\n  async remove(key: string) {\n    await this.client.del(this.cachePrefix + key);\n  }\n\n  // Clear all cache\n  async clear() {\n    console.log('redis cache clear is not allowed');\n  }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7528\u6cd5"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const alovaInstance = createAlova({\n  // ...\n  l2Cache: new RedisStorageAdapter(\n    {\n      host: 'localhost',\n      port: 6379,\n      password: 'yourpassword',\n      db: 0\n    },\n    'myprefix:'\n  )\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);