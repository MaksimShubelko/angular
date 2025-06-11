import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppProductComponent} from './components/product-tile/product-tile.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "../shared/components/header/header.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import { FilterComponent } from './components/filter/filter.component';
import { FilterBudgesComponent } from './components/filter-budges/filter-budges.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FilterStockComponent } from './components/filter-stock/filter-stock.component';
import { FilterReviewsComponent } from './components/filter-reviews/filter-reviews.component';
import { FilterRatingComponent } from './components/filter-rating/filter-rating.component';
import { FilterPriceComponent } from './components/filter-price/filter-price.component';

@NgModule({
  declarations: [AppProductComponent,
    HomePageComponent,
    FilterComponent,
    FilterBudgesComponent,
    FilterStockComponent,
    FilterReviewsComponent,
    FilterRatingComponent,
    FilterPriceComponent],
  exports: [
    AppProductComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class HomePageModule {
}
