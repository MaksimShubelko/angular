import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../shared/models/product";

@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.scss'],
  exportAs: 'productForm'
})
export class ProductEditPageComponent implements OnInit {
  product: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.getById(productId).subscribe(product => {this.product = product} );
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const updatedProduct = {
        ...this.product,
        image: form.value.image,
        title: form.value.title,
        price: form.value.price,
        inStock: form.value.inStock,
        description: form.value.description
      };
      this.productService.updateProduct(updatedProduct);
      this.router.navigate(['/']);
    }
  }

}
