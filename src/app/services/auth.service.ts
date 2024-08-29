import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IUser} from "../shared/models/user";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean;
  private apiUrl = 'http://localhost:8000/users';

  constructor(private http: HttpClient) {
  }

  findUserByCredentials(email: string, password: string): Observable<IUser> {
    const httpParams = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get<IUser[]>(this.apiUrl, { params: httpParams })
      .pipe(
        map(users => users.length > 0 ? users[0] : null)
      );
  }

  checkUserByEmail(email: string): Observable<IUser | null> {
    const httpParams = new HttpParams().set('email', email);
    return this.http.get<IUser[]>(this.apiUrl, {params: httpParams})
      .pipe(
        map(users => users.length > 0 ? users[0] : null)
      );
  }

  checkIsLoggedIn(): boolean {
    return this.isLoggedIn
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  saveUser(user: Omit<IUser, 'id'>): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user);
  }
}
