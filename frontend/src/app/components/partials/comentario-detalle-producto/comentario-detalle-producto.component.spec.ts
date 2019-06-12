import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioDetalleProductoComponent } from './comentario-detalle-producto.component';

describe('ComentarioDetalleProductoComponent', () => {
  let component: ComentarioDetalleProductoComponent;
  let fixture: ComponentFixture<ComentarioDetalleProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioDetalleProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
