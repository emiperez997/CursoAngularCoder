import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  students = [
    { name: 'Juan', age: 20, email: 'juan@gmail.com' },
    { name: 'Maria', age: 22, email: 'maria@gmail.com' },
    { name: 'Pedro', age: 18, email: 'pedro@gmail.com' },
    { name: 'Ana', age: 21, email: 'ana@gmail.com' },
    { name: 'Luis', age: 19, email: 'luis@gmail.com' },
  ];
}
