import { TestBed } from '@angular/core/testing';

import { VisiteeAutoCompleteService } from './visitee-auto-complete.service';

describe('VisiteeAutoCompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisiteeAutoCompleteService = TestBed.get(VisiteeAutoCompleteService);
    expect(service).toBeTruthy();
  });
});
