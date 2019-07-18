import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestomonialesComponent } from './testomoniales.component';

describe('TestomonialesComponent', () => {
  let component: TestomonialesComponent;
  let fixture: ComponentFixture<TestomonialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestomonialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestomonialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
