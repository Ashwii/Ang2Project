import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {
  name = "green";
  constructor() { }

  ngOnInit() {
  }
  green(){
  this.name = 'green';
  return;
  }

}
