import { ProductService } from './product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './prodect';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prodect-list',
  templateUrl: './prodect-list.component.html',
  styleUrls: ['./prodect-list.component.css'],
})
export class ProdectListComponent implements OnInit, OnDestroy {
  pageTitle = 'Prodect List';
  imageWidth = 70;
  imageMargin = 2;
  showImage = false;
  msgError = '';
  sub!: Subscription;
  // private _ListFilter = '';
  // filterProdeucts: IProduct[] = [];

  constructor(private serviceProdeuct: ProductService) {}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.serviceProdeuct.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => (this.msgError = err),
    });
  }
  searchKey = '';
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // preformFilter(filterBy: string): IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((prodect: IProduct) =>
  //     prodect.productName.toLocaleLowerCase().includes(filterBy)
  //   );
  // }
  onRaitngClicked(message: string): void {
    this.pageTitle = 'Prodect List:' + message;
  }
}
