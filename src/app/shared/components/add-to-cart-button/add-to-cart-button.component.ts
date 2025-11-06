import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../../cart-page/services/cart.service';
import {ICartItem} from '../../models/cart-item';

@Component({
    selector: 'app-add-to-cart-button',
    templateUrl: './add-to-cart-button.component.html',
    styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent implements OnInit {
    isClicked: boolean = false;
    cartItem: ICartItem;
    @Input() public product: { price: number; id: number; title: string; stock: number };
    @Input() isDisabledWhenOutOfStock: boolean = false;
    stock: number;
    addedProducts: number = 0;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.isClicked = false;
        this.stock = this.product.stock;
        this.cartService.getAll().subscribe(
            (cartItems) => {
                this.cartItem = cartItems.filter((cartItem) => cartItem.id === this.product.id)[0];
                this.addedProducts = this.cartItem?.count ?? 0;
            }
        );
    }

    handleClick() {
        this.isClicked = true;
        if (this.addedProducts == 0) {
            this.addedProducts++;
            this.cartItem = {
                id: this.product.id,
                price: this.product.price,
                title: this.product.title,
                count: this.addedProducts
            };
            this.cartService.addItemToCart(this.cartItem);
        }
    }

    decreaseProductQty() {
        this.addedProducts--;
        if (this.addedProducts == 0) {
            this.cartService.deleteFromCart(this.product.id);
        } else {
            this.cartItem.count = this.addedProducts;
            this.cartService.updateCartItem(this.cartItem);
        }
    }

    isMinQty() {
        return this.addedProducts == 0;
    }

    increaseProductQty() {
        this.addedProducts++;
        this.cartItem.count = this.addedProducts;
        this.cartService.updateCartItem(this.cartItem);

    }


    isDisabled() {
        if (this.isDisabledWhenOutOfStock && this.stock === 0) {
            return true;
        }
    }

    isMaxQty() {
        return this.addedProducts == this.stock;
    }
}
