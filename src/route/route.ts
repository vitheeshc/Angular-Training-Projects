import { LoginComponent } from 'src/app/login/login.component';
import { BusDetailsComponent } from 'src/app/bus-details/bus-details.component';
import { Routes } from '@angular/router/src/config';
import { BusBookingComponent } from 'src/app/bus-booking/bus-booking.component';

const myroute:Routes=[
    {path:'',component:LoginComponent},
    {path:'busdetails',component:BusDetailsComponent},
    {path:'BusBooking',component:BusBookingComponent}
];

export const routes=myroute;