import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules } from '@angular/router';
import {LoginGuard} from './pages/login/login.guard'
const routes: Routes = [
  {path:'' , loadChildren:async() => (await import ('./pages/home/home-routing.module')).HomeRoutingModule},
  {path:'home' ,  loadChildren:async() => (await import ('./pages/home/home-routing.module')).HomeRoutingModule},
  {path:'login' ,  loadChildren:async() => (await import ('./pages/login/login-routing.module')).LoginRoutingModule},
  {path:'register' , loadChildren:async() => (await import ('./pages/register/register-routing.module')).RegisterRoutingModule},
  {path:'details' ,canActivate:[LoginGuard], loadChildren:async() => (await import ('./pages/details/details-routing.module')).DetailsRoutingModule},
  {path:'**' ,  loadChildren:async() => (await import ('./pages/home/home-routing.module')).HomeRoutingModule},

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
