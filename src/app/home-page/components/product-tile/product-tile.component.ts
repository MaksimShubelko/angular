import {Component, Input} from '@angular/core';
import {IProduct} from "../../../shared/models/product";
import {ProductService} from "../../services/product.service";
import {AuthService} from '../../../auth/services/auth.service';


@Component({
  selector: 'app-product',
  templateUrl: 'product-tile.component.html',
  styleUrls: ['product-tile.component.scss']
})
export class AppProductComponent {
  @Input() product: IProduct;
  isVisible: boolean = true;

  constructor(private productService: ProductService,
              protected auth: AuthService) {
  }

  handleDeleteButtonClick() {
    this.productService.delete(this.product.id);

  }
}
