import { dataChartNumberStoreType } from './../../../../sharings/data/charts_data';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { DonutChartModel } from './../../../../sharings/models/chart-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-number-store-type',
  templateUrl: './summary-number-store-type.component.html',
  styleUrls: ['./summary-number-store-type.component.css']
})
export class SummaryNumberStoreTypeComponent implements OnInit {

  donutChart: DonutChartModel;
  constructor(public generalService: GeneralHelperService) { }

  ngOnInit() {
    this.donutChart = this.generalService.convertToDonutChartModel(dataChartNumberStoreType);
  }

}
