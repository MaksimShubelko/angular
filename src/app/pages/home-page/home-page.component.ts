import {Component, OnInit} from "@angular/core";
import {IProduct} from "../../shared/models/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {ProductFilter} from "../../shared/models/product-filter";

@Component({
  selector: "app-home-page",
  templateUrl: "home-page.component.html",
  styleUrls: ["home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  products: IProduct[];
  countOfProducts: number;
  loading: boolean = false;

  constructor(
    public productService: ProductService,
    public route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;

  }

  getProducts(filter: ProductFilter) {
    this.productService.getAll(filter).subscribe(products => {
      this.loading = false;
      this.products = products;
      this.countOfProducts = products.length;
    });
  }
}
