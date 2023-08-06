import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { IProducts } from './products';
import { Injectable, Pipe } from '@angular/core';
import { IProduct } from './prodect';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productURL = 'assets/api/products/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productURL)
      .pipe(tap((data) => console.log('All:', JSON.stringify(data))));
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find((p) => p.productId === id))
    );
  }
  // , catchError(this.handleError)
  // private handleError(err: HttpErrorResponse): Observable<never> {
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(() => errorMessage);
  // }
}
