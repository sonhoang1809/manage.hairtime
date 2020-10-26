import { StatisticsComponent } from './../shared/statistics/statistics.component';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-cost-in-month',
  templateUrl: './summary-cost-in-month.component.html',
  styleUrls: ['./summary-cost-in-month.component.css']
})
export class SummaryCostInMonthComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private generalHelper: GeneralHelperService) { }

  ngOnInit() {
  }
  onShowStatistic(): void {
    const dialogRef = this.dialog.open<StatisticsComponent>(StatisticsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '700px',
      data: 'CostChart'
    });
  }

}
