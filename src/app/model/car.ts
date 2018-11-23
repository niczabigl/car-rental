export enum EnergyType {
    Gas = "GASOLINA" ,
    Diesel = "DIESEL",
    Electric = "ELECTRICO",
    Hybrid = "HIBRIDO"
}
export class Car {

  public static idCounter : number = 0;
  public id : number;
  public maker: string;
  public model: string;
  public energyType: EnergyType;
  public kms: number;
  public pricePerDay: number;
  public maxKmsPerDay: number;
  public depositFee: number;
  public isAvailable: boolean;
  public observations : string
  public energyTypeIconClass: string;

  constructor(maker: string, model: string, energyType: EnergyType, kms: number, pricePerDay: number, maxKmsPerDay: number, depositFee: number, observations : string) {
    this.maker = maker;
    this.model = model;
    this.energyType = energyType;
    this.kms = kms;
    this.pricePerDay = pricePerDay;
    this.maxKmsPerDay = maxKmsPerDay;
    this.depositFee = depositFee;
    this.isAvailable = true;
    this.observations = observations;
    this.setEnergyTypeIconClass();
    this.id = Car.idCounter;
    Car.idCounter++;
  }

  public blockCar(){
    this.isAvailable = false;
  }

  public setEnergyTypeIconClass():void{
    switch(this.energyType){
      case "GASOLINA":
        this.energyTypeIconClass = 'gas-icon';
        break;
      case "DIESEL":
        this.energyTypeIconClass = 'diesel-icon';
        break;
      case "ELECTRICO":
        this.energyTypeIconClass = 'gasoil-icon';
        break;
      case "HIBRIDO":
        this.energyTypeIconClass = 'hybrid-icon';
        break;    
    }
  }

  

}