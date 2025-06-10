import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter-reviews',
  templateUrl: './filter-reviews.component.html',
  styleUrls: ['./filter-reviews.component.scss']
})
export class FilterReviewsComponent implements OnInit {
  isInit = false;
  @Input() label: string;
  @Input() controlHasReviews: AbstractControl;

  reviewsBudgeText: string = ' ';
  reviewsQueryFilter: string = ' ';
  @Output() changed = new EventEmitter<[string, string]>();

  get formControlHasReviews(): FormControl {
    return this.controlHasReviews as FormControl;
  }

  ngOnInit(): void {
    this.isInit = true;
    this.onChange();
  }

  onChange() {
    if (this.controlHasReviews.value == true) {
      this.reviewsBudgeText = 'Has reviews';
      this.reviewsQueryFilter = '_embed=reviews&reviews.length_ne=0';
    } else {
      this.reviewsBudgeText = '';
      this.reviewsQueryFilter = '';
    }
    this.isInit = false;
    this.changed.emit([this.reviewsBudgeText, this.reviewsQueryFilter]);
  }

}
