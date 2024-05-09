import { Component } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { Observable } from 'rxjs';
import { CoffeeLog } from '../../models/CoffeeLog';
import { AsyncPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-coffee-logs',
  standalone: true,
  imports: [AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './coffee-logs.component.html',
  styleUrl: './coffee-logs.component.css',
})
export class CoffeeLogsComponent {
  coffeeLogs$: Observable<CoffeeLog[] | null>;

  constructor(private dataService: DataService) {
    this.coffeeLogs$ = this.dataService.coffeeLogs$;
  }
}
