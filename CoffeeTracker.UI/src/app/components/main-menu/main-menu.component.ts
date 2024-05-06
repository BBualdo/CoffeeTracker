import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink, LoadingComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {}
