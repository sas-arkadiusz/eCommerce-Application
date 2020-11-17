import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  checkoutFormGroup: FormGroup;
  isPasswordWrong: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              public router: Router) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      user: this.formBuilder.group({
        login: [''],
        password: ['']
      })
    });
  }

  onSubmit() {
    if(this.checkoutFormGroup.get('user').value.password.length === 0 ||
      this.checkoutFormGroup.get('user').value.password === "admin") {
        this.isPasswordWrong = true;
    } else {
      this.isPasswordWrong = false;
      this.loginService.updateUsername(this.checkoutFormGroup.get('user').value.login);
      this.router.navigate(['games']);
    }
    
  }

}
