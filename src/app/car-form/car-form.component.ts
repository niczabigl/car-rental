import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car, EnergyType } from '../model/car';
import { MatInputModule } from '@angular/material/input';
import { CarService } from '../services/car.service';
import { FormControl, FormGroupDirective, NgForm, Validators, NgModel, FormsModule , FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  car : FormGroup;

  @Output()
  notification : EventEmitter<string> = new EventEmitter<string>(); 

  @Output()
  addCarEvent : EventEmitter<boolean> = new EventEmitter<boolean>(); 

  @Input() idCounter : number;
  

  constructor(private carService: CarService ) { }

  ngOnInit() {
    this.car = new FormGroup({
      id: new FormControl(''),
      maker: new FormControl('', Validators.required),
      model : new FormControl('', Validators.required),
      energyType : new FormControl('', Validators.required),
      kms : new FormControl(''),
      pricePerDay : new FormControl(''),
      maxKmsPerDay : new FormControl(''),
      depositFee : new FormControl(''),
      observations : new FormControl('')
    });
  }

  public addCar(){
    if(this.car.valid){
      console.log("this.car.value: "+ JSON.stringify(this.car.value));
      this.carService.insert(this.car.value).subscribe(
        (data: any) => {
          this.notification.emit(data.context.entity);
          this.addCarEvent.emit();
        });
    }
  }
}
