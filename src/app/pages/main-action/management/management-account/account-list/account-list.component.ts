import { Account } from './../../../../../sharings/models/account';
import { AccountUsers } from './../../../../../sharings/data/users_data';
import { GeneralHelperService } from './../../../../../services/general-helper.service';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BookingView } from 'src/app/sharings/models/booking';
import { AccountDetailsComponent } from './account-details/account-details.component';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit,AfterViewInit  {
  //bookingViews: BookingView[] = [];
  accountUsers: Account[] = AccountUsers;
  displayedColumns: string[] = ['No.', 'Img', 'displayName', 'phone', 'role', 'status', 'Details'];
  dataSource: MatTableDataSource<Account>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialog,
    public generalHelper: GeneralHelperService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Account>(this.accountUsers);
  }
  searchByUserName(search: string) {
    //this.searchCostRequest.search = search;
    //this.searchCategoryList();
  }
  viewDetails(data): void {
    const dialogRef = this.dialog.open<AccountDetailsComponent>(AccountDetailsComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '600px',
      height:'640px',
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
