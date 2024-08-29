import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {delay, retry} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {IReview} from "../shared/models/review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8000/reviews/';

  getByProductId(productId: number): Observable<IReview[]> {
    return this.http.get<IReview[]>(this.apiUrl + '?productId=' + productId).pipe(
      delay(100),
      retry(2))
  }


  constructor(private http: HttpClient) {
  }
}
