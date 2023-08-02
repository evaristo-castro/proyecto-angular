import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
       
      ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  exports:[
    ContactComponent
  ]
})
export class FormularioModule { }
