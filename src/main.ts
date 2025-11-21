import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environment/environment';

//Controlamos la ruta del archivo environment.ts
if (!environment.rutaBack) {
  throw new Error('No se identifica la ruta del backend en las variables de entorno.');
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes)]
});
