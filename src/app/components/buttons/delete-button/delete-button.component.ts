import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {IProduct} from "../../../shared/models/product";

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {
  @Input()product: IProduct;
  @Output() delete = new EventEmitter<IProduct>();

  constructor(public productService: ProductService) {
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.productService.delete(this.product.id);
    this.delete.emit();
  }
}
