import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
allUser:any=''
  constructor(private api:ApiService){}
isPresent:boolean=true
ngOnInit(): void {
 this.api.getAlldm()
 .subscribe((result:any)=>{
  console.log(result);
  this.allUser=result.alluser
  console.log(this.allUser);
  
 })
 
}


inbox(){
this.isPresent=!this.isPresent
}

}
