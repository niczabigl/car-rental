import { Injectable } from '@angular/core';
import { Car, EnergyType } from '../model/car';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarService {

    // CARS : Car[] = [
    //     new Car("Seat", "Ibiza", EnergyType.Gas, 50, 300, 0.006, 200),
    //     new Car("VW", "Golf", EnergyType.Electric, 70, 300, 0.006, 250),
    //     new Car("Peugeot", "3008", EnergyType.Diesel, 90, 300, 0.006, 300),
    //     new Car("Audi", "A4", EnergyType.Diesel, 120, 300, 0.006, 400),
    //     new Car("Mercedes", "GLE Coupe", EnergyType.Hybrid, 160, 300, 0.006, 600)
    // ];
    numberOfCars : number;
    CARS : Car[];
    availableCars : Car[];

  constructor(private http: HttpClient) { 
  }
  
  public setCARS(cars : Car[]){
      console.log(cars);
      this.CARS = cars;
      this.numberOfCars = cars.length;
  }

  public getAllCars(){
    return this.http.get('http://localhost:8080/cars');
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

  public insert(car : Car){
      return this.http.post('http://localhost:8080/car', car );
  }

  public getIdCounter() : number {
      return this.numberOfCars;
  }

  public delete(id : number){
      return this.http.delete('http://localhost:8080/car/'+id);
  }
}
               