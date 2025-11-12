import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICartItem} from '../../shared/models/cart-item';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private apiUrl = 'http://localhost:3000/cart/';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ICartItem[]> {
        return this.http.get<ICartItem[]>(this.apiUrl);
    }

    updateCartItem(updatedCartItem: ICartItem) {
        this.http.put<ICartItem>(this.apiUrl + updatedCartItem.id, updatedCartItem).subscribe();
    }

    deleteFromCart(id: number): void {
        this.http.delete(this.apiUrl + id).pipe().subscribe();
    }

    addItemToCart(cartItem: ICartItem) {
        this.http.post<ICartItem>(this.apiUrl, cartItem).subscribe();
    }
}
