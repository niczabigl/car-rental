export class User {

  public static idCounter : number = 0;
  public name: string;
  public lastName: string;
  public birthDate: Date;
  public drivingLicense: any;
  public observations: any;
  public address: any;
  public city: any;
  public postalCode: any;
  public id : number;

  constructor(name: string, lastName: string, birthDate: Date, drivingLicense: any,observations: any,address: any,city: any,postalCode: any) {
   this.name = name;
   this.lastName = lastName;
   this.birthDate = birthDate;
   this.drivingLicense = drivingLicense;
   this.observations = observations;
   this.address = address;
   this.city = city;
   this.postalCode = postalCode;
   this.id = User.idCounter;
   User.idCounter++;
  }
}