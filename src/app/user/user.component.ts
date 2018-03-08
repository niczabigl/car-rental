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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getAllUsers() : void{
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  showUserDetail(user: User):void {
    this.selectedUser = user;
    if (this.selectedUser != null){
      this.isSelectedUser = true;
    }
  }

  showUserForm():void{
    this.isNewUser = true;
  }

}
