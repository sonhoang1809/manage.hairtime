import { LineChartModel } from './../../../models/chart-model';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() lineChartModel: LineChartModel;

  constructor() {
  }

  ngOnInit() {
  }

}
