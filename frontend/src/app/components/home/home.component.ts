import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CatalogoServes } from '../../services/Catalogos/catalogos.service';
import { SharedService } from '.././../services/shared/shared.service';
import { faTruck, faStore, } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showShoppingKart = false;

  catalogos: Categoria[];

  faTruck = faTruck;
  faStore = faStore;
  faWhatsapp = faWhatsapp;


  constructor(
    private catalogoService: CatalogoServes,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}
}
