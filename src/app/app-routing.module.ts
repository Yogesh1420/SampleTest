import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AkmHallComponent } from './akm-hall/akm-hall.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DkHallComponent } from './dk-hall/dk-hall.component';
import { DrjHallComponent } from './drj-hall/drj-hall.component';
import { EdituserdetailsComponent } from './edituserdetails/edituserdetails.component';
import { GhHallComponent } from './gh-hall/gh-hall.component';
import { HallsComponent } from './halls/halls.component';
import { HomeComponent } from './home/home.component';
import { JpHallComponent } from './jp-hall/jp-hall.component';
import { LoginComponent } from './login/login.component';
import { MsmHallComponent } from './msm-hall/msm-hall.component';
import { RegisterUsComponent } from './register-us/register-us.component';
import { RkHallComponent } from './rk-hall/rk-hall.component';
import { SgHallComponent } from './sg-hall/sg-hall.component';
import { SkmHallComponent } from './skm-hall/skm-hall.component';
import { SssHallComponent } from './sss-hall/sss-hall.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'home' , component: HomeComponent },
  {path: 'aboutus' , component: AboutusComponent},
  {path: 'halls' , component: HallsComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'contactus' , component: ContactUsComponent},
  {path:'skm',component:SkmHallComponent},
  {path:'akm',component:AkmHallComponent},
  {path:'jp',component:JpHallComponent},
  {path:'rk',component:RkHallComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'bookinghistory',component:BookinghistoryComponent},
  {path: 'registerus' , component: RegisterUsComponent},
  {path: 'dk',component:DkHallComponent},
  {path: 'sg',component:SgHallComponent},
  {path: 'msm',component:MsmHallComponent},
  {path: 'sss',component:SssHallComponent},
  {path: 'drj',component:DrjHallComponent},
  {path: 'gh',component:GhHallComponent},
  {path:'edituser/:userid',component:EdituserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
