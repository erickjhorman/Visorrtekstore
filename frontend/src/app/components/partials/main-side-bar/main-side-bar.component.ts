import { SharedService } from './../../../services/shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-side-bar',
  templateUrl: './main-side-bar.component.html',
  styleUrls: ['./main-side-bar.component.css']
})
export class MainSideBarComponent implements OnInit {

  opened = false;
  sideBarCata = false;
  openCatalogue = true;


  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {

    // To open the catalogue component
    this.sharedService.mostrarSideNavCategorias.subscribe(value => {
      this.openCatalogue = !this.openCatalogue;
       console.log('valor en main-side', value);
    });

    // To open the shopping kart
    this.sharedService.mostrarComponente.subscribe(value => {
         this.opened = !this.opened;

    });

      // To hide the catalog component
      this.sharedService.hideCatalog.subscribe(value => {
        this.openCatalogue = false;

        if (this.openCatalogue = true) {
        } else {
          this.openCatalogue = false;
        }
        console.log('ocultar catalogo', this.openCatalogue);
    });
  }


}


