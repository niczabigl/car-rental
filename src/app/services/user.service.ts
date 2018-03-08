import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  USERS: User[] = [
    new User("Nico", "Zabala", new Date(1986,5,27), "AAA3456789", "Soy yo","C/Falsa 123","Barcelona","08001" ),
    new User("Adri", "Pascual", new Date(1989,6,15), "BBB3456789", "Soy yo","C/Falsa 234","Cuenca","09876" ),
    new User("Xavi", "Balanya", new Date(1990,8,1), "CCC3456789", "Soy yo","C/Falsa 345","PapiolBeach","00000" ),
    new User("Monica", "Filin", new Date(1981,2,20), "DDD3456789", "Soy yo","C/Falsa 456","Bahamas","69696" )
  ];

  constructor() { }

  public getAllUsers(): Observable <User[]> {
    return of(this.USERS);
  }
}
