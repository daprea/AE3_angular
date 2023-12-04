import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor() { }

  datosContacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  envioOK = false;

  enviarFormulario(): void {
    console.log('Enviando formulario:', this.datosContacto);

    //  POnemos la valirable a TRUE para mostrar el mensaje de OK
    this.envioOK = true;
  }

}
