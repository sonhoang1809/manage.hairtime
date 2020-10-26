import { Account } from './../../sharings/models/account';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth-service/auth.service';
import { GeneralStorage } from './../../services/storages/storages';
import { GeneralHelperService } from '../../services/general-helper.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-action',
  templateUrl: './main-action.component.html',
  styleUrls: ['./main-action.component.css']
})
export class MainActionComponent implements OnInit {

  constructor(private storage: GeneralStorage, private generalHelper: GeneralHelperService,
    private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // if (this.authService.isLogin() == false) {
    //   console.log("User is not login");
    //   this.router.navigate(['/login']);
    // }
  }

}
