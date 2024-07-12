import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true,
})
export class StatusPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'ACTIVE':
        return 'Activo';
      case 'INACTIVE':
        return 'Inactivo';
      default:
        return value;
    }
  }
}
