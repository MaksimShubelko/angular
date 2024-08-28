import {Component, Input} from '@angular/core';
import {IProduct} from "../../shared/models/product";

@Component({
  selector: 'app-product',
  templateUrl: 'product-tile.component.html',
  styleUrls: ['product-tile.component.scss']
})
export class AppProductComponent {
  @Input() product: IProduct;
  isVisible: boolean = true;

  constructor() {
  }

  hideProduct() {
    this.isVisible = false;
  }
}
