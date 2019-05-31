import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {WeatherRetrieverService} from './weather-retriever.service';
import {API_ICON_URL, API_KEY, API_URL, OW_API_ICON_URL, OW_API_KEY, OW_API_URL} from './app.config';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
      ],
      declarations: [AppComponent],
      providers: [WeatherRetrieverService,
        {provide: OW_API_KEY, useValue: API_KEY},
        {provide: OW_API_URL, useValue: API_URL},
        {provide: OW_API_ICON_URL, useValue: API_ICON_URL}],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
