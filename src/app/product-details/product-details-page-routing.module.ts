import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from './pages/product-details-page/product-details.component';


const routes: Routes = [
    {path: 'products/:id', component: ProductDetailsComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductDetailsPageRoutingModule {
}
