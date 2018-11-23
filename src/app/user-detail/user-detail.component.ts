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
  @Output()
  showUserDetail : EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output()
  notification : EventEmitter<string> = new EventEmitter<string>();


  constructor( private userService: UserService) { }
  ngOnInit() {
  }

  editUser(user:User){
    this.userToForm.emit(user);
    this.showUserForm.emit(true);
  }

  deleteUser(id : number){
    let userAux = this.userService.getUserById(id);
    this.userService.deleteUser(id);
    this.showUserDetail.emit(false);
    this.notification.emit( userAux.name + " " + userAux.lastName + " Ha sido borrado con éxito.")
  }
}
