import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appRepetir]',
})
export class RepetirDirective implements OnChanges {
  @Input() appRepetir = 10;

  ngOnChanges(changes: SimpleChanges) {
    this.updateView();
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<unknown>,
  ) {
    this.updateView();
  }

  updateView() {
    this.viewContainer.clear();
    for (let i = 0; i < this.appRepetir; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
