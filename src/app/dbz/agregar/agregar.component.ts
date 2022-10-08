import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  personajes: Personaje[] = [];

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    console.log(this.nuevo);
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    console.log(this.personajes);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

}
