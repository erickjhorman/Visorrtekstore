import { ImagenesProductos } from "./../../../models/ImagenespProductos";
import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import {
  MatDialogConfig,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { HomeService } from "../../../services/home.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-show-gallery-image",
  templateUrl: "./show-gallery-image.component.html",
  styleUrls: ["./show-gallery-image.component.css"],
})
export class ShowGalleryImageComponent implements OnInit, OnDestroy {
  faWindowClose = faWindowClose;

  imagenesProductos: ImagenesProductos[] = [];

  // To store the image to show in the preview

  public imagePreview: String;
  // Variable to unsubscribe my subcription
  private unsubscribe$ = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<ShowGalleryImageComponent>,
    private homeService: HomeService,
    @Inject(MAT_DIALOG_DATA) public id: number
  ) {}

  ngOnInit() {
    this.getProductGalleryImages(this.id);
  }

  getProductGalleryImages(id: number) {
    this.homeService
      .getImagenesProductso()
      .pipe(
        takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
      )
      .subscribe((data) => {
        this.imagenesProductos = data.filter((imagen) => {
          return imagen.producto_id === id;
        });
        this.getFirstImageArray(this.imagenesProductos);
      });
  }

  getFirstImageArray(data: Array<ImagenesProductos>) {
    this.imagePreview = data[0].imagen;
    console.log(this.imagePreview);
  }

  getIdToShow(imagen: String) {
    this.imagePreview = imagen;
  }

  closeDialog() {
    this.dialogRef.close();
    this.imagenesProductos = [];
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
