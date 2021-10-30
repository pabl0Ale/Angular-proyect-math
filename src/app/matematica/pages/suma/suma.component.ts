import { Component, VERSION, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit{
  matrices!: FormGroup;
  num! : number;
  resolucionDato!: number;
 arrayResolucion: any[] = [];

  constructor(private fb: FormBuilder) {}
 
  ngOnInit() {
    this.matrices = this.fb.group({
      dato1:(2),
      dato2:(2),
      matriz1: this.fb.array([]),
      matriz2: this.fb.array([])
     });
    this.iterarPadreArray();
  }

  crearMatriz(){
    this.eliminardatos();
    this.iterarPadreArray();
  }
  eliminardatos(){
    this.matriz1().clear();
    this.matriz2().clear();
  }
  iterarPadreArray(){
    for (let index = 0; index < this.matrices.controls.dato1.value; index++) {
      this.addEmployee();
      this.matriz2();
    }
    for (this.num = 0; this.num < this.matrices.controls.dato1.value; this.num++) {
      for (let i = 0; i < this.matrices.controls.dato2.value; i++) {
        this.addEmployeeSkill();
        this.addEmployeeSkill2()
      }   
    }
  }
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
  addEmployee() {
    this.matriz1().push(this.newEmployee());
    this.matriz2().push(this.newEmployee())
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
  employeeSkillsadd(): FormArray {
    return this.matriz1()
      .at(this.num)
      .get('skills') as FormArray;
  }
  employeeSkillsadd2(): FormArray {
    return this.matriz2()
      .at(this.num)
      .get('skills') as FormArray;
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
    });
  }
  addEmployeeSkill() {
    this.employeeSkillsadd().push(this.newSkill());
  }
  addEmployeeSkill2() {
    this.employeeSkillsadd2().push(this.newSkill());
  }
  


  
//este metodo resuelve la suma de matrices
  resolverMatrices() {
    this.arrayResolucion = new Array(this.matrices.controls.dato1.value)
    for (let i = 0; i < this.matrices.controls.dato1.value; i++) {
      this.arrayResolucion[i] = new Array()
    }
    
    for (let i = 0; i < this.matrices.controls.dato1.value; i++) {
      for (let e = 0; e < this.matrices.controls.dato2.value; e++) {
        this.resolucionDato = this.matriz1().value[i].skills[e].skill + this.matriz2().value[i].skills[e].skill;
        this.arrayResolucion[i].push(this.resolucionDato)
      }
    }
  }
}

