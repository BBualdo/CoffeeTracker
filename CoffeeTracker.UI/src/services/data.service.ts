import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoffeeLog } from '../models/CoffeeLog';
import { CoffeeService } from './coffee.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  coffeeLogsSubject = new BehaviorSubject<CoffeeLog[] | null>(null);
  coffeeLogs$: Observable<CoffeeLog[] | null> =
    this.coffeeLogsSubject.asObservable();

  constructor(private coffeeService: CoffeeService) {
    this.refreshLogs();
  }

  refreshLogs() {
    this.coffeeService.getLogs().subscribe((logs) => {
      this.coffeeLogsSubject.next(logs);
    });
  }
}
