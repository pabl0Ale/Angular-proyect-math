import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'matrices',
  loadChildren: ()=> import('./matematica/matematica.module').then(m=>m.MatematicaModule)
},
{
  path:'**',
  redirectTo:'matrices'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
