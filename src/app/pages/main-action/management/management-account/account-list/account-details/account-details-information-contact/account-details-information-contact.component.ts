import { Account } from './../../../../../../../sharings/models/account';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-details-information-contact',
  templateUrl: './account-details-information-contact.component.html',
  styleUrls: ['./account-details-information-contact.component.css']
})
export class AccountDetailsInformationContactComponent implements OnInit {
  @Input() accountDetails: Account;
  constructor() { }

  ngOnInit() {
  }

}
