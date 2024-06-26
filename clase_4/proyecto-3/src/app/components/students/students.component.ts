import { Component } from '@angular/core';
import { InscriptionStatus } from '../../../utils/InscriptionStatus';
import { Student } from './interface/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  inscriptionStatus = InscriptionStatus;

  students: Student[] = [
    {
      name: 'Juan',
      age: 20,
      email: 'juan@gmail.com',
      inscription: InscriptionStatus.Aceptado,
    },
    {
      name: 'Maria',
      age: 22,
      email: 'maria@gmail.com',
      inscription: InscriptionStatus.Aceptado,
    },
    {
      name: 'Pedro',
      age: 18,
      email: 'pedro@gmail.com',
      inscription: InscriptionStatus.Pendiente,
    },
    {
      name: 'Ana',
      age: 21,
      email: 'ana@gmail.com',
      inscription: InscriptionStatus.Rechazado,
    },
    {
      name: 'Luis',
      age: 19,
      email: 'luis@gmail.com',
      inscription: InscriptionStatus.Pendiente,
    },
  ];
}
