/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WineShopService } from './wine-shop.service';

describe('Service: WineShop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WineShopService]
    });
  });

  it('should ...', inject([WineShopService], (service: WineShopService) => {
    expect(service).toBeTruthy();
  }));
});
