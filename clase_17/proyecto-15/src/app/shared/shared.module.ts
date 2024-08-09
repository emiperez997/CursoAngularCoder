import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { CustomPipe } from './pipes/custom.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';

@NgModule({
  declarations: [ReversePipe, CustomPipe, ResaltadoDirective, RepetirDirective],
  imports: [CommonModule],
  exports: [ReversePipe, CustomPipe, ResaltadoDirective, RepetirDirective],
})
export class SharedModule {}
