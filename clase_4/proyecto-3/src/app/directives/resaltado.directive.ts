import { Directive } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  // Inyección de dependencias
  // Necesitamos que Angular nos provea una referencia al elemento al cual aplicamos esta directiva
  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2,
  ) {
    console.log(elementRef);
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background',
      'yellow',
    );

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'text-align',
      'center',
    );
  }
}
