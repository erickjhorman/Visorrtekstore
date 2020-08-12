import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { AuthService } from '../../../services/auth.service';
import { CatalogoServes } from './../../../services/Catalogos/catalogos.service';
import { SharedService } from '../../../services/shared/shared.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
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

  @ViewChild('clickHoverMenuTrigger', { static: true })
  clickHoverMenuTrigger: MatMenuTrigger;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private sharedService: SharedService,
    private cataloServe: CatalogoServes
  ) {}

  ngOnInit() {
    // o get the information from  a sessionStorage
    const user = sessionStorage.getItem('userAuth');
    this.user = JSON.parse(user);
    console.log(this.user);
    // this.getClientes(this.user.id);
    this.Auth.authStatus.subscribe((value) => (this.loggedin = value));
    if (this.loggedin != null) {
      this.getClientes(this.user.id);
    }

    this.Auth.typeUserStatus.subscribe((value) => (this.loggedinAdmin = value));
  }

  openOnMouseOver(e) {
    this.clickHoverMenuTrigger.openMenu();
    e.preventDefault();
    this.sharedService.getMatMenuValue(this.clickHoverMenuTrigger.openMenu());
    this.sharedService.getValorMostraCatalogoSidebar(true);
  }

  getClientes(id: number) {
    this.cataloServe.getCliente(id).subscribe(
      (res) => {
        this.cliente = res;

        // this.cliente.reduce((prev , current) => {prev[current] =  current; return prev;}, {});

        // this.cliente = JSON.parse(this.cliente);
      },
      (err) => {}
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

  addCarrito(productos: any) {
    this.listadoCompras.push(productos);
    console.log('Compras desde navbar' + this.listadoCompras);
  }

  toogleHidden(event: MouseEvent) {
    event.preventDefault();
    this.sharedService.getValorMostraComponente(false);
  }

  // To show and hide the catalog componenet
  ShowCatalogosComponent(event: MouseEvent) {
    setTimeout(() => {
      this.sharedService.getValorMostraCatalogoSidebar(false);
    }, 1000);
  }

  toogleShowUserSidenav(event: MouseEvent) {
    event.preventDefault();
    this.sharedService.getValorMostraUserSidebar(false);
  }

  toogleHideUserSidenav(event: MouseEvent) {
    event.preventDefault();
    this.sharedService.getValorMostraUserSidebar(true);
  }

  hideCatalog(e) {
    this.sharedService.bHideCatalogComponent();
  }
}
