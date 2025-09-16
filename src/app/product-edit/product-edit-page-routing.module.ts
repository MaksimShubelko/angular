import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditPageComponent} from './pages/product-edit-page/product-edit-page.component';
import {AuthGuard} from '../auth/util/auth-guard.guard';


const routes: Routes = [
    {path: 'product/edit/:id', component: ProductEditPageComponent, canActivate: [AuthGuard]},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductEditPageRoutingModule {
}
