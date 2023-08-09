import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu/menu.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CardPrincipalComponent } from './card-principal/card-principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioModule } from './formulario/formulario.module';
import { BuscadorComponent } from './buscador/buscador.component';
import { HttpClientModule } from '@angular/common/http';
import { HombreRelojComponent } from './hombre-reloj/hombre-reloj.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CarruselComponent,
    CardPrincipalComponent,
    ContactoComponent,
    BuscadorComponent,
    HombreRelojComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormularioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
