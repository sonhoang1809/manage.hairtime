import { CurrencyUnit } from './../../../../../sharings/assets/assets';
import { CostDetails } from './../../../../../sharings/models/cost-details';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { CostsData } from 'src/app/sharings/data/costs_data';
import { CostDetailsComponent } from './cost-details/cost-details.component';

@Component({
  selector: 'app-cost-list',
  templateUrl: './cost-list.component.html',
  styleUrls: ['./cost-list.component.css']
})
export class CostListComponent implements OnInit, AfterViewInit {
  CurrencyUnit = CurrencyUnit;
  costDetails: CostDetails[] = CostsData;
  displayedColumns: string[] = ['No.', 'costDescription', 'total', 'Details'];
  dataSource: MatTableDataSource<CostDetails>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialog,
    public generalHelper: GeneralHelperService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<CostDetails>(this.costDetails);
  }

  viewDetails(data): void {
    const dialogRef = this.dialog.open<CostDetailsComponent>(CostDetailsComponent, {
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
