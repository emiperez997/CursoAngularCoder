import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';
import { EnrollmentsComponent } from './features/dashboard/enrollments/enrollments.component';
import { CourseDetailComponent } from './features/dashboard/courses/pages/course-detail/course-detail.component';
import { HomeComponent } from './features/dashboard/home/home.component';

export const routes: Routes = [
  {
    // path: /
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    // path: /auth
    path: 'auth',
    component: LoginComponent,
  },
  {
    // path: /dashboard
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
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
        component: EnrollmentsComponent,
      },
      // {
      //   // If no route is matched, redirect to the courses page
      //   path: '**',
      //   redirectTo: 'courses',
      // },
    ],
  },
];
