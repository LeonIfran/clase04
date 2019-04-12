import { Heroe } from './../clases/heroe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioHeroeService {
  lista: Array<Heroe> = [ {id: 0, nombre: 'flash', sexo: 'masculino', poder: 'velocidad', terreno: 'tierra'},
  {id: 1, nombre: 'goku', sexo: 'masculino', poder: 'Saiyajin', terreno: 'aire'}];
  constructor() {

  }

  public setHeroe(miHeroe: Heroe) {
      this.lista.push(miHeroe);
    }

    public getHeroe() {
      return this.lista;
    }
}
