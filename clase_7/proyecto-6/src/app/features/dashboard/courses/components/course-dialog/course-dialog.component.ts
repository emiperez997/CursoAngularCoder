import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss',
})
export class CourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
  ) {
    this.courseForm = this.formBuildaer.group({
      title: [],
    });
  }

  onSubmit(): void {
    console.log(this.courseForm.value);
    this.matDialogRef.close(this.courseForm.value);
  }
}
