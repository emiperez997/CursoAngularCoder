import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    if (args.length > 0) {
      switch (args[0]) {
        case 'euro':
          return value.toString() + ' €';

        case 'dolar':
          return 'USD$ ' + value.toString();

        case 'peso':
          return 'ARS$ ' + value.toString();
      }
    }

    return value.toString();
  }
}
