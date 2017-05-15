import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service'
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
this.userService.setToActive(id);
  }
}
