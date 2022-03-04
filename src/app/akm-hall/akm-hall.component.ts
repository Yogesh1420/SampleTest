import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service.service';

@Component({
  selector: 'app-akm-hall',
  templateUrl: './akm-hall.component.html',
  styleUrls: ['./akm-hall.component.css']
})
export class AkmHallComponent implements OnInit {
  bookingForm= new FormGroup({
    hallname:  new FormControl('AKM Party Hall',Validators.required),
    price:  new FormControl('',Validators.required),
    bookingname: new FormControl('',Validators.required),
    fromdate: new FormControl('',Validators.required),
    todate: new FormControl('',Validators.required),
    totalguest: new FormControl('',Validators.required),
    services: new FormControl('',Validators.required)
  })

  offers=[{date:'2022-02-14', offerValue:30}]

  offerValue=30;
  bookingDetails:any=[];

  constructor(private router:Router,private service:BookingService) { }

  ngOnInit(): void {
    this.DateDisable();
    this.bookingForm.patchValue({
      price:40000,
      
    });

    this.service
    .getbookingdetailsFromService()
    .subscribe((data) => (this.bookingDetails = data));
      
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
    let selectedFromDate=this.bookingForm.get('fromdate')?.value;
    let selectedToDate=this.bookingForm.get('todate')?.value;
    console.log(this.bookingDetails); 
    this.bookingDetails.forEach((b: { fromdate: string | number | Date; todate: string | number | Date; }) => {
      let fromDate=new Date(b.fromdate)
      let fromMonth="",fromDt="";
      if(fromDate.getMonth() <=9){
        fromMonth= '0'+( fromDate.getMonth()+1);
      }
      else{
        fromMonth=''+(fromDate.getMonth()+1);
      }
      if(fromDate.getDate() <=9){
        fromDt= '0'+ fromDate.getDate();
      }
      else{
        fromDt=''+(fromDate.getDate());
      }
      let toDate=new Date(b.todate)
      let toMonth="",toDt="";
      if(toDate.getMonth() <=9){
        toMonth= '0'+ (toDate.getMonth()+1);
      }
      else{
        toMonth=''+(toDate.getMonth()+1);
      }

      if(toDate.getDate() <=9){
        toDt= '0'+ toDate.getDate();
      }
      else{
        toDt=''+(toDate.getDate());
      }
      console.log(fromDate.getDate())
      console.log((selectedFromDate),b.fromdate,((fromDate.getFullYear()+"-"+fromMonth+"-"+fromDt)),((toDate.getFullYear()+"-"+toMonth+"-"+toDt)))
      console.log(Date.parse(selectedFromDate),Date.parse((fromDate.getFullYear()+"-"+fromMonth+"-"+fromDt)),Date.parse((toDate.getFullYear()+"-"+toMonth+"-"+toDt)))
     if((Date.parse(selectedFromDate)>=Date.parse((fromDate.getFullYear()+"-"+fromMonth+"-"+fromDt)) && 
        Date.parse(selectedFromDate)<=Date.parse((toDate.getFullYear()+"-"+toMonth+"-"+toDt))) ||
        (Date.parse(selectedToDate)>=Date.parse((fromDate.getFullYear()+"-"+fromMonth+"-"+fromDt)) &&
        Date.parse(selectedToDate)<=Date.parse((toDate.getFullYear()+"-"+toMonth+"-"+toDt)))
        ){
      console.log(true);
     }
     
      
    });
    
    this.offers.map((d)=>{
      if(selectedFromDate===d.date || selectedToDate===d.date){
       let initialValue=this.bookingForm.get('price')?.value;
       this.bookingForm.patchValue({
        price:initialValue*(1-(d.offerValue/100))
        
        
      });
        


      }
      else{
        this.bookingForm.patchValue({
          price:40000,
          
        });
      }
      
    })

  }


  book(){
    console.log('From akm.comp.ts ' + this.bookingForm);
    this.service.Bookhall(this.bookingForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/home']));

  }

 

}
