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

  isNewCar : Car;
  isSelectedCar : boolean;
  showCars : boolean;
  showCarForm : boolean; 

  constructor(private carService: CarService) { }
  
  ngOnInit() {
    this.carService.getAllCars().subscribe(cars => this.cars = cars); 
    this.showCars = false;
    this.showCarForm = false;
    this.isSelectedCar = false;
  }

  getAllCars():void {
    if(this.showCars == true){
      this.showCars = false;
      this.isSelectedCar = false;
    }else{
      this.showCars = true;
    }
    if(this.showCarForm == true){
      this.showCarForm = false;
    }
    this.clearWindow();
  }

  addCarsForm() : void {

    if(this.showCarForm == true){
      this.showCarForm = false;
    }else{
      this.showCarForm = true;
    } 
    if (this.showCars == true){
      this.showCars = false;
      this.isSelectedCar = false;
    }
    this.clearWindow();
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
    
  }

  clearWindow():void{
    if (this.showCars == true){
      this.showCarForm = false;
    }
    if (this.showCarForm == true){
      this.showCars = false;
    }
  }

}