import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePokemonesService } from 'src/app/service/service-pokemones.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';




@Component({
  selector: 'app-lista-pokemones',
  templateUrl: './lista-pokemones.component.html',
  styleUrls: ['./lista-pokemones.component.scss']
})
export class ListaPokemonesComponent implements OnInit {

  modalRef: BsModalRef;
  pokemones: any[]= [];
  pokemones1: any = "";
  pokemones2: any[]= [];
  pokemonImg: any = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pulsorunner.com%2Fdefault-img%2F&psig=AOvVaw1qH0R33pYLgvwPGe4h271b&ust=1614460609331000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCfg9G8iO8CFQAAAAAdAAAAABAI";
  ubicacionpoke: any[]= [];
  offset = 0;
  ruta:string;

  constructor(private servicePokemonesService: ServicePokemonesService, private router:Router, private modalService: BsModalService, private spinner: NgxSpinnerService) { 

  }

  ngOnInit(): void {
    this.onScroll();  
  }

  openModal(template: TemplateRef<any>, id: any) {
    
    
    this.servicePokemonesService.Pokemon(id).subscribe(data => {
      this.pokemones1 = data;
      this.pokemones2 = data.stats;
      this.pokemonImg = data.sprites.front_default
    })
    this.servicePokemonesService.localizacionPokemon(id).subscribe(ubicacion =>{
      this.ubicacionpoke = ubicacion;
      console.log(this.ubicacionpoke);
    })
    this.modalRef = this.modalService.show(template);
  }

  onScroll(mas = false){
    if(mas){
      this.offset += 30;
    }

    this.servicePokemonesService.getPokemon(this.offset).subscribe((response: any) => {
      response.results.forEach(result => {
        this.servicePokemonesService.getmPokemones(result.name).subscribe((Respuesta: any) => {
            this.pokemones.push(Respuesta);
            //console.log(this.pokemones);
      })
    });
    })
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
}