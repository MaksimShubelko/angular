import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../home-page/services/product.service';
import {IProduct} from '../../../shared/models/product';
import {ReviewService} from '../../services/review.service';
import {IReview} from '../../../shared/models/review';

@Component({
    selector: 'app-product-details-page',
    templateUrl: 'product-details.component.html',
    styleUrls: ['product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    id: number;
    loading: boolean = false;
    product: IProduct;
    reviews: IReview[];


    constructor(
        private route: ActivatedRoute,
        public productService: ProductService,
        public reviewService: ReviewService
    ) {
    }

    ngOnInit(): void {
        this.loading = true;
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.productService.getById(this.id).subscribe(product => {
            this.loading = false;
            this.product = product;
        });
        this.reviewService.getByProductId(this.id).subscribe(reviews => this.reviews = reviews);

    }

}
