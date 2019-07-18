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

    openModel(){
    const dialogConfig = new  MatDialogConfig();


    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "400px";

    dialogConfig.data = {name : 'Erick'}
    //dialogConfig.data = productoSeleccionado;
    this.dialog.open(CarritoCompraComponent, dialogConfig,)
   }



}
