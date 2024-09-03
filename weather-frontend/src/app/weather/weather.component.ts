// weather.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';  // Import the service

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import necessary Angular modules
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = 'London';  // Default city

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(
      data => (this.weatherData = data),
      error => console.error('Error fetching weather data:', error)
    );
  }
}
