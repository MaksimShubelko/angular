import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter-rating',
  templateUrl: './filter-rating.component.html',
  styleUrls: ['./filter-rating.component.scss']
})
export class FilterRatingComponent implements OnInit {
  @Input() label: string;
  @Input() controlRatingFrom: AbstractControl;
  @Input() controlRatingTo: AbstractControl;

  ratingBudgeText: string = ' ';
  ratingQueryFilter: string = ' ';
  @Output() changed = new EventEmitter<[string, string]>();

  get formControlRatingFrom(): FormControl {
    return this.controlRatingFrom as FormControl;
  }

  get formControlRatingTo(): FormControl {
    return this.controlRatingTo as FormControl;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.onChange()
  }

  onChange() {
    if (this.controlRatingFrom.value != null && this.controlRatingFrom.value.length > 0) {
      if (this.controlRatingTo.value != null && this.controlRatingTo.value.length > 0) {
        this.ratingBudgeText = this.controlRatingFrom.value + '★ — ' + this.formControlRatingTo.value + '★';
        this.ratingQueryFilter = 'rating.rate_lte=' + this.formControlRatingTo.value + '&' + 'rating.rate_gte=' + this.formControlRatingFrom.value;
      } else {
        this.ratingBudgeText = ' >= ' + this.controlRatingFrom.value + '★';
        this.ratingQueryFilter = 'rating.rate_gte=' + this.formControlRatingFrom.value;
      }
    } else {
      if (this.controlRatingTo.value != null && this.controlRatingTo.value.length > 0) {
        this.ratingBudgeText = ' <= ' + this.formControlRatingTo.value + '★';
        this.ratingQueryFilter = 'rating.rate_lte=' + this.formControlRatingTo.value;
      } else {
        this.ratingBudgeText = '';
        this.ratingQueryFilter = '';
      }
    }
    this.changed.emit([this.ratingBudgeText, this.ratingQueryFilter]);
  }

}
