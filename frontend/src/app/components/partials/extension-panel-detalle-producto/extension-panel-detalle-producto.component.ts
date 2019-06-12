import { Component, OnInit } from '@angular/core';
import {ComentarioDetalleProductoComponent} from '../comentario-detalle-producto/comentario-detalle-producto.component';

@Component({
  selector: 'app-extension-panel-detalle-producto',
  templateUrl: './extension-panel-detalle-producto.component.html',
  styleUrls: ['./extension-panel-detalle-producto.component.css']
})
export class ExtensionPanelDetalleProductoComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
  }

}
