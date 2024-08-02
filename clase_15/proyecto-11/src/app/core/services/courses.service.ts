import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../../features/dashboard/courses/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: Course[] = [
    {
      id: 'BE-1',
      title: 'NestJs',
      description: 'Curso de Nestjs',
      status: 'Pendiente',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(environment.apiUrl + '/courses');
  }

  // getCourses(): Observable<Course[]> {
  //   return new Observable((observer) => {
  //     setTimeout(() => {
  //       observer.next(this.courses);
  //       observer.complete();
  //     }, 1500);
  //   });
  // }

  gtCourseById(id: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((courses: Course[]) => courses.find((c) => c.id === id)),
    );
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('http://localhost:3000/courses', course);
  }

  // addCourse(course: Course): Observable<Course[]> {
  //   this.courses.push(course);
  //   return new Observable((observer) => {
  //     setTimeout(() => {
  //       observer.next(this.courses);
  //       observer.complete();
  //     }, 1500);
  //   });
  // }
}
