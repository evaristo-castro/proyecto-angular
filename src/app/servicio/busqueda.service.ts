import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';

export interface Busqueda{
query: string;
}
export interface Informacion{
 titulo: string;
 imagen: string;
 descripcion: string; 
}
export interface InformacionFiltrarPagina{
 informacionFiltrarPagina: Informacion[];
}

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
private shareBusqueda: BehaviorSubject<Busqueda>=new BehaviorSubject<Busqueda>({query:''})
 
constructor(private http:HttpClient) { }

get queryBusqueda(){
 return this.shareBusqueda.asObservable();
}

set newQueryBusqueda(query: Busqueda){
  this.shareBusqueda.next(query);
}

cargarJSON(): Observable<InformacionFiltrarPagina>{
  const url = 'assets/informacionJson/busqueda.json';
  return this.http.get<InformacionFiltrarPagina>(url);
}
cargarDatosJSON(query:string):Observable<Informacion[]>{
  return this.cargarJSON().pipe(
    map((data:InformacionFiltrarPagina)=>{
      return data.informacionFiltrarPagina.filter(
        (infoList:Informacion)=> infoList.titulo.includes(query)
      );
    }));
  
}
devolverListaFiltrada(): Observable<Informacion[]>{
  return this.shareBusqueda.pipe(
   switchMap((query: Busqueda) => this.cargarDatosJSON(query.query))
  );
}
}
