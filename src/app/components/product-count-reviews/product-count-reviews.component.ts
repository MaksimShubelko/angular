import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-count-reviews',
  templateUrl: './product-count-reviews.component.html',
  styleUrls: ['./product-count-reviews.component.scss']
})
export class ProductCountReviewsComponent implements OnInit {
  @Input()reviewsCount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
