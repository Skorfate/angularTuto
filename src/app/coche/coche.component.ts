import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche.model';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  public coche: Coche;

  constructor() {
    this.coche = new Coche("","","");
   }

  ngOnInit(): void {
   
  }

  onSubmit(){
    console.log(this.coche);
  }

}
