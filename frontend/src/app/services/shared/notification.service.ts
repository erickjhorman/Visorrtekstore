import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar:MatSnackBar) { }

  config : MatSnackBarConfig = {
    duration: 1300,
    horizontalPosition:'end',
    verticalPosition:'bottom'
  }


  success(msg){
    this.config['panelClass'] = ['notification' , 'success'];
    this.snackBar.open(msg,'', this.config);

  }
}
