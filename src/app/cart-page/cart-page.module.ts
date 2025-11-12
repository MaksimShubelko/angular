import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {CartComponent} from './pages/cart-page/cart.component';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from '../shared/components/header/header.component';

@NgModule({
    declarations: [
        CartItemComponent,
        CartComponent],
    exports: [],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class CartPageModule {
}
