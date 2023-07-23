import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CarruselComponent } from './carrusel/carrusel.component';
const routes: Routes = [
  {path: 'home', component:CarruselComponent },
  {path: 'contacto', component:ContactoComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }