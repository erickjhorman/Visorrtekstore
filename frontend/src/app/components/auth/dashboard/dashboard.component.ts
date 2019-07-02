import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user : any;

  constructor() { }

  ngOnInit() {

    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem('userAuth');
    this.user =  JSON.parse(user);
    console.log(this.user);
  }




}
