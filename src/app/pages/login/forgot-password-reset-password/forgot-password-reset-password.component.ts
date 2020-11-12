import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-reset-password',
  templateUrl: './forgot-password-reset-password.component.html',
  styleUrls: ['./forgot-password-reset-password.component.css']
})
export class ForgotPasswordResetPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['login']);
  }

}
