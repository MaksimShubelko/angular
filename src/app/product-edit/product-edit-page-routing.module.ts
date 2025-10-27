import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from './pages/product-edit-page/product-edit.component';
import {AuthGuard} from '../auth/guards/auth.guard';


const routes: Routes = [
    {path: 'product/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard]},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductEditPageRoutingModule {
}
