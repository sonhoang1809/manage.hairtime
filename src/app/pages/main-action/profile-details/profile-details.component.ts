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
    if(this.authService.getAccount() == null){
      this.account = {
        id: '3192014117691615',
        displayName: "Hoàng Sơn",
        email: "sonhoang1809@gmail.com",
        phone: '0123456789',
        photoUrl: "https://graph.facebook.com/3192014117691615/picture?type=normal",
        role: 'ADMIN',
        token: '',
        status: 1,
        createAt: new Date('2020-10-30T19:50:00.000+09:00')
      };
    }else{
      this.account = this.authService.getAccount();
    }

    this.account.phone = "0789008130";
  }

}
