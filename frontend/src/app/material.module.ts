import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  imports: [MatSidenavModule,MatMenuModule , MatListModule,MatButtonModule,MatIconModule,MatGridListModule,
    MatCardModule , MatDialogModule ,MatExpansionModule, MatFormFieldModule, TextFieldModule,MatDatepickerModule,
    MatToolbarModule, MatInputModule,MatTableModule,MatStepperModule, MatSelectModule,MatSnackBarModule
  ],
  exports: [MatSidenavModule, MatMenuModule , MatListModule,MatButtonModule,MatIconModule,MatGridListModule,
           MatCardModule, MatDialogModule , MatExpansionModule,MatFormFieldModule,TextFieldModule,MatDatepickerModule,
           MatToolbarModule,MatInputModule,MatTableModule,MatStepperModule,MatSelectModule,MatSnackBarModule
          ],
})
export class MateriaAngularCss {

}
