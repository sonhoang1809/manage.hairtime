import { BookingsData } from './../../../../../../../../../sharings/data/bookings_data';
import { Booking } from './../../../../../../../../../sharings/models/booking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-booking-list',
  templateUrl: './store-booking-list.component.html',
  styleUrls: ['./store-booking-list.component.css']
})
export class StoreBookingListComponent implements OnInit {
  bookingsDatas : Booking[] = BookingsData.slice(0,3);
  constructor() { }

  ngOnInit() {
  }

}
