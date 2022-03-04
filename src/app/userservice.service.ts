import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Userdetails } from 'src/Userdetails';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url: string = 'http://localhost:8080/MHSSproj/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }
  getuserdetailsFromService(): Observable<Userdetails[]> {
    return this.http
      .get<Userdetails[]>(this.url + '/alluser')
      .pipe(retry(1), catchError(this.handleError));
  }

  createUser(userdetails: any): Observable<Userdetails> {
    console.log(userdetails);
    return this.http
      .post<Userdetails>(
        this.url + '/createUser',
        JSON.stringify(userdetails),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteUserdetails(userid: number): Observable<Userdetails> {
    console.log(userid + ' from deleteUserdetails');
    return this.http
      .delete<Userdetails>(this.url + '/deleteuser/' + userid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  
  updateUser(userdetails: any): Observable<Userdetails> {
    console.log(userdetails);
    return this.http
      .put<Userdetails>(
        this.url + '/updateuser',
        JSON.stringify(userdetails),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  getUser(userid: any): Observable<Userdetails> {
    return this.http
      .get<Userdetails>(this.url + '/getuser/' + userid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
