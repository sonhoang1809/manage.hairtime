import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-details-campaign',
  templateUrl: './account-details-campaign.component.html',
  styleUrls: ['./account-details-campaign.component.css']
})
export class AccountDetailsCampaignComponent implements OnInit {

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) document) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['viewReport'] == 'true') {
        console.log(params['viewReport']);
        console.log(document.getElementById('pills-summary-tab').getAttribute('aria-selected'));

        document.getElementById('pills-summary-tab').setAttribute('aria-selected', 'false');
        if (document.getElementById('pills-summary-tab').classList.contains('active')) {
          document.getElementById('pills-summary-tab').classList.remove('active');
        }
        if (document.getElementById('pills-summary').classList.contains('show')
          && document.getElementById('pills-summary').classList.contains('active')) {
          document.getElementById('pills-summary').classList.remove('show', 'active');
        }
        document.getElementById('pills-report-tab').setAttribute('aria-selected', 'true');
        if (!document.getElementById('pills-report-tab').classList.contains('active')) {
          document.getElementById('pills-report-tab').classList.add('active');
        }
        if (!document.getElementById('pills-report').classList.contains('show')
          && !document.getElementById('pills-report').classList.contains('active')) {
          document.getElementById('pills-report').classList.add('show', 'active');
        }
      }
    });
  }

}
