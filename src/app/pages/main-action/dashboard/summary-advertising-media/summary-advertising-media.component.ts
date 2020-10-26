import { NewpaperMedia, TiviMedia, SocialNetworkMedia, LeafletMedia } from './../../../../sharings/data/medias_data';
import { MarketingMedia } from './../../../../sharings/models/social_marketing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-advertising-media',
  templateUrl: './summary-advertising-media.component.html',
  styleUrls: ['./summary-advertising-media.component.css']
})
export class SummaryAdvertisingMediaComponent implements OnInit {
  mediaMarketings: MarketingMedia[];
  constructor() { }

  ngOnInit() {
    this.mediaMarketings = [NewpaperMedia,TiviMedia,SocialNetworkMedia,LeafletMedia];
  }

}
