import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {delay, map, retry} from "rxjs/operators";
import {ICartItem} from "../shared/models/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = "http://localhost:8000/cart/";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ICartItem[]> {
    return this.http.get<ICartItem[]>(this.apiUrl).pipe(
      delay(100),
      retry(2));
  }

  getById(id: number): Observable<ICartItem> {
    return this.http.get<ICartItem>(this.apiUrl + id).pipe(
      delay(100),
      retry(2));
  }

  updateCartItem(updatedCartItem: ICartItem) {
    this.http.put<ICartItem>(this.apiUrl + updatedCartItem.id, updatedCartItem).subscribe();
  }

  getCountById(id: number): Observable<number> {
    return this.http.get<ICartItem>(this.apiUrl + id).pipe(
      delay(100),
      retry(2),
      map(item => item.count));
  }

  deleteFromCart(id: number): void {
    this.http.delete(this.apiUrl + id).pipe().subscribe()
  }

  addItemToCart(cartItem: ICartItem) {
    this.http.post<ICartItem>(this.apiUrl, cartItem).subscribe();
  }
}
