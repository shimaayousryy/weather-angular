import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../pages/login/login.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false
  constructor(private LoginService:LoginService) { 
    
  this.LoginService.currentUser.subscribe( (data) =>{
    if(data != null){
      this.isLogin=true;
      }else{
        this.isLogin=false;
    }
  })

  
 }

 
 logOut() {
  this.LoginService.logOut();
}


  ngOnInit(): void {
  }

}
