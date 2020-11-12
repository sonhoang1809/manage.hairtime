import { Account } from './../../../../../../../../sharings/models/account';
import { AccountUsers, StoreStaffUser } from './../../../../../../../../sharings/data/users_data';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AccountDetailsComponent } from 'src/app/pages/main-action/management/management-account/account-list/account-details/account-details.component';
import { GeneralHelperService } from 'src/app/services/general-helper.service';

@Component({
  selector: 'app-store-staff-list',
  templateUrl: './store-staff-list.component.html',
  styleUrls: ['./store-staff-list.component.css']
})
export class StoreStaffListComponent implements OnInit,AfterViewInit {
  accountUsers: Account[] = StoreStaffUser;
  displayedColumns: string[] = ['No.', 'Img', 'displayName', 'phone', 'role', 'Details'];
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
