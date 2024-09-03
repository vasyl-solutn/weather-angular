import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class WeatherService {
  private readonly apiKey = process.env.OPENWEATHERMAP_API_KEY;
  private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private httpService: HttpService) {}

  getWeather(city: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}`,
    );
  }
}
