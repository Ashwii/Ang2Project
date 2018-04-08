import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css'],
})
export class BlueComponent implements OnInit {
	name = "Blue";
  constructor() { }

  ngOnInit() {
  }
  blue(){
  this.name = "Blue";
  return;
  }

}
