import { Component, OnInit, Input } from '@angular/core';
import { Car, EnergyType } from '../model/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

@Input() car : Car;

export class CarDetailComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
