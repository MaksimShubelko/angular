import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter-stock',
  templateUrl: './filter-stock.component.html',
  styleUrls: ['./filter-stock.component.scss']
})
export class FilterStockComponent implements OnInit {
  isInit = false;
  @Input() label: string;
  @Input() controlIsInStock: AbstractControl;

  stockBudgeText: string = ' ';
  stockQueryFilter: string = ' ';
  @Output() changed = new EventEmitter<[string, string]>();

  get formControlIsInStock(): FormControl {
    return this.controlIsInStock as FormControl;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.isInit = true;
    this.onChange();
  }

  onChange() {
    if (this.formControlIsInStock.value == true) {
      this.stockBudgeText = 'In stock';
      this.stockQueryFilter = 'stock_gt=0';
    } else {
      this.stockBudgeText = '';
      this.stockQueryFilter = '';
    }
    this.isInit = false;
    this.changed.emit([this.stockBudgeText, this.stockQueryFilter]);
  }

}
