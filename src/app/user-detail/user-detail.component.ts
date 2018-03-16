import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { UserService }  from '../services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  @Input() user : User;
  @Output()
  userToForm : EventEmitter<User> = new EventEmitter<User>();
  @Output()
  showUserForm : EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor( userService: UserService) { }
  ngOnInit() {
  }

  editUser(user:User){
    console.log("usuario"+user.id);
    this.userToForm.emit(user);
    this.showUserForm.emit(true);
  }
}
