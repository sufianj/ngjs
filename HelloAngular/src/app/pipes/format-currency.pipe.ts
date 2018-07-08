import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return 'Trandform de >' + value + '<';
  }

}
