import { Component, OnInit } from '@angular/core';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.css']
})
export class FooterHomeComponent implements OnInit {

  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faPhone = faPhone;
  faMailBulk = faMailBulk;

  constructor() { }

  ngOnInit() {
  }

}
