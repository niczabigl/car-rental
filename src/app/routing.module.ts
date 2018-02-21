import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        component: UserComponent,
    },
    {
        path: 'cars',
        component: CarComponent,
    },
    {
        path: 'rentals',
        component: RentalComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }