import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login_principal/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import {DashboardAdminComponent} from './components/auth/dashboard-admin/dashboard-admin.component';
import { RequestResetComponent } from './components/auth/password-reset/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password-reset/response-reset/response-reset.component';
import { HomeComponent } from './components/home/home.component';
import { BeforeLoginService } from './services/canDeactive/before-login.service';
import { AfterLoginService } from './services/canDeactive/after-login.service';
import {CatalogosComponent} from './components/catalogos/catalogos/catalogos.component';
import {ComentarioDetalleProductoComponent}  from './components/partials/comentario-detalle-producto/comentario-detalle-producto.component';
import {AppComponent} from '../app/app.component';
import {DatosPersonalesComponent} from './components/auth/dashboard/pages/datos-personales/datos-personales.component'
import {PersonalizacionSiteComponent} from './components/auth/dashboard/pages/personalizacion-site/personalizacion-site.component';

  const routes: Routes = [
  {path: '', component: HomeComponent},
  //{path: '', component: AppComponent},
  //{path: '', component: ComentarioDetalleProductoComponent},
  //{ path: '**', component: NotFoundComponent},
  {path:'login',component:LoginComponent, canActivate : [BeforeLoginService]},
  {path:'signup',component:SignupComponent, canActivate : [BeforeLoginService]},
  //{path:'admin/dashboard',component:DashboardComponent , canActivate : [AfterLoginService]},
  {path:'dashboard' , component:DashboardComponent , canActivate : [AfterLoginService]},
  {path:'dashboard/datos-personales' , component:DatosPersonalesComponent , canActivate : [AfterLoginService]},
  {path:'dashboard/personalizacion' , component:PersonalizacionSiteComponent , canActivate : [AfterLoginService]},
  {path:'admin' , component:DashboardAdminComponent , canActivate : [AfterLoginService]},
  {path:'request-password-reset',component:RequestResetComponent , canActivate : [BeforeLoginService]},
  {path:'response-password-reset',component:ResponseResetComponent, canActivate : [BeforeLoginService]},
  {path: 'catalogos/:categoria/:marca/:id', component: CatalogosComponent},
  {path: 'catalogos/:categoria/comentario', component: ComentarioDetalleProductoComponent, canActivate : [BeforeLoginService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),

 ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
