import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayStocksComponent } from './display-stocks/display-stocks.component';
import { StocksTestService } from './stocks-test.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayStocksComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
  ],
  providers: [StocksTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
