import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeLogsComponent } from './coffee-logs.component';

describe('CoffeeLogsComponent', () => {
  let component: CoffeeLogsComponent;
  let fixture: ComponentFixture<CoffeeLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
