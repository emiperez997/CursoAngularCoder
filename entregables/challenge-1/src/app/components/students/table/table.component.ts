import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  Student,
  studentColumns,
} from '../../../services/students/interfaces/student';
import { StudentsService } from '../../../services/students/students.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [StudentsService],
})
export class TableComponent implements AfterViewInit {
  @Input() createButton: boolean = true;
  isLoading = false;

  displayedColumns: string[] = studentColumns;
  dataSource: MatTableDataSource<Student> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
  ) {}

  loadStudents() {
    this.studentService.getStudents().subscribe((students) => {
      this.dataSource = new MatTableDataSource(students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit(): void {
    this.loadStudents();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openForm() {
    this.dialog
      .open(DialogComponent)
      .afterClosed()
      .subscribe({
        next: (student) => {
          if (!!student) {
            this.studentService.addStudent(student).subscribe({
              next: (students) => {
                this.dataSource.data = [...students];
              },
              complete: () => {
                this.isLoading = false;
              },
            });
          }
        },
      });
  }
}
