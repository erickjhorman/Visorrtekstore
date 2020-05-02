import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGalleryImageComponent } from './show-gallery-image.component';

describe('ShowGalleryImageComponent', () => {
  let component: ShowGalleryImageComponent;
  let fixture: ComponentFixture<ShowGalleryImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGalleryImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGalleryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
