import { ServicioHeroeService } from './../../servicios/servicio-heroe.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from './../../clases/heroe';
import { Datos } from './../datos';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  midato;
  public listado: Array<Heroe>;
  constructor(private miServicioHeroe: ServicioHeroeService) {
     //this.midato = new Datos();
     //this.listado = this.midato.lista;
     //this.listado = Datos.lista;
     this.listado = this.miServicioHeroe.lista;
  }
/*   public cargar(dato: Heroe)
  {
    console.log(dato);
    //this.listado.push(dato);
    //this.listado.push(dato);
    Datos.lista.push(dato);
  } */
  ngOnInit() {
  }

}
