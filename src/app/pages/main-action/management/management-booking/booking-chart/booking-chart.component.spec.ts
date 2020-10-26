/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookingChartComponent } from './booking-chart.component';

describe('BookingChartComponent', () => {
  let component: BookingChartComponent;
  let fixture: ComponentFixture<BookingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
