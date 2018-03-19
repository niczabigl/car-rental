import { Injectable } from '@angular/core';
import { Car, EnergyType } from '../model/car';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CarService {

    CARS : Car[] = [
        new Car("Seat", "Ibiza", EnergyType.Gas, 50, 300, 0.006, 200),
        new Car("VW", "Golf", EnergyType.Electric, 70, 300, 0.006, 250),
        new Car("Peugeot", "3008", EnergyType.Diesel, 90, 300, 0.006, 300),
        new Car("Audi", "A4", EnergyType.Diesel, 120, 300, 0.006, 400),
        new Car("Mercedes", "GLE Coupe", EnergyType.Hybrid, 160, 300, 0.006, 600)
    ];

    availableCars : Car[];

  constructor() { 
  }
  
  public getAllCars() : Observable <Car[]> {
      return of(this.CARS);
  }

  public getAvaliableCarsOnly() : Observable<Car[]>{
      var aux = new Array<Car>();
      for(let car of this.CARS ){      
          if (car.isAvailable){
              aux.push(car);
          }
      }
      this.availableCars = aux;
      return of(this.availableCars);
  }
}
               