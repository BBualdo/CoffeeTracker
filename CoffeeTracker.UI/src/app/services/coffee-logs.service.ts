import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CoffeeLog } from '../models/CoffeeLog';

@Injectable({
  providedIn: 'root',
})
export class CoffeeLogsService {
  private coffeeLogsUrl = 'https://localhost:7091/api/CoffeeLogs';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCoffeeLogs(): Observable<CoffeeLog[]> {
    return this.http
      .get<CoffeeLog[]>(this.coffeeLogsUrl, this.httpOptions)
      .pipe(catchError(this.handleError<CoffeeLog[]>('getCoffeeLogs', [])));
  }

  getCoffeeLog(id: number): Observable<CoffeeLog> {
    const url = `${this.coffeeLogsUrl}/${id}`;
    return this.http
      .get<CoffeeLog>(url, this.httpOptions)
      .pipe(catchError(this.handleError<CoffeeLog>('getCoffeeLog')));
  }

  addCoffeeLog(coffeeLog: CoffeeLog): Observable<CoffeeLog> {
    return this.http
      .post<CoffeeLog>(this.coffeeLogsUrl, coffeeLog, this.httpOptions)
      .pipe(catchError(this.handleError<CoffeeLog>('addCoffeeLog')));
  }

  updateCoffeeLog(coffeeLog: CoffeeLog): Observable<CoffeeLog> {
    const url = `${this.coffeeLogsUrl}/${coffeeLog.id}`;

    return this.http
      .put<CoffeeLog>(url, coffeeLog, this.httpOptions)
      .pipe(catchError(this.handleError<CoffeeLog>('updateCoffeeLog')));
  }

  deleteCoffeeLog(id: number): Observable<CoffeeLog> {
    const url = `${this.coffeeLogsUrl}/${id}`;

    return this.http
      .delete<CoffeeLog>(url, this.httpOptions)
      .pipe(catchError(this.handleError<CoffeeLog>('deleteCoffeeLog')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
