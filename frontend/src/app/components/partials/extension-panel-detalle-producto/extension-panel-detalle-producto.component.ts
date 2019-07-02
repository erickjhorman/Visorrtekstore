import { Component, OnInit, Input } from '@angular/core';
import {ComentarioDetalleProductoComponent} from '../comentario-detalle-producto/comentario-detalle-producto.component';

@Component({
  selector: 'app-extension-panel-detalle-producto',
  templateUrl: './extension-panel-detalle-producto.component.html',
  styleUrls: ['./extension-panel-detalle-producto.component.css']
})
export class ExtensionPanelDetalleProductoComponent implements OnInit {
  @Input() d: any


  panelOpenState = false;
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
