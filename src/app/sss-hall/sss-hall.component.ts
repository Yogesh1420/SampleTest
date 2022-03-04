import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service.service';

@Component({
  selector: 'app-sss-hall',
  templateUrl: './sss-hall.component.html',
  styleUrls: ['./sss-hall.component.css']
})
export class SssHallComponent implements OnInit {
  bookingForm= new FormGroup({
    hallname:  new FormControl('SSS Conference Hall',Validators.required),
    price:  new FormControl('',Validators.required),
    bookingname: new FormControl('',Validators.required),
    fromdate: new FormControl('',Validators.required),
    todate: new FormControl('',Validators.required),
    totalguest: new FormControl('',Validators.required),
    services: new FormControl('',Validators.required)
  })

  offers=[{date:'2022-02-14', offerValue:30}]

  offerValue=30;

  constructor(private router:Router,private service:BookingService) { }

  ngOnInit(): void {
    this.DateDisable();
    this.bookingForm.patchValue({
      price:20000,
      
    });
    
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

  checkOffer(e:Event){
    let selectedDate=this.bookingForm.get('fromdate')?.value;
    this.offers.map((d)=>{
      if(selectedDate===d.date){
       let initialValue=this.bookingForm.get('price')?.value;
       this.bookingForm.patchValue({
        price:initialValue*(1-(d.offerValue/100))
        
      });
        


      }
      else{
        this.bookingForm.patchValue({
          price:20000,
          
        });
      }
      
    })

  }


  book(){
    console.log('From sss.comp.ts ' + this.bookingForm);
    this.service.Bookhall(this.bookingForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/home']));

  }

 

}

