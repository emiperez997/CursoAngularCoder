import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../../features/dashboard/courses/models';

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
    {
      id: 'FE-1',
      title: 'Angular',
      description: 'Curso de Angular',
      status: 'Pendiente',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 'BBDD-1',
      title: 'SQL',
      description: 'Curso de Bases de Datos',
      status: 'Pendiente',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  getCourses(): Observable<Course[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.courses);
        observer.complete();
      }, 1500);
    });
  }

  gtCourseById(id: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((courses: Course[]) => courses.find((c) => c.id === id)),
    );
  }

  addCourse(course: Course): Observable<Course[]> {
    this.courses.push(course);
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.courses);
        observer.complete();
      }, 1500);
    });
  }
}
