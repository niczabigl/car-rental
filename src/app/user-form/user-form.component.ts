import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { User } from '../model/user';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroupDirective, NgForm, Validators, NgModel } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../services/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user : User;
  @Input() isNewUser : boolean;
  @Output() 
  showUserForm : EventEmitter<Boolean> = new EventEmitter<Boolean>();



  constructor(private userService :UserService) { }

  ngOnInit() {
    if(this.isNewUser==true){
      this.user = new User(null,null,null,null,null,null,null,null);
    }
  }

  addUser(user : User){
    if(user.name==null||user.lastName==null||user.drivingLicense==null){
      window.alert("Introduce los campos obligatorios");
    }else{
      this.userService.addNewUser(user);
      this.showUserForm.emit(false);
    }
  }

}
