import { Heroe } from "./../../clases/heroe";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validator, Validators } from "@angular/forms";

import { Datos } from "./../datos";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  miHeroe: Heroe; //atributo de tipo heroe
  @Output() cargar = new EventEmitter<Heroe>(); //bindeo para pasarle datos al padre
  formularioHeroe: FormGroup;
  constructor() {
    this.miHeroe = new Heroe();
  }
  public logear() {
    /*     console.log(this.formularioHeroe.invalid);
     */ this.cargar.emit(this.formularioHeroe.value);
    console.log(this.formularioHeroe.value);
  }

  ngOnInit() {
    this.formularioHeroe = new FormGroup({
      id: new FormControl(""),
      nombre: new FormControl("", [Validators.minLength(4)]),
      sexo: new FormControl(""),
      poder: new FormControl(""),
      terreno: new FormControl("")
    });
  }
}
