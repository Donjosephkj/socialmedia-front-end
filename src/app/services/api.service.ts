import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //Register
  Register(name: any, uname: any, pswd: any) {
    const body = {
      name,
      uname,
      pswd,
    };
    return this.http.post('http://localhost:3000/register', body);
  }

  //login
  Login(uname: any, pswd: any) {
    const body = {
      uname,
      pswd,
    };
    return this.http.post('http://localhost:3000/login', body);
  }

  //appendToken

  appendToken() {
    //fetch token
    const token = localStorage.getItem('token');
    // create httpheader
    var headers = new HttpHeaders();
    if (token) {
      headers = headers.append('access-token', token);
      options.headers = headers;
    }
    return options;
  }

  //getUser
  getUser(uname: any) {
    const body = {
      uname,
    };
    console.log(body);

    return this.http.post(
      'http://localhost:3000/getuser',
      body,
      this.appendToken()
    );
  }

  //addpost
  addPost(uname: any, image: any, caption: any) {
    const body = { uname, image, caption };

    console.log(body);

    return this.http.post(
      'http://localhost:3000/addnewpost',
      body,
      this.appendToken()
    );
  }

  //addProfilepic
  editProfile(uname:any,name:any,bio:any,image:any){
    const body = {
      uname,
      name,
      bio,
      image
    }
    return this.http.post('http://localhost:3000/editProfile',
    body,
    this.appendToken())
  }

  //getAllpost
  getAllpost(){
    return this.http.get('http://localhost:3000/getAllpost',this.appendToken())
  }

  //getAlldm
  getAlldm(){
    return this.http.get('http://localhost:3000/getAlldm',this.appendToken())
  }

  
}
