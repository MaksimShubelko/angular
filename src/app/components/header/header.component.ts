import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  protected readonly onclick = onclick;

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
