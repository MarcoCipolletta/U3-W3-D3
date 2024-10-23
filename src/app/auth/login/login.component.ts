import { Component } from '@angular/core';
import { ILogin } from '../../interfaces/i-login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  datiLogin: ILogin = {
    email: '',
    password: '',
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  login() {
    this.authSvc.login(this.datiLogin).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
