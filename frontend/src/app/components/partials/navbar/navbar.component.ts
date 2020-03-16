import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth.service';
import { CatalogoServes } from './../../../services/Catalogos/catalogos.service';
import { SharedService } from '../../../services/shared/shared.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedin: boolean;
  listadoCompras: string[] = [];
  producto: string;
  public loggedinAdmin: boolean;
  private user: any;
  // cliente: any[] = [];
  private cliente: any;

  // Font awsome icon
  faShoppingCart = faShoppingCart;
  faBell = faBell;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private sharedService: SharedService,
    private cataloServe: CatalogoServes
  ) { }

  ngOnInit() {
    // o get the information from  a sessionStorage
    const user = sessionStorage.getItem('userAuth');
    this.user = JSON.parse(user);
    console.log(this.user);
    // this.getClientes(this.user.id);
    this.Auth.authStatus.subscribe(value => (this.loggedin = value));
    if (this.loggedin != null) {
      this.getClientes(this.user.id);
      console.log('No null' + this.loggedin);
    }

    this.Auth.typeUserStatus.subscribe(value => (this.loggedinAdmin = value));
    // console.log("Login " + this.loggedin);
    // console.log("Login admin" + this.loggedinAdmin);
  }

  getClientes(id: number) {
    this.cataloServe.getCliente(id).subscribe(
      res => {
        this.cliente = res;

        // this.cliente.reduce((prev , current) => {prev[current] =  current; return prev;}, {});

        // this.cliente = JSON.parse(this.cliente);
      },
      err => { }
    );
  }

  logout(event: MouseEvent) {
    // this.sharedService.sharingData.emit("this.addproducto");
    // console.log("THis. ")
    event.preventDefault();
    this.Token.remove();
    this.Token.removeSessionStorage();
    this.Token.removeUser();
    this.Token.removeSessionStorageUser();
    this.Auth.changeAuthStaus(false);
    this.Auth.changeTypeUserStatus(false);
    this.router.navigateByUrl('/login');
    this.loggedin = false;
    this.loggedinAdmin = false;
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

  addCarrito(productos: any) {
    this.listadoCompras.push(productos);
    console.log('Compras desde navbar' + this.listadoCompras);
  }

  toogleHidden(event: MouseEvent) {
    event.preventDefault();
    this.sharedService.getValorMostraComponente(false);
  }

  // To show and hide the catalog componenet
  toogleShowCatalogosComponent(event: MouseEvent) {
    event.preventDefault();
    this.sharedService.getValorMostraCatalogoSidebar(false);
  }

  toogleShowUserSidenav(event: MouseEvent) {
    event.preventDefault();
    this.sharedService.getValorMostraUserSidebar(false);
  }
}
