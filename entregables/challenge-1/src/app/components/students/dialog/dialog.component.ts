import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { formGroup } from './validation';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatOptionModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogComponent {
  createForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<DialogComponent>,
  ) {
    this.createForm = this.fb.group(formGroup);
  }

  onSubmit(): void {
    console.log(this.createForm.value);
    if (this.createForm.invalid) {
      return alert('Formulario no válido');
    }

    this.matDialogRef.close(this.createForm.value);
  }
}
