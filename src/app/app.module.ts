import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppProductComponent} from "./components/product-tile/product-tile.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppProductImageComponent} from './components/product-image/app-product-image.component';
import {DeleteButtonComponent} from './components/buttons/delete-button/delete-button.component';
import {AddToCartButtonComponent} from './components/buttons/add-to-cart-button/add-to-cart-button.component';
import {ProductDetailsPageComponent} from './pages/product-details-page/product-details-page.component';
import {ProductTitleComponent} from './components/product-title/product-title.component';
import {ProductRateComponent} from './components/product-rate/product-rate.component';
import {ProductPriceComponent} from './components/product-price/product-price.component';
import {ProductCountReviewsComponent} from './components/product-count-reviews/product-count-reviews.component';
import {ProductReviewComponent} from './components/product-review/product-review.component';
import {ProductReviewsComponent} from './components/product-reviews/product-reviews.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {
  ProductStockAvailabilityComponent
} from './components/product-stock-availability/product-stock-availability.component';
import {FilterComponent} from './components/filter/filter.component';
import {FilterPriceComponent} from './components/filter-price/filter-price.component';
import {FilterRatingComponent} from "./components/filter-rating/filter-rating.component";
import {FilterStockComponent} from './components/filter-stock/filter-stock.component';
import {FilterReviewsComponent} from "./components/filter-reviews/filter-reviews.component";
import {FilterBudgesComponent} from './components/filter-budges/filter-budges.component';
import {FilterBudgesService} from "./services/filter-budges.service";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProductEditPageComponent} from './pages/product-edit-page/product-edit-page.component';
import {EditButtonComponent} from './components/buttons/edit-button/edit-button.component';
import {HeaderComponent} from './components/header/header.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {AuthGuard} from "./shared/util/auth-guard.guard";

@NgModule({
  declarations: [
    AppComponent,
    AppProductComponent,
    AppProductImageComponent,
    FilterComponent,
    HomePageComponent,
    DeleteButtonComponent,
    AddToCartButtonComponent,
    ProductDetailsPageComponent,
    ProductTitleComponent,
    ProductRateComponent,
    ProductPriceComponent,
    ProductCountReviewsComponent,
    ProductReviewComponent,
    ProductReviewsComponent,
    ProductDescriptionComponent,
    ProductStockAvailabilityComponent,
    FilterComponent,
    FilterPriceComponent,
    FilterRatingComponent,
    FilterStockComponent,
    FilterReviewsComponent,
    FilterBudgesComponent,
    ProductEditPageComponent,
    EditButtonComponent,
    HeaderComponent,
    CartPageComponent,
    CartItemComponent,
    AuthPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpClient,
    FilterBudgesService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
