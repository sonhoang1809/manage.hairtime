import { PieChartModel } from './../../../models/chart-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() pieChartModel: PieChartModel;
  @Input() sizeChart: number;
  constructor() { }

  ngOnInit() {
  }

}
