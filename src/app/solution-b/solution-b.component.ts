
import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement { 
  ID,Quantity,Amount ,Total: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ID:1,Quantity:1,Amount:105,Total:200},
  {ID:2,Quantity:2,Amount:100,Total:288},
  {ID:3,Quantity:3,Amount:140,Total:280},
];

@Component({
  selector: 'app-solution-b',
  templateUrl: './solution-b.component.html',
  styleUrls: ['./solution-b.component.css']
})
export class SolutionBComponent implements OnInit {

  ngOnInit() {
  }
  displayedColumns: string[] = ['ID','Quantity','Amount','Total'];
  dataSource = ELEMENT_DATA;
/*
  getTotalCost() {
    return this.transactions.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
  */
 /*
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

 ngOnInit() {
   this.dataSource.paginator = this.paginator;
 }*/
}


