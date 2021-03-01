import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadisticasService } from 'src/app/service/estadisticas.service';

@Component({
  selector: 'app-tipo-pokemon',
  templateUrl: './tipo-pokemon.component.html',
  styleUrls: ['./tipo-pokemon.component.scss']
})
export class TipoPokemonComponent implements OnInit {

  pokemon: any;
  urls: any[] = []
  pokemones: any[] = []

  constructor(private estadisticasService: EstadisticasService, private router: Router) {
    this.pokemon = this.estadisticasService.getPokemon();
   }

  ngOnInit(): void {
    this.getUrls()
    this.getPokemon()
  }

  getUrls(){
    this.pokemon.forEach(element => {
      this.urls.push(element.pokemon.url)
    });
  }

  getPokemon() {
    this.urls.forEach(element => {
        this.estadisticasService.tpPokemon(element).subscribe((response : any) => {
          this.pokemones.push(response)
        })
    });
    
  }
}
