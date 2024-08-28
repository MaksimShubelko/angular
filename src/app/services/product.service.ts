import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../shared/models/product';
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, retry} from "rxjs/operators";
import {ProductFilter} from "../shared/models/product-filter";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/products/';

  getAll(filter: ProductFilter): Observable<IProduct[]> {
    const params = new HttpParams({fromObject: this.getFilterParams(filter)});
    return this.http.get<IProduct[]>(this.apiUrl, {params}).pipe(
      delay(100),
      retry(2));
  }

  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.apiUrl + id).pipe(
      delay(100),
      retry(2))
  }

  private getFilterParams(params: ProductFilter): Partial<ProductFilter> {
    return Object.keys(params).reduce((acc, key) => {
      if (params[key] !== '') {
        acc[key] = params[key];
      }
      return acc;
    }, {} as Partial<ProductFilter>)
  }


  constructor(private http: HttpClient) {
  }

  updateProduct(updatedProduct: {
    image: string;
    price: any;
    rating: { rate: number; count: number };
    description: any;
    inStock: any;
    id: number;
    title: any;
    stock: number
  }) {
    this.http.put<IProduct>(this.apiUrl + updatedProduct.id, updatedProduct).subscribe();
  }

  delete(id: number) {
    this.http.delete<IProduct>(this.apiUrl + id).subscribe()
  }
}
