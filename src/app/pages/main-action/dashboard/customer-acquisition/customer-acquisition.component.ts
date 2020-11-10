import { CustomerAcquisition } from './../../../../sharings/data/charts_data';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { LineChartModel } from './../../../../sharings/models/chart-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-acquisition',
  templateUrl: './customer-acquisition.component.html',
  styleUrls: ['./customer-acquisition.component.css']
})
export class CustomerAcquisitionComponent implements OnInit {
  lineChart: LineChartModel = null;
  constructor(public generalService: GeneralHelperService) { }

  ngOnInit() {
    this.lineChart = this.generalService.convertToLineChartModel(CustomerAcquisition);
    this.lineChart.chartColors = [
      {
        backgroundColor: 'rgba(10, 197, 168, 0.2)',
        borderColor: 'rgba(10, 197, 168, 1)',
      },
      {
        backgroundColor: 'rgba(254, 201, 87, 0.2)',
        borderColor: 'rgba(254, 201, 87, 1)',
      }
    ];
  }

}
