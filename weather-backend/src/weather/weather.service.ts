import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'YOUR_API_KEY';
  private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private httpService: HttpService) {}

  getWeather(city: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
  }
}
