import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import {PeliculaComponent} from './components/pelicula/pelicula.component';

const routes: Routes = [
  // aqui van las rutas 
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscadorComponent },
  { path: 'buscar/:texto', component: BuscadorComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
