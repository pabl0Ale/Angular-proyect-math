import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatematicaRoutingModule } from './matematica-routing.module';
import { SumaComponent } from './pages/suma/suma.component';
import { InversaMatrizComponent } from './pages/inversa-matriz/inversa-matriz.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SumaComponent,
    InversaMatrizComponent
  ],
  imports: [
    CommonModule,
    MatematicaRoutingModule,
    FormsModule
  ]
})
export class MatematicaModule { }
