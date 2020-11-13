import { Stores } from 'src/app/sharings/data/stores_data';
import { Store } from 'src/app/sharings/models/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  storeDetails: Store = null;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var storeId = params.get('storeId');
      this.storeDetails = Stores.find(s => s.id.toString() == storeId);
    });
  }

}
