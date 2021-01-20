import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];

    for (const item of value) {
      const name = item[propName].toLowerCase();
      const search = filterString.toLowerCase();
      if (name.includes(search)) {
        resultArray.push(item);
      }
    }

    return resultArray;

  }

}
