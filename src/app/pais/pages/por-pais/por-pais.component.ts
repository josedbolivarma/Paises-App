import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
  li {
    cursor: pointer;
  }
  `
  ]
})

export class PorPaisComponent {

  categoriaBusqueda: string = 'Buscar por pais';

  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  termino: string = '';
  hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
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
    this.mostrarSugerencias = true;

    this.termino = termino;

    this.paisService.buscarPais( termino )
      .subscribe({
        next: (paises) => this.paisesSugeridos = paises.splice(0, 5),
        error: (err) => this.paisesSugeridos = []
      })
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }
  

}
