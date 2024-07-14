import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
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
import { Student } from '../../../services/students/interfaces/student';

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
    @Inject(MAT_DIALOG_DATA) public editingStudent?: Student,
  ) {
    this.createForm = this.fb.group(formGroup);

    if (this.editingStudent) {
      this.isEditing = true;
      this.createForm.patchValue(this.editingStudent);
    }
  }

  onSubmit(): void {
    if (!this.createForm.invalid) {
      this.matDialogRef.close(this.createForm.value);
    }
  }

  inputValid(inputName: 'firstName' | 'lastName' | 'email') {
    return (
      this.createForm.get(inputName)?.valid &&
      this.createForm.get(inputName)?.touched
    );
  }

  inputInvalid(inputName: 'firstName' | 'lastName' | 'email') {
    return (
      this.createForm.get(inputName)?.invalid &&
      this.createForm.get(inputName)?.touched &&
      this.createForm.get(inputName)?.dirty
    );
  }
}
