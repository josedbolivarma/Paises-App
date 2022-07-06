import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  
  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false;
  categoriaBusqueda: string = 'Buscar por capital';

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino )
      .subscribe({
        next: (v) => {
          console.log(v);
          this.paises = v;
        },
        error: (e) => { 
          this.hayError = true;
          this.paises = [];
         }
      })

  }

  sugerencias( termino: string ) {
    this.hayError = false;
  }

}
