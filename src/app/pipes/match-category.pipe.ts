import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchCategory'
})
export class MatchCategoryPipe implements PipeTransform {

  transform(items: Array<any>, category: string): Array<any> {

    if (!category) {
      return items;
    } else {
      return items.filter(item => item.category === category);
    }

  }

}
