import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './auth/guards/auth.guard';
import {HomePageModule} from './home-page/home-page.module';
import {HomePageRoutingModule} from './home-page/home-page-routing.module';
import {ProductDetailsModule} from './product-details/product-details.module';
import {ProductEditPageRoutingModule} from './product-edit/product-edit-page-routing.module';
import {ProductDetailsPageRoutingModule} from './product-details/product-details-page-routing.module';
import {CartPageRoutingModule} from './cart-page/cart-page-routing.module';
import {AuthPageRoutingModule} from './auth/auth-page-routing.module';
import {ProductEditModule} from './product-edit/product-edit.module';
import {CartPageModule} from './cart-page/cart-page.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomePageRoutingModule,
        ProductEditPageRoutingModule,
        ProductDetailsPageRoutingModule,
        CartPageRoutingModule,
        AuthPageRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HomePageModule,
        ProductDetailsModule,
        ProductEditModule,
    ],
    providers: [
        HttpClient,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
