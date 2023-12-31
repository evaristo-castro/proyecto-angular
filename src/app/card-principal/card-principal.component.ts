import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Busqueda, BusquedaService } from '../servicio/busqueda.service';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.css']
})
export class CardPrincipalComponent {
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
