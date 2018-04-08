import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css']
})
export class PinkComponent implements OnInit {
	name = "pink"
  constructor() { }

  ngOnInit() {
  }
  pink(){
   this.name = "pink";
   return;
  }

}
