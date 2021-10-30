import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { InversaMatrizComponent } from './pages/inversa-matriz/inversa-matriz.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'sumaMatrices',
        component: SumaComponent
      },
      {
        path:'MultiplicacionMatriz',
        component:InversaMatrizComponent
      },
      {
        path:'**', redirectTo: 'sumaMatrices'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatematicaRoutingModule { }
