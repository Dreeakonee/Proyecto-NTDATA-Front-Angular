import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registra-productos',
  templateUrl: './registra-productos.component.html',
  styleUrls: ['./registra-productos.component.css']
})
export class RegistraProductosComponent implements OnInit {

  mostrar ="";
  
  constructor() { }

  ngOnInit(): void {
  }


  formProducto=new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    descripcion: new FormControl('',[Validators.required, Validators.maxLength(40)]),
    precio: new FormControl('',[Validators.required, Validators.min(0)])
  });
  
  submit(){
    if(this.formProducto.valid){
      this.mostrar = "datos correctos"
    }else{
      this.mostrar = "datos incorrectos"
    }
  }


}
