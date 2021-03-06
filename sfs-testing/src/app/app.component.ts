import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private as: AppService){
    
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.testFN()
  }
  testFN(){
    
    this.as.testSFX();
  }
  testIfRunning(){
    this.as.testIfRunning();
  }
  tryARr(){
    this.as.tryARoomRequest();
  }
}
