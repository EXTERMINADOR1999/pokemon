import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadisticasService } from 'src/app/service/estadisticas.service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-estadisticas-pokemones',
  templateUrl: './estadisticas-pokemones.component.html',
  styleUrls: ['./estadisticas-pokemones.component.scss']
})
export class EstadisticasPokemonesComponent implements OnInit {

  nombreTipo: any[] = [];
  cantidadTipo: any[] = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: any[] = []; //porque label mk asi lo entrega la libreria
  public pieChartData: any = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  pokemon: any = [];
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
        'rgba(100,100,0,0.3)',
        'rgba(0,110,200,0.3)',
        'rgba(224,187,228,0.3)',
        'rgba(149,125,173,1)',
        'rgba(210,145,188,1)',
        'rgba(254,200,216,1)',
        'rgba(0,50,150,0.3)',
        'rgba(200,160,200,0.3)',
        'rgba(50,200,70,0.3)',
        'rgba(80,80,80,0.3)',
        'rgba(100,190,90,0.3)',
        'rgba(105,250,255,0.3)',
        'rgba(80,220,220,0.3)',
        'rgba(230,230,230,0.3)',
        'rgba(50,240,240,0.3)',
      ],
    },
  ];
  
  constructor(private estadisticasService: EstadisticasService, private router: Router) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
    this.tiposPokemon();
  }

  tiposPokemon(){
    this.estadisticasService.tipoPokemon().subscribe((response: any) => {
      response.results.forEach(result => {
        this.pieChartLabels.push(result.name)
        this.estadisticasService.tnPokemon(result.name).subscribe(respuesta => {
          this.pokemon.push(respuesta.pokemon);
          this.pieChartData.push(respuesta.pokemon.length)
      })
    });
    console.log(this.pieChartLabels)
    })
  }

  chartClicked(e: any): void {

    let tipo: any;
    if( e != null && e != undefined) {
      tipo =  e.active[0]._index
       this.estadisticasService.setPokemon(this.pokemon[tipo]);
       this.router.navigate(['estadisticas/tipo']);
    console.log(tipo);
    }

    
  }
}
