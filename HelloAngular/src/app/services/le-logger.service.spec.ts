import { TestBed, inject } from '@angular/core/testing';

import { LeLoggerService } from './le-logger.service';

describe('LeLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeLoggerService]
    });
  });

  it('should be created', inject([LeLoggerService], (service: LeLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
