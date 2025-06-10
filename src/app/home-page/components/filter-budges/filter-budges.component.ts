import {Component, OnInit} from '@angular/core';
import {FilterBudgesService} from "../../services/filter-budges.service";

@Component({
  selector: 'app-filter-budges',
  templateUrl: './filter-budges.component.html',
  styleUrls: ['./filter-budges.component.scss']
})
export class FilterBudgesComponent implements OnInit {
  filterBudges: any;

  constructor(private filterBudgesService: FilterBudgesService) {
  }

  ngOnInit(): void {
    this.filterBudges = this.filterBudgesService.getAllBudges();
  }

}
