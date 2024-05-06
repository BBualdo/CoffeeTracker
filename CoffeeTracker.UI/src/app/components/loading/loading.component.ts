import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {}
