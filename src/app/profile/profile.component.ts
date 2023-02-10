import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isPresent: boolean = true;
  isaddpost: boolean = true;
  confirmMsgdiv: boolean = true;
  isSettings: boolean = true;
  profilepicUrl:any=''
  url: any = '';
  user: any = {};
  logoutmsg:boolean=true
  deleteMsg:boolean=true
  posts: any = [];
  constructor(private fb: FormBuilder, private api: ApiService,private router:Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('username')) {
      let uname = localStorage.getItem('username');
      this.api.getUser(uname).subscribe((result: any) => {
        this.user = result.user;
        console.log(this.user);
        this.posts = this.user.post;
        console.log(this.posts);
      });
    }
  }

  captionForm = this.fb.group({
    cap: ['', [Validators.pattern('[a-zA-Z ]*')]],
  });

  editProfileForm = this.fb.group({
    name: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    bio: ['', [Validators.pattern('[a-zA-Z ]*')]],
    image:['', [Validators.required]],
  });
  addpost() {
    this.showaddPost();
    console.log(this.url);

    if (this.captionForm.valid) {
      let cap = this.captionForm.value.cap;
      let uname = localStorage.getItem('username');
      console.log(uname);

      let image = this.url

      this.api.addPost(uname, image, cap).subscribe((result:any)=>{
        console.log(result);
        
      })
    } else {
      alert('invalid');
    }
  }

  showaddPost() {
    this.isaddpost = !this.isaddpost;
  }
  onselectfile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
  onselectfileprofile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.profilepicUrl = event.target.result;
      };
    }
  }

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
    if(this.editProfileForm.valid){
      let profilepicture = this.profilepicUrl
      let name = this.editProfileForm.value.name
      let bio=this.editProfileForm.value.bio
      let uname = localStorage.getItem('username');
this.api.editProfile(uname,name,bio,profilepicture).subscribe((result:any)=>{
  console.log(result);
  
})

    }
    else{
      alert('please fill the requires feilds')
    }
  }
  settings() {
    this.isSettings = !this.isSettings;
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.logoutmsg=!this.logoutmsg
    setTimeout(() => {
      //navigate to login
      this.logoutmsg=!this.logoutmsg
      this.router.navigateByUrl('')
    }, 2000);
  }

}
