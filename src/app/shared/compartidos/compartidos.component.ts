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
      texto: 'Invesa de una  matriz',
      ruta: '/matrices/InversaMatriz'
    },
    {
      texto:"suma de matrices",
      ruta: "/matrices/sumaMatrices"
    },
    {
      texto: 'Determinante de una matriz',
      ruta: 'dfasfsd'
    },
    {
      texto: 'Transpuesta de una matriz',
      ruta: 'dfasfsd'
    },

  ]

}
