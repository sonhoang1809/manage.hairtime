import { DonutChartModel } from './../../../models/chart-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input() donutChartModel: DonutChartModel;
  @Input() sizeChart: number;
  constructor() { }

  ngOnInit() {
  }

}
