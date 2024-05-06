import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyLogsComponent } from './empty-logs.component';

describe('EmptyLogsComponent', () => {
  let component: EmptyLogsComponent;
  let fixture: ComponentFixture<EmptyLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
