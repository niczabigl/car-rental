import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car'
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
    this.carService.getAllCars().subscribe(cars => this.cars = cars);
  }

}