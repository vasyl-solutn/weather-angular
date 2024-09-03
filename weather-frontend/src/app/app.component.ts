import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';  // Import the WeatherComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],  // Import standalone components as needed
  template: `<app-weather></app-weather>`,  // Use the standalone component in your template
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
