import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {

  categoriaBusqueda: string = 'Buscar por region';

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';

  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) { return; };
    
    this.regionActiva = region;

    this.paisService.buscarRegion( this.regionActiva )
    .subscribe({
      next: (v) => {
        console.log(v);
        this.paises = v;
      }
    })
  }
  
}
