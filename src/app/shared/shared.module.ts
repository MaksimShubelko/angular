import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddToCartButtonComponent} from "./components/add-to-cart-button/add-to-cart-button.component";
import {AppProductImageComponent} from "./components/product-image/app-product-image.component";
import { HeaderComponent } from './components/header/header.component';
import {ProductTitleComponent} from "./components/product-title/product-title.component";



@NgModule({
  declarations: [AddToCartButtonComponent, AppProductImageComponent, HeaderComponent,
    ProductTitleComponent,
  ],
  exports: [
    AddToCartButtonComponent,
    AppProductImageComponent,
    HeaderComponent,
    ProductTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
