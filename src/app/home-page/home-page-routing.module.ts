import {NgModule} from '@angular/core';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: 'products', component: HomePageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
