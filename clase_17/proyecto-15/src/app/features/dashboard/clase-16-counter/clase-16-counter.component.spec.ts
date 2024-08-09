import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase16CounterComponent } from './clase-16-counter.component';

describe('Clase16CounterComponent', () => {
  let component: Clase16CounterComponent;
  let fixture: ComponentFixture<Clase16CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Clase16CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clase16CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
