import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WineShopService } from '../../services/wine-shop.service';
import { WineDataModel } from './../../models/wineshop-data.model';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {


  $wineshopData!: Observable<WineDataModel[]>;

  constructor(private wineshop: WineShopService) { }

  ngOnInit() {
    this.fetchWineData()
  }

  fetchWineData() {
    this.$wineshopData = this.wineshop.wineShopData()
    // .subscribe(data => console.log('data', data));
  }
}
