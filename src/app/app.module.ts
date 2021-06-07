import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './shared/cart/cart.component';
import { FiltersComponent } from './shared/filters/filters.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ItemCardComponent } from './shared/item-card/item-card.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
