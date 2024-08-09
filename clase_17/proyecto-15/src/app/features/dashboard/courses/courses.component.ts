import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { Course } from './models';
import { CoursesService } from '../../../core/services/courses.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'status',
    'startDate',
    'endDate',
    'actions',
  ];

  dataSource: Course[] = [];

  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe((courses) => {
      this.dataSource = courses;
      this.isLoading = false;
    });
  }

  course: string = '';

  openDialog(): void {
    this.matDialog
      .open(CourseDialogComponent)
      .afterClosed()
      .subscribe({
        next: (course) => {
          console.log(course);

          // this.course = course.title;

          this.isLoading = true;

          this.coursesService
            .addCourse(course)
            .pipe(tap(() => this.loadCourses()))
            .subscribe();

          // this.dataSource = [...this.dataSource, course];
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
