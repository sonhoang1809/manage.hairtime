import { AccountUsers } from './../../../../../../sharings/data/users_data';
import { ActivatedRoute } from '@angular/router';
import { DialogReasonDisableAccountComponent } from './dialog-reason-disable-account/dialog-reason-disable-account.component';
import { StatusAccounts } from './../../../../../../sharings/data/status_account_data';
import { Roles, AdminRole } from './../../../../../../sharings/data/roles_data';
import { Account, Role, StatusAccount } from './../../../../../../sharings/models/account';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { GeneralHelperService } from 'src/app/services/general-helper.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  accountDetails: Account = null;
  public inputFormControl: FormGroup = null;
  roles: Role[] = Roles;
  statusAccounts: StatusAccount[] = StatusAccounts;
  roleSelected = null;
  statusAccountSelected = null;
  selectedAvatarFile = null;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(
    private dialog: MatDialog, public generalService: GeneralHelperService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var accountId = params.get('accountId');
      this.accountDetails = AccountUsers.find(s => s.id.toString() == accountId);
    });
    // this.statusAccountSelected = this.data.status;
    // if (this.data.role == "ADMIN") {
    //   this.roleSelected = '1';
    // } else if (this.data.role == "OWNER") {
    //   this.roleSelected = '2';
    // } else if (this.data.role == "STAFF") {
    //   this.roleSelected = '3';
    // } else if (this.data.role == "CUSTOMER") {
    //   this.roleSelected = '4';
    // }

    // if (this.data != null) {
    //   this.inputFormControl = new FormGroup({
    //     customerName: new FormControl(this.data.displayName, [Validators.required, Validators.maxLength(50)]),
    //     phone: new FormControl(this.data.phone, [Validators.required, Validators.maxLength(100)]),
    //     email: new FormControl(this.data.email, [Validators.required]),
    //     role: new FormControl(this.roleSelected, [Validators.required]),
    //     status: new FormControl(this.data.status, [Validators.required]),
    //   });
    // } else if (this.data == null) {

    //   this.inputFormControl = new FormGroup({
    //     customerName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    //     phone: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    //     email: new FormControl('', [Validators.required]),
    //     role: new FormControl('', [Validators.required]),
    //     status: new FormControl('', [Validators.required]),
    //   });
    // }
  }

  onChangeStatusAccount(data) {
    console.log(data.value);
    if (data.value == 2) {
      this.dialog.open<DialogReasonDisableAccountComponent>(DialogReasonDisableAccountComponent, {
        panelClass: 'myapp-no-padding-dialog',
        width: '300px',
        height: '300px',
        //position: { top: '70px' },
        data: data
      });
    }
  }
}
