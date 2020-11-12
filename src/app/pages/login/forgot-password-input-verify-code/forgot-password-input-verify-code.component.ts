import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-input-verify-code',
  templateUrl: './forgot-password-input-verify-code.component.html',
  styleUrls: ['./forgot-password-input-verify-code.component.css']
})
export class ForgotPasswordInputVerifyCodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['reset-password']);
  }
}
