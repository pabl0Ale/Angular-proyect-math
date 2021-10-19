import { Component, VERSION } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  empForm!: FormGroup;
  datoColumna: number = 3;
  datoFila: number = 2;
  num! : number;
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit() {

    this.empForm = this.fb.group({
      employees: this.fb.array([])
     });
    this.iterarPadreArray();
  }

  iterarPadreArray(){

    for (let index = 0; index < this.datoColumna; index++) {
      this.addEmployee();
    }

    for (this.num = 0; this.num < this.datoColumna; this.num++) {
      for (let i = 0; i < this.datoFila; i++) {
        this.addEmployeeSkill()
      }   
    }
  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }
  newEmployee(): FormGroup {
    return this.fb.group({
      skills: this.fb.array([])
    });
  }
  addEmployee() {
    this.employees().push(this.newEmployee());
  }




  employeeSkills(empIndex: number): FormArray {
    return this.employees()
      .at(empIndex)
      .get('skills') as FormArray;
  }

  employeeSkillsadd(): FormArray {
    return this.employees()
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

 
  onSubmit() {
    console.log(this.empForm.value);
  }
}

'h'
