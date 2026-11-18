import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { navListType } from './Types/nav'
import { environment } from '../../env/environment';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo_angular';
  navLists: navListType[] = [
    { title: 'Home', path: '/' },
    {title:'Login',path:'login'},
  ]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('目前環境是生產中嗎？',environment.production)
  }
}
