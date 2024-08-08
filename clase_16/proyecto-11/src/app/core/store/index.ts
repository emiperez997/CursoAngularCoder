import { ActionReducerMap } from '@ngrx/store';
import {
  CounterState,
  counterFeatureName,
  counterReducer,
} from './counter/counter.reducer';
import { AuthState, authFeatureName, authReducer } from './auth/auth.reducer';

export interface RootState {
  [counterFeatureName]: CounterState;
  [authFeatureName]: AuthState;
}

// ActionReducerMap: Es un objeto que contiene todos los reducers
export const rootReducer: ActionReducerMap<any> = {
  // Lista de reducers
  [counterFeatureName]: counterReducer,
  [authFeatureName]: authReducer,
};
