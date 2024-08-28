import {Component, Input, OnInit} from '@angular/core';
import {IReview} from "../../shared/models/review";

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {
  @Input()review: IReview;

  constructor() { }

  ngOnInit(): void {
  }

}
