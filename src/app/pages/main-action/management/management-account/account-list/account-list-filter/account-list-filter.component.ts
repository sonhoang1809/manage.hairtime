import { Roles } from './../../../../../../sharings/data/roles_data';
import { Role } from './../../../../../../sharings/models/account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-list-filter',
  templateUrl: './account-list-filter.component.html',
  styleUrls: ['./account-list-filter.component.css']
})
export class AccountListFilterComponent implements OnInit {
  roleSelected = null;
  roles: Role[] = Roles;
  constructor() { }

  ngOnInit() {
  }
  onChangeUserName(data) {
    //this.categoryName.emit(data.target.value);
  }

}
