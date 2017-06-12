import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  inputUsername = 'Anonymous';
  errmsg: string = ''
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.sfsService.initializeSmartFoxConnection()
  }
  proceedToGameplay() {
    if (this.inputUsername == '') {
      this.errmsg = 'please enter a valid username'
    } else {
      this.errmsg = ''
      this.router.navigate(['/game', this.inputUsername])
    }
  }
}

