import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatToolbarModule } from '@angular/material/';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout/';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarComponent } from './car/car.component';
import { UserComponent } from './user/user.component';
import { RentalComponent } from './rental/rental.component';
import { CarService } from './services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarComponent,
    UserComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
