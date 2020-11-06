import { CurrencyUnit } from './../../../../sharings/assets/assets';
import { LineChartModel } from './../../../../sharings/models/chart-model';
import { StatisticsComponent } from './../shared/statistics/statistics.component';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-revenue-in-month',
  templateUrl: './summary-revenue-in-month.component.html',
  styleUrls: ['./summary-revenue-in-month.component.css']
})
export class SummaryRevenueInMonthComponent implements OnInit {
  CurrencyUnit = CurrencyUnit;


  constructor(private dialog: MatDialog,
    private generalHelper: GeneralHelperService) { }

  ngOnInit() {
  }
  onShowStatistic(): void {
    const dialogRef = this.dialog.open<StatisticsComponent>(StatisticsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '700px',
      data: 'RevenueChart'
    });
  }
}
