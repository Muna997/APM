import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './prodect';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from './product.service';

@Component({
  selector: 'app-prodect-detail',
  templateUrl: './prodect-detail.component.html',
  styleUrls: ['./prodect-detail.component.css'],
})
export class ProdectDetailComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  errorMessage = '';
  pageTitle = 'Product Detail';
  product: IProduct | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); //pass the id pramertar to path shoud be number
    this.pageTitle += `: ${id}`; //this syntax for title
    if (id) {
      this.getProduct(id);
    }
  }
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product) => (this.product = product),
      error: (err) => (this.errorMessage = err),
    });
  }
  onBack() {
    this.router.navigate(['Prodects']);
  }
}
