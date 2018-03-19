import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car, EnergyType } from '../model/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {
  
  @Input() car : Car;
  
  @Output()
  lockCar : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setLockCar(id : number){
    this.lockCar.emit(id);
  }

}
