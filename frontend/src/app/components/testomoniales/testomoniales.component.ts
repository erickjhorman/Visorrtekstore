// tslint:disable-next-line: quotemark
import { Testimonio } from "./../../models/testimonios";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
@Component({
  selector: "app-testomoniales",
  templateUrl: "./testomoniales.component.html",
  styleUrls: ["./testomoniales.component.css"],
})
export class TestomonialesComponent implements OnInit, OnDestroy {
  testimonios: Testimonio[] = [];

  // Variable to unsubscribe my subcription
  private unsubscribe$ = new Subject<void>();

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getTestimonios();
  }

  getTestimonios() {
    this.homeService
      .getTestimonios()
      .pipe(
        takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
      )
      .subscribe((testimonios) => {
        this.testimonios = testimonios;
        console.log("testimonios", this.testimonios);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
