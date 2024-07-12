import { Status } from '../../../common/interfaces/status';
import { Student } from '../interfaces/student';

export const mockStudents: Student[] = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'juan@gmail.com',
    status: Status.ACTIVE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Perez',
    email: 'maria@gmail.com',
    status: Status.INACTIVE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    firstName: 'Pedro',
    lastName: 'Perez',
    email: 'pedro@gmail.com',
    status: Status.ACTIVE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    firstName: 'Ana',
    lastName: 'Perez',
    email: 'ana@gmail.com',
    status: Status.INACTIVE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    firstName: 'Luis',
    lastName: 'Perez',
    email: 'luis@gmail.com',
    status: Status.ACTIVE,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
