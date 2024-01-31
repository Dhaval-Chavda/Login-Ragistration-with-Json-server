import { TestBed } from '@angular/core/testing';

import { APiService } from './api.service';

describe('APiService', () => {
  let service: APiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
