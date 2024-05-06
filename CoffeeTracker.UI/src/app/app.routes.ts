import { Routes } from '@angular/router';
import { CoffeeLogsComponent } from './components/coffee-logs/coffee-logs.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainMenuComponent },
  { path: 'coffee-logs', component: CoffeeLogsComponent },
];
