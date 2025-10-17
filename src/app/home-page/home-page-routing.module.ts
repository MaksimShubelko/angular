import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home-page/home.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {path: 'products', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {
}
