import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noHomeroValidator } from '../../utils/custom-validators';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  registerForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z]+'),
          noHomeroValidator,
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z]+'),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Formulario no válido');
      return;
    }
    console.log(this.registerForm.value);
  }

  // Getter
  get firstNameControl() {
    return this.registerForm.get('firstName');
  }

  get firstNameControlInvalid() {
    return this.firstNameControl?.invalid && this.firstNameControl?.dirty;
  }

  get lastNameControl() {
    return this.registerForm.get('lastName');
  }

  get lastNameControlInvalid() {
    return this.lastNameControl?.invalid && this.lastNameControl?.dirty;
  }
}
