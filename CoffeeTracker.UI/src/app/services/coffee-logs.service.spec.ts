import { TestBed } from '@angular/core/testing';

import { CoffeeLogsService } from './coffee-logs.service';

describe('CoffeeLogsServiceService', () => {
  let service: CoffeeLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
