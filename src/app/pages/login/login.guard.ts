import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login.service'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private LoginServ:LoginService , private _Router:Router){  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.LoginServ.currentUser.getValue() != null){
       
        return true;
      
      }else{
        this._Router.navigate(['/login']);
          return false;
      }
    return true;
  }
  
}
