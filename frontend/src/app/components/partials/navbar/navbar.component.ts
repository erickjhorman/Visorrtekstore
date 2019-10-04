import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth.service';
import {CatalogosComponent} from '../../catalogos/catalogos/catalogos.component';
import {MatDialog, MatDialogRef, MatDialogConfig, } from '@angular/material/dialog';
import {CarritoCompraComponent} from '../../partials/carrito-compra/carrito-compra.component';
import {SharedService} from '../../../services/shared/shared.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedin :boolean;
  listadoCompras: string[] = [];
  producto: string;
  public loggedinAdmin: true;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private dialog: MatDialog,
    private sharedService:
    SharedService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedin = value);

    //To get the information from  a sessionStorage
    var tipo_user = localStorage.getItem('tipo_usuario');
    console.log(tipo_user);
    console.log(this.loggedinAdmin);
   }



  logout(event: MouseEvent ){
    // this.sharedService.sharingData.emit("this.addproducto");
    // console.log("THis. ")
    event.preventDefault();
    this.Token.remove();
    this.Token.removeSessionStorage();
    this.Auth.changeAuthStaus(false);
    this.router.navigateByUrl('/login');
  }

  //   openModel(productos:string){
  //   const dialogConfig = new  MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   //dialogConfig.autoFocus = true;
  //   dialogConfig.width = "400px";
  //   dialogConfig.height = "400px";
  //   let arrayProductos = productos;
  //   dialogConfig.data = arrayProductos;
  //   //dialogConfig.data = productoSeleccionado;
  //   this.dialog.open(CarritoCompraComponent, dialogConfig,)
  //  }

  //  openModel(event: MouseEvent ){
  //   event.preventDefault();
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   //dialogConfig.autoFocus = true;
  //   dialogConfig.width = "400px";
  //   dialogConfig.height = "400px";

  //  //dialogConfig.data = productoSeleccionado;
  //   this.dialog.open(CarritoCompraComponent, dialogConfig,)

  //  }

   addCarrito(productos : any){
    this.listadoCompras.push(productos);
    console.log("Compras desde navbar" + this.listadoCompras);

   }

   toogleHidden(event: MouseEvent ){
    event.preventDefault();
    this.sharedService.getValorMostraComponente(false)
  }

  toogleShowCatalogosComponent(event: MouseEvent){
    event.preventDefault();
    this.sharedService.getValorMostraCatalogoSidebar(false)

  }

    toogleShowUserSidenav(event: MouseEvent){
    event.preventDefault();
    this.sharedService.getValorMostraUserSidebar(false)
  }




}
