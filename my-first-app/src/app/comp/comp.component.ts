import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
allowNewServer = false;
serverCreationStatus =" no Server was created"
serverName="Test Server"
serverCreated =false;
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },3000)
   }

  ngOnInit() {
  }

onCreateServer(){
  this.serverCreationStatus ="Server was Created " + this.serverName
  this.serverCreated = true
}
onUpdateServerName(event :any){
  this.serverName= event.target.value;
}
getColor(){
  return 'green';
}
}
