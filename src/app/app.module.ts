import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterUsComponent } from './register-us/register-us.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HallsComponent } from './halls/halls.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { SkmHallComponent } from './skm-hall/skm-hall.component';
import { AkmHallComponent } from './akm-hall/akm-hall.component';
import { RkHallComponent } from './rk-hall/rk-hall.component';
import { JpHallComponent } from './jp-hall/jp-hall.component';
import { HttpClientModule } from '@angular/common/http';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { GhHallComponent } from './gh-hall/gh-hall.component';
import { SssHallComponent } from './sss-hall/sss-hall.component';
import { SgHallComponent } from './sg-hall/sg-hall.component';
import { MsmHallComponent } from './msm-hall/msm-hall.component';
import { DkHallComponent } from './dk-hall/dk-hall.component';
import { DrjHallComponent } from './drj-hall/drj-hall.component';
import { EdituserdetailsComponent } from './edituserdetails/edituserdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    RegisterUsComponent,
    HomeComponent,
    AboutusComponent,
    HallsComponent,
    LoginComponent,
    
    SkmHallComponent,
    AkmHallComponent,
    RkHallComponent,
    JpHallComponent,
    BookinghistoryComponent,
    UserdetailsComponent,
    GhHallComponent,
    SssHallComponent,
    SgHallComponent,
    MsmHallComponent,
    DkHallComponent,
    DrjHallComponent,
    EdituserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
