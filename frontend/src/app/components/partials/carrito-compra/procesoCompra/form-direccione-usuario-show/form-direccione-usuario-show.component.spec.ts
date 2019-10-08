import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDireccioneUsuarioShowComponent } from './form-direccione-usuario-show.component';

describe('FormDireccioneUsuarioShowComponent', () => {
  let component: FormDireccioneUsuarioShowComponent;
  let fixture: ComponentFixture<FormDireccioneUsuarioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDireccioneUsuarioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDireccioneUsuarioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
