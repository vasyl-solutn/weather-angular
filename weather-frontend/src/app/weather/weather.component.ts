// weather.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';  // Import the service

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary Angular modules
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weatherData: any;
  city = 'London'; // Default city

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('Weather data:', this.weatherData);  // Log the data to the console
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);  // Log errors to the console
      },
      complete: () => {
        console.log('Weather data retrieval completed');  // Optional: log completion
      }
    });
  }
}
