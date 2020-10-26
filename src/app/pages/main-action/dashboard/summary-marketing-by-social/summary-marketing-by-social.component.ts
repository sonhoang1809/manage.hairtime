import { FacebookMS, TwitterMS, InstagramMS, ZaloMS, GoogleMS } from './../../../../sharings/data/marketing_social_data';
import { MarketingSocial } from './../../../../sharings/models/social_marketing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-marketing-by-social',
  templateUrl: './summary-marketing-by-social.component.html',
  styleUrls: ['./summary-marketing-by-social.component.css']
})
export class SummaryMarketingBySocialComponent implements OnInit {

  marketingSocials: MarketingSocial[] = null;
  constructor() { }

  ngOnInit() {
    this.marketingSocials = [GoogleMS, FacebookMS, TwitterMS, InstagramMS, ZaloMS];
  }

}
