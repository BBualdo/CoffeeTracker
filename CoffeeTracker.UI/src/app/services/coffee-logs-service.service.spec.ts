import { TestBed } from '@angular/core/testing';

import { CoffeeLogsServiceService } from './coffee-logs-service.service';

describe('CoffeeLogsServiceService', () => {
  let service: CoffeeLogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeLogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
