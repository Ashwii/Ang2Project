import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {
  clr = "green";
  constructor() { }

  ngOnInit() {
  }
  green(clr){
  alert (clr);
  }

}
