import { Component } from '@angular/core';
import { CoursesService } from '../../../../../core/services/courses.service';
import { Observable } from 'rxjs';
import { Course } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss',
})
export class CourseDetailComponent {
  curso$: Observable<Course | undefined>;

  constructor(
    private courseService: CoursesService,
    private activatedRoute: ActivatedRoute,
  ) {
    // Obtengo el id de la url
    // El parametro 'id' debe coincidir con la ruta
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.curso$ = this.courseService.gtCourseById(id!);
  }
}
