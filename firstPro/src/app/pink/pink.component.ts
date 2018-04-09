import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css']
})
export class PinkComponent implements OnInit {
	clrrr = "pink";
  constructor() { }

  ngOnInit() {
  }
  pink(clrrr){
   alert (clrrr);
  }

}
