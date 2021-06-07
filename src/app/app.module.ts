import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
