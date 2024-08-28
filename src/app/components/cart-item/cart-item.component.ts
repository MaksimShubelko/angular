import {Component, Input, OnInit} from '@angular/core';
import {ICartItem} from "../../shared/models/cart-item";
import {CartService} from "../../services/cart.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-cart-page-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', [
        animate('0.5s ease-in-out')
      ]),
      transition('out => in', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: ICartItem;
  state = 'in';

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  toggleVisibility() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }

  deleteFromCart(id: number) {
    this.cartService.deleteFromCart(id);
  }
}
