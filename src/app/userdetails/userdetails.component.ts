import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdetails } from 'src/Userdetails';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public userdetails = [] as any;

  constructor(private eservice:UserserviceService,private router:Router) { }
  public selectedId  : number=0;

  ngOnInit(): void {
    this.eservice
      .getuserdetailsFromService()
      .subscribe((data) => (this.userdetails = data));
  }

  onDelete(user: Userdetails) {
    this.selectedId=user.userid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.eservice
        .deleteUserdetails(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/userDetails']));
    }
  }
  cLoggedin(){
    return localStorage.getItem('user1')
  }
}
