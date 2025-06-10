import {Injectable} from "@angular/core";
import {FilterComponent} from "../components/filter/filter.component";

@Injectable({
  providedIn: 'root',
})
export class FilterBudgesService {
  filter: FilterComponent;
  filterBadges = [
    {id: 'Price', label: '', handleClick: this.handlePriceBudge.bind(this), isVisible: false},
    {id: 'Rating', label: '', handleClick: this.handleRatingBudge.bind(this), isVisible: false},
    {id: 'Stock', label: '', handleClick: this.handleStockBudge.bind(this), isVisible: false},
    {id: 'Reviews', label: '', handleClick: this.handleReviewsBudge.bind(this), isVisible: false}
  ];

  setComponentRef(filter: FilterComponent) {
    this.filter = filter;
  }

  constructor() {
  }

  handlePriceBudge() {
    this.filter.clearPriceCriteria();
    this.filterBadges.find(budge => budge.id === 'Price').isVisible = false;
  }

  handleRatingBudge() {
    this.filter.clearRatingCriteria();
    this.filterBadges.find(budge => budge.id === 'Rating').isVisible = false;
  }

  handleStockBudge() {
    this.filter.clearStockCriteria();
    this.filterBadges.find(budge => budge.id === 'Stock').isVisible = false;
  }

  handleReviewsBudge() {
    this.filter.clearReviewsCriteria()
    this.filterBadges.find(budge => budge.id === 'Reviews').isVisible = false;
  }

  getAllBudges() {
    return this.filterBadges;
  }

  clearAll() {
    this.filterBadges.forEach(badge => {badge.isVisible = false});
  }

  handleBudges(id: string, text: string) {
    let budge = this.filterBadges.find(budge => budge.id === id);
    if (budge != null) {
      if (text.length > 0) {
        budge.isVisible = true;
        budge.label = String(text);
      } else {
        budge.isVisible = false;
      }
    }
  }
}
