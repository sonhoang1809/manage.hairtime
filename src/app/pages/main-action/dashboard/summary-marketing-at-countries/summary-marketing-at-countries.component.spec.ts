/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SummaryMarketingAtCountriesComponent } from './summary-marketing-at-countries.component';

describe('SummaryMarketingAtCountriesComponent', () => {
  let component: SummaryMarketingAtCountriesComponent;
  let fixture: ComponentFixture<SummaryMarketingAtCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryMarketingAtCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryMarketingAtCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
