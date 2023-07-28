import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ContactComponent } from './formulario/contact/contact.component';



const routes: Routes = [
  
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:CarruselComponent },
  {path: 'contacto', component: ContactoComponent},
  {path: 'contactom', component: ContactComponent}
 

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }