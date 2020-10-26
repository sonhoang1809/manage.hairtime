import { dataChartNumberCheckoutByCategory } from './../../../../sharings/data/charts_data';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { PieChartModel } from './../../../../sharings/models/chart-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-revenue-by-category',
  templateUrl: './summary-revenue-by-category.component.html',
  styleUrls: ['./summary-revenue-by-category.component.css']
})
export class SummaryRevenueByCategoryComponent implements OnInit {
  pieChart: PieChartModel;

  constructor(public generalService: GeneralHelperService) { }

  ngOnInit() {
    this.pieChart = this.generalService.convertToPieChartModel(dataChartNumberCheckoutByCategory);
  }

}
