import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-stock-availability',
  templateUrl: './product-stock-availability.component.html',
  styleUrls: ['./product-stock-availability.component.scss']
})
export class ProductStockAvailabilityComponent implements OnInit {
  @Input()stock: number;
  OUT_OF_STOCK_MESSAGE: string = "Out of stock";
  OUT_OF_STOCK_CLASS: string = "out-of-stock";
  ALMOST_SOLD_OUT_MESSAGE: string = "Almost sold out";
  ALMOST_SOLD_OUT_CLASS: string = "almost-sold-out";
  IN_STOCK_MESSAGE: string = "In stock";
  IN_STOCK_CLASS: string = "in-stock";
  IN_STOCK_THRESHOLD: number = 10;

  constructor() {
  }

  ngOnInit(): void {
  }

  getClass() {
    if (this.stock == 0) {
      return this.OUT_OF_STOCK_CLASS;
    } else if (this.stock >= this.IN_STOCK_THRESHOLD) {
      return this.IN_STOCK_CLASS;
    }

    return this.ALMOST_SOLD_OUT_CLASS;
  }

  getMessage() {
    if (this.stock == 0) {
      return this.OUT_OF_STOCK_MESSAGE;
    } else if (this.stock >= this.IN_STOCK_THRESHOLD) {
      return this.IN_STOCK_MESSAGE;
    }

    return this.ALMOST_SOLD_OUT_MESSAGE;
  }
}
