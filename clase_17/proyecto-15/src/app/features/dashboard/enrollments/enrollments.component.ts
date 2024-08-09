import { Component, OnInit } from '@angular/core';
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { Enrollment } from './models/Enrollments';
import { Observable, finalize } from 'rxjs';
import { RootState } from '../../../core/store';
import { Store } from '@ngrx/store';
import { EnrollmentsActions } from './store/enrollments.actions';
import {
  selectEnrollments,
  selectEnrollmentsError,
  selectEnrollmentsLoading,
} from './store/enrollments.selectors';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  enrollments: Enrollment[] = [];
  enrollments$: Observable<Enrollment[]>;
  error$: Observable<unknown>;

  constructor(
    private enrollmentsService: EnrollmentsService,
    private store: Store<RootState>,
  ) {
    // this.enrollmentsService.getEnrollments().subscribe({
    //   next: (enrollments) => {
    //     this.enrollments = enrollments;
    //   },
    //   complete: () => {
    //     this.isLoading = false;
    //   },
    // });

    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsLoading);
    this.error$ = this.store.select(selectEnrollmentsError);
  }

  ngOnInit() {
    this.store.dispatch(EnrollmentsActions.loadEnrollments());
  }
}
