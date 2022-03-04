import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorage: any;

  constructor() { }

  authUser(user: any){
    let UserArray=[{username:'Vinith',password:'Pass@123'}];
    
    return UserArray.find((p: { username: any; password: any; }) => p.username ===user.username && p.password === user.password);
  }
  
  authUser1(user1: any){
    let UserArray=[{username:'Yogesh',password:'Pass@123'},{username:'Aakash',password:'Pass@123'}];
    
    return UserArray.find((p: { username: any; password: any; }) => p.username ===user1.username && p.password === user1.password);
  }
}
