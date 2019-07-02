import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  private user : any;
  constructor() { }

  ngOnInit()  {

    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem('userAuth');
    this.user =  JSON.parse(user);
    console.log(this.user);
  }

}
