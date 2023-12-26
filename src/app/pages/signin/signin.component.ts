import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ImageConstants} from "../../constants/image-constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  loginForm: FormGroup

  ngOnInit() {
    this.authenticationService.Logout();
  }

  constructor(public authenticationService: AuthenticationService, private fb: FormBuilder, private router : Router) {
    this.loginForm = this.fb.group({
      userEmail: new FormControl(""),
      userPassword: new FormControl(""),
    });
  }

  login() {
    this.authenticationService.Login(this.loginForm.get('userEmail')?.value, this.loginForm.get('userPassword')?.value).then(loggedIn => {
      if (loggedIn) this.router.navigate(['/dashboard'])
    })
  }

  protected readonly ImageConstants = ImageConstants;
}
