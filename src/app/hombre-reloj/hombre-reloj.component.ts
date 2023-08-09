import { Component } from '@angular/core';
import { Busqueda, BusquedaService } from '../servicio/busqueda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hombre-reloj',
  templateUrl: './hombre-reloj.component.html',
  styleUrls: ['./hombre-reloj.component.css']
})
export class HombreRelojComponent {
  info$: Observable<Busqueda>;
  listado: any =[];

 constructor(private busquedaServicio: BusquedaService){
  this.info$ = this.busquedaServicio.queryBusqueda;
  this.busquedaServicio.devolverListaFiltrada().subscribe((r:any)=>{
    this.listado = r;
  })

 }
 submitForm(event: Event) {
  event.preventDefault(); // Evita el comportamiento por defecto del formulario
  // Realiza aquí la lógica de envío del formulario
}

}
