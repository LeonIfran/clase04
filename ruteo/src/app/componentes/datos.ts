import { Heroe } from './../clases/heroe';
export class Datos {
  static lista: Array<Heroe> = [ {id: 0, nombre: 'flash', sexo: 'masculino', poder: 'velocidad', terreno: 'tierra'},
  {id: 1, nombre: 'goku', sexo: 'masculino', poder: 'Saiyajin', terreno: 'aire'}];

  /**
   * setHeroe
miHeroe: Heroe
*/
  public static setHeroe(miHeroe: Heroe) {
  Datos.lista.push(miHeroe);
  }
  /**
   * getHeroe
   */
  public getHeroe() {
    return Datos.lista;
  }
}
