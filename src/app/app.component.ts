import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './components/Navbar/navbar.component';
import { navListType } from './Types/nav'
import { environment } from '../../env/environment'
import { FormsModule } from '@angular/forms'
import { NgFor } from '@angular/common'
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'My Website';
  link:string = '前往Google';
  url:string = 'https://google.com';
  changeTitle() {
   // console.log($event)
    this.title = '更換後的標題';
  }
  navLists: navListType[] = [
    { title: 'Home', path: './home' },
    { title: 'Login', path: './login' },
  ]
  lists: navListType[] = [
    { title: 'Home', path: './home' },
    { title: 'Login', path: './login' },
  ]
  pageTitle: string = 'Home';
  isActive: boolean = false;
  activedPage(path: string) {
    console.log('父元件pageTitle', path)
    this.pageTitle = path;
  }
  img='https://cdn-icons-png.flaticon.com/512/4697/4697260.png'
  ngOnInit(): void {
    console.log('目前環境是生產中嗎？',environment.production)
  }
}
