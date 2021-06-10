import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WineDataModel } from '../shared/models/wineshop-data.model';
import { WineShopService } from '../shared/services/wine-shop.service';
import { CartItem } from './../shared/models/wineshop-data.model';

@Component({
  selector: 'app-wineshop',
  templateUrl: './wineshop.component.html',
  styleUrls: ['./wineshop.component.sass']
})
export class WineshopComponent implements OnInit {

  $wineshopData!: Observable<WineDataModel[]>;
  cart: CartItem[] = [];
  constructor(private wineshop: WineShopService) { }

  ngOnInit() {
    this.fetchWineData()
  }

  fetchWineData() {
    this.$wineshopData = this.wineshop.wineShopData()
    // .subscribe(data => console.log('data', data));
  }

  addToCart($event: CartItem) {
    this.cart.push($event);
    console.log('cart', this.cart);
  }

}
