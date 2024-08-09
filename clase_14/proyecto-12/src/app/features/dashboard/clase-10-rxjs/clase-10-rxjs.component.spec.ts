import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase10RxjsComponent } from './clase-10-rxjs.component';

describe('Clase10RxjsComponent', () => {
  let component: Clase10RxjsComponent;
  let fixture: ComponentFixture<Clase10RxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clase10RxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clase10RxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
