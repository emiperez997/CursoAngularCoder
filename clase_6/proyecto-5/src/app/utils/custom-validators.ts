import { AbstractControl } from '@angular/forms';

export function noHomeroValidator(control: AbstractControl) {
  if (control.value.toLowerCase() === 'homero') {
    // No es válido
    return {
      noHomeroError: true,
    };
  }

  // Es válido
  return null;
}
