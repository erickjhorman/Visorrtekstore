import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionPanelDetalleProductoComponent } from './extension-panel-detalle-producto.component';

describe('ExtensionPanelDetalleProductoComponent', () => {
  let component: ExtensionPanelDetalleProductoComponent;
  let fixture: ComponentFixture<ExtensionPanelDetalleProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionPanelDetalleProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionPanelDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
