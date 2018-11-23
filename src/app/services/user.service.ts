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
    new User("Monica", "Filin", new Date(1981,2,20), "DDD3456789", "Soy yo","C/Falsa 456","Bahamas","69696" ),
    new User("Carol", "Maxwel", new Date(1982,3,14), "EEE3456789", "Soy yo","C/Falsa 567","Huelva","98765" ),
    new User("Irene", "Nae", new Date(1979,9,9), "FFF3456789", "Soy yo","C/Falsa 678","Ibiza","11111" ),
    new User("Julio", "Iglesias", new Date(1969,6,9), "GGG3456789", "Lo sabes","C/Falsa 789","Shore","96969" )
  ];

  constructor() { }

  public getAllUsers(): Observable <User[]> {
    return of(this.USERS);
  }

  public addNewUser(user : User): void{
    this.USERS.push(user);
  }
  public editUser(id : number, user : User){
    this.USERS[id] = user;
  }
  public deleteUser(id : number){
    this.USERS.forEach(function(item, index, object) {
      if (item.id === id) {
        object.splice(index, 1);
      }
    });
  }
  public getUserById(id : number) : User {
    let user: User;
    this.USERS.forEach(u => {
      if(u.id == id){
        user = u;
      }
    });
    return user;
  }

}
