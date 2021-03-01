import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { ListaPokemonesComponent } from './components/lista-pokemones/lista-pokemones.component';
import { EstadisticasPokemonesComponent } from './components/estadisticas-pokemones/estadisticas-pokemones.component';
import { TipoPokemonComponent } from './components/estadisticas-pokemones/tipo-pokemon/tipo-pokemon.component';

import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartsModule } from 'ng2-charts';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';




@NgModule({
  declarations: [
    AppComponent,
    ListaPokemonesComponent,
    EstadisticasPokemonesComponent,
    TipoPokemonComponent,
    EncabezadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    InfiniteScrollModule,
    NgxNavbarModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
