import { Component, OnInit } from '@angular/core';
import { Car, EnergyType } from '../model/car';
import { CarService } from '../services/car.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[];

  selectedCar : Car;
  newCar : Car;

  isSelectedCar : boolean;
  isNewCar : boolean;

  constructor(private carService: CarService) { }
  
  ngOnInit() {

  }
  getAllCars():void{
    this.carService.getAllCars().subscribe(cars => this.cars = cars);  
  }

  getAllAvailableCars():void{
    this.carService.getAvailableCarsOnly().subscribe(cars => this.cars = cars); 
  }

  showCarDetail(car: Car):void {
    this.selectedCar = car;
    if (this.selectedCar != null){
      this.isSelectedCar = true;
    }
  }

  addNewCar(car: Car):void{
    this.newCar = car;
  }

}