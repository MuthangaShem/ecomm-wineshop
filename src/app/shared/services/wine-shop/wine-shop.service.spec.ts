/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
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
