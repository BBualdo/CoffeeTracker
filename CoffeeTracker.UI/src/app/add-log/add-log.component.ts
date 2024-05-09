import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeLog } from '../../models/CoffeeLog';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-log',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-log.component.html',
  styleUrl: './add-log.component.css',
})
export class AddLogComponent {
  addLogForm = new FormGroup({
    date: new FormControl<string>(new Date().toLocaleString()),
    quantity: new FormControl<number>(0),
  });

  constructor(
    private coffeeService: CoffeeService,
    private dataService: DataService,
  ) {}

  onFormSubmit(): void {
    if (
      this.addLogForm.value.date == null ||
      this.addLogForm.value.quantity == null
    ) {
      return;
    }
    const log: CoffeeLog = {
      date: new Date(this.addLogForm.value.date).toISOString(),
      quantity: this.addLogForm.value.quantity,
    };

    this.coffeeService.addLog(log).subscribe({
      next: () => {
        this.dataService.refreshLogs();
        this.addLogForm.reset();
      },
    });
  }
}
