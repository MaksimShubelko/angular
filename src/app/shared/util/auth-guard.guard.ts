import {CanActivate} from "@angular/router";
import {Inject, Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService) private auth: AuthService
  ) {}

  canActivate(): boolean {
    return this.auth.checkIsLoggedIn();
  }

}
