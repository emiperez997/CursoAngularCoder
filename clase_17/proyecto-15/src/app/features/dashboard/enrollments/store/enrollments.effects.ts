import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentsActions } from './enrollments.actions';
import { EnrollmentsService } from '../../../../core/services/enrollments.service';

@Injectable()
export class EnrollmentsEffects {
  loadEnrollmentss$ = createEffect(() => {
    return this.actions$.pipe(
      // Filtra todas las acciones de tipo loadEnrollments
      ofType(EnrollmentsActions.loadEnrollments),

      // Se concatena otro observable que se ejecutará cada vez que se emita la acción
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        // Reemplaza el EMPTY con nuestro servicio
        this.enrollmentsService.getEnrollments().pipe(
          map((data) => {
            console.log(data);

            return EnrollmentsActions.loadEnrollmentsSuccess({ data: data });
          }),
          catchError((error) =>
            of(EnrollmentsActions.loadEnrollmentsFailure({ error })),
          ),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private enrollmentsService: EnrollmentsService,
  ) {}
}
