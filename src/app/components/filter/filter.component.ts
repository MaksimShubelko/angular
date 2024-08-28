import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FilterBudgesService} from "../../services/filter-budges.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductFilter} from "../../shared/models/product-filter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  myForm: FormGroup;
  private params: ProductFilter = new class implements ProductFilter {
    "rating.rate_gte": string;
    "rating.rate_lte": string;
    "reviews.length_ne": string;
    "_embed": string;
    "price_gte": string;
    "price_lte": string;
    "stock_gt": string;
  };
  @Input() priceBudgeText: string;
  @Input() priceQueryFilter: string;
  @Input() ratingBudgeText: string;
  @Input() ratingQueryFilter: string;
  @Input() stockBudgeText: string;
  @Input() stockQueryFilter: string;
  @Input() reviewsBudgeText: string;
  @Input() reviewsQueryFilter: string;
  @Input() route: ActivatedRoute;
  @Input() countOfProducts: number;
  @Output() paramsEvent = new EventEmitter<ProductFilter>();

  constructor(private formBuilder: FormBuilder,
              private filterBudgesService: FilterBudgesService,
              private router: Router) {
    this
      .myForm = this.formBuilder.group({
      priceFrom: [''],
      priceTo: [''],
      ratingFrom: [''],
      ratingTo: [''],
      isInStock: [''],
      hasReviews: ['']
    });
  }

  handlePriceChanged([priceBudgeText, priceQueryFilter]: [string, string]) {
    this.filterBudgesService.handleBudges('Price', priceBudgeText);
    this.priceQueryFilter = priceQueryFilter;
    this.updateUrl()
  }

  handleRatingChanged([ratingBudgeText, ratingQueryFilter]: [string, string]) {
    this.filterBudgesService.handleBudges('Rating', ratingBudgeText);
    this.ratingQueryFilter = ratingQueryFilter;
    this.updateUrl()
  }

  handleIsInStockChanged([stockBudgeText, stockQueryFilter]: [string, string]) {
    this.filterBudgesService.handleBudges('Stock', stockBudgeText);
    this.stockQueryFilter = stockQueryFilter;
    this.updateUrl()
  }

  handleHasReviews([reviewsBudgeText, reviewsQueryFilter]: [string, string]) {
    this.filterBudgesService.handleBudges('Reviews', reviewsBudgeText);
    this.reviewsQueryFilter = reviewsQueryFilter;
    this.updateUrl()
  }

  clearPriceCriteria() {
    this.myForm.get('priceFrom').setValue(null)
    this.myForm.get('priceTo').setValue(null)
    this.priceQueryFilter = ''
    this.updateUrl()
  }

  clearRatingCriteria() {
    this.myForm.get('ratingFrom').setValue(null)
    this.myForm.get('ratingTo').setValue(null)
    this.ratingQueryFilter = ''
    this.updateUrl()
  }

  clearStockCriteria() {
    this.myForm.get('isInStock').setValue(null)
    this.stockQueryFilter = ''
    this.updateUrl()
  }

  clearReviewsCriteria() {
    this.myForm.get('hasReviews').setValue(null)
    this.reviewsQueryFilter = ''
    this.updateUrl()
  }

  updateUrl() {
    this.router.navigateByUrl('/products' + this.createFilters())
    this.getProducts()
  }

  getProducts() {
    this.params.price_gte = this.myForm.get('priceFrom').value || '';
    this.params['price_lte'] = this.myForm.get('priceTo').value || '';
    this.params['rating.rate_gte'] = this.myForm.get('ratingFrom').value || '';
    this.params['rating.rate_lte'] = this.myForm.get('ratingTo').value || '';
    this.params['stock_gt'] = this.myForm.get('isInStock').value ? '0' : '';
    this.params['reviews.length_ne'] = this.myForm.get('hasReviews').value ? '0' : '';

    if (this.myForm.get('hasReviews').value) {
      this.params['_embed'] = 'reviews';
    } else {
      this.params['_embed'] = '';
    }
    this.paramsEvent.emit(this.params);
  }

  createFilters() {
    let urlWithFilters = [this.reviewsQueryFilter, this.ratingQueryFilter, this.priceQueryFilter, this.stockQueryFilter].join('&')
    return urlWithFilters.length == 0 ? '' : '?' + urlWithFilters;
  }

  ngOnInit(): void {
    this.filterBudgesService.setComponentRef(this);

    this.route.queryParams.subscribe(params => {
      this.myForm.get('priceFrom').setValue(params['price_gte']);
      this.myForm.get('priceTo').setValue(params['price_lte']);
      this.myForm.get('ratingFrom').setValue(params['rating.rate_gte']);
      this.myForm.get('ratingTo').setValue(params['rating.rate_lte']);
      this.myForm.get('isInStock').setValue(params['stock_gt'] != null);
      this.myForm.get('hasReviews').setValue(params['reviews.length_ne'] != null);
    });

  }

  clearAllFilters() {
    this.clearPriceCriteria();
    this.clearRatingCriteria();
    this.clearStockCriteria();
    this.clearStockCriteria();
    this.updateUrl();
    this.filterBudgesService.clearAll();
  }
}

