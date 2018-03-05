import { Injectable } from '@angular/core';
import { Car, EnergyType } from '../model/car';

@Injectable()

export class CarService {

    CARS: Car[] = [
        new Car("Seat", "Ibiza", EnergyType.Gas, 50, 300, 0.006, 200),
        new Car("VW", "Golf", EnergyType.Electric, 70, 300, 0.006, 250),
        new Car("Peugeot", "3008", EnergyType.Diesel, 90, 300, 0.006, 300),
        new Car("Audi", "A4", EnergyType.Diesel, 120, 300, 0.006, 400),
        new Car("Mercedes", "GLE Coupe", EnergyType.Hybrid, 160, 300, 0.006, 600)
    ];

  constructor() { 
      
  }

  public getAllCars(){
      return this.CARS;
  }

  public getAvailableCarsOnly(){
      var availableCars = new Array<Car>();
      for(let car of this.CARS ){      
          if (car.isAvailable){
              availableCars.push(car);
          }
      }
      return availableCars;
  }

}
               