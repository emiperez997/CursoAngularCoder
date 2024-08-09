import { createAction, props } from '@ngrx/store';

export const setAuthUser = createAction(
  '[Auth] setAuthUser',
  props<{ payload: any }>(), // Deberia ser de tipo user
);

export const unsetAuthUser = createAction('[Auth] unsetAuthUser');
