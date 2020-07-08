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
import { HttpClientModule } from '@angular/common/http'; // To import the service
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup/signup.service';
import { HomeComponent } from './components/home/home.component';
import { Route, RouterModule } from '@angular/router';
import { BeforeLoginService } from './services/canDeactive/before-login.service';
import { AfterLoginService } from './services/canDeactive/after-login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CorouselSlideComponent } from './components/partials/corousel-slide/corousel-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlidebarComponent } from './components/partials/slidebar/slidebar.component';
import { CatalogosComponent } from './components/catalogos/catalogos/catalogos.component';
import { CorouselSlideCatalogosComponent } from './components/partials/corousel-slide-catalogos/corousel-slide-catalogos.component';
import { MostrarDetalleProductoComponent } from './components/catalogos/mostrar-detalle-producto/mostrar-detalle-producto.component';
// tslint:disable-next-line: max-line-length
import { ExtensionPanelDetalleProductoComponent } from './components/partials/extension-panel-detalle-producto/extension-panel-detalle-producto.component';
import { ComentarioDetalleProductoComponent } from './components/partials/comentario-detalle-producto/comentario-detalle-producto.component';
import { CarritoCompraComponent } from './components/partials/carrito-compra/carrito-compra.component';
import { FooterHomeComponent } from './components/partials/footer-home/footer-home.component';
import { ProductosDestacadosComponent } from './components/partials/productos-destacados/productos-destacados.component';
import { CategoriasComponent } from './components/partials/categorias/categorias.component';
import { DashboardAdminComponent } from './components/auth/dashboard-admin/dashboard-admin.component';
import { TestomonialesComponent } from './components/testomoniales/testomoniales.component';
import { ComprasListaComponent } from './components/partials/carrito-compra/compras-lista/compras-lista.component';
import { ProcesoCompraComponent } from './components/partials/carrito-compra/proceso-compra/proceso-compra.component';
import { FormTransportadoraComponent } from './components/partials/carrito-compra/procesoCompra/form-transportadora/form-transportadora.component';
import { FormDireccioneUsuarioComponent } from './components/partials/carrito-compra/procesoCompra/form-direccione-usuario/form-direccione-usuario.component';
import { PagosComponent } from './components/partials/carrito-compra/procesoCompra/pagos/pagos.component';
import { SidenavUserComponent } from './components/auth/dashboard/sidenav-user/sidenav-user.component';
import { DatosPersonalesComponent } from './components/auth/dashboard/pages/datos-personales/datos-personales.component';
import { DatosPersonalesSidebarComponent } from './components/auth/dashboard/pages/sidebar/datos-personales-sidebar/datos-personales-sidebar.component';
import { PersonalizacionSiteComponent } from './components/auth/dashboard/pages/personalizacion-site/personalizacion-site.component';
import { DashboardService } from './services/shared/dashboard.service';
import { AddDireccionComponent } from './components/auth/dashboard/pages/add-direccion/add-direccion.component';
import { SidenavAdminComponent } from './components/auth/dashboard/sidenav-admin/sidenav-admin.component';
// tslint:disable-next-line: max-line-length
import { FormDireccioneUsuarioShowComponent } from './components/partials/carrito-compra/procesoCompra/form-direccione-usuario-show/form-direccione-usuario-show.component';
import { ChatComponent } from './components/auth/dashboard/pages/chat/chat.component';
import { MainSideBarComponent } from './components/partials/main-side-bar/main-side-bar.component';
import { SideNavCatalogosComponent } from '././components/catalogos/side-nav-catalogos/side-nav-catalogos.component';
import { ShowGalleryImageComponent } from './components/partials/show-gallery-image/show-gallery-image.component';
import { ShowAllCommentsComponent } from './components/partials/show-all-comments/show-all-comments.component';

// Material
import { MateriaAngularCss } from '../app/material.module';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminMensajeComponent } from './components/auth/dashboard/pages/admin-mensaje/admin-mensaje.component';
import { IsAdminPipe } from './pipes/is-admin.pipe';
import { IsUserPipe } from './pipes/is-user.pipe';
import { UserMensajeComponent } from './components/auth/dashboard/pages/user-mensaje/user-mensaje.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RelativeTimePipe } from './pipes/relative-time.pipe';

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
    PagosComponent,
    SidenavUserComponent,
    DatosPersonalesComponent,
    DatosPersonalesSidebarComponent,
    PersonalizacionSiteComponent,
    AddDireccionComponent,
    SidenavAdminComponent,
    FormDireccioneUsuarioShowComponent,
    ChatComponent,
    PageNotFoundComponent,
    AdminMensajeComponent,
    IsAdminPipe,
    IsUserPipe,
    UserMensajeComponent,
    MainSideBarComponent,
    SideNavCatalogosComponent,
    ShowGalleryImageComponent,
    RelativeTimePipe,
    ShowAllCommentsComponent
  ],
  imports: [
    BrowserModule,
    MateriaAngularCss,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,

  ],
  providers: [
    LoginService,
    SignupService,
    AfterLoginService,
    BeforeLoginService,
    DashboardService,
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' } },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ProcesoCompraComponent,
    FormDireccioneUsuarioComponent,
    FormTransportadoraComponent,
    FormDireccioneUsuarioShowComponent,
    ShowGalleryImageComponent,
    ShowAllCommentsComponent
  ],
})
export class AppModule { }
