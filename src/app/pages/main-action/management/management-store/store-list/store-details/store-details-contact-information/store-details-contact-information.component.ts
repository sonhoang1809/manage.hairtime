import { Store } from 'src/app/sharings/models/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-details-contact-information',
  templateUrl: './store-details-contact-information.component.html',
  styleUrls: ['./store-details-contact-information.component.css']
})
export class StoreDetailsContactInformationComponent implements OnInit {
  @Input() storeDetails: Store;

  constructor() { }

  ngOnInit() {
  }

}
