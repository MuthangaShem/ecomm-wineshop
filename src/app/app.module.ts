import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { FiltersComponent } from './shared/components/filters/filters.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { WineShopService } from './shared/services/wine-shop.service';
import { WineshopComponent } from './wineshop/wineshop.component';



@NgModule({
  declarations: [
    AppComponent,
    WineshopComponent,
    FooterComponent,
    HeaderComponent,
    ItemCardComponent,
    CartComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WineShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
