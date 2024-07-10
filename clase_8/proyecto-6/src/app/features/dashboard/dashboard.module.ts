import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { CoursesModule } from './courses/courses.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { ClasePipesModule } from './clase-pipes/clase-pipes.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    CoursesModule,
    ClasePipesModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
