import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {

  constructor(private router:Router) {
    console.log("in cons game3")
   }

  ngOnInit() {
    console.log("in init game3")
  }

showcommentary(){
  setTimeout(()=>{
  this.router.navigate(['/com'])
  },3000);
}
}
