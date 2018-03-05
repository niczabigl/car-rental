export enum EnergyType {
    Gas = 1 ,
    Diesel = 2,
    Electric = 3,
    Hybrid = 0
}
export class Car {

  public maker: string;
  public model: string;
  public energyType: EnergyType;
  public kms: number;
  public pricePerDay: number;
  public maxKmsPerDay: number;
  public depositFee: number;
  public isAvailable: boolean;
  

  constructor(maker: string, model: string, energyType: EnergyType, kms: number, pricePerDay: number, maxKmsPerDay: number, depositFee: number) {
    this.maker = maker;
    this.model = model;
    this.energyType = energyType;
    this.kms = kms;
    this.pricePerDay = pricePerDay;
    this.maxKmsPerDay = maxKmsPerDay;
    this.depositFee = depositFee;
    this.isAvailable = true;
  }

  public blockCar(){
    this.isAvailable = false;
  }

}