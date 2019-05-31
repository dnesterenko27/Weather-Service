import {Inject, Injectable, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OW_API_KEY, OW_API_URL} from './app.config';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {IWeatherObject} from './models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherRetrieverService implements OnDestroy {

  constructor(@Inject(OW_API_URL) private apiUrl,
              @Inject(OW_API_KEY) private apiKey,
              private http: HttpClient) {
  }

  /**
   * Fetches data object for the city
   * @param value - The name of the city(string) or its ID(number).
   * the method itself defines the type of argument and sets proper query params
   * then fetches data from OpenWeather API and returns them asynchronously
   */
  getCurrentWeather(value: string): Observable<IWeatherObject | string> {
    const options = {
      params: {
        appid: this.apiKey,
        units: 'metric',
      },
    };

    Object.defineProperty(options.params,
      (isNaN(parseInt(value, 10))) ? 'q' : 'id', {value, enumerable: true});

    return this.http.get<IWeatherObject | string>(this.apiUrl, options)
      .pipe(
        untilDestroyed(this),
      );
  }

  ngOnDestroy(): void {
  }
}
