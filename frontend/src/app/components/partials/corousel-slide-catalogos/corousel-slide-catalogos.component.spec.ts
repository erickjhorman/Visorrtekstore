import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorouselSlideCatalogosComponent } from './corousel-slide-catalogos.component';

describe('CorouselSlideCatalogosComponent', () => {
  let component: CorouselSlideCatalogosComponent;
  let fixture: ComponentFixture<CorouselSlideCatalogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorouselSlideCatalogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorouselSlideCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
