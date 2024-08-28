import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../shared/models/product";

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {
  @Input()product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {

  }
}
