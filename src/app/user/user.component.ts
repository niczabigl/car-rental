import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[];

  selectedUser : User;

  isSelectedUser : boolean;
  isNewUser : boolean;
  showUsers : boolean;
  showUserForm : boolean;
  showUserDetail : boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
    this.showUsers = false;
    this.showUserForm = false;
    this.isSelectedUser = false;
  }

  getAllUsers() : void{

    if(this.showUsers == true){
      this.showUsers = false;
      this.isSelectedUser = false;
    }else{
      this.showUsers = true;
    }
    if(this.showUserForm == true){
      this.showUserForm = false;
    }
    this.clearWindow();
  }

  addUserForm() : void{
    this.isNewUser = true;
    if(this.showUserForm == true){
      this.showUserForm = false;
    }else{
      this.showUserForm = true;
    } 
    if (this.showUsers == true){
      this.showUsers = false;
      this.isSelectedUser = false;
    }
    this.clearWindow();
  }

  userDetail(user: User):void {
    var auxUser = this.selectedUser;
    this.selectedUser = user;

    if (this.isSelectedUser == true && auxUser == user ){
      this.isSelectedUser = false;
    }else{
      this.isSelectedUser = true;
    }
  }
  
  clearWindow():void{
    if (this.showUsers == true){
      this.showUserForm = false;
    }
    if (this.showUserForm == true){
      this.showUsers = false;
    }
  }

  showUserFormEvent(b : boolean){
    this.showUserForm = b;
    this.showUsers = false;
    this.isSelectedUser = false;
  }

  editUserEvent(user:User){
    this.isNewUser = false;
    this.selectedUser = user;
  }

  deleteUserEvent(b : boolean){
    this.selectedUser = null;
    this.showUserDetail = b;
    this.isSelectedUser = false;
  }
}
