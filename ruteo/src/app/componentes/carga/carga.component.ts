import { ServicioHeroeService } from './../../servicios/servicio-heroe.service';
import { Datos } from './../datos';
import { Heroe } from './../../clases/heroe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  constructor(private miServicioHeroe: ServicioHeroeService) { }
  /**
   * Cargar
   */
  public Cargar(dato: Heroe) {
    this.miServicioHeroe.setHeroe(dato);
    console.log(dato);
    console.log(this.miServicioHeroe.lista);
  }

  ngOnInit() {
  }

}
