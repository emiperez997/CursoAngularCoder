import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Enrollment } from '../../features/dashboard/enrollments/models/Enrollments';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentsService {
  private MY_DATABASE: Enrollment[] = [
    {
      studentId: '1',
      courseId: '1',
    },
    {
      studentId: '2',
      courseId: '2',
    },
    {
      studentId: '3',
      courseId: '3',
    },
  ];

  getEnrollments(): Observable<Enrollment[]> {
    return of<Enrollment[]>(this.MY_DATABASE).pipe(delay(500));
  }
}
