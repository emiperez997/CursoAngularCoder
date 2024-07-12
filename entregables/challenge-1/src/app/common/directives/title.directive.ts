import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]',
  standalone: true,
})
export class TitleDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontSize = '20px';
  }
}
