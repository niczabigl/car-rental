import { Component, OnInit } from '@angular/core';
import { Car, EnergyType } from '../model/car';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
