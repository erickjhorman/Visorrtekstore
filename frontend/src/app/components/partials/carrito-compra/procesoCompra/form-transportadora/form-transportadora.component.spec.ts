import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransportadoraComponent } from './form-transportadora.component';

describe('FormTransportadoraComponent', () => {
  let component: FormTransportadoraComponent;
  let fixture: ComponentFixture<FormTransportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTransportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
