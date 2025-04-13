import { Component } from '@angular/core';
import { Usuario } from '../users/model/Usuario';
import { UsuarioService } from '../common/service/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {
  usuarios: Usuario[] = [];

    constructor(private usuarioService: UsuarioService) {}
  
    ngOnInit(): void {
      this.usuarioService.getUsuarios().subscribe((data) => {
        this.usuarios = data;
      });
    }
    
}
