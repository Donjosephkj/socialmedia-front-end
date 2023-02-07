import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginPageswitch: boolean = true;
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    //array
    uname: ['', [Validators.required, Validators.pattern('[a-z]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  });

  login(){
    if(this.loginForm.valid){
      alert('valid')
    }
    else{
      alert('invalid')
    }
  }

  Signin() {
    this.LoginPageswitch = !this.LoginPageswitch;
  }



  }

