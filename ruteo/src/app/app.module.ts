import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioHeroeService } from './servicios/servicio-heroe.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { FilaComponent } from './componentes/fila/fila.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ErrorComponent,
    ListadoComponent,
    CargaComponent,
    FilaComponent,
    GrillaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServicioHeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
