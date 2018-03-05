export class Rental {
  
  public carId: string;
  public customerId: string;
  public startDate: Date;
  public endDate: Date;
  public numberOfDays: number;
  public carInitialKms: number;
  public fee: number;
  public depositFee: number;
  public status: string;
  public carDamaged: boolean;
  public carFinalKms: number;
  public extraKmsFee: number;
  public finalTotal: number;
  

  constructor() {
  }
}