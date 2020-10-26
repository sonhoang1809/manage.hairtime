import { BookingsData } from './../../../../sharings/data/bookings_data';
import { Booking } from './../../../../sharings/models/booking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-bookings',
  templateUrl: './recent-bookings.component.html',
  styleUrls: ['./recent-bookings.component.css']
})
export class RecentBookingsComponent implements OnInit {
  bookings: Booking[];
  constructor() { }

  ngOnInit() {
    if (BookingsData.length > 5) {
      this.bookings = BookingsData.slice(0, 5);
    } else {
      this.bookings = BookingsData;
    }
  }

}
