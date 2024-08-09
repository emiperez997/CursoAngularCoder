import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsComponent } from './enrollments.component';

import { provideState } from '@ngrx/store';
import { enrollmentsFeature } from './store/enrollments.reducer';
import { provideEffects } from '@ngrx/effects';
import { EnrollmentsEffects } from './store/enrollments.effects';

@NgModule({
  declarations: [EnrollmentsComponent],
  imports: [CommonModule, EnrollmentsRoutingModule],
  providers: [
    provideState(enrollmentsFeature),
    provideEffects(EnrollmentsEffects),
  ],
})
export class EnrollmentsModule {}
