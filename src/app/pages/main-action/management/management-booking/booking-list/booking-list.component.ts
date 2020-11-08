import { VerifyActionComponent } from './../../../../../sharings/components/verify-action/verify-action.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingsData } from './../../../../../sharings/data/bookings_data';
import { MatDialog } from '@angular/material/dialog';
import { GeneralHelperService } from './../../../../../services/general-helper.service';
import { PageInfo } from './../../../../../sharings/models/page-info';
import { Booking, BookingView } from './../../../../../sharings/models/booking';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit,AfterViewInit  {
  bookingViews: BookingView[] = [];
  displayedColumns: string[] = ['No.', 'Img', 'store', 'bookingAt', 'customer', 'status', 'Details'];
  dataSource: MatTableDataSource<BookingView>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialog,
    public generalHelper: GeneralHelperService) {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    BookingsData.forEach(b=>{
      this.bookingViews.push(
        {
          id: b.id,
          bookingAt: b.bookingAt,
          customer: b.customer.displayName,
          status: b.status,
          store: b.store.name,
          storeImgUrl: b.store.brand.iconUrl,
          totalPrice: b.totalPrice,
          useServiceAt: b.useServiceAt
        }
      )
    });
    this.dataSource = new MatTableDataSource<BookingView>(this.bookingViews);
  }

  searchByCustomerName(search: string) {
    //this.searchCostRequest.search = search;
    //this.searchCategoryList();
  }
  viewDetailsBooking(booking: Booking): void {
    const dialogRef = this.dialog.open<BookingDetailsComponent>(BookingDetailsComponent, {
      //panelClass: 'myapp-no-padding-dialog',
      width: '850px',
      position: { top: '70px' },
      data: booking
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        //console.log(result);
        // if (result == true) {
        //   this.searchOrderList();
        // }
      }
    });
  }

}
