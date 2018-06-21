import { Component, OnInit } from '@angular/core';
import { BusServiceService } from 'src/app/shared/services/bus-service.service';

@Component({
  selector: 'app-bus-booking',
  templateUrl: './bus-booking.component.html',
  styleUrls: ['./bus-booking.component.css']
})
export class BusBookingComponent implements OnInit {
BusSearchList=[];
SeatsList=[];
TotalPay=0;
  constructor(private BusList:BusServiceService) { 
this.BusSearchList=this.BusList.buslist;
this.SeatsList=this.BusList.SeatsList;
  }

  ngOnInit() {
  }

}
