import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../products/prodect';

@Pipe({
  name: 'filterName',
})
export class FilterNamePipe implements PipeTransform {
  transform(Product: IProduct[], key: string): IProduct[] {
    if (!key) {
      return Product;
    }

    return Product.filter((el) =>
      el.productName.toLowerCase().includes(key.toLowerCase())
    );
  }
}
