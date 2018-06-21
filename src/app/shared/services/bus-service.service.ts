import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  buslist=[];
  SeatsList=[];
  constructor() {
    this.buslist = [{
      "From":"Trivandrum","To":"Chennai","BusName":"Kallada","BusId":1,"Date":"29/05/2018"
   },{
       "From":"Calicut","To":"Palakkad","BusName":"VolVo","BusId":1,"Date":"09/06/2018"
    },{
       "From":"Chennai","To":"Trichur","BusName":"A1","BusId":1,"Date":"12/06/2018"
    },{
       "From":"Wayanad","To":"Alapuzha","BusName":"AR","BusId":1,"Date":"22/05/2018"
    }
  ]
  this.SeatsList=[{
    "Id":"1", "SeatNo":"1"
  },{
    "Id":"2", "SeatNo":"2"
  },{
    "Id":"3", "SeatNo":"3"
  },{
    "Id":"4", "SeatNo":"4"
  },{
    "Id":"5", "SeatNo":"5"
  }]

   }
BuSearch(From,To,Date)
{
return this.buslist;
}
  
}
