import { createReducer, on } from '@ngrx/store';
import { setAuthUser, unsetAuthUser } from './auth.actions';

export const authFeatureName = 'auth';

export interface AuthState {
  authUser: any | null;
}

const initialState: AuthState = {
  authUser: null,
};

export const authReducer = createReducer<AuthState>(
  initialState,
  // Cada caso se evalua con `on`
  // action: Data que se envia a traves de las acciones
  on(setAuthUser, (state, action) => ({
    ...state,
    authUser: action.payload,
  })),
  on(unsetAuthUser, (state) => initialState),
);
