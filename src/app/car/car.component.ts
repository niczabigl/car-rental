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
  avaliableCars : Car[];

  selectedCar : Car;

  isNewCar : boolean;
  isSelectedCar : boolean;
  showCars : boolean;
  showCarForm : boolean; 
  showCarDetail : boolean;

  constructor(private carService: CarService) { }
  
  ngOnInit() {
    this.carService.getAllCars().subscribe(cars => this.cars = cars);
    this.carService.getAvaliableCarsOnly().subscribe(cars => this.avaliableCars = cars);
    this.showCars = false;
    this.showCarForm = false;
    this.isSelectedCar = false;
  }

  getAllCars() : void{

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

  getAllAvaliableCars() : void {
    
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
  
  addCarForm() : void{
    this.isNewCar = true;
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

  carDetail(car: Car):void {
    var auxCar = this.selectedCar;
    this.selectedCar = car;

    if (this.isSelectedCar == true && auxCar == car ){
      this.isSelectedCar = false;
    }else{
      this.isSelectedCar = true;
    }
  }
  
  clearWindow():void{
    if (this.showCars == true){
      this.showCarForm = false;
    }
    if (this.showCarForm == true){
      this.showCars = false;
    }
  }

  showCarFormEvent(b : boolean){
    this.showCarForm = b;
    this.showCars = false;
    this.isSelectedCar = false;
  }

  editCarEvent(car:Car){
    this.isNewCar = false;
    this.selectedCar = car;
  }

  deleteCarEvent(b : boolean){
    this.selectedCar = null;
    this.showCarDetail = b;
    this.isSelectedCar = false;
  }

  lockCarEvent(id : number){
    this.avaliableCars.forEach(function(item,index,object){
      if(item.id==id){
        item.blockCar();
      }
    });
    this.refreshAvaliableCars()
  }

  private refreshAvaliableCars(): void{
    this.avaliableCars.forEach(function(item,index,object){
      if (!item.isAvailable){
        object.splice(index, 1);
      }
    });
  }

}