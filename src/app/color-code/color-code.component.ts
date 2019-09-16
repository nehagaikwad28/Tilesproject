import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-code',
  templateUrl: './color-code.component.html',
  styleUrls: ['./color-code.component.css']
})
export class ColorCodeComponent implements OnInit {
  selected = 'option2';

  constructor() { }

  ngOnInit() {
  }

}
