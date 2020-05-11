import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche.model';
import { PeticioneService } from '../service/peticiones.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
  providers: [PeticioneService]
})
export class CocheComponent implements OnInit {

  public coche: Coche;
  public articulos;

  constructor(private _peticioneService:PeticioneService) {
    this.coche = new Coche("","","");
   }

  ngOnInit(): void {
    
    this._peticioneService.getInfo().subscribe(
      data => this.articulos = data
     );
  }

  onSubmit(){
    console.log(this.coche);
  }

}
