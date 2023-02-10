import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isValid:boolean=true
  isMatch:boolean=true
  succesmsg:String=''
  errormsg:String=''
  constructor(private fb: FormBuilder,private api:ApiService,private route:Router) {}

  RegisterForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z_ ]*')]],
    uname: ['', [Validators.required, Validators.pattern('[a-z_0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    confirmPswd: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });
  Register() {
    console.log(this.RegisterForm);
    
    if (this.RegisterForm.valid) {
      if(this.RegisterForm.value.pswd==this.RegisterForm.value.confirmPswd){
        let name=this.RegisterForm.value.name
        let uname=this.RegisterForm.value.uname
        let pswd=this.RegisterForm.value.confirmPswd
        this.api.Register(name,uname,pswd)
        .subscribe((result:any)=>{
          this.succesmsg=result.message
          setTimeout(() => {
            this.succesmsg=''
            this.route.navigateByUrl('')
          }, 3000);
        },
        (result:any)=>{
          this.errormsg=result.error.message
          setTimeout(() => {
            this.errormsg=''
          }, 3000);
        })
      }
      else{
        this.isMatch=!this.isMatch
        setTimeout(() => {
          this.isMatch=!this.isMatch
        }, 3000);
      }
    } else {
      this.isValid=!this.isValid
      setTimeout(() => {
        this.isValid=!this.isValid
      }, 3000);
    }
  }
}
