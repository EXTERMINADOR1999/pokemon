import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class EstadisticasService {
  url: string = environment.url_2;

  pokemon: any;
  constructor(private http: HttpClient) { }

  tipoPokemon(){
    return this.http.get<any>(`${this.url}`);
  }
  tnPokemon(name: string){
    return this.http.get<any>(`${this.url}/${name}`);
  }
  setPokemon(tipo){
    this.pokemon = tipo;
    
  }
  getPokemon(){
    return this.pokemon;
  }

  tpPokemon(url: string){
    return this.http.get<any>(`${url}`);
  }
}
