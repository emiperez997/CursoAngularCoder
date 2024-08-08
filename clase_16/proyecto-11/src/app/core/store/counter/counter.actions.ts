import { createAction, props } from '@ngrx/store';

// export const INCREMENT = createAction('[Counter] increment');
export const DECREMENT = createAction('[Counter] decrement');

// Pasar parametros
export const INCREMENT = createAction(
  '[Counter] increment',
  props<{ value: number }>(),
);
