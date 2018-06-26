
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FullfillmentWebRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FullfillmentWebRoutingModule,
  ],
  providers: [
  ],
  exports:[HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

