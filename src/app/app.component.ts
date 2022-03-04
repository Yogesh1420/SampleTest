import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MHS';
 /* loggedinUser:string ;*/

  constructor(private router:Router) {
  
   }

  ngOnInit(): void {
    
  }
  history(){
    this.router.navigate(['/bookinghistory'])
  }
  userdetails(){
    this.router.navigate(['/userdetails'])
  }



loggedin(){
  /*this.loggedinUser = localStorage.getItem('user');*/
  return localStorage.getItem('user');
}
onLogout(){
  if
    (window.confirm('Are you sure , you want to logout')){
      localStorage.removeItem('user');
      localStorage.removeItem('user1');
    }
    
  }
  csLoggedin(){
    return localStorage.getItem('user1')
  }
  
}


