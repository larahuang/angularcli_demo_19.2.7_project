### 前置作業
node v20.17.0 / npm 10.8.2

### 安裝
指令
```
npm install -g @angular/cli@19.2.7
```
### 建立專案
```
ng new <專案名稱>

? Which stylesheet樣式表 format would you like to use?
  CSS             [ https://developer.mozilla.org/docs/Web/CSS
   ]
❯ Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss             
   ]
  Sass (Indented) [
https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org



Do you want to enable Server-Side Rendering (SSR 伺服器端渲染) and Static 靜態 Site Generation 生成
(SSG/Prerendering)? (y/N)

? Would you like to use the Server Routing and App Engine APIs (Developer 
Preview開發者預覽版) for this server application(應用)? (y/N)
CREATE angular19.2.7_demo_project/README.md (1485 bytes)
CREATE angular19.2.7_demo_project/.editorconfig (314 bytes)
CREATE angular19.2.7_demo_project/.gitignore (587 bytes)
CREATE angular19.2.7_demo_project/angular.json (2999 bytes)
CREATE angular19.2.7_demo_project/package.json (1285 bytes)
CREATE angular19.2.7_demo_project/tsconfig.json (915 bytes)
CREATE angular19.2.7_demo_project/tsconfig.app.json (489 bytes)
CREATE angular19.2.7_demo_project/tsconfig.spec.json (434 bytes)
CREATE angular19.2.7_demo_project/.vscode/extensions.json (130 bytes)
CREATE angular19.2.7_demo_project/.vscode/launch.json (470 bytes)
CREATE angular19.2.7_demo_project/.vscode/tasks.json (938 bytes)
CREATE angular19.2.7_demo_project/src/main.ts (250 bytes)
CREATE angular19.2.7_demo_project/src/index.html (308 bytes)
CREATE angular19.2.7_demo_project/src/styles.scss (80 bytes)
CREATE angular19.2.7_demo_project/src/main.server.ts (264 bytes)
CREATE angular19.2.7_demo_project/src/server.ts (1636 bytes)
CREATE angular19.2.7_demo_project/src/app/app.component.scss (0 bytes)
CREATE angular19.2.7_demo_project/src/app/app.component.html (19903 bytes)
CREATE angular19.2.7_demo_project/src/app/app.component.spec.ts (976 bytes)
CREATE angular19.2.7_demo_project/src/app/app.component.ts (303 bytes)
CREATE angular19.2.7_demo_project/src/app/app.config.ts (438 bytes)
CREATE angular19.2.7_demo_project/src/app/app.routes.ts (77 bytes)
CREATE angular19.2.7_demo_project/src/app/app.config.server.ts (495 bytes)
CREATE angular19.2.7_demo_project/src/app/app.routes.server.ts (166 bytes)
CREATE angular19.2.7_demo_project/public/favicon.ico (15086 bytes)
```


### 錯誤修正error ts
```
Error: NG0401: Missing Platform: This may be due to using `bootstrapApplication` on the server without passing a `BootstrapContext`. Please make sure that `bootstrapApplication` is called with a `context` argument.
    at internalCreateApplication (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/.angular/cache/19.2.27/demo_angular/vite/deps_ssr/chunk-WNXFQNHD.js:35182:11)
    at bootstrapApplication (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/.angular/cache/19.2.27/demo_angular/vite/deps_ssr/chunk-BQCK6CQ3.js:5959:35)
    at bootstrap (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/src/main.server.ts:5:25)
    at eval (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/.angular/cache/19.2.27/demo_angular/vite/deps_ssr/chunk-NQELU2SU.js:11012:32)
    at Generator.next (<anonymous>)
    at eval (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/.angular/cache/19.2.27/demo_angular/vite/deps_ssr/chunk-YHCV7DAQ.js:85:61)
    at new ZoneAwarePromise (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/.angular/vite-root/demo_angular/node_modules/zone.js/fesm2015/zone-node.js:1420:25)
    at __async (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/.angular/cache/19.2.27/demo_angular/vite/deps_ssr/chunk-YHCV7DAQ.js:69:10)
    at getRoutesFromAngularRouterConfig (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/.angular/cache/19.2.27/demo_angular/vite/deps_ssr/chunk-NQELU2SU.js:10984:17)
    at eval (/Users/larahuang/Desktop/2026_Anguar/angularcli_demo_19.2.7_project/.angular/cache/19.2.27/demo_angular/vite/deps_ssr/chunk-NQELU2SU.js:11132:17)
```

檔案位置：src/main.server.ts
```
// src/main.server.ts
import { bootstrapApplication,BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config,context);

export default bootstrap;
```


