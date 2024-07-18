import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasePipesRoutingModule } from './clase-pipes-routing.module';
import { ClasePipesComponent } from './clase-pipes.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ClasePipesComponent],
  imports: [CommonModule, ClasePipesRoutingModule, SharedModule],
  exports: [ClasePipesComponent],
})
export class ClasePipesModule {}
