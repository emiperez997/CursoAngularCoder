import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective implements OnChanges {
  @Input() color: string = 'yellow';

  constructor(private elementRef: ElementRef) {
    this.updateColor();
  }

  ngOnChanges() {
    this.updateColor();
  }

  updateColor() {
    this.elementRef.nativeElement.style.background = this.color;
  }
}
