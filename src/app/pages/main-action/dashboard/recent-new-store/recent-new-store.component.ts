import { AimShaverBarber, CN1FourRauBarber, BaberNormalStore01, BiTyStore01, GudStore01 } from './../../../../sharings/data/stores_data';
import { Store } from './../../../../sharings/models/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-new-store',
  templateUrl: './recent-new-store.component.html',
  styleUrls: ['./recent-new-store.component.css']
})
export class RecentNewStoreComponent implements OnInit {

  stores: Store[];
  constructor() { }

  ngOnInit() {
    this.stores = [AimShaverBarber,CN1FourRauBarber,
      BaberNormalStore01,BiTyStore01,GudStore01];
  }

}
