import { TestBed } from '@angular/core/testing';

import { RowCountService } from './row-count.service';

describe('RowCountService', () => {
  let service: RowCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RowCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
