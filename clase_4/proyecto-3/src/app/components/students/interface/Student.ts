import { InscriptionStatus } from '../../../../utils/InscriptionStatus';

export interface Student {
  name: string;
  age: number;
  email: string;
  inscription: InscriptionStatus;
}
