import { Component, OnInit } from '@angular/core';
import { BusServiceService } from 'src/app/shared/services/bus-service.service';
import { Router } from '@angular/router';
import { BusBookingComponent } from 'src/app/bus-booking/bus-booking.component';
@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {
    

  constructor(private Bussearch:BusServiceService,private router:Router) { }
  From='';
  To='';
  DateSearch;
BusList=[];
  ngOnInit() {
  }
  onSearch()
  {
    this.Bussearch.BuSearch(this.From,this.To,this.DateSearch)
    this.router.navigate(['BusBooking']);
      
  }
}
