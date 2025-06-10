import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ProductDetailsPageComponent
} from "./product-details/pages/product-details-page/product-details-page.component";
import {ProductEditPageComponent} from "./product-edit/pages/product-edit-page/product-edit-page.component";
import {CartPageComponent} from "./cart-page/pages/cart-page/cart-page.component";
import {AuthPageComponent} from "./auth/pages/auth-page/auth-page.component";
import {AuthGuard} from "./auth/util/auth-guard.guard";

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
