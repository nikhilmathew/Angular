import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
oddNUmbers: number[] =[]
evenNUmbers: number[] =[]

  onIntervalFired(firedNumber: number){
    console.log(firedNumber);
    if(firedNumber%2==0){
      this.evenNUmbers.push(firedNumber);
    }else{
      this.oddNUmbers.push(firedNumber)
    }
  }
}
