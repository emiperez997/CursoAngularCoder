import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasePipesComponent } from './clase-pipes.component';

describe('ClasePipesComponent', () => {
  let component: ClasePipesComponent;
  let fixture: ComponentFixture<ClasePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasePipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
