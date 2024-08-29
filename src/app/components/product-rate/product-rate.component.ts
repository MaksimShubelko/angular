import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.scss']
})
export class ProductRateComponent implements OnInit {
  @Input()rate: number;

  constructor() { }

  ngOnInit(): void {
  }

}
