import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css']
})
export class PinkComponent implements OnInit {
	clrrr = "pink";
  isVisible = false;
  constructor() { }

  ngOnInit() {
  }
  pink(){
  this.isVisible = true;
   
  }

}
