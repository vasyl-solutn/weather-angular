import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Import provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // Use provideHttpClient here
})
.catch(err => console.error(err));
