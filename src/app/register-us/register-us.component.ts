import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';


@Component({
            selector: 'app-register-us',
            templateUrl: './register-us.component.html',
            styleUrls: ['./register-us.component.css']
          })
export class RegisterUsComponent implements OnInit {

  registerForm= new FormGroup({
    
    username: new FormControl('',Validators.required),
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required)

 });

 

  constructor(private router:Router,private service:UserserviceService) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit() {
    alert('User datas are validated successfully!');
  }

  addUser() {
    console.log('From reg.comp.ts ' + this.registerForm);
    this.service.createUser(this.registerForm.getRawValue()).subscribe((data: {}) => this.router.navigate(['/login']));
  }
  
 
}
