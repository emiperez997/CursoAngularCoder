import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/pages/course-detail/course-detail.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // component: HomeComponent,
  },
  {
    // path: /dashboard/courses
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent,
  },
  {
    // path: /dashboard/enrollments
    path: 'enrollments',
    canActivate: [adminGuard],
    component: EnrollmentsComponent,
  },
  // {
  //   // If no route is matched, redirect to the courses page
  //   path: '**',
  //   redirectTo: 'courses',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
