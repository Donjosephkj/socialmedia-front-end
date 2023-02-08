import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
isLike:boolean=true
isSave:boolean=true

  like(){
this.isLike=!this.isLike
  }
  save(){
    this.isSave=!this.isSave
  }
}
