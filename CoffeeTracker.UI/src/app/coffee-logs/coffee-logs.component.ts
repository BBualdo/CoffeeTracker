import { Component } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { Observable } from 'rxjs';
import { CoffeeLog } from '../../models/CoffeeLog';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-coffee-logs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './coffee-logs.component.html',
  styleUrl: './coffee-logs.component.css',
})
export class CoffeeLogsComponent {
  coffeeLogs$: Observable<CoffeeLog[]> = this.coffeeService.getLogs();

  constructor(private coffeeService: CoffeeService) {}
}
