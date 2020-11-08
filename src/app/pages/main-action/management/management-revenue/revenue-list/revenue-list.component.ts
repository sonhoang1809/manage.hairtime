import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { CurrencyUnit } from 'src/app/sharings/assets/assets';
import { CostsData } from 'src/app/sharings/data/costs_data';
import { CostDetails } from 'src/app/sharings/models/cost-details';
import { RevenueDetailsComponent } from './revenue-details/revenue-details.component';

@Component({
  selector: 'app-revenue-list',
  templateUrl: './revenue-list.component.html',
  styleUrls: ['./revenue-list.component.css']
})
export class RevenueListComponent implements OnInit, AfterViewInit  {
  CurrencyUnit = CurrencyUnit;
  costDetails: CostDetails[] = CostsData;
  displayedColumns: string[] = ['No.', 'costDescription', 'total', 'Details'];
  dataSource: MatTableDataSource<CostDetails>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialog,
    public generalHelper: GeneralHelperService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  viewDetails(data): void {
    const dialogRef = this.dialog.open<RevenueDetailsComponent>(RevenueDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '600px',
      height:'440px',
      position: { top: '70px' },
      data: data
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result != null) {
    //     //console.log(result);
    //     // if (result == true) {
    //     //   this.searchOrderList();
    //     // }
    //   }
    // });
  }
}
