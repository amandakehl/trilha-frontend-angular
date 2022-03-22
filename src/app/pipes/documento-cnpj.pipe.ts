import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documentoCNPJ'
})
export class DocumentoCNPJPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 2) + '.' + value.substring(2, 5) + '.' + value.substring(5, 8) + '/' + value.substring(9, 13) + '-' + value.substring(12, 14);
  }

}
