import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import  {Imagen} from "../../../models/imagenesSidebar"
import  {ImagenesService} from "../../../services/imagenes.service"

@Component({
  selector: 'app-corousel-slide',
  templateUrl: './corousel-slide.component.html',
  styleUrls: ['./corousel-slide.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})


export class CorouselSlideComponent implements OnInit {

  imagenes: Imagen[];


  constructor(config: NgbCarouselConfig, private  imagenesService : ImagenesService) {

    this.getImagenes();

    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

//To get images from database to the carousel
  getImagenes(){
    this.imagenesService.get().subscribe((data: Imagen[]) => {
      this.imagenes = data;

      console.log(data);
    }, error => {
      console.log(error);
      alert('Querry faild');
    })
  }


  ngOnInit() {

}


}





