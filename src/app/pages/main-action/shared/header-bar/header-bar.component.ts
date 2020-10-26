import { Router } from '@angular/router';
import { NotificationData } from './../../../../sharings/data/notifications_data';
import { NotificationHeader } from './../../../../sharings/models/notification';
import { Account } from './../../../../sharings/models/account';
import { AuthService } from './../../../../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  account: Account = null;
  notifications: NotificationHeader[];
  constructor(private authService: AuthService, private router: Router) { }

  onNavigate(target: string): void {
    console.log("Navigate to " + target);
    this.router.navigate([target]);
  }
  ngOnInit() {
    if (this.authService.getAccount() == null) {
      this.account = {
        id: '3192014117691615',
        displayName: "Hoàng Sơn",
        email: "sonhoang1809@gmail.com",
        phone: '0123456789',
        photoUrl: "https://graph.facebook.com/3192014117691615/picture?type=normal",
        role: 'ADMIN',
        token: ''
      };
    } else {
      this.account = this.authService.getAccount();
    }

    this.notifications = NotificationData;
  }

  onLogout() {
    this.authService.logOut();
  }
}
