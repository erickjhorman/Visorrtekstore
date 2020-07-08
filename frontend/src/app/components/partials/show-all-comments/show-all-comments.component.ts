import { Component, OnInit, Inject } from '@angular/core';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Comentario } from '../../../models/comentario';
@Component({
  selector: 'app-show-all-comments',
  templateUrl: './show-all-comments.component.html',
  styleUrls: ['./show-all-comments.component.css']
})
export class ShowAllCommentsComponent implements OnInit {

  faDoorClosed = faWindowClose;

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  comments: Comentario[] = this.data;


  ngOnInit() {
    console.log(this.comments);

  }

  trackByComments(comentario: Comentario): number {
    return comentario.idComentario;
  }


  closeAllCommentsModel() {
    this.dialog.closeAll();
  }

}
