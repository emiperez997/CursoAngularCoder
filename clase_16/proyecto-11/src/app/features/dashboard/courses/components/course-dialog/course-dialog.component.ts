import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Course } from '../../models';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss',
})
export class CourseDialogComponent {
  courseForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private formBuildaer: FormBuilder,
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Course,
  ) {
    this.courseForm = this.formBuildaer.group({
      id: [],
      title: [],
      description: [],
      status: [],
      startDate: [],
      endDate: [],
    });

    // console.log(this.editingCourse);
    //
    if (this.editingCourse) {
      this.isEditing = true;
      this.courseForm.patchValue(this.editingCourse);
    }
  }

  onSubmit(): void {
    console.log(this.courseForm.value);
    this.matDialogRef.close(this.courseForm.value);
  }
}
