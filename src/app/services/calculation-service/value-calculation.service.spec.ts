import { TestBed } from '@angular/core/testing';

import { ValueCalculationService } from './value-calculation.service';

describe('ValueCalculationService', () => {
  let service: ValueCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
