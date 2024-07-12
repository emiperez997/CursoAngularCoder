import { Validators } from '@angular/forms';

export const formGroup = {
  id: [''],
  firstName: ['', [Validators.required, Validators.minLength(3)]],
  lastName: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  status: ['ACTIVE', [Validators.required]],
};
