import { BookingsData } from './../../../../../../../../sharings/data/bookings_data';
import { Booking } from './../../../../../../../../sharings/models/booking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details-appointment-list',
  templateUrl: './account-details-appointment-list.component.html',
  styleUrls: ['./account-details-appointment-list.component.css']
})
export class AccountDetailsAppointmentListComponent implements OnInit {
  bookings: Booking[]= BookingsData.slice(0, 7);
  constructor() { }

  ngOnInit() {
  }

}
