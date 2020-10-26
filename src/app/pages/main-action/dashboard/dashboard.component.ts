import { GeneralHelperService } from './../../../services/general-helper.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth-service/auth.service';
import { GeneralStorage } from './../../../services/storages/storages';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  titleComponent: string = 'E-commerce Dashboard';
  constructor(private storage: GeneralStorage, private generalHelper: GeneralHelperService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log('init Dashboard');

  }

}
