import { Component, OnInit } from '@angular/core';
import {ICartItem} from "../../shared/models/cart-item";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartItems: ICartItem[];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.getAll().subscribe(cartItems => {this.cartItems = cartItems});
  }

}
