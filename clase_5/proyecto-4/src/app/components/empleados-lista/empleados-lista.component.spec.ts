import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosListaComponent } from './empleados-lista.component';

describe('EmpleadosListaComponent', () => {
  let component: EmpleadosListaComponent;
  let fixture: ComponentFixture<EmpleadosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
