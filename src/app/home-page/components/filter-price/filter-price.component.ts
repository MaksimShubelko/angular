import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.scss']
})
export class FilterPriceComponent implements OnInit {
  @Input() label: string;
  @Input() controlPriceFrom: AbstractControl;
  @Input() controlPriceTo: AbstractControl;

  priceBudgeText: string = ' ';
  priceQueryFilter: string = ' ';
  @Output() changed = new EventEmitter<[string, string]>();

  get formControlPriceFrom(): FormControl {
    return this.controlPriceFrom as FormControl;
  }

  get formControlPriceTo(): FormControl {
    return this.controlPriceTo as FormControl;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.onChange()
  }

  onChange() {
    if (this.controlPriceFrom.value != null && this.controlPriceFrom.value.length > 0) {
      if (this.controlPriceTo.value != null && this.controlPriceTo.value.length > 0) {
        this.priceBudgeText = this.controlPriceFrom.value + ' — ' + this.formControlPriceTo.value;
        this.priceQueryFilter = 'price_lte=' + this.formControlPriceTo.value + '&' + 'price_gte=' + this.formControlPriceFrom.value;
      } else {
        this.priceBudgeText = ' >= ' + this.controlPriceFrom.value;
        this.priceQueryFilter = 'price_gte=' + this.formControlPriceFrom.value;
      }
    } else {
      if (this.controlPriceTo.value != null && this.controlPriceTo.value.length > 0) {
        this.priceBudgeText = ' <= ' + this.formControlPriceTo.value;
        this.priceQueryFilter = 'price_lte=' + this.formControlPriceTo.value;
      } else {
        this.priceBudgeText = '';
        this.priceQueryFilter = '';
      }
    }
    this.changed.emit([this.priceBudgeText, this.priceQueryFilter]);
  }

}
