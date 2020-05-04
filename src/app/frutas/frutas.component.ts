import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {
  public nombre_component = "probando el nuevo component de frutas";
  constructor() { }

  ngOnInit(): void {
  }

}
