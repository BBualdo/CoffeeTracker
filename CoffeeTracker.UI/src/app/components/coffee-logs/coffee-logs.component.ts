import { Component } from '@angular/core';
import { CoffeeLog } from '../../models/CoffeeLog';
import { CoffeeLogsService } from '../../services/coffee-logs.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-coffee-logs',
  standalone: true,
  imports: [NgFor],
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
}
