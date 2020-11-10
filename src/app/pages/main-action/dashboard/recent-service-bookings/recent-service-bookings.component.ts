import { CurrencyUnit } from 'src/app/sharings/assets/assets';
import { CustomerService } from './../../../../sharings/models/store';
import { AllCustomerServices } from './../../../../sharings/data/customer_services_data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-service-bookings',
  templateUrl: './recent-service-bookings.component.html',
  styleUrls: ['./recent-service-bookings.component.css']
})
export class RecentServiceBookingsComponent implements OnInit {
  recentServiceBookings: CustomerService[] = null;
  CurrencyUnit = CurrencyUnit;
  constructor() { }

  ngOnInit() {
    if(AllCustomerServices.length>5){
      this.recentServiceBookings = AllCustomerServices.slice(0,5);
    }else{
      this.recentServiceBookings = AllCustomerServices;
    }
  }

}
