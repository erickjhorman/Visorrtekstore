import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDireccioneUsuarioComponent } from './form-direccione-usuario.component';

describe('FormDireccioneUsuarioComponent', () => {
  let component: FormDireccioneUsuarioComponent;
  let fixture: ComponentFixture<FormDireccioneUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDireccioneUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDireccioneUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
