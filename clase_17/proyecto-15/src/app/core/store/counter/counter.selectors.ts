import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState, counterFeatureName } from './counter.reducer';

export const selectCounterState =
  createFeatureSelector<CounterState>(counterFeatureName);

export const selectCounterStateValue = createSelector(
  selectCounterState,
  (state) => state.value,
);

export const selectCounterStateValuex10 = createSelector(
  selectCounterState,
  (state) => state.value * 10,
);
