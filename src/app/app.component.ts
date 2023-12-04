import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendaVideojuegosDAM';

  constructor(private usuarioService: UsuarioService) {}

  //  Creamos un metodo para pintar la infoamcion del usuario en la pantalla
  getUsername(): string | null {
    return this.usuarioService.getUsername();
  }
 
}