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
  showAvaliableCars: boolean;
  showCarForm : boolean; 
  showCarDetail : boolean;

  constructor(private carService: CarService) { }
  
  ngOnInit() {
    this.carService.getAllCars().subscribe((data : Car[]) =>
    function(data){
      this.cars = data;
      this.carService.setCARS(data);
    //this.carService.getAvaliableCarsOnly().subscribe(avaliableCars => this.avaliableCars = avaliableCars);
    });
    this.clearWindow();
  }

  showAllCars() : void{
    this.clearWindow();
    this.showCars = true;
  }

  showAllAvaliableCars() : void {
    this.clearWindow();
    this.showAvaliableCars = true;
  }
  
  addCarForm() : void{
    this.clearWindow();
    this.isNewCar = true;
    this.showCarForm = true;    
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
    this.showCarForm = false;
    this.showCars = false;
    this.showAvaliableCars = false;
    this.showCarDetail = false;
    this.isSelectedCar = false;
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

  notificationEvent(message : any){
    console.log(message.context.entity);
  }

  private refreshAvaliableCars(): void{
    this.avaliableCars.forEach(function(item,index,object){
      if (!item.isAvailable){
        object.splice(index, 1);
      }
    });
  }

}