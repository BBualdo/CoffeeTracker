import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  loading$: Observable<boolean>;

  constructor(private loadingService: LoadingService, private router: Router) {
    this.loading$ = this.loadingService.loading$;
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingService.loadingOn();
    }
    if (event instanceof NavigationEnd) {
      this.loadingService.loadingOff();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loadingService.loadingOff();
    }
    if (event instanceof NavigationError) {
      this.loadingService.loadingOff();
    }
  }
}
