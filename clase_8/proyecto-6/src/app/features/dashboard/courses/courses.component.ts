import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { Course } from './models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'status',
    'startDate',
    'endDate',
    'actions',
  ];
  dataSource: Course[] = [
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

  constructor(private matDialog: MatDialog) {}
  course: string = '';

  openDialog(): void {
    this.matDialog
      .open(CourseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (course) => {
          console.log(course);

          // this.course = course.title;

          this.dataSource = [...this.dataSource, course];
        },
      });
  }

  editCourse(course: Course) {
    this.matDialog
      .open(CourseDialogComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe({
        next: (course) => {
          console.log(course);

          if (!!course) {
            this.dataSource = this.dataSource.map((c) => {
              if (c.id === course.id) {
                return course;
              }
              return c;
            });
          }
        },
      });
  }

  deleteCourseById(id: string) {
    this.dataSource = this.dataSource.filter((course) => course.id !== id);
  }
}
