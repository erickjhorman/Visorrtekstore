import { Component, OnInit } from '@angular/core';
import {PagoService} from '../../../services/pagos/pago.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user : any;
  compras: any;
  constructor(private pagosService: PagoService) {   }

  ngOnInit() {

    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem('userAuth');
    this.user =  JSON.parse(user);
    console.log(this.user);
    this.getCompras(this.user.id);
  }

  getCompras(id:number){
    this.pagosService.getCompras(id).subscribe(
      res =>{

            this.compras= res
            console.log(this.compras);

      },
      err => console.log(err)
    )
  }


}
