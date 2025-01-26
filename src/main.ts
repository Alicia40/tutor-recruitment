import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';;
import { provideRouter } from '@angular/router';
import { LandingPageComponent } from './app/landing-page/landing-page.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LandingPageComponent }, // Route par défaut
    ]),
  ],
}).catch((err) => console.error(err));
