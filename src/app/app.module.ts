import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatToolbarModule } from '@angular/material/';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout/';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroupDirective, NgForm, Validators, NgModel, FormsModule, FormGroup , ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarComponent } from './car/car.component';
import { UserComponent } from './user/user.component';
import { RentalComponent } from './rental/rental.component';
import { CarService } from './services/car.service';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { UserService } from './services/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CarFormComponent } from './car-form/car-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SnackComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarComponent,
    UserComponent,
    RentalComponent,
    CarDetailComponent,
    UserDetailComponent,
    CarFormComponent,
    UserFormComponent,
    NotificationsComponent,
    SnackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    CarService,
    UserService,
    ErrorStateMatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
