import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Clase16CounterRoutingModule } from './clase-16-counter-routing.module';
import { Clase16CounterComponent } from './clase-16-counter.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [Clase16CounterComponent],
  imports: [CommonModule, Clase16CounterRoutingModule, MatButtonModule],
})
export class Clase16CounterModule {}
