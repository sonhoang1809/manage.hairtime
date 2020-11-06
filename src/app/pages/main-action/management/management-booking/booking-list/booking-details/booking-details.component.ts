import { CurrencyUnit } from './../../../../../../sharings/assets/assets';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingsData } from './../../../../../../sharings/data/bookings_data';
import { GeneralHelperService } from './../../../../../../services/general-helper.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking, BookingView } from './../../../../../../sharings/models/booking';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  CurrencyUnit = CurrencyUnit;
  bookingDetails: Booking = null;
  total: number = 0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private dialogRef: MatDialogRef<BookingDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookingView,
    private dialog: MatDialog, public generalService: GeneralHelperService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    BookingsData.forEach(b => {
      if (b.id == this.data.id) {
        this.bookingDetails = b;
        return;
      }
    });
    this.bookingDetails.serviceBookings.forEach(s => {
      this.total = this.total + s.price;
    });
    if (this.bookingDetails.status == 0) {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    } else if (this.bookingDetails.status == 1) {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['a', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    } else if (this.bookingDetails.status == 2) {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['a', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['a', Validators.required]
      });
    } else if (this.bookingDetails.status == 3) {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['a', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['a', Validators.required]
      });
    }

  }

}
