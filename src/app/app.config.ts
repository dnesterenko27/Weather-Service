import {InjectionToken} from '@angular/core';

export const OW_API_URL = new InjectionToken<string>('api url for service');
export const OW_API_KEY = new InjectionToken<string>('api key for service');
export const OW_API_ICON_URL = new InjectionToken<string>('api url for weather icons');

export const API_URL = '//api.openweathermap.org/data/2.5/weather';
export const API_KEY = '';
export const API_ICON_URL = '//openweathermap.org/img/w/';
