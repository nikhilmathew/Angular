import { Component, OnInit, NgZone } from '@angular/core';
import  { AuthService } from '../Services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
sub :any;
user :any;
constructor ( public _auth: AuthService) {
  
}

signIn(provider){
  this.sub = this._auth.login(provider).subscribe(
    (data)=> {
      console.log(data);
      this.user=data;
    }
  )
}

logout(){
    this._auth.logout().subscribe(
      (data)=>{//return a boolean value.
        console.log(data);
        this.user=""

    } 
    )
  }
 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
 }
 

}