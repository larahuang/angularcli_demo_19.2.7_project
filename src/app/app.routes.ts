import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
export const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  {
    path: "home",
    loadComponent:() => import('./home/home.component').then((m)=> m.HomeComponent)
  },
  {
    path: "login",
    loadComponent:() => import('./login/login.component').then((m)=> m.LoginComponent)
  },
  { path: '**', component: PageNotFoundComponent }, // 404頁面
];
