import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service.service';


@Component({
  selector: 'app-skm-hall',
  templateUrl: './skm-hall.component.html',
  styleUrls: ['./skm-hall.component.css']
})
export class SkmHallComponent implements OnInit {
  bookingForm= new FormGroup({
    hallname:  new FormControl('SKM-Hall',Validators.required),
    price:  new FormControl('',Validators.required),
    bookingname: new FormControl('',Validators.required),
    fromdate: new FormControl('',Validators.required),
    todate: new FormControl('',Validators.required),
    totalguest: new FormControl('',Validators.required),
    services: new FormControl('',Validators.required)
  })
  
    
  

  constructor(private router:Router,private service:BookingService) { }

  ngOnInit(): void {
   this.DateDisable(); 
  }
  minDate:any;

  DateDisable(){
    var date:any=new Date();
    var todayDate:any = date.getDate();
    var month:any = date.getMonth()+1;
    var year:any = date.getFullYear();

    if(todayDate <10){
      todayDate= '0'+ todayDate;
    }
    if(month<10){
      month='0'+month;
    }
    this.minDate = year + "-" + month + "-"+ todayDate;
    console.log(this.minDate);

  }

  onSubmit() {
    console.warn(this.bookingForm.value);
    alert("Booked Successfully")
  }

  book(){
    console.log('From skm.comp.ts ' + this.bookingForm);
    this.service.Bookhall(this.bookingForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/home']));

  }

}
