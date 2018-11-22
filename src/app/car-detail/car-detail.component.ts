import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car, EnergyType } from '../model/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {
  
  @Input() car : Car;
  
  @Output()
  lockCar : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  notification : EventEmitter<string> = new EventEmitter<string>(); 

  constructor(private carService : CarService) { }

  ngOnInit() {
  }

  setLockCar(id : number){
    this.lockCar.emit(id);
  }

  deleteCar(car : Car){
    this.carService.delete(car.id).subscribe(
      (data : any) => this.notification.emit(data)
      // function(data : any){
      //   console.log(JSON.stringify(data.context));
      //   this.notification.emit(data.context);
      //   window.location.pathname="cars";
      // });
      );
  }
}
