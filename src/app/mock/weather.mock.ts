import {IWeatherObject} from '../models/weather.model';

export const mockWeatherObject: IWeatherObject = {
  coord: {lon: 30.52, lat: 50.43},
  weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
  base: 'stations',
  main: {temp: 15.39, pressure: 1022, humidity: 24, temp_min: 15, temp_max: 16},
  visibility: 10000,
  wind: {speed: 3, deg: 160},
  clouds: {all: 0},
  dt: 1555856967,
  sys: {type: 1, id: 8903, message: 0.0063, country: 'UA', sunrise: 1555815166, sunset: 1555866016},
  id: 703448,
  name: 'Kiev',
  cod: 200,
};
