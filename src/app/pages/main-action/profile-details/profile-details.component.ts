import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth-service/auth.service';
import { Account } from './../../../sharings/models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  titleComponent = "Profile";
  account: Account;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
    console.log('Init Profile');
    this.account = this.authService.getAccount();
    this.account.phone = "0789008130";
  }

}
