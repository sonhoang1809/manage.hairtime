/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogReasonDisableAccountComponent } from './dialog-reason-disable-account.component';

describe('DialogReasonDisableAccountComponent', () => {
  let component: DialogReasonDisableAccountComponent;
  let fixture: ComponentFixture<DialogReasonDisableAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogReasonDisableAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReasonDisableAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
