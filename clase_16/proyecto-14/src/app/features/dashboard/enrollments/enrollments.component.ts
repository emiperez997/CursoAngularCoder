import { Component } from '@angular/core';
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { Enrollment } from './models/Enrollments';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent {
  isLoading = true;
  enrollments: Enrollment[] = [];

  constructor(private enrollmentsService: EnrollmentsService) {
    this.enrollmentsService.getEnrollments().subscribe({
      next: (enrollments) => {
        this.enrollments = enrollments;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
