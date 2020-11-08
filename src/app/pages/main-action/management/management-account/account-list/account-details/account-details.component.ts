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
  constructor(private dialogRef: MatDialogRef<AccountDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Account,
    private dialog: MatDialog, public generalService: GeneralHelperService) { }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }
  ngOnInit() {
    this.statusAccountSelected = this.data.status;
    if (this.data.role == "ADMIN") {
      this.roleSelected = '1';
    } else if (this.data.role == "OWNER") {
      this.roleSelected = '2';
    } else if (this.data.role == "STAFF") {
      this.roleSelected = '3';
    } else if (this.data.role == "CUSTOMER") {
      this.roleSelected = '4';
    }

    if (this.data != null) {
      this.inputFormControl = new FormGroup({
        customerName: new FormControl(this.data.displayName, [Validators.required, Validators.maxLength(50)]),
        phone: new FormControl(this.data.phone, [Validators.required, Validators.maxLength(100)]),
        email: new FormControl(this.data.email, [Validators.required]),
        role: new FormControl(this.roleSelected, [Validators.required]),
        status: new FormControl(this.data.status, [Validators.required]),
      });
    } else if (this.data == null) {

      this.inputFormControl = new FormGroup({
        customerName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        phone: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        email: new FormControl('', [Validators.required]),
        role: new FormControl('', [Validators.required]),
        status: new FormControl('', [Validators.required]),
      });
    }
  }
  onUpdateProduct(data, id: string) {
    this.dialogRef.close();
    //console.log(data);
    // if (this.inputFormControl.valid) {
    //   this.generalService.openWaitingPopup();
    //   //const dialogWaitingRef = this.dialog.open(WaitingComponent);
    //   // this.categoryService.updateCategory(data, id).subscribe(
    //   //   (response) => {
    //   //     this.generalService.closeWaitingPopup();
    //   //     this.generalService.handleMessage("Success", response.message);
    //   //     this.dialogRef.close(true);
    //   //   },
    //   //   (error) => {
    //   //     this.generalService.closeWaitingPopup();
    //   //     //console.log(error);
    //   //     this.generalService.handleError(error);
    //   //   }
    //   // );
    // }
  }

  onStoreCategory(data) {
    if (this.inputFormControl.valid) {
      this.generalService.openWaitingPopup();

      // this.categoryService.storeNewCategory(data).subscribe(
      //   (response) => {
      //     this.generalService.closeWaitingPopup();
      //     this.generalService.handleMessage("Success", response.message);
      //     this.dialogRef.close(true);
      //   },
      //   (error) => {
      //     this.generalService.closeWaitingPopup();
      //     //console.log(error);
      //     this.generalService.handleError(error);
      //   }
      // );
    }
  }

}
