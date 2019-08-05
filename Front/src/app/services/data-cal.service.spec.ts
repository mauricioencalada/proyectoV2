import { TestBed } from '@angular/core/testing';

import { DataCalService } from './data-cal.service';

describe('DataCalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCalService = TestBed.get(DataCalService);
    expect(service).toBeTruthy();
  });
});
