import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  number:any;

  set(event:any)
  {
    this.number=event;
  }
  constructor() { }

  ngOnInit() {
  }

}
