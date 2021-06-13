import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WineDataModel } from '../shared/models/wineshop-data.model';
import { BreakPointService } from '../shared/services/breakpoint/break-point.service';
import { WineShopService } from '../shared/services/wine-shop/wine-shop.service';
import { CartItem } from './../shared/models/wineshop-data.model';

@Component({
  selector: 'app-wineshop',
  templateUrl: './wineshop.component.html',
  styleUrls: ['./wineshop.component.sass']
})
export class WineshopComponent implements OnInit {

  absoluteBreakPoint!: Observable<boolean>;

  $wineshopData!: Observable<WineDataModel[]>;
  cart: CartItem[] = [];
  constructor(private wineshop: WineShopService,
    private breakPoint: BreakPointService,
  ) { }

  ngOnInit() {
    this.fetchWineData();
    this.setupBreakPoint();
  }

  setupBreakPoint() {
    this.absoluteBreakPoint = this.breakPoint.breakpoint(1140).pipe(
      map(({ matches }) => matches ? true : false,
      ))
  }

  fetchWineData() {
    this.$wineshopData = this.wineshop.wineShopData()
  }

  addToCart(item: CartItem) {

    const indexOfItem = this.cart.findIndex(cartItem => cartItem.item.name === item.item.name);
    console.log('index', indexOfItem);
    if (indexOfItem > -1) {
      this.cart[indexOfItem].bottleQuantity += item.bottleQuantity;
      this.cart[indexOfItem].caseQuantity += item.caseQuantity;
    } else {

      this.cart.push(item);
    }
    console.log('cart', this.cart);

  }

  isInCart(item: CartItem): boolean {
    return !!(this.cart.findIndex(cartItem => cartItem.item.name === item.item.name));
  }

  emptyCart() {
    console.log('emptied',);
    this.cart = []
  }

}
