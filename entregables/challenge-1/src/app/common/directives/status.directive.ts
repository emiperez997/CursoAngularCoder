import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStatus]',
  standalone: true,
})
export class StatusDirective implements OnChanges {
  @Input() appStatus: string = '';

  constructor(private elementRef: ElementRef) {
    this.changeBackground();
  }

  ngOnChanges() {
    this.changeBackground();
  }

  changeBackground() {
    switch (this.appStatus) {
      case 'ACTIVE':
        this.elementRef.nativeElement.style.background = 'green';
        break;
      case 'INACTIVE':
        this.elementRef.nativeElement.style.background = 'red';
        break;
      default:
        this.elementRef.nativeElement.style.background = 'black';
        break;
    }
  }
}
