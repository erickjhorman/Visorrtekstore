import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-gallery-image',
  templateUrl: './show-gallery-image.component.html',
  styleUrls: ['./show-gallery-image.component.css']
})
export class ShowGalleryImageComponent implements OnInit {

faWindowClose = faWindowClose;

  constructor( public dialogRef: MatDialogRef<ShowGalleryImageComponent>) { }

  ngOnInit() {
  }

closeDialog() {
    this.dialogRef.close();
}

}
