import { environment } from './../environments/environment';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // To know in what environment i am
  envName = environment.name;


  constructor() { }

  ngOnInit() { }


}
