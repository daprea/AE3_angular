import { Component, Input, OnInit } from '@angular/core';
import { Videojuego } from '../domains/videojuego';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  //  Nos declaramos el listado de videojuegos
  listaJuegos: Videojuego[] = [
    { id: 1, titulo: 'Metal Gear Solid' , compania : 'Konami', valoracion: 10, imagen: "assets/img/mgs.png", descripcion: "Metal Gear Solid, comúnmente abreviado MGS) es un videojuego de acción-aventura y sigilo de 1998 desarrollado por Konami Computer Entertainment Japan y publicado por Konami para la consola PlayStation.4​5​ Fue lanzado el 3 de septiembre de 1998 en Japón,1​ el 21 de octubre de 1998 en Norteamérica y el 24 de junio de 1999 en Europa.2​3​ El juego fue desarrollado y pensado únicamente para la consola Playstation, según la entrevista que dio Kojima a la Revista Famitsu en la celebración de los 20 años de Playstatión. "},
    { id: 2, titulo: 'Tekken 3' , compania : 'Namco', valoracion: 9, imagen: "assets/img/tekken.png", descripcion: "Tekken 3 es la tercera entrega de Tekken, la popular serie de juegos de lucha. Fue el primer juego lanzado en el hardware del System 12 de Namco en 1997 (una mejora a los dos juegos originales de Tekken, que utilizaron el System 11), aparte de ser la última entrega de Tekken para PlayStation. Fue lanzado para PlayStation en 1998 y en 2005 para PlayStation 2 como parte del Modo Historia del Arcade de Tekken 5."},
    { id: 3, titulo: 'GTA San Andreas' , compania : 'Rockstar', valoracion: 8, imagen: "assets/img/gta.png", descripcion: "Grand Theft Auto: San Andreas es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games. Fue confirmado oficialmente por la mencionada Rockstar Games a principios de marzo de 2004, y su fecha de lanzamiento tentativa se programó para el 19 y 22 de octubre de ese año para América del Norte y Europa"},
    { id: 4, titulo: 'Final Fantasy X' , compania : 'Square Enix', valoracion: 7.5, imagen: "assets/img/ffx.png", descripcion: "Final Fantasy X (ファイナルファンタジーX Fainaru Fantajī ten?) es un RPG desarrollado y publicado por la compañía Squaresoft (ahora conocida como Square Enix tras la fusión en 2003 con Enix) para el sistema PlayStation 2, llegando a Europa en 2002; es la décima entrega de la serie Final Fantasy, y fue la primera en desarrollarse para esta videoconsola."},
    { id: 5, titulo: 'Devil May Cry' , compania : 'Capcom', valoracion: 7, imagen: "assets/img/dmc.png", descripcion: "Devil May Cry (デビル メイ クライ Debiru Mei Kurai?, comúnmente abreviado como DMC) es un videojuego de acción y aventura hack and slash desarrollado y publicado por Capcom en 2001 en Japón, Estados Unidos y Europa para la consola PlayStation 2.3​ A pesar de que es el primer juego de la serie Devil May Cry, los acontecimientos en el juego ocurren en segundo lugar en la historia de la saga por orden cronológico, que tendrá lugar después de los acontecimientos de Devil May Cry 3: Dante's Awakening, y antes de Devil May Cry 2 y el Devil May Cry 4."},
  ];

  videojuego: Videojuego | undefined;

  //  El constructor tendra las clases de ActivatedRoute para el routing 
  //  y Location para poder volver a la pantalla anterior
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    //  Cogemos el parametro de la URL (id)
    var id = this.route.snapshot.paramMap.get('id');

    console.log(">>>>>>>>>> id " + id);

    //  Validamos que el ID selecionado pertenezca a uno de los videojuegos de listado
    if(id=="1"){
      this.videojuego = this.listaJuegos[0];
    }else{
      if(id=="2"){
        this.videojuego = this.listaJuegos[1];
      }else{
        if(id=="3"){
          this.videojuego = this.listaJuegos[2];
        }else{
          if(id=="4"){
            this.videojuego = this.listaJuegos[3];
          }else{
            if(id=="5"){
              this.videojuego = this.listaJuegos[4];
            }
          }
        }
      }
    }
  }

  //  Funcion para volver a la pagina anterior
  back(): void {
    this.location.back(); 
  }

}
