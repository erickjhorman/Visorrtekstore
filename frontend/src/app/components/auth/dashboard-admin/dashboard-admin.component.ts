import { Component, OnInit } from "@angular/core";
import { DashboardAdminService } from "../../../services/shared/dashboard-admin.service";

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-dashboard-admin",
  templateUrl: "./dashboard-admin.component.html",
  styleUrls: ["./dashboard-admin.component.css"]
})
export class DashboardAdminComponent implements OnInit {
  numbers = [];

  tiles: Tile[] = [{ text: "One", cols: 3, rows: 2 }];

  private user: any;
  private allVentas: any;

  constructor(private dashboardAdminService: DashboardAdminService) {}

  ngOnInit() {
    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem("userAuth");
    this.user = JSON.parse(user);
    console.log(this.user);

    this.getVentas();

    // for (let i = 0; i < 1000; i++) {
    //  this.numbers.push(i);

    // }
  }

  getVentas() {
    this.dashboardAdminService.getVentas().subscribe(
      res => {
        this.allVentas = res;

        console.log(this.allVentas);
      },
      err => console.log(err)
    );
  }
}
