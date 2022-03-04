import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Booking } from 'src/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private url: string = 'http://localhost:8080/MHSSproj/booking';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  deleteBookingdetails(bookingid: number): Observable<Booking> {
    console.log(bookingid + ' from deleteBookingdetails');
    return this.http
      .delete<Booking>(this.url + '/deletebooking/' + bookingid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  constructor(private http: HttpClient) { }

  getbookingdetailsFromService(): Observable<Booking[]> {
    return this.http
      .get<Booking[]>(this.url + '/bookdetails')
      .pipe(retry(1), catchError(this.handleError));
  }
  
  Bookhall(booking: any): Observable<Booking> {
    console.log(booking);
    return this.http
      .post<Booking>(
        this.url + '/bookhall',
        JSON.stringify(booking),
        this.httpOptions
      )
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

