import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../../shared/models/product';
import {HttpClient, HttpParams} from '@angular/common/http';
import {delay, retry} from 'rxjs/operators';
import {ProductFilter} from '../../shared/models/product-filter';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private apiUrl = 'http://localhost:3000/products/';

    routerObj: { [key: string]: { route: string; queryParam: string } } = {
        reviewsPresence: {
            route: 'isReviewsPresenceChecked',
            queryParam: 'rating.count_ne',
        },
        stockPresence: {
            route: 'isStockPresenceChecked',
            queryParam: 'stock_ne',
        },
        minPrice: {
            route: 'minPrice',
            queryParam: 'price_gte',
        },
        maxPrice: {
            route: 'maxPrice',
            queryParam: 'price_lte',
        },
        minRating: {
            route: 'minRating',
            queryParam: 'rating.rate_gte',
        },
        maxRating: {
            route: 'maxRating',
            queryParam: 'rating.rate_lte',
        },
    };

    filtersTitles: { [key: string]: string } = {
        minPrice: 'from',
        maxPrice: 'to',
        stockPresence: 'in stock',
        reviewsPresence: 'reviewers',
        minRating: '★from',
        maxRating: '★to',
    };

    constructor(private http: HttpClient) {
    }

    getAll(queryParams: { [key: string]: any }): Observable<IProduct[]> {
        const keys = [
            'minPrice',
            'maxPrice',
            'minRating',
            'maxRating',
            'stockPresence',
            'reviewsPresence',
        ];
        let httpParams = new HttpParams();
        keys.forEach((key) => {
            const value = queryParams[key];
            if (value !== undefined && value !== null && value !== '') {
                httpParams = httpParams.set(this.routerObj[key].queryParam, value === 'true' ? 0 : value);
            }
        });
        return this.http.get<IProduct[]>(this.apiUrl, {
            params: httpParams
        }).pipe(
            delay(100),
            retry(2));
    }

    getById(id: number): Observable<IProduct> {
        return this.http.get<IProduct>(this.apiUrl + id).pipe(
            delay(100),
            retry(2));
    }

    updateProduct(updatedProduct: {
        image: string;
        price: any;
        rating: { rate: number; count: number };
        description: any;
        inStock: any;
        id: number;
        title: any;
        stock: number
    }) {
        this.http.put<IProduct>(this.apiUrl + updatedProduct.id, updatedProduct).subscribe();
    }

    delete(id: number) {
        this.http.delete<IProduct>(this.apiUrl + id).subscribe();
    }

    private getFilterParams(params: ProductFilter): Partial<ProductFilter> {
        return Object.keys(params).reduce((acc, key) => {
            if (params[key] !== '') {
                acc[key] = params[key];
            }
            return acc;
        }, {} as Partial<ProductFilter>);
    }

    resolveQueryParam(value: any) {
        return value === 'true' ? 0 : value;
    }

    createBadges(queryParams: any) {
        let filterBadges = [];
        for (let key in queryParams) {
            if (queryParams[key] !== null) {
                filterBadges.push(`${this.filtersTitles[key]}:${queryParams[key]}`);
            }
        }
        return filterBadges;
    }
}
