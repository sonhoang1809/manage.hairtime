/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForgotPasswordInputVerifyCodeComponent } from './forgot-password-input-verify-code.component';

describe('ForgotPasswordInputVerifyCodeComponent', () => {
  let component: ForgotPasswordInputVerifyCodeComponent;
  let fixture: ComponentFixture<ForgotPasswordInputVerifyCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordInputVerifyCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordInputVerifyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
