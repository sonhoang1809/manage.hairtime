import { Store } from 'src/app/sharings/models/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-details-contact-information',
  templateUrl: './store-details-contact-information.component.html',
  styleUrls: ['./store-details-contact-information.component.css']
})
export class StoreDetailsContactInformationComponent implements OnInit {
  @Input() storeDetails: Store;
  workingTimes: string[] = [
    'Mon: 06:00:00 - 23:00:00',
    'Tue: 06:00:00 - 23:00:00',
    'Wed: 06:00:00 - 23:00:00',
    'Thur: 06:00:00 - 23:00:00',
    'Fri: 06:00:00 - 23:00:00',
    'Sat: 06:00:00 - 23:00:00',
    'Sun: 06:00:00 - 11:00:00']
  constructor() { }

  ngOnInit() {
  }

}
