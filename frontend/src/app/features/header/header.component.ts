import { Component, OnInit } from '@angular/core';
import { LoginService } from "../user/services/login/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logedin: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.currentLoginState.subscribe(result => this.logedin = result);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loginService.loginState.next(false);
    setTimeout(() => this.router.navigate(["/home"]), 1000);
  }
}
