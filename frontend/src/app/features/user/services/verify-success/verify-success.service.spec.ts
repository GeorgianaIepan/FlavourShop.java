import { TestBed } from '@angular/core/testing';

import { VerifySuccessService } from './verify-success.service';

describe('VerifySuccessService', () => {
  let service: VerifySuccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifySuccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
