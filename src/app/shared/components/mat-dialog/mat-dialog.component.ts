import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakPointService } from '../../services/breakpoint/break-point.service';
import { CartItem } from './../../models/wineshop-data.model';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.sass']
})
export class MatDialogComponent implements OnInit {

  firstFormGroup!: FormGroup;

  get totalCost(): number {
    const total = this.data.reduce((sum, prod) => sum + (prod.bottleQuantity * prod.item.cost.bottle + prod.caseQuantity * prod.item.cost.case), 0)
    return Number((Math.round(total * 100) / 100).toFixed(2));
  }

  stepperOrientation!: Observable<StepperOrientation>;


  constructor(private _formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    private breakPoint: BreakPointService,
    @Inject(MAT_DIALOG_DATA) public data: CartItem[]) {
  }

  ngOnInit() {
    // full name, estate the delivery is to be made to, phone number, the address
    this.setupShippingForm()
    console.log('data', this.data);
    this.setupBreakPoint()
  }
  setupBreakPoint() {
    this.stepperOrientation = this.breakPoint.breakpoint(800).pipe(map(({ matches }) => matches ? 'horizontal' : 'vertical'));
  }

  setupShippingForm() {
    this.firstFormGroup = this._formBuilder.group({
      fullNames: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      location: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  removeFromCart() {

  }

}
