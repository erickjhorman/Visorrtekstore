import { VentasDestacadas } from "./../../../models/ventasDestacadas";
import { Component, OnInit } from "@angular/core";
import { CatalogoServes } from "../../../services/Catalogos/catalogos.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ShowGalleryImageComponent } from "../show-gallery-image/show-gallery-image.component";

@Component({
  selector: "app-productos-destacados",
  templateUrl: "./productos-destacados.component.html",
  styleUrls: ["./productos-destacados.component.css"],
})
export class ProductosDestacadosComponent implements OnInit {
  productosDestacados: VentasDestacadas[] = [];

  constructor(
    private catalogoserve: CatalogoServes,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getProductosDestacados();
  }

  getProductosDestacados() {
    this.catalogoserve.getProductosDestacados().subscribe(
      (productos) => {
        this.productosDestacados = productos;
        console.log(this.productosDestacados);
      },
      (err) => console.log(err)
    );
  }

  showImage(id: number) {
    this.dialog.open(ShowGalleryImageComponent, {
      height: "600px",
      width: "800px",
      data: id,
    });
  }
}
