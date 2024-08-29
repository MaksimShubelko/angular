import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ICartItem} from "../../../shared/models/cart-item";

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
    this.cartService.getCountById(this.product.id)
      .subscribe((count) => {
          this.addedProducts = count;
        },
        (error) => {
          this.addedProducts = 0;
        });
  }

  handleClick() {
    this.isClicked = true
  }

  decreaseProductQty() {
    this.cartService.getById(this.product.id).subscribe(cartItem => this.cartItem = cartItem);
    this.addedProducts--;
    if (this.addedProducts == 0) {
      this.cartService.deleteFromCart(this.product.id);
    } else {
      this.cartItem.count = this.addedProducts;
      this.cartService.updateCartItem(this.cartItem);
    }
  }

  isMinQty() {
    return this.addedProducts == 0
  }

  increaseProductQty() {
    let product = this.product;
    if (this.addedProducts == 0) {
      this.addedProducts++;
      this.cartItem = new class implements ICartItem {
        count: number = 1;
        id: number = product.id;
        price: number = product.price;
        title: string = product.title;
      }
      this.cartService.addItemToCart(this.cartItem);
    } else {
      this.cartService.getById(this.product.id).subscribe(cartItem => this.cartItem = cartItem);
      if (this.addedProducts < this.product.stock) {
        this.addedProducts++;
        this.cartItem.count = this.addedProducts;
        this.cartService.updateCartItem(this.cartItem);
      }
    }
  }

  isDisabled() {
    if (this.isDisabledWhenOutOfStock && this.stock == 0) {
      return true;
    }
  }

  isMaxQty() {
    return this.addedProducts == this.stock;
  }
}
