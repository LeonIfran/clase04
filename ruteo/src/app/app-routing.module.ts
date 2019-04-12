import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { CargaComponent } from './componentes/carga/carga.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listado', component: ListadoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'cargar', component: CargaComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
