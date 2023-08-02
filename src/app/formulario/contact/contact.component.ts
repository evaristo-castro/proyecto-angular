import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
//nombre=new FormControl('');
//correo=new FormControl('');
//telefono=new FormControl('');
//asunto=new FormControl('');
//detalle=new FormControl('');

constructor(private fb:FormBuilder){}

formContac = this.fb.group({
nombre: ['', Validators.required],
correo: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
telefono: ['e', Validators.required],
asunto: ['d', Validators.required],
detalle: ['f', Validators.required]

})

enviarInformacion(){
 if(this.formContac.status==='VALID'){
  console.log("paso");
 }
  console.log(this.formContac, 'Estado del formulario');
}

ngOnInit(): void {
  
}

}
