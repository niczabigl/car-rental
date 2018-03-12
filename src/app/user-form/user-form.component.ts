import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  @Input() name: string;
  @Input() lastName: string;
  @Input() birthDate: Date;
  @Input() drivingLicense: any;
  @Input() observations: any;
  @Input() address: any;
  @Input() city: any;
  @Input() postalCode: any;
  @Input() id : number;

  constructor(private userService :UserService) { }

  ngOnInit() {
  }

  addUser(){
    var user = $("#name").value;
    console.log(user + this.user);
    // let user = new User(
    //   $("#name").text,
    //   $("#lastName").text, 
    //   $("#birthDate").text, 
    //   $("#drivingLicense").text, 
    //   $("#observations").text,
    //   $("#address").text,
    //   $("#city").text,
    //   $("#postalCode").text
    // );
    this.userService.addNewUser(user);
  }

}
