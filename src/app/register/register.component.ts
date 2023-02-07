import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  RegisterForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    uname: ['', [Validators.required, Validators.pattern('[a-z]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    confirmPswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
  });
  Register() {
    console.log(this.RegisterForm);
    
    if (this.RegisterForm.valid) {
      alert('valid');
    } else {
      alert('invalid');
    }
  }
}
