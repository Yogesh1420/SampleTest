import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/Booking';
import { BookingService } from '../booking.service.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  public bookingdetails = [] as any;

  constructor(private eservice:BookingService,private router:Router) { }
  public selectedId: number = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.eservice
      .getbookingdetailsFromService()
      .subscribe((data) => (this.bookingdetails = data));
      
    }, 10);
   
      console.log(this.bookingdetails);
  }
onDelete(book: Booking) {
    this.selectedId = book.bookingid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.eservice
        .deleteBookingdetails(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/booking']));
    }
  }
}