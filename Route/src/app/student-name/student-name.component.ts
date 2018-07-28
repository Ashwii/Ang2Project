import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-name',
  templateUrl: './student-name.component.html',
  styleUrls: ['./student-name.component.css']
})
export class StudentNameComponent implements OnInit {
  students = [ { id : 1 , name : 'Ram', address : 'No 11 Tiruvallur'},
              { id : 1 , name : 'Ramani', address : 'No 12 Tiruvallur'},
              { id : 1 , name : 'Raju', address : 'No 13 Tiruvallur'},
              { id : 1 , name : 'Raja', address : 'No 14 Tiruvallur'},
              { id : 1 , name : 'Ragul', address : 'No 2 Tiruvallur'},
              { id : 1 , name : 'Ravi', address : 'No 1 Tiruvallur'},
              { id : 1 , name : 'Rachitha', address : 'No 6 Tiruvallur'}
            ]
  constructor() { }

  ngOnInit() {
  }

}
