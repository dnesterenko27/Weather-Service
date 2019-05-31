import {TestBed} from '@angular/core/testing';
import {WeatherRetrieverService} from './weather-retriever.service';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {API_ICON_URL, API_KEY, API_URL, OW_API_ICON_URL, OW_API_KEY, OW_API_URL} from './app.config';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {mockWeatherObject} from './mock/weather.mock';

describe('WeatherRetrieverService', () => {
  let service: WeatherRetrieverService;
  let backend: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          MatInputModule,
          HttpClientTestingModule,
        ],
        declarations: [
          AppComponent,
        ],
        providers: [WeatherRetrieverService,
          {provide: OW_API_KEY, useValue: API_KEY},
          {provide: OW_API_URL, useValue: API_URL},
          {provide: OW_API_ICON_URL, useValue: API_ICON_URL}],
      });
      service = TestBed.get(WeatherRetrieverService);
      backend = TestBed.get(HttpTestingController);
    },
  );

  afterEach(() => {
    backend.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve error message', () => {
    const mockWeather = 'error';

    service.getCurrentWeather('Ki')
      .subscribe(data => {
        expect(data).toEqual(mockWeather);
      });

    const request = backend.expectOne(`${API_URL}?appid=${API_KEY}&units=metric&q=Ki`);

    expect(request.request.method).toBe('GET');

    request.flush(mockWeather);
  });

  it('should retrieve weather object from API with input of city name', () => {
    const mockWeather = mockWeatherObject;

    service.getCurrentWeather('Kiev')
      .subscribe(data => {
        expect(data).toEqual(mockWeather);
      });

    const request = backend.expectOne(`${API_URL}?appid=${API_KEY}&units=metric&q=Kiev`);

    expect(request.request.method).toBe('GET');

    request.flush(mockWeather);
  });

  it('should retrieve weather object from API with input of city ID', () => {
    const mockWeather = mockWeatherObject;

    service.getCurrentWeather('703448')
      .subscribe(data => {
        expect(data).toEqual(mockWeather);
      });

    const request = backend.expectOne(`${API_URL}?appid=${API_KEY}&units=metric&id=703448`);

    expect(request.request.method).toBe('GET');

    request.flush(mockWeather);
  });
});

