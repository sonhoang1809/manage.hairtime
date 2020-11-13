import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-store-details-campaign',
  templateUrl: './store-details-campaign.component.html',
  styleUrls: ['./store-details-campaign.component.css']
})
export class StoreDetailsCampaignComponent implements OnInit {

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) document) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['viewReport'] == 'true') {
        console.log(params['viewReport']);
        document.getElementById('pills-summary-tab').classList.remove('active');
        document.getElementById('pills-summary').classList.remove('show', 'active');
        document.getElementById('pills-review-tab').classList.add('active');
        document.getElementById('pills-review').classList.add('show', 'active');
      }
    });
  }

}
