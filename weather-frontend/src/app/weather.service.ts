import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Keeps the service available app-wide
})
export class WeatherService {
  private apiUrl = 'http://localhost:3000/weather';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getWeather(city: string, unit: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?city=${city}&units=${unit}`);
  }
}
