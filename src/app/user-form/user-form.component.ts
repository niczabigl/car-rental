import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user : User;
  
  constructor() { }

  ngOnInit() {
  }

  saveUser(){
    
  }

}
