import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected readonly onclick = onclick;

  constructor(
      public router: Router,
      public authService: AuthService,
  ) {
  }

  onClickCartButton() {
    this.router.navigateByUrl('/cart');
  }

  onClickShopButton() {
    this.router.navigateByUrl('/');
  }

  onClickAuthenticationButton() {
    this.router.navigateByUrl('/auth');
  }

  onClickLogOutButton() {
    this.authService.setIsLoggedIn(false);
  }
}
