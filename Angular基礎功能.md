### 變數宣染:使用{{變數}}渲染

<a href="https://blog-lara.vercel.app/2025/03/01/angular_binding/">筆記本</a>

```
{{}}
```

### 經由函式事件改變 (click)="函式"

### 雙向綁定 ngModel
app.component.html
```
[(ngModel)]綁定
 <input type="text" [(ngModel)]="title" value="title" />
```

app.component.ts
```
import { Component } from '@angular/core';
+ import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [
+     FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
+     text="text"
}
```

### 綁定  img
.ts
```
import { Component } from '@angular/core';
+ import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [
+     FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
+     img='https://cdn-icons-png.flaticon.com/512/4697/4697260.png'
}
```
html
```
 <img [src]="img" />
```

### 父對子傳訊
子元件子ts
```
+ import { Input } from '@angular/core'
+ import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // 陣列
+  @Input() sendNavLists!: navListType[];
+  @Input() sendPageTitle!: string;
+  @Input() sendIsActive!: boolean;
}
```

子元件.html
```
  <ul class="right_content">
    <li
    *ngFor="let item of sendNavLists ; let index = index"
     [routerLink]="item.path"
     [ngClass]="sendPageTitle === item.title ? 'activeNav' : ''">
      <a [routerLink]="item.path"
    (click)="actionList(item.title)"
      >
        {{item.title}}
      </a>
    </li>
  </ul>
```
父元件
.html
```
 <app-navbar
  [sendNavLists]="navLists"
  [sendPageTitle]="pageTitle"
  [sendIsActive]="isActive"
  ></app-navbar>
```
ts
```
import { Component } from '@angular/core'
import { NavbarComponent } from './components/Navbar/navbar.component'

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pageTitle: string = 'Home';
  isActive: boolean = false;
}
```

### 子對父傳值
父元件ts
```
+ import { NgFor } from '@angular/common'
export class AppComponent {
  pageTitle: string = 'Home';
  isActive: boolean = false;
  activedPage(path: string) {
    console.log('父元件pageTitle', path)
    this.pageTitle = path;
  }
}
```
父元件html 
(newPageTitle) 來自子元件 = activedPage($event) 來自父元件
```
  <app-navbar
  [sendNavLists]="navLists"
  [sendPageTitle]="pageTitle"
  [sendIsActive]="isActive"
  (newPageTitle)="activedPage($event)"
  ></app-navbar>
```

子元件
```
// EventEmitter, Output
+ import {  Component, Input, EventEmitter, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { navListType } from "../../Types/nav"
import { RouterLink } from '@angular/router'
@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() sendNavLists!: navListType[];
  @Input() sendPageTitle!: string;
  @Input() sendIsActive!: boolean;

+ @Output() newPageTitle = new EventEmitter<string>();
+  actionList(titlePage: string) {
+    console.log('titlePage', titlePage)
+    this.newPageTitle.emit(titlePage);
+  }
}
```
html
```
 <ul class="right_content">
    <li
    *ngFor="let item of sendNavLists ; let index = index"
     [routerLink]="item.path"
      [ngClass]="sendPageTitle === item.title ? 'activeNav' : ''">
      <!--(click)="actionList(item.title)"-->
      <a [routerLink]="item.path"
    (click)="actionList(item.title)"
      >
        {{item.title}}
      </a>
    </li>
  </ul>
```
