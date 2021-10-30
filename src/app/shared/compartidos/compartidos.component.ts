import { Component, OnInit } from '@angular/core';

interface OptionMenu  {
  texto: string;
  ruta: string
}

@Component({
  selector: 'app-compartidos',
  templateUrl: './compartidos.component.html',
  styleUrls: ['./compartidos.component.css']
})
export class CompartidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //menu para las options
  MenuOption: OptionMenu[] = [
    {
      texto: 'Multiplicacion de matriz',
      ruta: '/matrices/MultiplicacionMatriz'
    },
    {
      texto:"suma de matrices",
      ruta: "/matrices/sumaMatrices"
    }
  ]

}
