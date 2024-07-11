import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  /*
   *  @param value: string
   *  @param args: unknown[]
   *
   *  @return: unknown
   * */
  transform(value: string, ...args: unknown[]): unknown {
    if (args.length > 0) {
      switch (args[0]) {
        case 'lowercase':
          value = value.toLowerCase();
          break;
        case 'uppercase':
          value = value.toUpperCase();
          break;
      }
    }

    const reverse = value.split('').reverse().join('');

    return reverse;
  }
}
