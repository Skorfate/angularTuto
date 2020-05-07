import { Component, OnInit } from '@angular/core';
import { RopaService } from './ropa.service';
@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css'],
  providers: [RopaService]
})
export class RopaComponent implements OnInit {
  public listado_ropa : Array<string>;
  public prenda_a_guardar: string;
  public msg: string;

  constructor(
    private _ropaService : RopaService
  ) { }

  ngOnInit(): void {  
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
  }
  
  addPrenda(){
    if(this.prenda_a_guardar && !this.listado_ropa.includes(this.prenda_a_guardar)){
      this.listado_ropa = this._ropaService.addRopa(this.prenda_a_guardar);
      this.prenda_a_guardar = null;
      this.msg = null;
    }else{
      this.msg = "No puede volver agregar el mismo elemento";
      console.log(this.msg);
    }
    
  }

  eliminarPrenda(posicion:number){
    this.listado_ropa = this._ropaService.deleteRopa(posicion);
  }

}
