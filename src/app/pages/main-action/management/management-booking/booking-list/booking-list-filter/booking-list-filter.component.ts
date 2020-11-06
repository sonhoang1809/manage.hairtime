import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-booking-list-filter',
  templateUrl: './booking-list-filter.component.html',
  styleUrls: ['./booking-list-filter.component.css']
})
export class BookingListFilterComponent implements OnInit {
  @Output() customerName: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onChangeCustomerName(data) {
    //this.categoryName.emit(data.target.value);
  }

}
