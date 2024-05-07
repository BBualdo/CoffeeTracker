import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddModalService } from '../../services/add-modal.service';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [NgIf],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent implements OnInit {
  isOpen: boolean = false;
  constructor(private addModalService: AddModalService) {}

  ngOnInit(): void {
    this.addModalService.isOpen.subscribe((isOpen) => (this.isOpen = isOpen));
  }

  closeModal(): void {
    this.addModalService.closeModal();
  }
}
