import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar RouterModule para las rutas

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule] // Importa RouterModule y AppRoutingModule,
})
export class AppComponent {
  title = 'Mi aplicación Angular';
}