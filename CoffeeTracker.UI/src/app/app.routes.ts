import { Routes } from '@angular/router';
import { CoffeeLogsComponent } from './components/coffee-logs/coffee-logs.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'dashboard', component: CoffeeLogsComponent },
];
