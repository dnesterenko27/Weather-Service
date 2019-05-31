import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {WeatherRetrieverService} from './weather-retriever.service';
import {FormControl, Validators} from '@angular/forms';
import {catchError, debounceTime, tap} from 'rxjs/operators';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {of} from 'rxjs';
import {OW_API_ICON_URL} from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  weather$ = this.ws.getCurrentWeather('Kiev');

  city = new FormControl('Kiev', [Validators.required]);

  error: string;

  constructor(@Inject(OW_API_ICON_URL) private iconUrl,
              private ws: WeatherRetrieverService) {
  }

  ngOnInit(): void {
    this.city.valueChanges
      .pipe(
        debounceTime(1000),
        untilDestroyed(this),
      )
      .subscribe(val => this.getWeather(val));
  }

  getWeather(value) {
    this.weather$ = this.ws.getCurrentWeather(value.trim())
      .pipe(
        tap(() => this.error = ''),
        catchError((e) => {
          this.error = e.error.message;
          return of('');
        }),
      );
  }

  ngOnDestroy(): void {
  }
}
