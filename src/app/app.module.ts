import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {routes } from '../route/route';
import { BusBookingComponent } from './bus-booking/bus-booking.component'

@NgModule({
  declarations: [
    AppComponent,
    BusDetailsComponent,
    LoginComponent,
    BusBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
