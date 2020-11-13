import { Booking } from './../../../../../../../../../sharings/models/booking';
import { BookingsData } from './../../../../../../../../../sharings/data/bookings_data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-booking-list',
  templateUrl: './account-booking-list.component.html',
  styleUrls: ['./account-booking-list.component.css']
})
export class AccountBookingListComponent implements OnInit {
  bookingsDatas : Booking[] = BookingsData.slice(0,2);
  constructor() { }

  ngOnInit() {
  }

}
