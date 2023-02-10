import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginPageswitch: boolean = true;
  isValid:boolean=true

  succesmsg:String=''
  errormsg:String=''
  constructor(private fb: FormBuilder,private api:ApiService,private route:Router) {}

  loginForm = this.fb.group({
    //array
    uname: ['', [Validators.required, Validators.pattern('[a-z_0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  });

  login(){
    if(this.loginForm.valid){
      let uname=this.loginForm.value.uname
      let pswd=this.loginForm.value.pswd
      this.api.Login(uname,pswd)
      .subscribe((result:any)=>{
        this.succesmsg=result.message
        //store username in localstorage
        localStorage.setItem('username', result.user.uname);
        //set token in local storage
        localStorage.setItem('token', result.token);


        setTimeout(() => {
          this.succesmsg=''
          this.route.navigateByUrl("/dashboard")
        }, 2000);
      },
      (result:any)=>{
        this.errormsg=result.error.message
        setTimeout(() => {
          this.errormsg=''
        }, 3000);
      })
    }
    else{
      this.isValid=!this.isValid
      setTimeout(() => {
        this.isValid=!this.isValid
      }, 3000);    }
  }

  Signin() {
    this.LoginPageswitch = !this.LoginPageswitch;
  }



  }

