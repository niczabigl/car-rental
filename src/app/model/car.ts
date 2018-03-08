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
  public energyTypeIconClass: string;

  constructor(maker: string, model: string, energyType: EnergyType, kms: number, pricePerDay: number, maxKmsPerDay: number, depositFee: number) {
    this.maker = maker;
    this.model = model;
    this.energyType = energyType;
    this.kms = kms;
    this.pricePerDay = pricePerDay;
    this.maxKmsPerDay = maxKmsPerDay;
    this.depositFee = depositFee;
    this.isAvailable = true;
    this.setEnergyTypeIconClass();
  }


  public blockCar(){
    this.isAvailable = false;
  }

  public setEnergyTypeIconClass():void{
    switch(this.energyType){
      case 1:
        this.energyTypeIconClass = 'gas-icon';
        break;
      case 2:
        this.energyTypeIconClass = 'diesel-icon';
        break;
      case 3:
        this.energyTypeIconClass = 'gasoil-icon';
        break;
      case 0:
        this.energyTypeIconClass = 'hybrid-icon';
        break;    
    }
  }

  

}