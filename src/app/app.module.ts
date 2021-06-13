import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { FiltersComponent } from './shared/components/filters/filters.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { MatDialogComponent } from './shared/components/mat-dialog/mat-dialog.component';
import { WineShopService } from './shared/services/wine-shop/wine-shop.service';
import { WineshopComponent } from './wineshop/wineshop.component';


@NgModule({
  declarations: [
    AppComponent,
    WineshopComponent,
    FooterComponent,
    HeaderComponent,
    ItemCardComponent,
    CartComponent,
    FiltersComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    LayoutModule
  ],
  providers: [WineShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
