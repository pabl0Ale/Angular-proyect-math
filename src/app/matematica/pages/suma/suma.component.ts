import { Component, VERSION, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit{
  empForm!: FormGroup;
  num! : number;
  resolucionDato!: number;
 arrayResolucion: any[] = [];

  constructor(private fb: FormBuilder) {}
 
  ngOnInit() {
    this.empForm = this.fb.group({
      dato1:(2),
      dato2:(2),
      employees: this.fb.array([]),
      employees2: this.fb.array([])
     });
    this.iterarPadreArray();
  }
  crearMatriz(){
    this.eliminardatos();
    this.iterarPadreArray();
  }
  eliminardatos(){
    this.employees().clear();
    this.employees2().clear();
  }
  iterarPadreArray(){
    for (let index = 0; index < this.empForm.controls.dato1.value; index++) {
      this.addEmployee();
      this.employees2();
    }
    for (this.num = 0; this.num < this.empForm.controls.dato1.value; this.num++) {
      for (let i = 0; i < this.empForm.controls.dato2.value; i++) {
        this.addEmployeeSkill();
        this.addEmployeeSkill2()
      }   
    }
  }
  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }
  employees2(): FormArray {
    return this.empForm.get('employees2') as FormArray;
  }
  newEmployee(): FormGroup {
    return this.fb.group({
      skills: this.fb.array([])
    });
  }
  addEmployee() {
    this.employees().push(this.newEmployee());
    this.employees2().push(this.newEmployee())
  }
  employeeSkills(empIndex: number): FormArray {
    return this.employees()
      .at(empIndex)
      .get('skills') as FormArray;
  }
  employeeSkills2(empIndex: number): FormArray {
    return this.employees2()
      .at(empIndex)
      .get('skills') as FormArray;
  }
  employeeSkillsadd(): FormArray {
    return this.employees()
      .at(this.num)
      .get('skills') as FormArray;
  }
  employeeSkillsadd2(): FormArray {
    return this.employees2()
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


  onSubmit() {

    this.arrayResolucion = new Array(this.empForm.controls.dato1.value)
    for (let i = 0; i < this.empForm.controls.dato1.value; i++) {
      this.arrayResolucion[i] = new Array()
    }

    
    for (let i = 0; i < this.empForm.controls.dato1.value; i++) {
      for (let e = 0; e < this.empForm.controls.dato2.value; e++) {
        this.resolucionDato = this.employees().value[i].skills[e].skill + this.employees2().value[i].skills[e].skill;
        this.arrayResolucion[i].push(this.resolucionDato)
      }
    }


    console.log(this.arrayResolucion);
  }
 


}

'b'
