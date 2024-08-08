import { createReducer, on } from '@ngrx/store';
import { DECREMENT, INCREMENT } from './counter.actions';

// Buena practica
export const counterFeatureName = 'counter';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer<CounterState>(
  initialState,
  // Cada caso se evalua con `on`
  // action: Data que se envia a traves de las acciones
  on(INCREMENT, (state, action) => ({
    // Crea un nuevo objeto basado en el estao anterior
    ...state,
    value: state.value + action.value,
  })),
  on(DECREMENT, (state) => ({
    ...state,
    value: state.value - 1 > 0 ? state.value - 1 : 0,
  })),
);
