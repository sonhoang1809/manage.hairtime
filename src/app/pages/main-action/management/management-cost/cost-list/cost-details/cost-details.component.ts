import { CostTypes } from './../../../../../../sharings/data/costs_data';
import { CostDetails, CostType } from './../../../../../../sharings/models/cost-details';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { AccountDetailsComponent } from '../../../management-account/account-list/account-details/account-details.component';

@Component({
  selector: 'app-cost-details',
  templateUrl: './cost-details.component.html',
  styleUrls: ['./cost-details.component.css']
})
export class CostDetailsComponent implements OnInit {
  public inputFormControl: FormGroup = null;
  costTypes: CostType[] = CostTypes;
  costTypeSelected;
  selectedAvatarFile = null;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(public dialogRef: MatDialogRef<AccountDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CostDetails,
    private dialog: MatDialog, public generalService: GeneralHelperService) { }

  ngOnInit() {
    //this.dialogRef.close();
    if (this.data != null) {
      this.costTypeSelected = this.data.costType.id;
      this.inputFormControl = new FormGroup({
        costDescription: new FormControl(this.data.costDescription, [Validators.required, Validators.maxLength(100)]),
        total: new FormControl(this.data.total, [Validators.required]),
        costTypeId: new FormControl(this.data.costType.id, [Validators.required])
      });
    } else if (this.data == null) {
      this.inputFormControl = new FormGroup({
        costDescription: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        total: new FormControl('', [Validators.required]),
        costTypeId: new FormControl('', [Validators.required])
      });
    }
  }
  onClick(data) {
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

}
