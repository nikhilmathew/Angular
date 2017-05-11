import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  password = "luna";
  paragraphVisibility = "none";
  myStyle="{display:none}"
  showSecret =false;
  log =[];
  constructor() { }

  ngOnInit() {
  }
toggleParagraph(){
  if(this.paragraphVisibility=="none"){
    this.paragraphVisibility="block"
  }else{
    this.paragraphVisibility="none"
  }
  this.showSecret = !this.showSecret;
  this.log.push(new Date());
  console.log(this.log)
}


getVisibility(){
  return this.paragraphVisibility;
}
}
