import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filter =  args.toLocalLowerCase();
    return value.filter(
      v => v.toLocalLowerCase().indexOf(filter) != -1
    );
  }
}