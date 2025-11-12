import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailsComponent} from './pages/product-details-page/product-details.component';
import {SharedModule} from '../shared/shared.module';
import {ProductStockAvailabilityComponent} from './components/product-stock-availability/product-stock-availability.component';
import {ProductReviewComponent} from './components/product-review/product-review.component';
import {ProductReviewsComponent} from './components/product-reviews/product-reviews.component';

@NgModule({
    declarations: [
        ProductDetailsComponent,
        ProductStockAvailabilityComponent,
        ProductReviewComponent,
        ProductReviewsComponent],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class ProductDetailsModule {
}
