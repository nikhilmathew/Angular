import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent implements OnInit {

  constructor(private router: Router) {
    console.log("in constructor comm")
   }

  ngOnInit() {
    console.log("in init comm")
    setTimeout(() => {
      this.router.navigate(['/game', 'nikhil'])
    }, 3000);
  }

}
