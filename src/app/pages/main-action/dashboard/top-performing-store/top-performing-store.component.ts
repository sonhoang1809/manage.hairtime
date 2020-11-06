import { CurrencyUnit } from './../../../../sharings/assets/assets';
import { PerformsData } from './../../../../sharings/data/perform_stores_data';
import { PerformStore } from './../../../../sharings/models/perform_store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-performing-store',
  templateUrl: './top-performing-store.component.html',
  styleUrls: ['./top-performing-store.component.css']
})
export class TopPerformingStoreComponent implements OnInit {
  performs: PerformStore[];
  CurrencyUnit = CurrencyUnit;
  constructor() { }

  ngOnInit() {
    if (PerformsData.length > 5) {
      this.performs = PerformsData.slice(0, 5);
    } else {
      this.performs = PerformsData;
    }

  }

}
