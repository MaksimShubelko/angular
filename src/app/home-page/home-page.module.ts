import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppProductComponent} from './components/product-tile/product-tile.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [AppProductComponent,
        HomePageComponent],
    exports: [
        AppProductComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class HomePageModule {
}
