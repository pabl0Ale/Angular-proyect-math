import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inversa-matriz',
  templateUrl: './inversa-matriz.component.html',
  styleUrls: ['./inversa-matriz.component.css']
})
export class InversaMatrizComponent implements OnInit {

  matrices!: FormGroup;
  num! : number;
  num2!: number;
  arrayResolucion: any[] = [];

  constructor(private fb: FormBuilder) {}
 
  ngOnInit() {
    this.matrices = this.fb.group({
      Ma1dato1: ['2'],
      Ma1dato2:['2'],
      Ma2dato1: ['2'],
      Ma2dato2:['2'],
      matriz1: this.fb.array([]),
      matriz2: this.fb.array([])
     });
     this.iterarPadreArray()
     this.iterarPadreArray2();
  }

  crearMatriz(){
    this.eliminardatos();
    this.iterarPadreArray(); 
    this.iterarPadreArray2()
  }

  iterarPadreArray(){
    for (let index = 0; index < this.matrices.controls.Ma1dato1.value; index++) {
      this.addEmployee();
    }
    for (this.num = 0; this.num < this.matrices.controls.Ma1dato1.value; this.num++) {
      for (let i = 0; i < this.matrices.controls.Ma1dato2.value; i++) {
        this.addEmployeeSkill();
      }   
    }
  }
  iterarPadreArray2(){
    for (this.num2 = 0; this.num2 < this.matrices.controls.Ma2dato1.value; this.num2++) {
      this.addEmployee2();
    }
    for (this.num2 = 0; this.num2 < this.matrices.controls.Ma2dato1.value; this.num2++) {
      for (let i = 0; i < this.matrices.controls.Ma2dato2.value; i++) {
        this.addEmployeeSkill2();
      }   
    }
  }
  eliminardatos(){
    this.matriz1().clear();
    this.matriz2().clear()
  }
  //metodo para obtner el array padre
  matriz1(): FormArray {
    return this.matrices.get('matriz1') as FormArray;
  }
  matriz2(): FormArray {
    return this.matrices.get('matriz2') as FormArray;
  }
  newEmployee(): FormGroup {
    return this.fb.group({
      skills: this.fb.array([])
    });
  }
  newEmployee2(): FormGroup {
    return this.fb.group({
      skills2: this.fb.array([])
    });
  }
  //agregar un array dentro de del array
  addEmployee() {
    this.matriz1().push(this.newEmployee());
  }
  addEmployee2() {
    this.matriz2().push(this.newEmployee());
  }
  employeeSkills(empIndex: number): FormArray {
    return this.matriz1()
      .at(empIndex)
      .get('skills') as FormArray;
  }
  employeeSkills2(empIndex: number): FormArray {
    return this.matriz2()
      .at(empIndex)
      .get('skills') as FormArray;
  }
  //obtiene un array dentro del array segun el valor de la iteracion
  employeeSkillsadd(): FormArray {
    return this.matriz1()
      .at(this.num)
      .get('skills') as FormArray;
  }
  employeeSkillsadd2(): FormArray {
    return this.matriz2()
      .at(this.num2)
      .get('skills') as FormArray;
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
    });
  }
  //obtiene el array que esta dentro de uno y le agrega valores con posiciones
  addEmployeeSkill() {
    this.employeeSkillsadd().push(this.newSkill());
  }
  addEmployeeSkill2() {
    this.employeeSkillsadd2().push(this.newSkill());
  }
//para verificar si se pude multiplicar
  resolverMatrix(){
    if ( this.matrices.controls.Ma1dato2.value == this.matrices.controls.Ma2dato1.value ) {
      this.multiplicarMatrices()
      return 
    }
    console.log(' no se puede ');
  }

  
//para resolver la matriz
  multiplicarMatrices(){
    let columa = this.matrices.controls.Ma2dato2.value;
    this.arrayResolucion = new Array( Number(this.matrices.controls.Ma1dato1.value) );

    for (let i = 0; i < this.arrayResolucion.length; i++) {
      this.arrayResolucion[i] = new Array( Number(columa)).fill(0)
    }

    for (let a = 0; a < this.arrayResolucion.length; a++) {
      for (let y = 0; y < this.arrayResolucion[a].length ; y++) {
        for (let z = 0; z < this.matrices.controls.Ma1dato2.value ; z++) {
          this.arrayResolucion[a][y] = this.arrayResolucion [a][y] +  this.matriz1().value[a].skills[z].skill  * this.matriz2().value[z].skills[y].skill;
        }
      }
    }
  }
}
