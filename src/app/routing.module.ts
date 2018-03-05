import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { RentalComponent } from './rental/rental.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full' 
    },
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'cars',
        component: CarComponent
    },
    {
        path: 'rentals',
        component: RentalComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }