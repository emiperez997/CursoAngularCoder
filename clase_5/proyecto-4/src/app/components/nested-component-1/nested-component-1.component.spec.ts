import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponent1Component } from './nested-component-1.component';

describe('NestedComponent1Component', () => {
  let component: NestedComponent1Component;
  let fixture: ComponentFixture<NestedComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedComponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
