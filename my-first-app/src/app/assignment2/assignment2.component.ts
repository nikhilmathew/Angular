import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  title = "Assignment 2 way Data Binding"
  username = ""
  buttonControl = true;
  constructor() { }

  ngOnInit() {
  }


  checkIfUsernameBlank() {
    if (this.username != "") {
     this.buttonControl = false
    }
  }
  clearInput(){
    this.username=""
    this.buttonControl=true
  }
}
