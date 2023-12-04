import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../domains/Usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //  Nos creamos los dos usuarios por defecto
  USUARIO_1: Usuario = { username: "david", passwrod: "1234"};
  USUARIO_2: Usuario = { username: "elena", passwrod: "1234"};

  username: string = '';
  password: string = '';

  mensajeError = false;

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  //  Al inicilizar el componente, borramos la info del usuario del servicio
  ngOnInit(): void {
    this.usuarioService.setUsername(null);
  }

  login() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    //  Validamos que la informacion insertada en el login es correcta
    if ((this.username===this.USUARIO_1.username 
        &&  this.password===this.USUARIO_1.passwrod)
      || (this.username===this.USUARIO_2.username 
        &&  this.password===this.USUARIO_2.passwrod)) {

      //  Redirigimos a la pantalla del listado y metemos la informacion del usuario en el servicio
      this.router.navigate(['/principal']);
      this.usuarioService.setUsername(this.username);
    }else{
      //  en caso de no encontrar el usuario, mostramos un mensaje de error
      console.log("Error");
      this.mensajeError = true;
    }
  }
}
