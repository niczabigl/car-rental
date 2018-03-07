import { Component, OnInit } from '@angular/core';
import { Car, EnergyType } from '../model/car'
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }
  
  ngOnInit() {
    
  }
  getAllCars():void{
    this.carService.getAllCars().subscribe(cars => this.cars = cars);  
  }

  getAllAvailableCars():void{
    this.carService.getAvailableCarsOnly().subscribe(cars => this.cars = cars); 
  }
  
  getEnergyTypeIcon(energy : EnergyType) : string {
    
    var res;

    switch(energy){
      case 1:
        res = 'gas-icon';
        break;
      case 2:
        res = 'diesel-icon';
        break;
      case 3:
        res = 'gasoil-icon';
        break;
      case 4:
        res = 'hybrid-icon';
        break;    
    }
    return res;
    
  } 
}