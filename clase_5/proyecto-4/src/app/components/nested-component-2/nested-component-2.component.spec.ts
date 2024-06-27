import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponent2Component } from './nested-component-2.component';

describe('NestedComponent2Component', () => {
  let component: NestedComponent2Component;
  let fixture: ComponentFixture<NestedComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
