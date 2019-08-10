import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { LoginComponent } from './components/auth/login_principal/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { RequestResetComponent } from './components/auth/password-reset/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password-reset/response-reset/response-reset.component';
import {HttpClientModule} from '@angular/common/http'; //To import the service
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup/signup.service';
import { HomeComponent } from './components/home/home.component';
import {Route, RouterModule } from '@angular/router';
import { BeforeLoginService } from './services/canDeactive/before-login.service';
import { AfterLoginService } from './services/canDeactive/after-login.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CorouselSlideComponent } from './components/partials/corousel-slide/corousel-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlidebarComponent } from './components/partials/slidebar/slidebar.component';
import {CatalogosComponent} from './components/catalogos/catalogos/catalogos.component';
import {CorouselSlideCatalogosComponent} from './components/partials/corousel-slide-catalogos/corousel-slide-catalogos.component';
import {MostrarDetalleProductoComponent} from './components/catalogos/mostrar-detalle-producto/mostrar-detalle-producto.component';
import {ExtensionPanelDetalleProductoComponent} from './components/partials/extension-panel-detalle-producto/extension-panel-detalle-producto.component';
import {ComentarioDetalleProductoComponent} from './components/partials/comentario-detalle-producto/comentario-detalle-producto.component';
import {CarritoCompraComponent} from './components/partials/carrito-compra/carrito-compra.component'
import {FooterHomeComponent} from './components/partials/footer-home/footer-home.component';
import {ProductosDestacadosComponent} from './components/partials/productos-destacados/productos-destacados.component';
import {CategoriasComponent} from './components/partials/categorias/categorias.component';
import {DashboardAdminComponent} from './components/auth/dashboard-admin/dashboard-admin.component'
import {TestomonialesComponent} from "./components/testomoniales/testomoniales.component";
import {ComprasListaComponent} from "./components/partials/carrito-compra/compras-lista/compras-lista.component";
import {ProcesoCompraComponent} from "./components/partials/carrito-compra/proceso-compra/proceso-compra.component";
import {FormTransportadoraComponent} from "./components/partials/carrito-compra/procesoCompra/form-transportadora/form-transportadora.component";
import {FormDireccioneUsuarioComponent} from "./components/partials/carrito-compra/procesoCompra/form-direccione-usuario/form-direccione-usuario.component";
import {PagosComponent} from "./components/partials/carrito-compra/procesoCompra/pagos/pagos.component";
//Angular Material
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatListModule} from '@angular/material/list';

//Material
import {MateriaAngularCss } from '../app/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// /** Routes */
// const appRoutesAuth: Route [] = [
//   {path:'login', component:LoginComponent,
//   canActivate: BeforeLoginService},
//   {path:'signup',component:SignupComponent,
//    canActivate: AfterLoginService },
//   {path:'dashboard',component:DashboardComponent},
//   {path:'request-password-reset',component:RequestResetComponent},
//   {path:'response-password-reset',component:ResponseResetComponent},
// ]

// const appHomeRutas: Route [] = [
//   {path: '', component: HomeComponent},
//   {path: 'home', component: HomeComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RequestResetComponent,
    ResponseResetComponent,
    HomeComponent,
    CorouselSlideComponent,
    SlidebarComponent,
    CatalogosComponent,
    CorouselSlideCatalogosComponent,
    MostrarDetalleProductoComponent,
    ExtensionPanelDetalleProductoComponent,
    ComentarioDetalleProductoComponent,
    CarritoCompraComponent,
    FooterHomeComponent,
    ProductosDestacadosComponent,
    CategoriasComponent,
    DashboardAdminComponent,
    TestomonialesComponent,
    ComprasListaComponent,
    ProcesoCompraComponent,
    FormTransportadoraComponent,
    FormDireccioneUsuarioComponent,
    PagosComponent

  ],
  imports: [
    BrowserModule,
    MateriaAngularCss,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule


    // MatSidenavModule,
    // MatMenuModule,
    // MatListModule

  ],
  providers: [
    LoginService,
    SignupService,
    AfterLoginService,
    BeforeLoginService,

    ],
  bootstrap: [AppComponent],
  entryComponents:[MostrarDetalleProductoComponent,
    ExtensionPanelDetalleProductoComponent, ProcesoCompraComponent,
    FormDireccioneUsuarioComponent, FormTransportadoraComponent
  ]

})
export class AppModule { }
