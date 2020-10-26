import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-main-action',
  templateUrl: './header-main-action.component.html',
  styleUrls: ['./header-main-action.component.css']
})
export class HeaderMainActionComponent implements OnInit {
  @Input() titleComponent: string;
  constructor() { }

  ngOnInit() {
  }

}
