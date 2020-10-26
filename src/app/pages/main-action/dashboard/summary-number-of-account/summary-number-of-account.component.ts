import { StatisticsComponent } from './../shared/statistics/statistics.component';
import { GeneralHelperService } from './../../../../services/general-helper.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-number-of-account',
  templateUrl: './summary-number-of-account.component.html',
  styleUrls: ['./summary-number-of-account.component.css']
})
export class SummaryNumberOfAccountComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private generalHelper: GeneralHelperService) { }

  ngOnInit() {
  }
  onShowStatistic(): void {
    const dialogRef = this.dialog.open<StatisticsComponent>(StatisticsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '700px',
      data: 'NumberAccount'
    });
  }

}
