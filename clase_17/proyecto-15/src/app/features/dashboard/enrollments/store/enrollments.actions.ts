import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrollment } from '../models/Enrollments';

export const EnrollmentsActions = createActionGroup({
  source: 'Enrollments',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
  },
});
