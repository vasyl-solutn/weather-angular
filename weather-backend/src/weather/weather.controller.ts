// src/weather/weather.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeather(@Query('city') city: string) {
    try {
      const response = await this.weatherService.getWeather(city).toPromise();
      return JSON.stringify(response.data, null, 2); // Return the response data as a formatted string
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return 'Error fetching weather data';
    }
  }
}
