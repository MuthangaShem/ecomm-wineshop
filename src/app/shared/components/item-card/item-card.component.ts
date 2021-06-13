import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, WineDataModel } from './../../models/wineshop-data.model';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {


  @Input() items!: Observable<WineDataModel[]>;
  @Output() productAdded = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }


  addProduct(item: WineDataModel, bottleQuantity: string, caseQuantity: string) {

    if (Number(bottleQuantity) > 0 || Number(caseQuantity)) {
      const cartObj: CartItem = { item, bottleQuantity: Number(bottleQuantity), caseQuantity: Number(caseQuantity) }
      this.productAdded.emit(cartObj);
      return
    }
    console.error('please add a case or bottle quantity');
  }

}
