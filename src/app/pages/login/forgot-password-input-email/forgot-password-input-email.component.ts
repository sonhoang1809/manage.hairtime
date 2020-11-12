import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-input-email',
  templateUrl: './forgot-password-input-email.component.html',
  styleUrls: ['./forgot-password-input-email.component.css']
})
export class ForgotPasswordInputEmailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['verify-code']);
  }

}
