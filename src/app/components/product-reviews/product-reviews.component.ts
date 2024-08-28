import {Component, Input, OnInit} from '@angular/core';
import {IReview} from "../../shared/models/review";

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {
  @Input() reviews: IReview[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
