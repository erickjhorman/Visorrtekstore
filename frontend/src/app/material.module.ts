import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports: [MatSidenavModule,MatMenuModule , MatListModule,MatButtonModule,MatIconModule,MatGridListModule,
    MatCardModule , MatDialogModule],
  exports: [MatSidenavModule, MatMenuModule , MatListModule,MatButtonModule,MatIconModule,MatGridListModule,
           MatCardModule, MatDialogModule],
})
export class MateriaAngularCss {

}
