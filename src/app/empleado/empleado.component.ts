import { Component, OnInit } from '@angular/core';
import {Empleado} from './../model/empleado.model';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public titulo = "component empleado";
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajorExterno:boolean;
  public color:string;
  public color_seleccionado:string;
  constructor() { 
    this.empleado = new Empleado('Robertron',"18","ing",true);
    this.trabajorExterno = true;
    this.trabajadores = [
      new Empleado('Roberto',"29","ing",true),
      new Empleado('daniel',"25","cocinero",true),
      new Empleado('maria',"24","veterinaria",true)
    ];
    this.color = 'red';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(): void {
    // esto es un postcontruct
    
    console.log(this.empleado);

    console.log(this.trabajadores);
  }
  cambiarTrabajador(){
    console.log(`valor antiguo---->${this.trabajorExterno}`);
    this.trabajorExterno = !this.trabajorExterno ;
    console.log(`valor nuevo---->${this.trabajorExterno}`);
  }

}
