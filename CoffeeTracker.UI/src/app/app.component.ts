import { Component } from '@angular/core';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MainMenuComponent, RouterOutlet, LoadingComponent],
})
export class AppComponent {}
