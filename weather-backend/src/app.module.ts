// src/app.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [HttpModule, WeatherModule],
})
export class AppModule {}
