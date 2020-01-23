import { NestedTreeControl } from "@angular/cdk/tree";
import { Component, OnInit } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: "Resumen",
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Vegetables",
    children: [
      {
        name: "Green",
        children: [{ name: "Broccoli" }, { name: "Brussel sprouts" }]
      },
      {
        name: "Orange",
        children: [{ name: "Pumpkins" }, { name: "Carrots" }]
      }
    ]
  }
];

@Component({
  selector: "app-sidenav-admin",
  templateUrl: "./sidenav-admin.component.html",
  styleUrls: ["./sidenav-admin.component.css"]
})
export class SidenavAdminComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  //   MostrarDiv(event: MouseEvent){
  //   event.preventDefault();
  //   console.log("Erick"+ event);
  //   var menuUsuario = document.getElementById("menu-usuario");
  //   menuUsuario.style.width= 'auto';
  //   menuUsuario.style.transition = "rotate(7deg)";

  //   var span = document.getElementById("inicio");
  //   span.style.visibility = 'visible';

  //   var resume = document.getElementById("resume");
  //   resume.style.visibility = 'visible';

  //   var mensaje = document.getElementById("mensaje");
  //   mensaje.style.visibility = 'visible';

  //   var operacion = document.getElementById("operacion");
  //   operacion.style.visibility = 'visible';

  //   var addProducto = document.getElementById("addProducto");
  //   addProducto.style.visibility = 'visible';

  //   var ventas = document.getElementById("ventas");
  //   ventas.style.visibility = 'visible';

  //   var preguntas = document.getElementById("pregunta");
  //   preguntas.style.visibility = 'visible';

  //   var Configuraciones = document.getElementById("Configuraciones");
  //   Configuraciones.style.visibility = 'visible';
  // }

  ocultarDiv(event: MouseEvent) {
    event.preventDefault();
    console.log("Erick" + event);
    var menuUsuario = document.getElementById("menu-usuario");
    menuUsuario.style.width = "50px";

    var span = document.getElementById("inicio");
    span.style.visibility = "hidden";

    var resume = document.getElementById("resume");
    resume.style.visibility = "hidden";

    var mensaje = document.getElementById("mensaje");
    mensaje.style.visibility = "hidden";

    var operacion = document.getElementById("operacion");
    operacion.style.visibility = "hidden";

    var addProducto = document.getElementById("addProducto");
    addProducto.style.visibility = "hidden";

    var ventas = document.getElementById("ventas");
    ventas.style.visibility = "hidden";

    var preguntas = document.getElementById("pregunta");
    preguntas.style.visibility = "hidden";

    var Configuraciones = document.getElementById("Configuraciones");
    Configuraciones.style.visibility = "hidden";
  }

  ngOnInit() {}
}
