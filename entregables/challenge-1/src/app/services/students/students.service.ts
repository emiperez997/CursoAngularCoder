import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mockStudents } from './data/mock';
import { Student } from './interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private students: Student[] = [];

  constructor() {
    this.students = mockStudents;
  }

  getStudents(): Observable<Student[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students);
        observer.complete();
      }, 1500);
    });
  }

  // getStudents(): Student[] {
  //   return this.students;
  // }

  addStudent(student: Student): Observable<Student[]> {
    student.id = this.students[this.students.length - 1].id + 1;
    student.createdAt = new Date();
    student.updatedAt = new Date();

    this.students.push(student);

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students);
        observer.complete();
      }, 1500);
    });
  }

  updateStudent(student: Student): Observable<Student[]> {
    const index = this.students.findIndex((s) => s.id === student.id);

    if (index !== -1) {
      this.students[index] = student;

      return new Observable((observer) => {
        setTimeout(() => {
          observer.next(this.students);
          observer.complete();
        }, 1500);
      });
    }

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students);
        observer.complete();
      }, 1500);
    });
  }

  deleteStudent(id: number): Observable<Student[]> {
    const index = this.students.findIndex((s) => s.id === id);

    if (index !== -1) {
      this.students.splice(index, 1);

      return new Observable((observer) => {
        setTimeout(() => {
          observer.next(this.students);
          observer.complete();
        }, 1500);
      });
    }

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students);
        observer.complete();
      }, 1500);
    });
  }
}
