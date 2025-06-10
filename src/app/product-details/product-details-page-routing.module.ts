import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductDetailsPageComponent} from "./pages/product-details-page/product-details-page.component";


const routes: Routes = [
  {path: 'products/:id', component: ProductDetailsPageComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductDetailsPageRoutingModule {
}
