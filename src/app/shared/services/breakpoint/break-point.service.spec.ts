/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BreakPointService } from './break-point.service';

describe('Service: BreakPoint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakPointService]
    });
  });

  it('should ...', inject([BreakPointService], (service: BreakPointService) => {
    expect(service).toBeTruthy();
  }));
});
