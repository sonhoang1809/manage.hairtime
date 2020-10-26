import { BarChartModel } from './../../../models/chart-model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() barChartModel: BarChartModel = null;
  constructor() { }

  ngOnInit() {
  }

}
