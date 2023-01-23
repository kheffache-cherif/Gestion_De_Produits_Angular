import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    console.log("je suis l'appel di PIPE");
    return list
      ? list.filter((item) =>
          item.nomProduit.toLowerCase().includes(filterText)
        )
      : [];
  }
}