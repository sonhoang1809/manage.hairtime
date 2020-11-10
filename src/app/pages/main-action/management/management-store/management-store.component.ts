import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-store',
  templateUrl: './management-store.component.html',
  styleUrls: ['./management-store.component.css']
})
export class ManagementStoreComponent implements OnInit {
  titleComponent: string = 'Management Store';
  constructor() { }

  ngOnInit() {
  }

}
