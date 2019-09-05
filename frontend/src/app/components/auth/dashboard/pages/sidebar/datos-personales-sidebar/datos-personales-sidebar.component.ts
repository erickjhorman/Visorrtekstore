import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales-sidebar',
  templateUrl: './datos-personales-sidebar.component.html',
  styleUrls: ['./datos-personales-sidebar.component.css']
})
export class DatosPersonalesSidebarComponent implements OnInit {

  constructor() { }
  MostrarDiv(event: MouseEvent){
    event.preventDefault();
    console.log("Erick"+ event);
    var menuUsuario = document.getElementById("menu-usuario");
    menuUsuario.style.width= 'auto';
    menuUsuario.style.transition = "rotate(7deg)";

    var span = document.getElementById("inicio");
    span.style.visibility = 'visible';

    var resume = document.getElementById("resume");
    resume.style.visibility = 'visible';

    var dtpersonales = document.getElementById("dtpersonales");
    dtpersonales.style.visibility = 'visible';

    var compras = document.getElementById("compras");
    compras.style.visibility = 'visible';

    var personalizacion = document.getElementById("personalizacion");
    personalizacion.style.visibility = 'visible';
  }



   ocultarDiv(event: MouseEvent){
    event.preventDefault();
    console.log("Erick"+ event);
    var menuUsuario = document.getElementById("menu-usuario");
    menuUsuario.style.width= '50px';

    var span = document.getElementById("inicio");
    span.style.visibility = 'hidden';

    var resume = document.getElementById("resume");
    resume.style.visibility = 'hidden';

    var dtpersonales = document.getElementById("dtpersonales");
    dtpersonales.style.visibility = 'hidden';

    var compras = document.getElementById("compras");
    compras.style.visibility = 'hidden';

    var personalizacion = document.getElementById("personalizacion");
    personalizacion.style.visibility = 'hidden';

  }

  ngOnInit() {


  }

}
