import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from "@angular/cdk/keycodes";
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-dialog-reason-disable-account',
  templateUrl: './dialog-reason-disable-account.component.html',
  styleUrls: ['./dialog-reason-disable-account.component.css']
})
export class DialogReasonDisableAccountComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  reasonCtrl = new FormControl();
  filteredReasons: Observable<string[]>;
  selectedReasons: string[] = [];
  allReasons: string[] = ['Spam', 'Usually make appointment but not come','Bad behavior'];
  @ViewChild('reasonInput') reasonInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredReasons = this.reasonCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allReasons.slice()));
  }

  ngOnInit() {
  }

  insertToListChip(value) {
    if ((value || '').trim() && this.selectedReasons.find(s => s == value) == null) {
      this.selectedReasons.push(value.trim());
    }
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    this.insertToListChip(value);
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.reasonCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedReasons.indexOf(fruit);
    if (index >= 0) {
      this.selectedReasons.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.insertToListChip(event.option.viewValue);
    this.reasonInput.nativeElement.value = '';
    this.reasonCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allReasons.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
