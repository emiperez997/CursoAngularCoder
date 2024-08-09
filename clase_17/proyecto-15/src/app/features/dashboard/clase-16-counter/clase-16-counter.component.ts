import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DECREMENT,
  INCREMENT,
} from '../../../core/store/counter/counter.actions';
import { RootState } from '../../../core/store';
import {
  selectCounterState,
  selectCounterStateValue,
  selectCounterStateValuex10,
} from '../../../core/store/counter/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clase-16-counter',
  templateUrl: './clase-16-counter.component.html',
  styleUrl: './clase-16-counter.component.scss',
})
export class Clase16CounterComponent {
  value = 0;

  value$: Observable<number>;

  constructor(private store: Store<RootState>) {
    this.value$ = this.store.select(selectCounterStateValue);

    // this.store.select(selectCounterStateValuex10).subscribe({
    //   next: (value) => {
    //     this.value = value;
    //   },
    // });
  }

  onIncrement() {
    // Disparamos el evento increment
    // this.store.dispatch(INCREMENT());
    this.store.dispatch(INCREMENT({ value: 10 }));
  }

  onDecrement() {
    // Disparamos el evento decrement
    this.store.dispatch(DECREMENT());
  }
}
