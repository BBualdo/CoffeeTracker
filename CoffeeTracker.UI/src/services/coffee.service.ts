import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoffeeLog } from '../models/CoffeeLog';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private url = 'https://localhost:7091/api/CoffeeLogs';

  constructor(private http: HttpClient) {}

  getLogs(): Observable<CoffeeLog[]> {
    return this.http.get<CoffeeLog[]>(this.url);
  }
}
