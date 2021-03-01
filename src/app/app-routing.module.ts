import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasPokemonesComponent } from './components/estadisticas-pokemones/estadisticas-pokemones.component';
import { TipoPokemonComponent } from './components/estadisticas-pokemones/tipo-pokemon/tipo-pokemon.component';
import { ListaPokemonesComponent } from './components/lista-pokemones/lista-pokemones.component';

const routes: Routes = [
  {path: 'home', component: ListaPokemonesComponent},
  {path: 'estadisticas', component: EstadisticasPokemonesComponent},
  {path: 'estadisticas/tipo', component: TipoPokemonComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
