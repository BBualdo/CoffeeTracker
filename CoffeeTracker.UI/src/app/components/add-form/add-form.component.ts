import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddModalService } from '../../services/add-modal.service';
import { CoffeeLogsService } from '../../services/coffee-logs.service';
import { CoffeeLog } from '../../models/CoffeeLog';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [NgIf],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent implements OnInit {
  isOpen: boolean = false;
  constructor(
    private addModalService: AddModalService,
    private coffeeLogsService: CoffeeLogsService
  ) {}

  ngOnInit(): void {
    this.addModalService.isOpen.subscribe((isOpen) => (this.isOpen = isOpen));
  }

  addLog(logDate: string, logQuantity: string) {
    const coffeeLog: CoffeeLog = {
      date: new Date(logDate).toISOString(),
      quantity: Number(logQuantity),
    };
    this.coffeeLogsService.addCoffeeLog(coffeeLog);
  }

  closeModal(): void {
    this.addModalService.closeModal();
  }
}
