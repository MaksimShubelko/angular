import {Component, OnInit, ViewChild} from '@angular/core';
import {IProduct} from '../../../shared/models/product';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, NavigationEnd, Router, Event} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html',
    styleUrls: ['home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    products: IProduct[];
    countOfProducts: number;
    loading: boolean = false
    badgeTiles: string[];
    @ViewChild('f') slForm: NgForm;
    currentFiltersRoute: {} = {};
    badgesTiles: string[] = [];
    filtersObj: { [key: string]: null | number | boolean } = {
        minPrice: null,
        maxPrice: null,
        minRating: null,
        maxRating: null,
        stockPresence: null,
        reviewsPresence: null,
    };

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        const queryParams = this.route.snapshot.queryParams;
        for (let key in queryParams) {
            this.filtersObj[key] = queryParams[key];
        }
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                const queryParams = this.route.snapshot.queryParams;
                this.badgeTiles = this.productService.createBadges(queryParams);
                this.getProducts(queryParams);
            }
        })

    }

    ngOnInit(): void {
        this.loading = true;

    }

    getProducts(queryParams: { [key: string]: any }) {
        return this.productService.getAll(queryParams).subscribe(products => {
            this.loading = false;
            this.products = products;
            this.countOfProducts = products.length;
        });
    }

    onSubmit(f: NgForm) {
        const formControls = Object.entries(f.controls);
        const queryParamsObj: { [key: string]: number } = {};
        formControls
            .map((el) => ({ name: el[0], value: el[1].value }))
            .filter((el) => el.value !== '' && el.value !== false)
            .forEach((el) => {
                queryParamsObj[el.name] = el.value;
            });
        this.router.navigate(['/'], { queryParams: { ...queryParamsObj } });
    }

    removeFilter(index: number) {
        const queryParams = this.route.snapshot.queryParams;
        const removedFilterKey = Object.keys(queryParams)[index];
        this.filtersObj[removedFilterKey] = null;
        const { [removedFilterKey]: removedFilter, ...restFilters } = queryParams;
        this.router.navigate(['/'], { queryParams: restFilters });
    }

    onClear() {
        for (let key in this.filtersObj) {
            this.filtersObj[key] = null;
        }
        this.router.navigate([], { replaceUrl: true });
    }
}
