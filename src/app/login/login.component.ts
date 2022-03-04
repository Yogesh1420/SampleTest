import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {

  }
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const user=this.authService.authUser(loginForm.value);
    console.log(user);

    if(user){
      localStorage.setItem('user',JSON.stringify(user));
      //console.log('Login Successfully')
      this.router.navigate(['home'])

    }
    else{
      console.log('Login not Successfully')
    }
  }
  onCLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const user1=this.authService.authUser1(loginForm.value);
    console.log(user1);

    if(user1){
      localStorage.setItem('user1',JSON.stringify(user1));
      //console.log('Login Successfully')
      this.router.navigate(['home'])

    }
    else{
      console.log('Login not Successfully')
    }
  }

}
