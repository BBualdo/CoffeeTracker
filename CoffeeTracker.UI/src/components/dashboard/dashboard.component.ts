import { Component } from '@angular/core';
import { CoffeeLogsComponent } from '../coffee-logs/coffee-logs.component';
import { AddLogComponent } from '../add-log/add-log.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [CoffeeLogsComponent, AddLogComponent],
})
export class DashboardComponent {}
