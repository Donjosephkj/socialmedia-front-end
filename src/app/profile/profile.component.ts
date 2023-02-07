import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private fb: FormBuilder) {}

  isPresent: boolean = true;
  confirmMsgdiv: boolean = true;

  editProfileForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-z]*')]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    bio: ['', [Validators.pattern('[a-zA-Z]*')]],
  });

  editProfile() {
    this.isPresent = !this.isPresent;
  }
  goBack() {
    this.isPresent = !this.isPresent;
  }
  saveProfile() {
    this.confirmMsgdiv = !this.confirmMsgdiv;
  }
  confirmCollapse() {
    this.confirmMsgdiv = !this.confirmMsgdiv;
  }
  confirm() {
    this.isPresent = !this.isPresent;
  }
}
