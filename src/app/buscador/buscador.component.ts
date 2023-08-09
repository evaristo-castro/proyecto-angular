import { Component } from '@angular/core';
import { BusquedaService } from '../servicio/busqueda.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  
  buscar: any;

  constructor(private servicioBusqueda: BusquedaService){}

  search(query:any){
  this.servicioBusqueda.newQueryBusqueda= {query}
  
}


}
