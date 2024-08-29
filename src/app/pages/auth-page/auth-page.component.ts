import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../shared/models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  isSignIn: boolean = true;
  loginForm: FormGroup;
  user: Omit<IUser, 'id'> = {
    email: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,) {
    this.loginForm = this.loginForm = this.formBuilder.group({
      username: [
        '', [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '', [
          Validators.required,
          Validators.pattern(/^(?=.*\d)\w{3,20}$/
          )]
      ]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.isSignIn) {
        this.authService.findUserByCredentials(this.loginForm.value.username, this.loginForm.value.password)
          .subscribe(user => {
            this.authService.setIsLoggedIn(user != null)
            if(user != null){
              this.router.navigateByUrl('/');
            } else {
              this.router.navigateByUrl('/auth');
            }
          });
      } else {
        if (this.authService.checkUserByEmail(this.loginForm.value.email) != null) {
          this.user.password = this.loginForm.value.password;
          this.user.email = this.loginForm.value.username;
          this.authService.saveUser(this.user).subscribe({
            next: () => {
              this.router.navigateByUrl('/auth');
              this.isSignIn = true;
            }
          });
        }
      }
    }
  }

  ngOnInit(): void {
    this.isSignIn = true;
  }

  changeToSignUp() {
    this.isSignIn = false;
  }

}
