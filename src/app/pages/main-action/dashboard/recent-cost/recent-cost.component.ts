import { CostsData } from './../../../../sharings/data/costs_data';
import { CostDetails } from './../../../../sharings/models/cost-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-cost',
  templateUrl: './recent-cost.component.html',
  styleUrls: ['./recent-cost.component.css']
})
export class RecentCostComponent implements OnInit {
  recentCosts: CostDetails[];
  constructor() { }

  ngOnInit() {
    if(CostsData.length>5){
      this.recentCosts = CostsData.slice(0,5);
    }else{
      this.recentCosts = CostsData;
    }
  }

}
