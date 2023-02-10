import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private api:ApiService ,private router:Router){

  }
ngOnInit(): void {
  if (!localStorage.getItem('token')) {
    alert('session Expired!..Please Login')
    this.router.navigateByUrl('')

  }

}
}
