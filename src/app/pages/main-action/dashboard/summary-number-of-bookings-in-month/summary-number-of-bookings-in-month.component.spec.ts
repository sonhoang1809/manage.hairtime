/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SummaryNumberOfBookingsInMonthComponent } from './summary-number-of-bookings-in-month.component';

describe('SummaryNumberOfBookingsInMonthComponent', () => {
  let component: SummaryNumberOfBookingsInMonthComponent;
  let fixture: ComponentFixture<SummaryNumberOfBookingsInMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryNumberOfBookingsInMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryNumberOfBookingsInMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
