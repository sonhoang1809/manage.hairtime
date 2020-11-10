import { Color } from 'ng2-charts';
import { dataChartRevenueByDay, statisticsBys, dataChartRevenueByMonth, dataChartCostByDay, dataChartCostByMonth, dataChartProfitByDay, dataChartProfitByMonth, dataChartNumberBookingByMonth, dataChartNumberBookingByDay, dataChartNumberAccount, dataChartNumberNewCustomerByDay, dataChartNumberNewCustomerByMonth, dataChartNumberGuestByDay, dataChartNumberGuestByMonth, dataChartNumberNewStoreByDay, dataChartNumberNewStoreByMonth } from './../../../../../sharings/data/charts_data';
import { LineChartModel, BarChartModel, PieChartModel } from './../../../../../sharings/models/chart-model';
import { GeneralHelperService } from './../../../../../services/general-helper.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  lineChart: LineChartModel = null;
  barChart: BarChartModel = null;
  pieChart: PieChartModel = null;
  isLineChart: boolean;
  isBarChart: boolean;
  isPieChart: boolean;
  titleChart: string;
  statisticsBys = statisticsBys;
  selected = statisticsBys[0].id;
  constructor(private dialogRef: MatDialogRef<StatisticsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private formBuilder: FormBuilder, private dialog: MatDialog,
    public generalService: GeneralHelperService) { }

  setIsLineChart() {
    this.isLineChart = true;
    this.isBarChart = false;
    this.isPieChart = false;
  }
  setIsBarChart() {
    this.isLineChart = false;
    this.isBarChart = true;
    this.isPieChart = false;
  }
  setIsPieChart() {
    this.isLineChart = false;
    this.isBarChart = false;
    this.isPieChart = true;
  }
  ngOnInit() {
    switch (this.data) {
      case "RevenueChart": {
        this.setIsLineChart();
        this.titleChart = "Revenue Chart";
        this.drawChartRevenue(0);
        break;
      }
      case "CostChart": {
        this.setIsLineChart();
        this.titleChart = "Cost Chart";
        this.drawChartCost(0);
        break;
      }
      case "ProfitChart": {
        this.setIsLineChart();
        this.titleChart = "Profit Chart";
        this.drawChartProfit(0);
        break;
      }
      case "NumberBookingChart": {
        this.setIsLineChart();
        this.titleChart = "Number of Booking Chart";
        this.drawChartNumberBooking(0);
        break;
      }
      case "NumberAccount": {
        this.setIsPieChart();
        this.titleChart = "Number Account in System";
        this.drawChartNumberAccount();
        break;
      }
      case "NewCustomerAccount": {
        this.setIsLineChart();
        this.titleChart = "New customer in System";
        this.drawChartNumberNewCustomer(0);
        break;
      }
      case "NumberGuest": {
        this.setIsLineChart();
        this.titleChart = "Guest";
        this.drawChartNumberGuest(0);
        break;
      }
      case "NumberNewStore": {
        this.setIsLineChart();
        this.titleChart = "New store in System";
        this.drawChartNumberNewStore(0);
        break;
      }
      default: {
        console.log("default");
        break;
      }
    }
  }
  drawChartNumberNewStore(statisticsBy: number) {
    setTimeout(() => {
      if (statisticsBy == 0) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartNumberNewStoreByDay);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(10, 197, 168, 0.2)',
          borderColor: 'rgba(10, 197, 168, 1)',
        }];
      } else if (statisticsBy == 1) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartNumberNewStoreByMonth);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(10, 197, 168, 0.2)',
          borderColor: 'rgba(10, 197, 168, 1)',
        }];
      }
    }, 2000);
  }
  drawChartNumberGuest(statisticsBy: number) {
    setTimeout(() => {
      if (statisticsBy == 0) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartNumberGuestByDay);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(254, 201, 87, 0.2)',
          borderColor: 'rgba(254, 201, 87, 1)',
        }];
      } else if (statisticsBy == 1) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartNumberGuestByMonth);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(254, 201, 87, 0.2)',
          borderColor: 'rgba(254, 201, 87, 1)',
        }];
      }
    }, 2000);
  }
  drawChartNumberNewCustomer(statisticsBy: number) {
    setTimeout(() => {
      if (statisticsBy == 0) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartNumberNewCustomerByDay);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(10, 197, 168, 0.2)',
          borderColor: 'rgba(10, 197, 168, 1)',
        }];
      } else if (statisticsBy == 1) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartNumberNewCustomerByMonth);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(10, 197, 168, 0.2)',
          borderColor: 'rgba(10, 197, 168, 1)',
        }];
      }
    }, 2000);
  }
  drawChartNumberAccount() {
    setTimeout(() => {
      this.pieChart = this.generalService.convertToPieChartModel(dataChartNumberAccount);
    }, 2000);
  }

  drawChartRevenue(statisticsBy: number) {
    setTimeout(() => {
      if (statisticsBy == 0) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartRevenueByDay);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(10, 197, 168, 0.2)',
          borderColor: 'rgba(10, 197, 168, 1)',
        }];
      } else if (statisticsBy == 1) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartRevenueByMonth);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(10, 197, 168, 0.2)',
          borderColor: 'rgba(10, 197, 168, 1)',
        }];
      }
    }, 2000);
  }
  drawChartCost(statisticsBy: number) {
    setTimeout(() => {
      if (statisticsBy == 0) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartCostByDay);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)'
        }];
      } else if (statisticsBy == 1) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartCostByMonth);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)'
        }];
      }
    }, 2000);
  }
  drawChartProfit(statisticsBy: number) {
    setTimeout(() => {
      if (statisticsBy == 0) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartProfitByDay);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)'
        }];
      } else if (statisticsBy == 1) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartProfitByMonth);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)'
        }];
      }
    }, 2000);
  }
  drawChartNumberBooking(statisticsBy: number) {
    setTimeout(() => {
      if (statisticsBy == 0) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartNumberBookingByDay);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(37, 213, 242, 0.2)',
          borderColor: 'rgba(37, 213, 242, 1)'
        }];
      } else if (statisticsBy == 1) {
        this.lineChart = this.generalService.convertToLineChartModel(dataChartNumberBookingByMonth);
        this.lineChart.chartColors = [{
          backgroundColor: 'rgba(37, 213, 242, 0.2)',
          borderColor: 'rgba(37, 213, 242, 1)'
        }];
      }
    }, 2000);
  }
  submit(event: any) {
    this.lineChart = null;
    switch (this.data) {
      case "RevenueChart": {
        this.drawChartRevenue(event.value);
        break;
      }
      case "CostChart": {
        this.drawChartCost(event.value);
        break;
      }
      case "ProfitChart": {
        this.drawChartProfit(event.value);
        break;
      }
      case "NumberBookingChart": {
        this.drawChartNumberBooking(event.value);
        break;
      }
      case "NewCustomerAccount": {
        this.drawChartNumberNewCustomer(event.value);
        break;
      }
      case "NumberGuest": {
        this.drawChartNumberGuest(event.value);
        break;
      }
      case "NumberNewStore": {
        this.drawChartNumberNewStore(event.value);
        break;
      }
      default: {
        console.log("default");
        break;
      }
    }
  }

}
