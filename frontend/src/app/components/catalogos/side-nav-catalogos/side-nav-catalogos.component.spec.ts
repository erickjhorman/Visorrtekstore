import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCatalogosComponent } from './side-nav-catalogos.component';

describe('SideNavCatalogosComponent', () => {
  let component: SideNavCatalogosComponent;
  let fixture: ComponentFixture<SideNavCatalogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavCatalogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
