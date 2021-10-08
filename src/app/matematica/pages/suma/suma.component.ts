import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  constructor() {   
  }

  datoInp1: number = 2;
  datoInp2: number = 2;
  datosArrayMat1: number[]  = [];
  inputdato1: number[] = [];

  ngOnInit(): void {
  }


  iteracion(){
    for (let i = 0; i < this.datoInp1; i++) {
      `        <input type="text">
      `
    }
  }

}
