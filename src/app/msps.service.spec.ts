import { TestBed } from '@angular/core/testing';

import { MspsService } from './msps.service';

describe('MspsService', () => {
  let service: MspsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MspsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
