
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { ConfigOption } from 'app/component/service/config';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
  ],
  exports:[HeaderComponent],
  bootstrap: [AppComponent]
})
export class MyAppModule {
  static forRoot(config: ConfigOption = {}): ModuleWithProviders {
    return {
      ngModule: MyAppModule,
      providers: [ConfigOption ],
    };
  }
}

