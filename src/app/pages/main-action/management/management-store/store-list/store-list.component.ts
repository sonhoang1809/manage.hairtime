import { StoreDetailsComponent } from './store-details/store-details.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { CurrencyUnit } from 'src/app/sharings/assets/assets';
import { Stores } from 'src/app/sharings/data/stores_data';
import { Store } from 'src/app/sharings/models/store';
import { CostDetailsComponent } from '../../management-cost/cost-list/cost-details/cost-details.component';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit, AfterViewInit {

  CurrencyUnit = CurrencyUnit;
  storeDetails: Store[] = Stores;
  displayedColumns: string[] = ['No.', 'Img', 'name', 'owner', 'createAt', 'Details'];
  dataSource: MatTableDataSource<Store>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialog,
    public generalHelper: GeneralHelperService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Store>(this.storeDetails);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewDetails(data): void {
    const dialogRef = this.dialog.open<StoreDetailsComponent>(StoreDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '600px',
      height: '440px',
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
