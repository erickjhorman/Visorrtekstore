import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CatalogoServes } from '../../services/Catalogos/catalogos.service';
import { SharedService } from '.././../services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showShoppingKart = false;

  catalogos: Categoria[];

  constructor(
    private catalogoService: CatalogoServes,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}
}
