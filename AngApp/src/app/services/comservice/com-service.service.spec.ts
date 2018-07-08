import { TestBed, inject } from '@angular/core/testing';

import { ComServiceService } from './com-service.service';

describe('ComServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComServiceService]
    });
  });

  it('should be created', inject([ComServiceService], (service: ComServiceService) => {
    expect(service).toBeTruthy();
  }));
});
