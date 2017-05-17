import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';

declare var gapi :any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  imageURL: string;
  email: string;
  name: string;
  token: string;
  googleLoginButtonId=''
 
  constructor(private auth: AuthService, private zone: NgZone) {
    console.log(this.zone)
   }

ngOnInit(){
console.log( this.auth);
}
  /* Ininitalizing Google Authentication API and getting data from localstorage if logged in
   */
  ngInit() {
    //Set your Google Client ID here
    AppGlobals.GOOGLE_CLIENT_ID = '_8vXBxai95mBXwQA554WQZhL';
    this.getData();
    setTimeout(() => { this.googleAuthenticate() }, 50);
  }


 ngAfterViewInit() {

    // Converts the Google login button stub to an actual button.

    gapi.signin2.render(

      this.googleLoginButtonId,

      {

        "onSuccess": this.onGoogleLoginSuccess,

        "scope": "profile",

        "theme": "dark"

      });

  }


  /**
   * Calling Google Authentication service
   */
  googleAuthenticate() {
    this.auth.authenticateUser((result) => {
      //Using Angular2 Zone dependency to manage the scope of variables
      this.zone.run(() => {
        this.getData();
      });
    });
  }

  /**
   * Getting data from browser's local storage
   */
  getData() {
    this.token = localStorage.getItem('token');
    this.imageURL = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }

  /**
   * Logout user and calls function to clear the localstorage
   */
  logout() {
    let scopeReference = this;
    this.auth.userLogout(function () {
      scopeReference.clearLocalStorage();
    });
  }

  /**
   * Clearing Localstorage of browser
   */
  clearLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }
}
