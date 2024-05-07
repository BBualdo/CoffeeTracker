import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen: Observable<boolean> = this.isOpenSubject;

  openModal(): void {
    this.isOpenSubject.next(true);
  }

  closeModal(): void {
    this.isOpenSubject.next(false);
  }
}
