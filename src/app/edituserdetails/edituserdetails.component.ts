import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-edituserdetails',
  templateUrl: './edituserdetails.component.html',
  styleUrls: ['./edituserdetails.component.css']
})
export class EdituserdetailsComponent implements OnInit {
  public userData: any = {};
  submitted = false;

  public userid: any = this.aroute.snapshot.params['userid'];
  public selectedId: any;

  onSubmit() {
    this.submitted = true;
    alert('userdetails are validated successfully!');
  }

  constructor(private aroute:ActivatedRoute,private service:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    console.log('from ng oninit' + this.userid);
    this.service
      .getUser(this.userid)
      .subscribe((data) => (this.userData = data));
  }

  updateUser() {
    console.log(' User Data ----->' + this.userData);
    this.service
      .updateUser(this.userData)
      .subscribe((data: {}) => this.router.navigate(['/userdetails']));
  }

}
