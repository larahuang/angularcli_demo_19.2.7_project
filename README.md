# DemoAngular
node v20.17.0 / npm 10.8.2

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.
本專案使用 [Angular CLI](https://github.com/angular/angular-cli) 版本 19.2.7 產生。

## Development server
若要啟動本機開發伺服器，請執行：

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
伺服器運行後，打開瀏覽器並訪問 `http://localhost:4200/`。每當您修改任何原始檔案時，應用程式都會自動重新載入。

## Code scaffolding 程式碼腳手架
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
Angular CLI 包含強大的程式碼腳手架工具。若要產生新元件，請執行：
```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
若要查看所有可用原理圖（例如「元件」、「指令」或「管道」）的完整列表，請執行：

```bash
ng generate --help
```

## Building

To build the project run:
要建置項目，請運行：
```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
這將編譯您的專案並將建置產物儲存在 `dist/` 目錄中。預設情況下，生產版本會優化您的應用程序，以提高效能和速度。


## Running unit tests 運行單元測試
To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:
若要使用 [Karma](https://karma-runner.github.io) 測試執行器執行單元測試，請使用下列指令：
```bash
ng test
```

## Running end-to-end tests運行端對端測試
For end-to-end (e2e) testing, run:
若要進行端對端 (e2e) 測試，請執行：
```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
Angular CLI 預設不包含端對端測試框架。您可以根據自己的需求選擇合適的框架。
## Additional Resources其他資源

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

### Angular 專案架構
<ul>
  <li>.angular // 工作區中所有專案的 CLI 設定，包含如何建置、提供與測試每個專案的設定選項。詳細資訊，請參閱 Angular 工作區設定。</li>
  <li>.vscode</li>
  <li>node_modules： // 整個工作區已安裝的 npm 套件。工作區層級的 node_modules 相依性對所有專案可見。</li>
  <li>public 包含要由開發伺服器以靜態檔案形式提供，並在建置應用程式時原樣複製的圖片與其他資產檔案。</li>
  <li>src
      <ul>
        <li>app // 包含定義應用程式邏輯與資料的元件檔案。詳情請見下方。
          <ul>
            <li>app.config.server.ts   </li>
            <li>app.config.ts  // 定義應用程式設定，告訴 Angular 如何組裝應用程式。當你為應用程式加入更多提供者時，應在此宣告。僅在使用 --standalone 選項時產生。</li>
            <li>app.routes.server.ts</li>
            <li>app.routes.ts // 定義應用程式的路由設定。</li>
            <li>app.ts // 	定義應用程式的根元件，名為 App。當你將元件與服務加入應用程式時，與此根元件相關聯的檢視會成為檢視階層的根。</li>
            <li> app.html // 定義與 App 相關聯的 HTML 範本。</li>
            <li>app.css // 定義 App 的 CSS 樣式表。</li>
            <li>app.spec.ts</li>
          </ul>
        </li>
        <li>index.html</li>
        <li>main.server.ts</li>
        <li>main.ts  //應用程式的主要進入點。</li>
        <li>server.ts</li>
        <li>styles.scss// 套用到整個應用程式的全域 SCSS 樣式。</li>
      </ul>
  </li>
  <li>.editorconfig // 是常見的編輯器設定檔，針對你目前使用的編輯器來設定，e.g. 如何處理 tab 符號及斷行符號等內容，可以根據自己的需求，進行設定。</li>
  <li>.gitignore：// 是 Git 的忽略設定檔，裡頭定義的是不需要進入版控的檔案及資料夾。</li>
  <li>package.json // 你目前專案的 npm 設定檔，是個十分重要的檔案，裡頭可以看到一些套件的版本，在 script 這個區塊裡，包含了將來在使用 Angular 開發時，會用到的命令，如：我們前一篇文使用到的 npm start/ng serve。</li>
  <li>package-lock.json //提供 npm 用戶端安裝到 node_modules 的所有套件的版本資訊。詳細資訊，請參閱 npm 文件。</li>
  <li>README.md </li>
  <li>tsconfig.app.json // 繼承自 tsconfig.json，並做出額外的設定，比較有機會用到的地方為檔案裡頭的 types 部分。</li>
  <li>tsconfig.json // 工作區中各專案的基礎 TypeScript 設定。所有其他設定檔都繼承自此基礎檔案。更多資訊，請參閱相關的 TypeScript 文件。</li>
  <li>tsconfig.spec.json //用於測試的 TypeScript 設定。</li>
</ul>
