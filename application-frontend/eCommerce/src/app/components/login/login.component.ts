import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/common/order';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.updateLoggedUsername();
  }

  updateLoggedUsername() {
    this.loginService.username.subscribe(
      data => this.username = data
    );
  }

  logout() {
    this.loginService.updateUsername("");
  }

}
