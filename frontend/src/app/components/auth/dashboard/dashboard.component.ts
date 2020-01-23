import { Component, OnInit } from "@angular/core";
import { PagoService } from "../../../services/pagos/pago.service";
import {
  animation,
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { SharedService } from "../../../services/shared/shared.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  animations: [
    trigger("changeDivSize", [
      state(
        "initial",
        style({
          backgroundColor: "green",
          width: "100px",
          height: "100px"
        })
      ),
      state(
        "final",
        style({
          backgroundColor: "red",
          width: "200px",
          height: "200px"
        })
      ),
      transition("initial=>final", animate("1500ms")),
      transition("final=>initial", animate("1000ms"))
    ])
  ]
})
export class DashboardComponent implements OnInit {
  currentState = "initial";
  private user: any;
  compras: any;
  opened: false;
  refreshFromAdmin: any;
  constructor(
    private pagosService: PagoService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem("userAuth");
    this.user = JSON.parse(user);
    console.log(this.user);
    this.getCompras(this.user.id);

    //To share the form in preceso compra componenet
    this.sharedService.refreshMessages.subscribe(values => {
      this.refreshFromAdmin = values;
      console.log("refresh admin desde dashboard user");
    });
  }

  getCompras(id: number) {
    this.pagosService.getCompras(id).subscribe(
      res => {
        this.compras = res;
        console.log(this.compras);
      },
      err => console.log(err)
    );
  }

  MostrarDiv(event: MouseEvent) {
    event.preventDefault();
    console.log("Erick" + event);
    var menuUsuario = document.getElementById("menu-usuario");
    menuUsuario.style.width = "auto";
    menuUsuario.style.transition = "rotate(7deg)";

    var span = document.getElementById("inicio");
    span.style.visibility = "visible";

    var resume = document.getElementById("resume");
    resume.style.visibility = "visible";

    var dtpersonales = document.getElementById("dtpersonales");
    dtpersonales.style.visibility = "visible";

    var compras = document.getElementById("compras");
    compras.style.visibility = "visible";

    var personalizacion = document.getElementById("personalizacion");
    personalizacion.style.visibility = "visible";
  }

  ocultarDiv(event: MouseEvent) {
    event.preventDefault();
    console.log("Erick" + event);
    var menuUsuario = document.getElementById("menu-usuario");
    menuUsuario.style.width = "50px";

    var span = document.getElementById("inicio");
    span.style.visibility = "hidden";

    var resume = document.getElementById("resume");
    resume.style.visibility = "hidden";

    var dtpersonales = document.getElementById("dtpersonales");
    dtpersonales.style.visibility = "hidden";

    var compras = document.getElementById("compras");
    compras.style.visibility = "hidden";

    var personalizacion = document.getElementById("personalizacion");
    personalizacion.style.visibility = "hidden";
  }

  // ocultarDiv(event: MouseEvent){
  //   event.preventDefault();
  //   console.log("Erick"+ event);
  //   var menuUsuario = document.getElementById("menu-usuario");
  //   menuUsuario.style.width= '50px';

  //   var span = document.getElementsByTagName("span");

  //   for (let index = 0; index < span.length; index++) {
  //     span[index].style.visibility = "hidden";

  //     }

  // }

  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }
}
