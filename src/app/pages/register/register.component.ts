import { Component, OnInit } from '@angular/core';
 import {FormGroup , FormControl, Validators} from '@angular/forms';
 import {RegisterService} from './register.service';
 import {Router} from '@angular/router'
import {Users} from './register.model'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registerForm:FormGroup;
      flag:boolean=false;


      user:Users[]=[];  
      userObj : Users = new Users();
      constructor(private regest:RegisterService, public _Router:Router) { 
   
      }

 registerFormInfo(registerForm){
   if(registerForm.valid == true){
     this.regest.register(registerForm.value).subscribe( (data) =>{
       console.log(data)
       if(data.message == 'success'){
         this._Router.navigate(['/login']);
       }else{
         this.flag=true;
       }

     })
     
   }
   
 }


  ngOnInit(): void {

      // init
  this.userObj = new Users();

this.registerForm=new FormGroup ({
  'first_name' : new FormControl(null , [Validators.minLength(3) , Validators.maxLength(15) , Validators.required]  ),
  'last_name' : new FormControl(null , [Validators.minLength(3) , Validators.maxLength(15) , Validators.required]  ),
  'email' : new FormControl(null , [Validators.email , Validators.required]  ),
  'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)])

});

  }

}
