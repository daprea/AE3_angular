import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Videojuego } from '../domains/videojuego';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

    //  Nos declaramos el listado de videojuegos
  listaJuegos: Videojuego[] = [
    { id: 1, titulo: 'Metal Gear Solid' , compania : 'Konami', valoracion: 10, imagen: "assets/img/mgs.png", descripcion:""},
    { id: 2, titulo: 'Tekken 3' , compania : 'Namco', valoracion: 9, imagen: "assets/img/tekken.png", descripcion:""},
    { id: 3, titulo: 'GTA San Andreas' , compania : 'Rockstar', valoracion: 8, imagen: "assets/img/gta.png", descripcion:""},
    { id: 4, titulo: 'Final Fantasy X' , compania : 'Square Enix', valoracion: 7.5, imagen: "assets/img/ffx.png", descripcion:""},
    { id: 5, titulo: 'Devil May Cry' , compania : 'Capcom', valoracion: 7, imagen: "assets/img/dmc.png", descripcion:""}
  ];

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  //  Redirigmos a la pantalla de detalle pasando el ID del videjuego 
  //  selecionado por la URL
  detalle(id: number | undefined){
    console.log("id: " + id);
    this.router.navigate(['/detalle', id]);
  }
}
