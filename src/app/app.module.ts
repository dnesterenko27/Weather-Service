import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherRetrieverService} from './weather-retriever.service';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {API_ICON_URL, API_KEY, API_URL, OW_API_ICON_URL, OW_API_KEY, OW_API_URL} from './app.config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [WeatherRetrieverService,
    {provide: OW_API_KEY, useValue: API_KEY},
    {provide: OW_API_URL, useValue: API_URL},
    {provide: OW_API_ICON_URL, useValue: API_ICON_URL}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
