import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  skm(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['skm'])
    else
       this.router.navigate(['login'])
  }

  akm(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['akm'])
    else
       this.router.navigate(['login'])
  }

  rk(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['rk'])
    else
       this.router.navigate(['login'])
  }
  jp(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['jp'])
    else
       this.router.navigate(['login'])
  }
  dk(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['dk'])
    else
       this.router.navigate(['login'])
  }
  drj(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['drj'])
    else
       this.router.navigate(['login'])
  }
  sss(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['sss'])
    else
       this.router.navigate(['login'])
  }
  gh(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['gh'])
    else
       this.router.navigate(['login'])
  }
  msm(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['msm'])
    else
       this.router.navigate(['login'])
  }
  sg(){
    if(localStorage.getItem('user')||localStorage.getItem('user1'))
    this.router.navigate(['sg'])
    else
       this.router.navigate(['login'])
  }
}
