import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollments from './enrollments.reducer';

export const selectEnrollmentsState =
  createFeatureSelector<fromEnrollments.State>(
    fromEnrollments.enrollmentsFeatureKey,
  );

export const selectEnrollments = createSelector(
  selectEnrollmentsState,
  (state: fromEnrollments.State) => state.enrollments,
);

export const selectEnrollmentsLoading = createSelector(
  selectEnrollmentsState,
  (state: fromEnrollments.State) => state.isLoading,
);

export const selectEnrollmentsError = createSelector(
  selectEnrollmentsState,
  (state: fromEnrollments.State) => state.error,
);
