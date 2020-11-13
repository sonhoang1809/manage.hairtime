import { CurrencyUnit } from './../../../../../../../../sharings/assets/assets';
import { Component, OnInit } from '@angular/core';
import { BookingsData } from 'src/app/sharings/data/bookings_data';
import { Booking } from 'src/app/sharings/models/booking';

@Component({
  selector: 'app-store-appointment-list',
  templateUrl: './store-appointment-list.component.html',
  styleUrls: ['./store-appointment-list.component.css']
})
export class StoreAppointmentListComponent implements OnInit {
  bookings: Booking[]= BookingsData.slice(0, 12);
  CurrencyUnit = CurrencyUnit;
  constructor() { }

  ngOnInit() {
  }

}
