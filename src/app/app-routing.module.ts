import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {
  ProductDetailsPageComponent
} from "./pages/product-details-page/product-details-page.component";
import {ProductEditPageComponent} from "./pages/product-edit-page/product-edit-page.component";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";
import {AuthPageComponent} from "./pages/auth-page/auth-page.component";
import {AuthGuard} from "./shared/util/auth-guard.guard";

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: HomePageComponent},
  {path: 'products/:id', component: ProductDetailsPageComponent},
  {path: 'product/edit/:id', component: ProductEditPageComponent, canActivate:[AuthGuard]},
  {path: 'cart', component: CartPageComponent},
  {path: 'auth', component: AuthPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
