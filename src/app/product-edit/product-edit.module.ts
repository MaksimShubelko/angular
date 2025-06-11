import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditPageComponent } from './pages/product-edit-page/product-edit-page.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";



@NgModule({
  declarations: [ProductEditPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AuthModule
  ]
})
export class ProductEditModule { }
