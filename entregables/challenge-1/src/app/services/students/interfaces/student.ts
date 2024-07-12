import { Status } from '../../../common/interfaces/status';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export const studentColumns: string[] = [
  'id',
  'firstName',
  'email',
  'status',
  'createdAt',
  'updatedAt',
  'actions',
];
