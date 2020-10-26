import { CanadaMarketing, VietNameMarketing, USAMarketing, SouthKoreaMarketing, JapanMarketing, FranceMarketing } from './../../../../sharings/data/marketing_countries_data';
import { MarketingAtCountry } from './../../../../sharings/models/social_marketing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-marketing-at-countries',
  templateUrl: './summary-marketing-at-countries.component.html',
  styleUrls: ['./summary-marketing-at-countries.component.css']
})
export class SummaryMarketingAtCountriesComponent implements OnInit {
  marketingAtCountries: MarketingAtCountry[];
  constructor() { }

  ngOnInit() {
    this.marketingAtCountries = [
      VietNameMarketing, USAMarketing, SouthKoreaMarketing, JapanMarketing, FranceMarketing,
      CanadaMarketing
    ];
  }

}
