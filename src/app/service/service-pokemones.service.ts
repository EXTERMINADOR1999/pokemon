import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicePokemonesService {
  url: string = environment.url;
  constructor(private http: HttpClient) {
    
  }
  Pokemon(id: number){
    console.log(id)
    return this.http.get<any>(`${this.url}/${id}`);
  }
  localizacionPokemon(id: number){
    return this.http.get<any>(`${this.url}/${id}/encounters`);
  }

  getPokemon(offset = 0) {
    return this.http.get<any>(`${this.url}/?offset=${offset}&limit=30`);
  }

  getmPokemones(name: string){
    return this.http.get<any>(`${this.url}/${name}`);
  }
}
