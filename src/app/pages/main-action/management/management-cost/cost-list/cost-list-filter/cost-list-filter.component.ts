import { Component, OnInit } from '@angular/core';
import { CostTypes } from 'src/app/sharings/data/costs_data';
import { CostType } from 'src/app/sharings/models/cost-details';

@Component({
  selector: 'app-cost-list-filter',
  templateUrl: './cost-list-filter.component.html',
  styleUrls: ['./cost-list-filter.component.css']
})
export class CostListFilterComponent implements OnInit {
  costTypes: CostType[] = CostTypes;
  constructor() { }

  ngOnInit() {
  }

}
