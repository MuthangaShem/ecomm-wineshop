import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';
import { CartItem } from './../../models/wineshop-data.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {


  @Input()
  cart!: CartItem[];

  @Input()
  minimal: boolean | null = false

  @Output()
  emptyCart: EventEmitter<null> = new EventEmitter<null>();

  get bottles(): number {
    return this.cart.reduce((sum, prod) => sum + prod.bottleQuantity, 0)
  }
  get cases(): number {
    return this.cart.reduce((sum, prod) => sum + prod.bottleQuantity, 0)
  }

  get totalCost(): number {
    const total = this.cart.reduce((sum, prod) => sum + (prod.bottleQuantity * prod.item.cost.bottle + prod.caseQuantity * prod.item.cost.case), 0)
    return Number((Math.round(total * 100) / 100).toFixed(2));
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onEmptyCart() {
    this.emptyCart.emit();
  }

  checkOut() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      maxHeight: '80%',
      width: '100vw',
      data: this.cart

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
