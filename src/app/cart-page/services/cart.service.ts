import {Injectable} from '@angular/core';
import {Observable, toArray} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {delay, retry} from 'rxjs/operators';
import {ICartItem} from '../../shared/models/cart-item';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private apiUrl = 'http://localhost:3000/cart/';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ICartItem[]> {
        return this.http.get<ICartItem[]>(this.apiUrl).pipe(
            delay(100),
            retry(2));
    }

    getById(id: number) {
        return this.getAll().subscribe((items) => {return items.find((item) => item.id === id)});
    }

    updateCartItem(updatedCartItem: ICartItem) {
        this.http.put<ICartItem>(this.apiUrl + updatedCartItem.id, updatedCartItem).subscribe();
    }

    getCountById(id: number) {
        return this.getAll().subscribe((items) => {return items.find((item) => item.id === id)?.count});
    }

    deleteFromCart(id: number): void {
        this.http.delete(this.apiUrl + id).pipe().subscribe();
    }

    addItemToCart(cartItem: ICartItem) {
        this.http.post<ICartItem>(this.apiUrl, cartItem).subscribe();
    }
}
