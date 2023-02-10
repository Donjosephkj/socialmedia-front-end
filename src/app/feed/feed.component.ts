import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

posts:any={}
isLike:boolean=true
isSave:boolean=true

constructor(private api:ApiService){}

ngOnInit(): void {
  this.api.getAllpost().subscribe((result:any)=>{
    this.posts=result.posts
    console.log(this.posts);
    
  })
}
  like(){
this.isLike=!this.isLike
  }
  save(){
    this.isSave=!this.isSave
  }
}
