import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clase16CounterComponent } from './clase-16-counter.component';

const routes: Routes = [
  {
    path: '',
    component: Clase16CounterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Clase16CounterRoutingModule {}
