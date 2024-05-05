import { Component } from '@angular/core';
import { CoffeeLog } from '../../models/CoffeeLog';
import { CoffeeLogsService } from '../../services/coffee-logs.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-coffee-logs',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './coffee-logs.component.html',
  styleUrl: './coffee-logs.component.css',
})
export class CoffeeLogsComponent {
  coffeeLogs: CoffeeLog[] = [];

  constructor(private coffeeLogsService: CoffeeLogsService) {}

  ngOnInit(): void {
    this.coffeeLogsService
      .getCoffeeLogs()
      .subscribe((logs) => (this.coffeeLogs = logs));
  }

  formatDate(coffeeLog: CoffeeLog): string {
    const date = new Date(coffeeLog.date);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
}
